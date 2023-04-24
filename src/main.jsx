import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/main.css'
import './styles/font.css'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { ThemeProvider } from "@emotion/react";
import { theme } from './mui/theme';

const client = new ApolloClient({
  uri:import.meta.env.VITE_GRAPHCMS_URI,
  cache : new InMemoryCache()
}) 

ReactDOM.createRoot(document.getElementById("root")).render(
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </ApolloProvider>
);
  