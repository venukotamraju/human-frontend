import React, { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Box, Button, MenuItem, Paper, Stack, TextField } from "@mui/material";
import { Formik, Form, Field } from "formik";
function MuiTinyMceTxtEditor() {
  const editorRef = useRef();
  const initialValues = {
    title: "",
    image: "",
    domain: "",
    date: "",
  };
  const handleSubmit = (values, { resetForm }) => {
    fetch(`${process.env.REACT_APP_URLSERVER}api/v1/posts`, {
      method: "POST",
      body: JSON.stringify({
        ...values,
        content: editorRef.current.getContent(),
      }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.error("error from submitting post: ", err));
    resetForm();
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
              tinymceScriptSrc={`${process.env.PUBLIC_URL}/tinymce/tinymce.min.js`}
              onInit={(evt, editor) => (editorRef.current = editor)}
              initialValue="<h1>This is the initial value of the editor</h1>"
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
            <Box width={"100%"} textAlign={"center"} p={3}>
              <Button type="submit" onSubmit={handleSubmit}>
                Submit Post
              </Button>
            </Box>
          </Stack>
        </Form>
      </Formik>
    </Box>
  );
}

export default MuiTinyMceTxtEditor;
