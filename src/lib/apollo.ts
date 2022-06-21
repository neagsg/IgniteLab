import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: import.meta.env.VITE_GRAPHCMS_ENDPOINT,
  cache: new InMemoryCache(),
  // headers: {
  //   Authorization: `Bearer ${process.env.REACT_APP_GRAPHCMS_TOKEN}`,
  // },
});
