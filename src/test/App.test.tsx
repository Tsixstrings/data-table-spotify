import {
  screen,
  fireEvent,
} from "@testing-library/react";
import { renderWithProviders } from "./utils/test-utils";
import App from "../App";
import MockedResponse from "./mocks/itemsList.json";

const mockState = {
  dataTable: {
    searchTerm: "jimi",
    data: MockedResponse,
  },
};

describe("Application", () => {
  test("renders and shows all the expected elements", () => {
    renderWithProviders(<App />, { preloadedState: mockState });
    const spotifyLogo = screen.getByTestId("spotify-logo");
    const actionBar = screen.getByTestId("action-bar");
    const dataGridTable = screen.getByTestId("data-grid-table");
    expect(spotifyLogo).toBeInTheDocument();
    expect(actionBar).toBeInTheDocument();
    expect(dataGridTable).toBeInTheDocument();
  });
  // test("DataGridTable - Must show form modal when click a row", () => {
  //   const { container } = renderWithProviders(<App />, {
  //     preloadedState: mockState,
  //   });

  //   fireEvent.click(container.querySelector(".MuiDataGrid-cellCheckbox"));

  //   expect(screen.findByText("form-modal")).toBeInTheDocument();
  // });
});
