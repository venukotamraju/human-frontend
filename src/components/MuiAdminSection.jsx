import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import CreateIcon from "@mui/icons-material/Create";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
function MuiAdminSection() {
  const nav = useNavigate();
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      height={"80vh"}
    >
      <Box width={{ xs: "100%", md: "50%" }}>
        <Card>
          <CardHeader
            title="Get it done! Admin 💪"
            titleTypographyProps={{ textAlign: "right", padding: 3 }}
          />
          <CardContent>
            <List>
              <Stack
                direction={"column"}
                divider={
                  <Divider flexItem variant="inset" orientation="horizontal" />
                }
                gap={4}
              >
                <ListItemButton
                  alignItems="flex-start"
                  onClick={() => nav("/admin/createPost")}
                >
                  <ListItemIcon>
                    <CreateIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Publish Post"
                    secondary={
                      <Typography variant="body2">
                        get your creativity in check and write a post
                      </Typography>
                    }
                  />
                </ListItemButton>
                <ListItemButton
                  alignItems="flex-start"
                  onClick={() => nav("/admin/viewPosts")}
                >
                  <ListItemIcon>
                    <SearchIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="View Posts"
                    secondary={
                      <Typography variant="body2">
                        You can view,edit and delete posts from here
                      </Typography>
                    }
                  />
                </ListItemButton>
              </Stack>
            </List>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}

export default MuiAdminSection;
