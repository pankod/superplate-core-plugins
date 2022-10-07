const base = {
    _app: {
        refineMantineImports: [
            "useLocalStorage",
            "ColorSchemeProvider",
            "ColorScheme",
            "DarkTheme",
            "LightTheme",
        ],
        wrapper: [
            ["<ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>", "</ColorSchemeProvider>"],
            [`<MantineProvider theme={colorScheme === "dark" ? DarkTheme : LightTheme} withNormalizeCSS withGlobalStyles>`, "</MantineProvider>"],
            [`<Global styles={{ body: { WebkitFontSmoothing: "auto" } }} />`],
            [`<NotificationsProvider position="top-right">`, "</NotificationsProvider>"],
        ],
        innerHooks: [
            `const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
                key: "mantine-color-scheme",
                defaultValue: "light",
                getInitialValueInEffect: true,
            });`
        ],
        inner: [
            `const toggleColorScheme = (value?: ColorScheme) =>
                setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));`
        ],
    },
};

module.exports = {
    extend() {
        module.exports = {
            extend(answers) {
                if(answers["mantine-custom-layout"] !== "mantine-custom-layout") {
                    base._app.localImport.push(`import { Header } from "components/layout"`)
                    base._app.refineProps.push("Header={Header}")
                }
                return base;
            },
        };
        
        return base;
    },
};
