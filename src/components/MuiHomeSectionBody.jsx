import {
  Box,
  Tab,
  Typography,
  Avatar,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  IconButton,
} from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import React, { useEffect, useState } from "react";
import PsychologyIcon from "@mui/icons-material/Psychology";
import ScienceIcon from "@mui/icons-material/Science";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import PostAddIcon from "@mui/icons-material/PostAdd";
import PublicIcon from "@mui/icons-material/Public";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { useNavigate } from "react-router-dom";
function MuiHomeSectionBody() {
  const [value, setValue] = useState("1");
  const [posts, setPosts] = useState();
  const nav = useNavigate();

  const handleChange = (evt, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    fetch(`${process.env.REACT_APP_URLSERVER}api/v1/posts`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPosts(data.data);
      })
      .catch((err) => console.error("error from retreiving posts: ", err));
  }, []);
  console.log(posts);
  return (
    <Box
      p={2}
      height={"60vh"}
      sx={{
        overflowX: "hidden",
        overflowY: "scroll",
        scrollbarWidth:"none",
        scrollBehavior: "smooth",
      }}
    >
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
            aria-label="domain tabs"
            onChange={handleChange}
            indicatorColor="secondary"
            textColor="secondary"
            variant="scrollable"
            scrollButtons="auto"
          >
            <Tab
              label="Media"
              value="1"
              icon={<NewspaperIcon />}
              iconPosition="start"
            />
            <Tab
              label="Philosophy"
              value="2"
              icon={<PsychologyIcon />}
              iconPosition="start"
            />
            <Tab
              label="Writings"
              value="3"
              icon={<PostAddIcon />}
              iconPosition="start"
            />
            <Tab
              label="Science and technology"
              value="4"
              icon={<ScienceIcon />}
              iconPosition="start"
            />
            <Tab
              label="General Knowledge"
              value="5"
              icon={<PublicIcon />}
              iconPosition="start"
            />
          </TabList>
        </Box>
        <TabPanel value="1">
          <List>
            {posts ? (
              posts
                .filter((elt) => elt.post_domain === "media")
                .map((e) => (
                  <ListItem
                    key={e.post_id}
                    secondaryAction={
                      <IconButton
                        onClick={() =>
                          nav(`/home/${e.post_title}`, {
                            state: { ...e },
                          })
                        }
                      >
                        <OpenInNewIcon />
                      </IconButton>
                    }
                  >
                    <ListItemIcon>
                      <Avatar srcSet={e.post_image_link} />
                    </ListItemIcon>
                    <ListItemText primary={e.post_title} />
                  </ListItem>
                ))
            ) : (
              <Typography>Loading Content</Typography>
            )}
          </List>
        </TabPanel>
        <TabPanel value="2">
          <List>
            {posts ? (
              posts
                .filter((elt) => elt.post_domain === "philosophy")
                .map((e) => (
                  <ListItem
                    key={e.post_id}
                    secondaryAction={
                      <IconButton
                        onClick={() =>
                          nav(`/home/${e.post_title}`, {
                            state: { ...e },
                          })
                        }
                      >
                        <OpenInNewIcon />
                      </IconButton>
                    }
                  >
                    <ListItemIcon>
                      <Avatar srcSet={e.post_image_link} />
                    </ListItemIcon>
                    <ListItemText primary={e.post_title} />
                  </ListItem>
                ))
            ) : (
              <Typography>Loading Content</Typography>
            )}
          </List>
        </TabPanel>
        <TabPanel value="3">
          <List>
            {posts ? (
              posts
                .filter((elt) => elt.post_domain === "writings")
                .map((e) => (
                  <ListItem
                    key={e.post_id}
                    secondaryAction={
                      <IconButton
                        onClick={() =>
                          nav(`/home/${e.post_title}`, {
                            state: { ...e },
                          })
                        }
                      >
                        <OpenInNewIcon />
                      </IconButton>
                    }
                  >
                    <ListItemIcon>
                      <Avatar srcSet={e.post_image_link} />
                    </ListItemIcon>
                    <ListItemText primary={e.post_title} />
                  </ListItem>
                ))
            ) : (
              <Typography>Loading Contentt</Typography>
            )}
          </List>
        </TabPanel>
        <TabPanel value="4">
          <List>
            {posts ? (
              posts
                .filter((elt) => elt.post_domain === "science and technology")
                .map((e) => (
                  <ListItem
                    key={e.post_id}
                    secondaryAction={
                      <IconButton
                        onClick={() =>
                          nav(`/home/${e.post_title}`, {
                            state: { ...e },
                          })
                        }
                      >
                        <OpenInNewIcon />
                      </IconButton>
                    }
                  >
                    <ListItemIcon>
                      <Avatar srcSet={e.post_image_link} />
                    </ListItemIcon>
                    <ListItemText primary={e.post_title} />
                  </ListItem>
                ))
            ) : (
              <Typography>Loading Content</Typography>
            )}
          </List>
        </TabPanel>
        <TabPanel value="5">
          <List>
            {posts ? (
              posts
                .filter((elt) => elt.post_domain === "general knowledge")
                .map((e) => (
                  <ListItem
                    key={e.post_id}
                    secondaryAction={
                      <IconButton
                        onClick={() =>
                          nav(`/home/${e.post_title}`, {
                            state: { ...e },
                          })
                        }
                      >
                        <OpenInNewIcon />
                      </IconButton>
                    }
                  >
                    <ListItemIcon>
                      <Avatar srcSet={e.post_image_link} />
                    </ListItemIcon>
                    <ListItemText primary={e.post_title} />
                  </ListItem>
                ))
            ) : (
              <Typography>Loading Content</Typography>
            )}
          </List>
        </TabPanel>
      </TabContext>
    </Box>
  );
}

export default MuiHomeSectionBody;
