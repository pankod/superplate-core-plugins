const base = {
    _app: {
        import: [
            'import { Hydrate, QueryClient, QueryClientProvider } from "@tanstack/react-query";',
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
            'import { QueryClient, QueryClientProvider } from "@tanstack/react-query";',
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
