import React, { useEffect } from "react";
import MuiTinyMceTxtEditor from "./MuiTinyMceTxtEditor";
import { Box } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";
import { useNavigate } from "react-router-dom";

function MuiAdminHome() {
  const nav = useNavigate();
  useEffect(() => {
    fetch(`${process.env.REACT_APP_URLSERVER}api/v1/admin/login`, {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => (!data?.adminAuth ? nav("/admin") : null));
  }, []);
  return (
    <Box>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <MuiTinyMceTxtEditor />
      </LocalizationProvider>
    </Box>
  );
}

export default MuiAdminHome;
