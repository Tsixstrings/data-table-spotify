import { Button, Modal, Paper, TextField } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { DataTableRow } from "../../types/DataTabletypes";
import { FormProps } from "../../types/FormDataTypes";
import { MODAL_FORM_MODE } from "../data-table/constants";
import "./ModalForm.css";

interface ModalFormProps {
  show: boolean;
  mode: string;
  fields: DataTableRow;
  submitAction: any;
  handleProps: React.Dispatch<React.SetStateAction<FormProps>>;
}

const ModalForm = (props: ModalFormProps) => {
  const dispatch = useDispatch();
  const { show, handleProps, mode, fields, submitAction } = props;
  const { data: dataSet } = useSelector((state: RootState) => state.dataTable);
  const [formFields, setFormFields] = useState(fields);
  if (!show || !formFields) {
    return null;
  }

  const handleFieldChange = (index: string, value: string | number) => {
    setFormFields({ ...formFields, [index]: value });
  };

  const handleClose = () => {
    handleProps({ ...props, show: false });
  };

  const handleSubmit = () => {
    if (mode === MODAL_FORM_MODE.UPDATE) {
      const newDataSet = dataSet.map((row: DataTableRow) =>
        row.id === formFields.id ? formFields : row
      );
      dispatch(submitAction(newDataSet));
    }
    if (mode === MODAL_FORM_MODE.CREATE) {
      dispatch(submitAction([...dataSet, formFields]));
    }
    handleClose();
  };

  return (
    <Modal
      open={show}
      onClose={() => handleClose()}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div className="modal-form" data-testid="form-modal">
        <Paper elevation={5}>
          {formFields?.cover && (
            <div className="center-content">
              <img alt="artist cover" src={formFields.cover} />
            </div>
          )}
          {formFields &&
            Object.entries(formFields).map((row, index) => {
              if (index > 0) {
                return (
                  <div style={{ padding: "10px" }}>
                    <TextField
                      fullWidth
                      label={row[0]}
                      value={row[1]}
                      onChange={(e) =>
                        handleFieldChange(row[0], e.target.value)
                      }
                    />
                  </div>
                );
              }
            })}
          <div className="center-content">
            <Button onClick={() => handleSubmit()} variant="contained">
              Save
            </Button>
            <Button onClick={() => handleClose()} variant="contained">
              Close
            </Button>
          </div>
        </Paper>
      </div>
    </Modal>
  );
};

export default ModalForm;
