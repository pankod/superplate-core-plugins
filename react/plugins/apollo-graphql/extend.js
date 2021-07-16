const base = {
    _app: {
        import: [
            'import { initializeApollo } from "services/graphql";',
            'import { ApolloProvider } from "@apollo/client";',
        ],
        inner: ["const apolloClient = initializeApollo();"],
        wrapper: [
            ["<ApolloProvider client={apolloClient}>", "</ApolloProvider>"],
        ],
    },
    testSetup: {
        import: ["import { MockedProvider } from '@apollo/client/testing';"],
        wrapper: [
            [
                "<MockedProvider mocks={[]} addTypename={false}>",
                "</MockedProvider>",
            ],
        ],
    },
};

module.exports = {
    extend() {
        return base;
    },
};
