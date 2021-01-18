const base = {
    _app: {
        import: [
            'import { ThemeProvider } from "styled-components";',
            'import { useDarkMode } from "@definitions/styled-components";',
        ],
        inner: [
            'const theme = useDarkMode();',
        ],
        wrapper: ["<ThemeProvider theme={theme}>", "</ThemeProvider>"],
    },
    _document: {
        import: ['import { ServerStyleSheet } from "styled-components";'],
        initialProps: [
            "const sheet = new ServerStyleSheet()",
            "const originalRenderPage = ctx.renderPage",
            "try {",
            "ctx.renderPage = () =>",
            "originalRenderPage({",
            "enhanceApp: (App) => (props) =>",
            "sheet.collectStyles(<App {...props} />),",
            "})",
            "const initialProps = await Document.getInitialProps(ctx)",
            "return {",
            "...initialProps,",
            "styles: (",
            "<>",
            "{initialProps.styles}",
            "{sheet.getStyleElement()}",
            "</>",
            "),",
            "}",
            "} finally {",
            "sheet.seal()",
            "}"
        ],
        wrapper: [],
    },
};

module.exports = {
    extend() {
        return base;
    },
};
