const base = {
    _app: {
        import: [
            'import { ThemeProvider } from "styled-components";',
            'import { useDarkMode } from "@definitions/styled-components/index";',
        ],
        inner: [
            'const theme = useDarkMode();',
        ],
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
