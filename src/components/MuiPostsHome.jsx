import {
  Box,
  Breadcrumbs,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Link,
  Paper,
  Typography,
} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

const moment = require("moment");
const parseFn = function (val) {
  return val === null ? null : moment(val).format("DD-MM-YYYY");
};
function MuiPostsHome() {
  const [postData, setPostData] = useState(useLocation().state || null);
  const { postTitle } = useParams();
  console.log(useLocation());
  useEffect(() => {
    fetch(process.env.REACT_APP_URL_SERVER + `api/v1/posts/name/${postTitle}`)
      .then((res) => res.json())
      .then((data) => (data.message === "OK" ? setPostData(data.data) : null));
  }, []);
  return postData ? (
    <Box>
      <Box m={2}>
        <Breadcrumbs aria-label="breadCrumb" separator={<NavigateNextIcon />}>
          <Link href="/home">Home</Link>
          <Typography>{postData.post_domain}</Typography>
          <Typography>{postData.post_title}</Typography>
        </Breadcrumbs>
      </Box>
      <Box component={Paper} m={{ md: 1.5 }} p={{ md: 5 }}>
        <Card>
          <CardHeader
            title={postData.post_title}
            titleTypographyProps={{
              textAlign: "right",
              fontSize: "xx-large",
              textTransform: "uppercase",
            }}
          />
          <CardMedia
            height="440px"
            component={"img"}
            image={postData.post_image_link}
            alt={postData.post_title}
          />
          <CardContent>
            <Typography variant="caption">
              Published by <Link href="/home/about">Venu Kotamraju</Link> on{" "}
              {parseFn(postData.post_date)}
            </Typography>
          </CardContent>
        </Card>
        <Box dangerouslySetInnerHTML={{ __html: postData.post_content }} />
      </Box>
    </Box>
  ) : (
    <Typography>OOps Post not Found</Typography>
  );
}

export default MuiPostsHome;
