import React from "react";
import { useQuery } from "@apollo/client";
import { GET_BLOGS_INFO } from "../../graphql/query";
import { Grid } from "@mui/material";
import CardEL from "../shared/CardEL";
import Loader from "../shared/Loader";
const Blogs = () => {
  const { loading, data, error } = useQuery(GET_BLOGS_INFO);
  console.log({ loading, data, error });
  if (loading) return <Loader/>;
  if (error) return <h1>Error...</h1>;
  return (
    <Grid container spacing={2}>
      {data.posts.map((post) => (
        <Grid item xs={12} sm={6} md={4} key={post.id}>
          <CardEL {...post} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Blogs;
