import { colors, createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: colors.red["A400"],
    },
    secondary: {
      main: colors.amber["800"],
    },
    mode: "dark",
  },
});
