import { Box } from "@mui/material";
import React, { createContext, useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import MuiAdminNavBar from "../components/MuiAdminNavBar";
import MuiHomeFooter from "../components/MuiHomeFooter";
const AdminDataContext = createContext();
function MuiAdminPage() {
  const [adminData, setAdminData] = useState();
  const nav = useNavigate();
  useEffect(() => {
    fetch(`${process.env.REACT_APP_URLSERVER}api/v1/admin/login`, {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        data?.adminAuth
          ? setAdminData({ adminData: data.adminAuth.adminData })
          : nav("/login");
      })
      .catch((err) => console.error("error from fetching cookie: ", err));
  }, []);
  return (
    <Box>
      <MuiAdminNavBar />

      <AdminDataContext.Provider value={adminData}>
        <Outlet />
      </AdminDataContext.Provider>

      <MuiHomeFooter />
    </Box>
  );
}

export default MuiAdminPage;
