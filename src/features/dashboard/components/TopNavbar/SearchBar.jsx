import SearchIcon from "@mui/icons-material/Search";
import { InputBase, Paper } from "@mui/material";

const SearchBar = () => {
  return (
    <Paper
      elevation={0}
      sx={{
        display: "flex",
        alignItems: "center",
        width: { xs: "100%", sm: 320, md: 420 },
        px: 2,
        py: 0.5,
        border: 1,
        borderColor: "divider",
        borderRadius: 2,
        bgcolor: "background.paper",
      }}
    >
      <SearchIcon color="action" />

      <InputBase
        placeholder="Search..."
        sx={{
          ml: 1,
          flex: 1,
        }}
      />
    </Paper>
  );
};

export default SearchBar;