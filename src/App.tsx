import React from "react";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import theme from "./style/theme";
import "./translations/i18n";
import { router } from "./routes/router";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
