import React from 'react'
import Loader from '../shared/Loader';

const BlogsPage = () => {
  if (loading) return <Loader/>;
  if (error) return <h1>Error...</h1>;
  return (
    <div>BlogsPage</div>
  )
}

export default BlogsPage