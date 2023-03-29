const base = {
    _app: {
        refineProps: ["notificationProvider={notificationProvider}"],
        import: [
            `import { MantineProvider, Global, ColorScheme, ColorSchemeProvider} from "@mantine/core";`,
            `import { NotificationsProvider } from "@mantine/notifications";`,
            `import { useLocalStorage } from "@mantine/hooks";`,
        ],
        refineMantineImports: [
            "notificationProvider",
            "ThemedLayout",
            "RefineThemes",
        ],
        wrapper: [
            [
                "<ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>",
                "</ColorSchemeProvider>",
            ],
            [
                "{/* You can change the theme colors here. example: theme={{ ...RefineThemes.Magenta, colorScheme:colorScheme }} */}",
                "",
            ],
            [
                `<MantineProvider theme={{ ...RefineThemes.Blue, colorScheme:colorScheme }} withNormalizeCSS withGlobalStyles>`,
                "</MantineProvider>",
            ],
            [`<Global styles={{ body: { WebkitFontSmoothing: "auto" } }} />`],
            [
                `<NotificationsProvider position="top-right">`,
                "</NotificationsProvider>",
            ],
        ],
        innerHooks: [
            `const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
                key: "mantine-color-scheme",
                defaultValue: "light",
                getInitialValueInEffect: true,
            });`,
        ],
        inner: [
            `const toggleColorScheme = (value?: ColorScheme) =>
                setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));`,
        ],
        localImport: [`import { Header } from "@components/header"`],
    },
};

module.exports = {
    extend() {
        return base;
    },
};
