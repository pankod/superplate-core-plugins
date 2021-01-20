const base = {
    _app: {
        import: [
            'import { initializeApollo } from "@services/graphql";',
            'import { ApolloProvider } from "@apollo/client";',
        ],
        inner: ["const apolloClient = initializeApollo();"],
        wrapper: [
            "<ApolloProvider client={apolloClient}>",
            "</ApolloProvider>",
        ],
    },
};

module.exports = {
    extend() {
        return base;
    },
};
