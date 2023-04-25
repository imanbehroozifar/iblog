import { AppBar, Button, Container, Toolbar, Typography } from "@mui/material";
import BookIcon from "@mui/icons-material/Book";
import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <AppBar position="sticky">
      <Container maxWidth="lg">
        <Toolbar>
          <Typography
            variant="h5"
            component="h1"
            sx={{ fontWeight: 600, flex: 1 }}
          >
            <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
              IBLOG
            </Link>
          </Typography>
          <Link to="/" style={{ color: "#fff" }}>
            <BookIcon />
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
