import React, {
    PropsWithChildren,
    createContext,
    useEffect,
    useState,
} from "react";
import { useMediaQuery } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { DarkTheme, LightTheme } from "@refinedev/mui";
import { parseCookies, setCookie } from "nookies";

type ColorModeContextType = {
    mode: string;
    setMode: () => void;
};

export const ColorModeContext = createContext<ColorModeContextType>(
    {} as ColorModeContextType,
);

export const ColorModeContextProvider: React.FC<PropsWithChildren> = ({
    children,
}) => {
    const [isMounted, setIsMounted] = useState(false);
    const [mode, setMode] = useState("light");

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const systemTheme = useMediaQuery(`(prefers-color-scheme: dark)`);

    useEffect(() => {
        if (isMounted) {
            setMode(
                parseCookies()["theme"] || (systemTheme ? "dark" : "light"),
            );
        }
    }, [isMounted, systemTheme]);

    const toggleTheme = () => {
        const nextTheme = mode === "light" ? "dark" : "light";

        setMode(nextTheme);
        setCookie(null, "theme", nextTheme);
    };

    return (
        <ColorModeContext.Provider
            value={{
                setMode: toggleTheme,
                mode,
            }}
        >
            <ThemeProvider theme={mode === "light" ? LightTheme : DarkTheme}>
                {children}
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
};
