import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import MuiHomePage from "./routes/MuiHomePage";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { theme } from "./themes/muiThemeContext";
import MuiAdminPage from "./routes/MuiAdminPage";
import MuiLogin from "./components/MuiLogin";
import MuiAdminHome from "./components/MuiAdminHome";
import MuiHomeSection from "./components/MuiHomeSection";
import MuiPostsHome from "./components/MuiPostsHome";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route exact path="/admin" element={<MuiAdminPage />}>
              <Route exact path="/admin" element={<MuiLogin />} />
              <Route exact path="/admin/home" element={<MuiAdminHome />} />
            </Route>

            <Route exact path="/home" element={<MuiHomePage />}>
              <Route exact path="/home" element={<MuiHomeSection />} />
              <Route exact path="/home/:postTitle" element={<MuiPostsHome />} />
            </Route>

            <Route path="*" element={<Navigate to={"/home"} />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
