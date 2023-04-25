import React from 'react'
import { Container, Grid, Typography, Box, Button } from "@mui/material";
import TelegramIcon from "@mui/icons-material/Telegram";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";

const socialMedia = [
  <a href="https://t.me/Iman_behroozifar"  style={{color: "#fff"}}>
    <TelegramIcon
      color="#fff"
      fontSize="large"
      sx={{ cursor: "pointer", "&:hover": { color: "#ccc" } }}
    />
  </a>,
  <a href="https://github.com/imanbehroozifar" style={{color: "#fff"}}>
    <GitHubIcon
      color="#fff"
      fontSize="large"
      sx={{ cursor: "pointer", "&:hover": { color: "#ccc" } }}
    />
  </a>,
  <a href="https://instagram.com/iman.behroozifar?igshid=ZDdkNTZiNTM=" style={{color: "#fff"}}>
    <InstagramIcon
      color="#fff"
      fontSize="large"
      sx={{ cursor: "pointer", "&:hover": { color: "#ccc" } }}
    />
  </a>,
];

const Footer = () => {
  return (
    <Typography
      component="div"
      variant="div"
      bgcolor="#d32f2f"
      textAlign="center"
      padding={6}
      mt={10}
      color="white"
    >
      <Container maxWidth="lg">
        <Grid
          container
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Grid item xs={12}>
            <Grid container spacing={2}>
              {socialMedia.map((item,index) => (
                <Grid
                  item
                  xs={3}
                  sx={{
                    margin: 1,
                  }}
                key={index}>
                  {item}
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Typography fontWeight={500} mt={2} component='p' variant='p'>پروژه وبلاگ با GraphQL|طراح:ایمان بهروزی فر</Typography>
          </Grid>
        </Grid>
      </Container>
    </Typography>
  );
};

export default Footer