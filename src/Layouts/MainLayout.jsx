import Navbar from "../components/Navbar";
import SearchInput from "../components/SearchInput";
import { Box } from "@mui/material";

export default function MainLayout({ children }) {
  return (
    <>
      {window.location !== "/login" && <Navbar></Navbar>}
      <Box className="d_flex js_center w_60 mx_auto">
        <SearchInput />
      </Box>
      <Box className="d_flex flex_dir_column al_center">
        {children}
      </Box>
    </>
  );
}
