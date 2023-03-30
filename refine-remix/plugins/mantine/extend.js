const base = {
    _app: {
        refineProps: ["notificationProvider={notificationProvider}"],
        import: [
            `import { MantineProvider, Global, ColorScheme } from "@mantine/core";`,
            `import { NotificationsProvider } from "@mantine/notifications";`,
            `import { useLocalStorage } from "@mantine/hooks";`,
            `import { ColorSchemeProvider } from "@mantine/styles";`,
        ],
        refineMantineImports: ["notificationProvider", "RefineThemes"],
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
        localImport: [],
    },
};

module.exports = {
    extend(answers) {
        const selectedTheme = answers["theme"] ? answers["theme"] : "Blue";

        return {
            ...base,
            _app: {
                ...base._app,
                wrapper: [
                    [
                        "<ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>",
                        "</ColorSchemeProvider>",
                    ],
                    [
                        // You can change the theme colors here. example: theme={{ ...RefineThemes.Magenta, colorScheme:colorScheme }}
                        `<MantineProvider theme={{ ...RefineThemes.${selectedTheme}, colorScheme:colorScheme }} withNormalizeCSS withGlobalStyles>`,
                        "</MantineProvider>",
                    ],
                    [
                        `<Global styles={{ body: { WebkitFontSmoothing: "auto" } }} />`,
                    ],
                    [
                        `<NotificationsProvider position="top-right">`,
                        "</NotificationsProvider>",
                    ],
                ],
            },
        };
    },
};
