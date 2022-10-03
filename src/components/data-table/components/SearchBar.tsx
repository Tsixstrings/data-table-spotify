import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import { setSearchTerm } from "../../data-table/dataTableSlice";
import "./styles.css";

const SearchBar = () => {
  const dispatch = useDispatch();
  const { searchTerm } = useSelector((state: RootState) => state.dataTable);
  const [value, setValue] = useState(searchTerm);
  return (
    <div className="search-bar-container">
      <TextField
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && dispatch(setSearchTerm(value))}
      />
      <Button
        variant="contained"
        onClick={() => dispatch(setSearchTerm(value))}
      >
        Search
      </Button>
    </div>
  );
};

export default SearchBar;
