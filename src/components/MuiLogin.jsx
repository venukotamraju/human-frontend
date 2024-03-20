import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import KeyIcon from "@mui/icons-material/Key";
import EmailIcon from "@mui/icons-material/Email";
import React, { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import { useNavigate } from "react-router-dom";
function MuiLogin() {
  const nav = useNavigate();
  const [submissionMessage, setSubmissionMessage] = useState();
  const initialValues = {
    email: "",
    key: "",
  };

  const handleSubmit = (values, { resetForm }) => {
    fetch(`${process.env.REACT_APP_URLSERVER}api/v1/admin/login`, {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-type": "application/json",
      },
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) =>
        data?.message !== "OK"
          ? setSubmissionMessage(data.message)
          : nav("/admin/home", { state: { adminData: data.login?.adminData } })
      )
      .catch((err) => console.error("error from logging in: ", err));
    resetForm();
  };
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      width={"100vw"}
      justifyContent={"center"}
      alignItems={"center"}
      height={"80vh"}
      component={Paper}
    >
      <Box width={{ md: "50%" }} borderBottom={"solid"}>
        <Card>
          <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            <Form>
              <Stack
                direction={"column"}
                divider={<Divider orientation="horizontal" flexItem />}
                justifyContent={"center"}
                alignItems={"center"}
                spacing={5}
                gap={3}
              >
                <CardHeader
                  sx={{ padding: 3 }}
                  title=" Welcome back ! Admin 💀"
                />
                <CardContent sx={{ width: "100%" }}>
                  <Stack direction={"column"} spacing={5}>
                    <Field name="email">
                      {({ field }) => (
                        <TextField label={<EmailIcon />} required {...field} />
                      )}
                    </Field>
                    <Field name="key">
                      {({ field }) => (
                        <TextField
                          type="password"
                          label={<KeyIcon />}
                          required
                          {...field}
                        />
                      )}
                    </Field>
                  </Stack>
                </CardContent>
                <CardActions>
                  <Button
                    size="large"
                    sx={{
                      "&:hover": {
                        background: "none",
                        textDecoration: "underline",
                      },
                      padding: 2,
                    }}
                    type="submit"
                  >
                    Login
                  </Button>
                </CardActions>
              </Stack>
            </Form>
          </Formik>
        </Card>
        {submissionMessage ? (
          <Box>
            <Typography
              textAlign={"center"}
              p={2}
              fontWeight={600}
              letterSpacing={2}
              color={"error"}
            >
              {submissionMessage}
            </Typography>
          </Box>
        ) : null}
      </Box>
    </Box>
  );
}

export default MuiLogin;
