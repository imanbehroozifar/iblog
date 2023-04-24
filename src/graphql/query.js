import { gql } from "@apollo/client";

const GET_BLOGS_INFO = gql`
  query {
    posts {
      author {
        name
        avatar {
          url
        }
      }
      title
      id
      slug
      coverPhoto {
        url
      }
    }
  }
`;
const GET_AUTHORS_INFO = gql`
  query {
    authors {
      id
      name
      slug
      avatar {
        url
      }
    }
  }
`;

const GET_AUTHOR_INFO = gql`
    query getAuthorInfo($slug:String!){
        author(where:{slug:$slug}){
            avatar{url}
            field
            name
            description{html}
            posts{
                coverPhoto{url}
                id 
                slug
                title
            }
        }
    }
`;
const GET_POST_INFO = gql`
  query getPostInfo($slug: String!) {
    post(where : { slug:$slug}){
    author {
      avatar {
        url
      }
      name
      field
    }
    content {
      html
    }
    title
    coverPhoto {
      url
    }
  }
  }
`;
const GET_COMMENT = gql`
  query getPostComment($slug: String!) {
    comment(where: { post: { slug: $slug } }) {
      id
      name
      email
    }
  }
`;

export {
  GET_COMMENT,
  GET_BLOGS_INFO,
  GET_AUTHORS_INFO,
  GET_POST_INFO,
  GET_AUTHOR_INFO,
};
