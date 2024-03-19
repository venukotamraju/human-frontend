import React from "react";
import {
  AppBar,
  Box,
  Button,
  Divider,
  Link,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
function MuiNavBar() {
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
            <Button>
              <Link
                href="/home/about"
                color={"primary"}
                variant="body1"
                fontWeight={600}
                underline="none"
              >
                About me
              </Link>
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default MuiNavBar;
