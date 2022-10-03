import { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";

export const columns: GridColDef[] = [
  {
    field: "cover",
    headerName: "Album Cover",
    flex: 0.5,
    cellClassName: "cell-content-centered",
    renderCell: ({ value }: GridRenderCellParams) => {
      return (
        <img style={{ maxHeight: "100%" }} src={value} alt="album cover" />
      );
    },
  },
  {
    field: "name",
    headerName: "Name",
    flex: 1,
    editable: true,
  },
  {
    field: "popularity",
    headerName: "Popularity",
    flex: 0.5,
    editable: true,
  },
  {
    field: "followers",
    headerName: "Followers",
    flex: 0.5,
    editable: true,
  },
  {
    field: "link",
    headerName: "External URL",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    flex: 1,
    renderCell: ({ value }: GridRenderCellParams) => (
      <a rel="noreferrer" target="_blank" href={value}>
        {value}
      </a>
    ),
  },
];
