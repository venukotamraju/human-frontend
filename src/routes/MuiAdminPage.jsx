import { Box } from "@mui/material";
import React, { createContext, useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import MuiAdminNavBar from "../components/MuiAdminNavBar";
const AdminDataContext = createContext();
function MuiAdminPage() {
  const [adminData, setAdminData] = useState();
  const nav = useNavigate();
  const location = useLocation();
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
      {location.pathname === "/admin" ? (
        <MuiAdminNavBar login={true} />
      ) : (
        <MuiAdminNavBar login={false} />
      )}
      <AdminDataContext.Provider value={adminData}>
        <Outlet />
      </AdminDataContext.Provider>
    </Box>
  );
}

export default MuiAdminPage;
