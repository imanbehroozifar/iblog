import React from "react";
import { Avatar, Grid, Typography ,Box } from "@mui/material";
import { Container } from "@mui/system";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_POST_INFO } from "../../graphql/query";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import sanitizeHtml from 'sanitize-html'
import CommentForm from "../Comment/CommentForm";
import Comments from "../Comment/Comments";
import Loader from "../shared/Loader";
const BlogPage = () => {
  const navigate = useNavigate();
  const { slug } = useParams();
  const { loading, data, error } = useQuery(GET_POST_INFO, {
    variables: { slug },
  });
  console.log({ loading, data, error });
  if (loading) return <Loader/>;
  if (error) return <h1>Error...</h1>;
  return (
    <Container maxWidth="lg">
      <Grid container padding={3}>
        <Grid item xs={12} mt={9} display="flex" justifyContent="space-between">
          <Typography
            component="h2"
            variant="h4"
            color="primary"
            fontWeight={700}
          >
            {data.post.title}
          </Typography>
          <ArrowBackRoundedIcon onClick={() => navigate(-1)} />
        </Grid>
        <Grid item xs={12} mt={6}>
          <img
            src={data.post.coverPhoto.url}
            alt="/"
            width="100%"
            style={{ borderRadius: "5px" }}
          />
        </Grid>
        <Grid item xs={12} mt={7} display='flex' alignItems='center'>
          <Avatar
            src={data.post.author.avatar.url}
            sx={{ width: "80px", height: "80px", marginLeft: 2 }}
          />
          <Box component='div'>
            <Typography component="p" variant="h5" fontWeight={700}>
              {data.post.author.name}
            </Typography>
            <Typography component="p" variant="p" color="text.secondary">
              {data.post.author.field}
            </Typography>
          </Box>
              </Grid>
              <Grid item xs={12} mt={5}>
                  <div dangerouslySetInnerHTML={{ __html: sanitizeHtml(data.post.content.html) }}></div>
              </Grid>
              <Grid item xs={12} mt={5}>
                  <CommentForm slug={slug} />
        </Grid>
        <Grid item xs={12} mt={5}>
                  <Comments slug={slug} />
              </Grid>
                  
      </Grid>
    </Container>
  );
};

export default BlogPage;
