import React from 'react'
import Loader from '../shared/Loader';

const AuthorsPage = () => {
  if (loading) return <Loader/>;
  if (error) return <h1>Error...</h1>;
  return (
    <div>AuthorsPage</div>
  )
}

export default AuthorsPage