import { DataTableRow } from "./DataTabletypes";

export interface FormProps {
  show: boolean;
  mode: string;
  submitAction: Function;
  fields: DataTableRow;
}
