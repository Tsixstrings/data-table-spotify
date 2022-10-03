import { useEffect } from "react";
import type { AppDispatch, RootState } from "../store";
import { useDispatch, useSelector } from "react-redux";
import { fetchArtists } from "../thunks/fetchArtists";

const useQueryArtist = () => {
  const thunkDispatch = useDispatch() as AppDispatch;
  const { searchTerm } = useSelector(
    (state: RootState) => state.dataTable
  );
  useEffect(() => {
    thunkDispatch(fetchArtists());
  }, [searchTerm]);
};

export default useQueryArtist;
