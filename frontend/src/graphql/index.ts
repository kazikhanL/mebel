import { ApolloClient, InMemoryCache } from "@apollo/client";
import { API_GRAPHQL } from "@constants";

const apolloClient = new ApolloClient({
    uri: API_GRAPHQL,
    cache: new InMemoryCache(),
    defaultOptions: {
        query: {
            fetchPolicy: "no-cache",
        },
    },
});

export default apolloClient;
