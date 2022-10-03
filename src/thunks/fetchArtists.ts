import { Dispatch } from "redux";
import querystring from "querystring";
import { setData } from "../components/data-table/dataTableSlice";
import { RootState } from "../store";
import { getFlattedData } from "../components/data-table/utils/helpers";

export const fetchArtists =
  () =>
  async (dispatch: Dispatch, getState: () => RootState): Promise<void> => {
    try {
      const { searchTerm } = getState().dataTable;

      const { access_token } = await fetch(
        "https://accounts.spotify.com/api/token",
        {
          method: "POST",
          headers: {
            Authorization:
              "Basic NmRmNzAxYjMzMWE2NGFmNGFlZjNlOTg3N2FiN2NmNjI6ZDM3N2NiYWIyY2RjNDVkMjk0MmIzOGJhNDQ3YWI5ODY=",
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: querystring.stringify({ grant_type: "client_credentials" }),
        }
      ).then((res) => res.json());
      const response = await fetch(
        `https://api.spotify.com/v1/search?q=${encodeURI(
          searchTerm
        )}&type=artist`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        }
      ).then((res) => res.json());
      const flattenResponse = getFlattedData(response?.artists?.items);
      dispatch(setData(flattenResponse));
    } catch (error) {
      console.log("fetchArtists error:", error);
    }
  };
