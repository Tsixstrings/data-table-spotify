import Box from "@mui/material/Box";
import { DataGrid, GridSelectionModel } from "@mui/x-data-grid";
import { columns } from "./utils/columnsConfig";
import { setData } from "../data-table/dataTableSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import ModalForm from "../modal-form/ModalForm";
import { MODAL_FORM_MODE } from "./constants";
import { DataTableRow } from "../../types/DataTabletypes";
import { FormProps } from "../../types/FormDataTypes";
import ActionBar from "./components/ActionBar";

export default function DataGridTable({ data }: any) {
  const dispatch = useDispatch();
  const [modalProps, setModalProps] = useState<FormProps>({
    show: false,
    mode: MODAL_FORM_MODE.CREATE,
    submitAction: setData,
    fields: {} as DataTableRow,
  });
  const [selectedRows, setSelectedRows] = useState<GridSelectionModel>([]);

  const handleDeleteRows = () => {
    const newDataSet = data.filter(
      (row: any) => !selectedRows.includes(row?.id)
    );
    dispatch(setData(newDataSet));
    setSelectedRows([]);
  };

  const handleUpdateRow = (row: DataTableRow) => {
    setModalProps({
      ...modalProps,
      show: true,
      mode: MODAL_FORM_MODE.UPDATE,
      fields: row,
    });
  };

  const handleAddRow = () => {
    setModalProps({
      ...modalProps,
      show: true,
      mode: MODAL_FORM_MODE.CREATE,
      fields: {
        id: `${data.length}_new`,
        cover: "",
        name: "",
        popularity: 0,
        followers: 0,
        link: "",
      },
    });
  };

  return (
    <Box sx={{ height: 631, width: "100%" }}>
      {modalProps.show && (
        <ModalForm {...modalProps} handleProps={setModalProps} />
      )}
      <ActionBar
        callbackAdd={handleAddRow}
        callbackDelete={handleDeleteRows}
        selectedRows={selectedRows}
      />
      <div data-testid="data-grid-table">
        <Box sx={{ height: 631, width: "100%" }}>
          <DataGrid
            className="data-grid-table-component"
            rows={data}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[10]}
            checkboxSelection
            disableSelectionOnClick
            experimentalFeatures={{ newEditingApi: true }}
            selectionModel={selectedRows}
            onSelectionModelChange={(newSelection) =>
              setSelectedRows(newSelection)
            }
            onRowClick={(selected) => handleUpdateRow(selected.row)}
          />
        </Box>
      </div>
    </Box>
  );
}
