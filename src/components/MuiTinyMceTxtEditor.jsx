import React, { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Box, Button, MenuItem, Paper, Stack, TextField } from "@mui/material";
import { Formik, Form, Field } from "formik";
import { useLocation, useNavigate } from "react-router-dom";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const moment = require("moment");
const parseFn = function (val) {
  return val === null ? null : moment(val).format("YYYY-MM-DD");
};
function MuiTinyMceTxtEditor() {
  const location = useLocation();
  console.log(location);
  const nav = useNavigate();
  const editorRef = useRef();

  const initialValues = {
    title: location.state?.post_title,
    image: location.state?.post_image_link,
    domain: location.state?.domain,
    date: parseFn(location.state?.post_date),
  };

  const handleSubmit = (values, { resetForm }) => {
    fetch(
      !location.state
        ? `${process.env.REACT_APP_URLSERVER}api/v1/posts`
        : `${process.env.REACT_APP_URLSERVER}api/v1/posts/${location.state.post_id}`,
      {
        method: !location.state ? "POST" : "PUT",
        body: JSON.stringify({
          ...values,
          content: editorRef.current.getContent(),
        }),
        headers: {
          "Content-type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.error("error from submitting post: ", err));
    resetForm();
  };
  const handleDelete = () => {
    fetch(
      `${process.env.REACT_APP_URLSERVER}api/v1/posts/${location.state?.post_id}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then((data) =>
        data?.message === "OK"
          ? nav("/admin/viewPosts")
          : console.log(data.message)
      );
  };
  return (
    <Box component={Paper}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <Stack direction={"column"} gap={3} p={2}>
            <Field name="title">
              {({ field }) => (
                <TextField
                  label="Title"
                  helperText={"Please enter the title of the post"}
                  variant="standard"
                  fullWidth
                  margin="dense"
                  required
                  {...field}
                />
              )}
            </Field>
            <Field name="image">
              {({ field }) => (
                <TextField
                  label="Img"
                  helperText={"Link to the source of the image"}
                  variant="standard"
                  fullWidth
                  margin="dense"
                  required
                  {...field}
                />
              )}
            </Field>
            <Field name="domain">
              {({ field }) => (
                <TextField
                  label="Domain"
                  helperText="Select a domain of the post"
                  variant="standard"
                  margin="dense"
                  defaultValue={location?.state?.post_domain}
                  select
                  required
                  {...field}
                >
                  {[
                    "media",
                    "philosophy",
                    "writings",
                    "science and technology",
                    "general knowledge",
                  ].map((item) => (
                    <MenuItem key={item} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                </TextField>
              )}
            </Field>
            <Field name="date">
              {({ field }) => (
                <TextField
                  type="date"
                  label="Date"
                  helperText="Enter Today's Date"
                  variant="standard"
                  margin="dense"
                  required
                  InputLabelProps={{ shrink: true }}
                  {...field}
                />
              )}
            </Field>
            <Editor
              apiKey={`${process.env.REACT_APP_TINYAPIKEY}`}
              // tinymceScriptSrc={`${process.env.PUBLIC_URL}/tinymce/tinymce.min.js`}
              onInit={(evt, editor) => (editorRef.current = editor)}
              initialValue={
                location.state
                  ? location.state.post_content
                  : "<h1>This is the initial value of the editor</h1>"
              }
              init={{
                height: 500,
                menubar: true,
                plugins: [
                  "advlist",
                  "autolink",
                  "lists",
                  "link",
                  "image",
                  "charmap",
                  "print",
                  "preview",
                  "anchor",
                  "searchreplace",
                  "visualblocks",
                  "code",
                  "fullscreen",
                  "insertdatetime",
                  "media",
                  "table",
                  "paste",
                  "help",
                  "wordcount",
                ],
                toolbar:
                  "undo redo | formatselect | blocks | " +
                  "bold italic backcolor forecolor | alignleft aligncenter " +
                  "alignright alignjustify | bullist numlist outdent indent | " +
                  "removeformat | help",
                content_style:
                  "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
              }}
            />
            <Box
              width={"100%"}
              p={3}
              display={"flex"}
              gap={3}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Button type="submit" variant="outlined" onSubmit={handleSubmit}>
                Submit Post
              </Button>
              {location?.state ? (
                <Button
                  onClick={handleDelete}
                  startIcon={<DeleteOutlineIcon color="primary" />}
                  color="secondary"
                  variant="outlined"
                >
                  Delete Post
                </Button>
              ) : null}
            </Box>
          </Stack>
        </Form>
      </Formik>
    </Box>
  );
}

export default MuiTinyMceTxtEditor;
