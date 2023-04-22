import React from 'react'
import Layout from "./Components/layout/Layout";
import HomePage from "./Components/Home/HomePage";
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
        <HomePage />
      </Layout>
    </>
  );
};

export default App