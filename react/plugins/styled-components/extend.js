const base = {
    _app: {
        import: [
            'import { StyledThemeProvider } from "definitions/styled-components";',
        ],
        inner: [],
        wrapper: [["<StyledThemeProvider>", "</StyledThemeProvider>"]],
    },
};

module.exports = {
    extend() {
        return base;
    },
};
