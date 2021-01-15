const base = {
    _app: {
        import: [
            'import { ThemeProvider } from "styled-components";',
            'import { theme } from "@definitions/styled-components/theme";',
        ],
        inner: [],
        wrapper: ["<ThemeProvider theme={theme}>", "</ThemeProvider>"],
    },
    _document: {
        import: [],
        inner: [],
        wrapper: [],
    },
};

module.exports = {
    extend() {
        return base;
    },
};
