const base = {
    _app: {
        import: [
            'import { QueryClient, QueryClientProvider } from "react-query";',
            'import { Hydrate } from "react-query/hydration";',
        ],
        inner: ["const queryClient = new QueryClient()"],
        wrapper: [
            [
                "<QueryClientProvider client={queryClient}>",
                "</QueryClientProvider>",
            ],
            ["<Hydrate state={pageProps.dehydratedState}>", "</Hydrate>"],
        ],
    },
    testSetup: {
        import: [
            'import { QueryClient, QueryClientProvider } from "react-query";',
        ],
        inner: ["const queryClient = new QueryClient()"],
        wrapper: [
            [
                "<QueryClientProvider client={queryClient}>",
                "</QueryClientProvider>",
            ],
        ],
    },
};

module.exports = {
    extend() {
        return base;
    },
};
