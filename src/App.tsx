import React from 'react';
import { AppBar, Button, CssBaseline, ThemeProvider, Toolbar, Typography } from "@mui/material";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <AppBar>
        <Toolbar>
          <Typography></Typography>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}

export default App;
