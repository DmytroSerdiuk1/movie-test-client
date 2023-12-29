import React from "react";
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes";
import { ThemeProvider } from "@mui/material";
import theme from "./style/theme";
import "./translations/i18n";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={routes} />
    </ThemeProvider>
  );
}

export default App;
