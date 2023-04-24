import React from 'react'
import Layout from "./Components/layout/Layout";
import HomePage from "./Components/Home/HomePage";
import { Route, Routes } from "react-router-dom";
import BlogPage from './Components/Blog/BlogPage';
import AuthorPage from './Components/Author/AuthorPage';
import BlogsPage from './Components/Blog/BlogsPage';
import AuthorsPage from './Components/Author/AuthorsPage';
// import { ThemeProvider, createTheme } from "@mui/material";
// import CssBaseline from "@mui/material/CssBaseline";
// const darkTheme = createTheme({
//   palette: {
//     mode: "dark",
//   },
// });
// <ThemeProvider theme={darkTheme}>
{
  /* <CssBaseline/> */
}
// </ThemeProvider>
const App = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/authors" element={<AuthorsPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="blogs/:slug" element={<BlogPage />} />
          <Route path="authors/:slug" element={<AuthorPage />} />
        </Routes>
      </Layout>
    </>
  );
};

export default App