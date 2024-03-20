import {
  AppBar,
  Box,
  Button,
  Divider,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

function MuiAdminNavBar({ login }) {
  const nav = useNavigate();
  const handleLogout = () => {
    fetch(`${process.env.REACT_APP_URLSERVER}api/v1/admin/logout`, {
      method: "POST",
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) =>
        data?.message === "OK"
          ? nav("/admin")
          : console.error("unable to log out")
      )
      .catch((err) => console.error("logout failed: ", err));
  };
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Stack
            p={4}
            width={"100%"}
            spacing={5}
            direction={{ sm: "column", md: "row" }}
            divider={<Divider orientation="vertical" flexItem />}
          >
            <Typography
              component={"h1"}
              variant="h3"
              p={{ xs: 2, sm: 0 }}
              letterSpacing={10}
              flexGrow={1}
              textAlign={{ xs: "center", sm: "left" }}
            >
              Human.
            </Typography>
            {login ? <Button onClick={handleLogout}>Log out</Button> : null}
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default MuiAdminNavBar;
