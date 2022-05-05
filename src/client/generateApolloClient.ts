import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const githubLink = createHttpLink({
  uri: process.env.REACT_APP_GITHUB_API_URL,
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from localStorage if exists
  const token = process.env.REACT_APP_GITHUB_TOKEN;
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const generateApolloClient = () =>
  new ApolloClient({
    link: authLink.concat(githubLink),
    cache: new InMemoryCache(),
  });

export default generateApolloClient;
