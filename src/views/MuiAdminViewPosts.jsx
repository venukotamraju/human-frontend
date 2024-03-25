import {
  Box,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { useNavigate } from "react-router-dom";

const moment = require("moment");
const parseFn = function (val) {
  return val === null ? null : moment(val).format("DD-MM-YYYY");
};
function MuiAdminViewPosts() {
  const [postsTableRows, setPostsTableRows] = useState();

  const nav = useNavigate();

  useEffect(() => {
    fetch("https://human-backend.onrender.com/api/v1/posts")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        data?.data
          ? setPostsTableRows({ data: data.data })
          : setPostsTableRows({ message: data.message });
      });
  }, []);
  return (
    <Box m={{ xs: 1, md: 4 }}>
      {postsTableRows?.data ? (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Post Id</TableCell>
                <TableCell align="right">Title</TableCell>
                <TableCell align="right">Domain</TableCell>
                <TableCell align="right">Date of publication</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {postsTableRows.data.map((post) => (
                <TableRow
                  key={post.post_id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component={"th"} scope="row">
                    {post.post_id}
                  </TableCell>
                  <TableCell align="right">
                    {post.post_title}
                    <IconButton
                      size="small"
                      sx={{ paddingInlineStart: "6px" }}
                      color="primary"
                      onClick={() =>
                        nav("/admin/createPost", { state: { ...post } })
                      }
                    >
                      <OpenInNewIcon />
                    </IconButton>
                  </TableCell>
                  <TableCell align="right">{post.post_domain}</TableCell>
                  <TableCell align="right">{parseFn(post.post_date)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <Typography>{postsTableRows}</Typography>
      )}
    </Box>
  );
}

export default MuiAdminViewPosts;
