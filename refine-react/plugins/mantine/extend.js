const base = {
    _app: {
        refineProps: ["notificationProvider={notificationProvider}"],
        import: [
            `import { MantineProvider, Global, ColorSchemeProvider, ColorScheme } from "@mantine/core";`,
            `import { NotificationsProvider } from "@mantine/notifications";`,
            `import { useLocalStorage } from "@mantine/hooks";`
        ],
        refineMantineImports: [
            "notificationProvider",
            "LightTheme",
            "DarkTheme",
            "Layout",
            "ErrorComponent",
        ],
        wrapper: [
            [`<BrowserRouter>`, `</BrowserRouter>`],
            ["<ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>", "</ColorSchemeProvider>"],
            [`<MantineProvider theme={colorScheme === "dark" ? DarkTheme : LightTheme} withNormalizeCSS withGlobalStyles>`, "</MantineProvider>"],
            [`<Global styles={{ body: { WebkitFontSmoothing: "auto" } }} />`, ``],
            [`<NotificationsProvider position="top-right">`, `</NotificationsProvider>`],
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
        localImport: [
            `import { Header } from "./components/header";`
        ]
    },
};

module.exports = {
    extend(answers) {
        if (answers["inferencer"] === "no") {
            base._app.refineMantineImports.push("WelcomePage");
            base._app.refineComponents.push(`<WelcomePage />`);
        }

        return base;
    },
};