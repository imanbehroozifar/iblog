import { useQuery } from "@apollo/client";
import React from "react";
import { GET_AUTHOR_INFO } from "../../graphql/query";
import { useParams } from "react-router-dom";
import { Avatar, Grid, Typography } from "@mui/material";
import {Container } from '@mui/system'
import sanitizeHtml from "sanitize-html";
import CardEL from "../shared/CardEL";
const AuthorPage = () => {
  const { slug } = useParams();
  const { loading, data, error } = useQuery(GET_AUTHOR_INFO, {
    variables: { slug },
  });
  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error...</h1>;
  return (
    <Container maxWidth="lg">
      <Grid container mt={10}>
        <Grid
          item
          xs={12}
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Avatar
            src={data.author.avatar.url}
            sx={{ width: "250px", height: "250px" }}
          />
          <Typography component="h3" variant="h5" fontWeight={700} mt={4}>
            {data.author.name}
          </Typography>
          <Typography component="p" variant="h5" color="text.secondary" mt={2}>
            {data.author.field}
          </Typography>
        </Grid>
        <Grid item xs={12} mt={5}>
          <div
            dangerouslySetInnerHTML={{
              __html: sanitizeHtml(data.author.description.html),
            }}
          ></div>
        </Grid>
              <Grid item xs={12} mt={6}>
                  <Typography component='h3' variant="h5" fontWeight={700}>مقالات {data.author.name}</Typography>
                  <Grid container spacing={2}>
                      {data.author.posts.map(post => (
                          <Grid item xs={12} sm={6} md={3} key={post.id}>
                              <CardEL  title={post.title} slug={post.slug} coverPhoto={post.coverPhoto}/>
                          </Grid>
                      ))}
                  </Grid>
              </Grid>
      </Grid>
    </Container>
  );
};

export default AuthorPage;
