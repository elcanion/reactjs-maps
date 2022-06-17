import { AppBar, Button, CssBaseline, IconButton, ThemeProvider, Toolbar, Typography } from "@mui/material";
import theme from "../theme";
import DriveEtaIcon from "@mui/icons-material/DriveEta";

export function Navbar(){
    return (
        <AppBar position="static" enableColorOnDark>
        <Toolbar>
          <IconButton color='inherit' edge="start">
            <DriveEtaIcon/>
          </IconButton>
          <Typography variant='h6'>Delivery</Typography>
        </Toolbar>
      </AppBar>
    )
}