const base = {
    _app: {
        import: [
            'import { QueryClient, QueryClientProvider } from "react-query";',
            'import { Hydrate } from "react-query/hydration";',
        ],
        inner: [
            "const queryClient = new QueryClient()",
            "const { dehydratedState } = typeof pageProps !== 'undefined' ? pageProps : {};",
        ],
        wrapper: [
            "<QueryClientProvider client={queryClient}>",
            "<Hydrate state={dehydratedState}>",
            "</Hydrate>",
            "</QueryClientProvider>",
        ],
    },
};

module.exports = {
    extend() {
        return base;
    },
};
