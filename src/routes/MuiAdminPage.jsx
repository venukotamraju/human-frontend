import { Box } from "@mui/material";
import React, { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import MuiAdminNavBar from "../components/MuiAdminNavBar";

function MuiAdminPage() {
  const location = useLocation();
  const nav = useNavigate();
  useEffect(() => {
    fetch(process.env.REACT_APP_URL_SERVER + "api/v1/admin/login", {
      credentials: "include",
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.adminAuth) {
          nav("/admin/home", {
            state: { adminData: data.adminAuth.adminData },
          });
        }
      })
      .catch((err) => console.error("error from fetching cookie: ", err));
  }, []);
  return (
    <Box>
      {location.pathname === "/admin/home" ? (
        <MuiAdminNavBar login={true} />
      ) : (
        <MuiAdminNavBar login={false} />
      )}
      <Outlet />
    </Box>
  );
}

export default MuiAdminPage;
