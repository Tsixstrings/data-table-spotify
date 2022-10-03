import { Button } from "@mui/material";
import { GridSelectionModel } from "@mui/x-data-grid";
import SearchBar from "./SearchBar";
import "./styles.css";

interface ActionBarProps {
  callbackAdd: Function;
  callbackDelete: Function;
  selectedRows: GridSelectionModel;
}

const ActionBar = ({
  callbackAdd,
  callbackDelete,
  selectedRows,
}: ActionBarProps) => {
  return (
    <div className="action-bar-container" data-testid="action-bar">
      <SearchBar />
      <div className="action-bar-buttons-container">
        <Button variant="contained" onClick={() => callbackAdd()}>
          ADD ROW
        </Button>
        {!!selectedRows.length && (
          <Button variant="contained" onClick={() => callbackDelete()}>
            DELETE SELECTED ROWS
          </Button>
        )}
      </div>
    </div>
  );
};

export default ActionBar;
