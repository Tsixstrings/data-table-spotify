import { AnyAction, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface DataTableState {
  searchTerm: string;
  data: any | null;
}

const initialState: DataTableState = {
  searchTerm: "Jimi",
  data: null,
};

export const dataTableSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },
    setData: (state, action: PayloadAction<Object>) => {
      state.data = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setSearchTerm, setData } = dataTableSlice.actions;

export default dataTableSlice.reducer;
