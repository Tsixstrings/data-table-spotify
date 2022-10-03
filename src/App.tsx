import "./App.css";
import useQueryArtist from "./hooks/useQueryArtists";
import type { RootState } from "./store";
import { useSelector } from "react-redux";
import DataGridTable from "./components/data-table/DataGridTable";
import SpotifyLogo from "./assets/SpotifyLogo";

function App() {
  const { data } = useSelector((state: RootState) => state.dataTable);
  useQueryArtist();
  return (
    <div className="App">
      <SpotifyLogo />
      {data ? (
        <DataGridTable data={data as unknown as any} />
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
}

export default App;
