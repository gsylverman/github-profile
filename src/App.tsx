import React, { lazy, Suspense } from 'react';
import { ApolloProvider } from "@apollo/client";
import generateApolloClient from "./client/generateApolloClient";
import { createTheme, ThemeProvider } from "@mui/material";
import Router from "./Router";

function App() {
  const client = generateApolloClient();
  const theme = createTheme({});

  return (
    <ThemeProvider theme={ theme }>
      <ApolloProvider client={ client }>
        <Router/>
      </ApolloProvider>
    </ThemeProvider>
  );
}

export default App;
