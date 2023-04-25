import { useQuery } from "@apollo/client";
import React from "react";
import { GET_POST_COMMENTS } from "../../graphql/query";
import { Avatar, Grid, Typography } from "@mui/material";
import {Box} from "@mui/system"

const Comments = ({ slug }) => {
  const { loading, data, error } = useQuery(GET_POST_COMMENTS, {
    variables: { slug: slug },
  }); 
  // const comments = data.comments || [];
  if (loading) return null;
  if (error) return <h1>Error...</h1>;
  if (data.comments) {
    return (
      <Grid
        container
        sx={{
          boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px ",
          borderRadius: "10px",
          py: 1,
          mt: 5,
        }}
      >
        <Grid item xs={12} m={2}>
          <Typography component="p" variant="h6" fontWeight={700} color="primary">
            کامنت ها
          </Typography>
        {data.comments.map(comment => (
          <Grid item xs={12} key={comment.id} m={2} p={2} border='1px silver solid'borderRadius={1}>
            <Box component='div' display='flex' alignItems='center'>
              <Avatar> {comment.name[0]}</Avatar>
              <Typography component='span' variant="p" fontWeight={700} mr={2}>{ comment.name }</Typography>
            </Box>
            <Typography component='p' variant="p" mt={2}  fontWeight={400}>{ comment.text }</Typography>
          </Grid>
        ))}
        </Grid>
      </Grid>
    );
  }
};

export default Comments;
