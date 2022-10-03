import { screen, fireEvent } from "@testing-library/react";
import { renderWithProviders } from "./utils/test-utils";
import ModalForm from "../components/modal-form/ModalForm";
import MockedResponse from "./mocks/itemsList.json";
import { MODAL_FORM_MODE } from "../components/data-table/constants";
import { DataTableRow } from "../types/DataTabletypes";

const mockState = {
  dataTable: {
    searchTerm: "jimi",
    data: MockedResponse,
  },
};

describe("<FormModal />", () => {
  test("renders and shows all the expected elements", () => {
    renderWithProviders(
      <ModalForm
        show={true}
        mode={MODAL_FORM_MODE.UPDATE}
        fields={mockState.dataTable.data[0] as unknown as DataTableRow}
        submitAction={jest.fn()}
        handleProps={jest.fn()}
      />,
      {
        preloadedState: mockState,
      }
    );
    const modalForm = screen.getByTestId("form-modal");
    expect(modalForm).toBeInTheDocument();
  });
  test("must not be showed when show=false", () => {
    renderWithProviders(
      <ModalForm
        show={false}
        mode={MODAL_FORM_MODE.UPDATE}
        fields={mockState.dataTable.data[0] as unknown as DataTableRow}
        submitAction={jest.fn()}
        handleProps={jest.fn()}
      />,
      {
        preloadedState: mockState,
      }
    );
    expect(screen.queryByTestId("form-modal")).not.toBeInTheDocument();
  });
});
