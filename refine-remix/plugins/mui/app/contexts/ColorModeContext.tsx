import useMediaQuery from "@mui/material/useMediaQuery";
import { ThemeProvider } from "@mui/material/styles";
import { RefineThemes } from "@refinedev/mui";
import React from "react";

type ColorModeContextType = {
    mode: string;
    setMode: () => void;
};

export const ColorModeContext = React.createContext<ColorModeContextType>(
    {} as ColorModeContextType,
);

export const ColorModeContextProvider: React.FC<React.PropsWithChildren> = ({
    children,
}) => {
    const [mode, setMode] = React.useState("light");

    const systemTheme = useMediaQuery(`(prefers-color-scheme: dark)`);

    const toggleTheme = () => {
        const nextTheme = mode === "light" ? "dark" : "light";

        setMode(nextTheme);
    };

    return (
        <ColorModeContext.Provider
            value={{
                setMode: toggleTheme,
                mode,
            }}
        >
            <ThemeProvider
                // you can change the theme colors here. example: mode === "light" ? RefineThemes.Magenta : RefineThemes.MagentaDark
                theme={
                    mode === "light" ? RefineThemes.<%= selectedTheme %> : RefineThemes.<%= selectedTheme %>Dark
                }
            >
                {children}
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
};
