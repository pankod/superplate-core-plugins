'use client'

import React, {
    PropsWithChildren,
    createContext,
    useEffect,
    useState,
} from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { ThemeProvider } from "@mui/material/styles";
import { RefineThemes } from "@refinedev/mui";
import Cookies from 'js-cookie'
import GlobalStyles from "@mui/material/GlobalStyles";
import CssBaseline from "@mui/material/CssBaseline";

type ColorModeContextType = {
    mode: string;
    setMode: () => void;
};

export const ColorModeContext = createContext<ColorModeContextType>(
    {} as ColorModeContextType,
);

type ColorModeContextProviderProps = {
    defaultMode?: string;
};

export const ColorModeContextProvider: React.FC<
    PropsWithChildren<ColorModeContextProviderProps>
> = ({ children, defaultMode }) => {
    const [isMounted, setIsMounted] = useState(false);
    const [mode, setMode] = useState(defaultMode || "light");

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const systemTheme = useMediaQuery(`(prefers-color-scheme: dark)`);

    useEffect(() => {
        if (isMounted) {
            const theme = Cookies.get('theme') || (systemTheme ? "dark" : "light")
            setMode(theme)
        }
    }, [isMounted, systemTheme]);

    const toggleTheme = () => {
        const nextTheme = mode === "light" ? "dark" : "light";

        setMode(nextTheme);
        Cookies.set('theme', nextTheme)
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
                <CssBaseline />
                <GlobalStyles styles={{ html: { WebkitFontSmoothing: "auto" } }} />
                {children}
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
};
