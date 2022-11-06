import * as React from "react";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import HamburgerMenu from "./HamburgerMenu";

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  return (
    <>
      <Box style={{ zIndex: "1000 !important" }} sx={{ flexGrow: 1 }}>
        <AppBar position="fixed" open={open} sx={{ backgroundColor: "black" }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, ...(open && { display: "none" }) }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Portfolio
            </Typography>
            <span className="nav-item nav-link text-info">ALEXIS</span>
          </Toolbar>
        </AppBar>
        <HamburgerMenu open={open} setOpen={setOpen} />
      </Box>
    </>
  );
};

export default Header;
