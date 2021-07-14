const base = {
    _app: {
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
