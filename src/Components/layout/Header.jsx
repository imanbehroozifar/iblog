import { AppBar, Button, Container, Toolbar, Typography } from "@mui/material";
import BookIcon from "@mui/icons-material/Book";
import React from "react";
const Header = () => {
  return (
    <AppBar position="sticky">
      <Container maxWidth="lg">
        <Toolbar>
          <Typography
            variant="h5"
            component="h1"
            sx={{ fontWeight:600, flex: 1 }}
          >
            IBLOG
          </Typography>
          <BookIcon />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
