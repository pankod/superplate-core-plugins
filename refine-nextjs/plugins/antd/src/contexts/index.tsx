import React, {
    PropsWithChildren,
    createContext,
    useEffect,
    useState,
} from "react";
import { RefineThemes } from "@refinedev/antd";
import { ConfigProvider, theme } from "antd";
import { parseCookies } from "nookies";

type ColorModeContextType = {
    mode: string;
    setMode: (mode: string) => void;
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

    useEffect(() => {
        if (isMounted) {
            setMode(parseCookies()["theme"]);
        }
    }, [isMounted]);

    const setColorMode = () => {
        if (mode === "light") {
            setMode("dark");
        } else {
            setMode("light");
        }
    };

    const { darkAlgorithm, defaultAlgorithm } = theme;

    return (
        <ColorModeContext.Provider
            value={{
                setMode: setColorMode,
                mode,
            }}
        >
            <ConfigProvider
                // you can change the theme colors here. example: ...RefineThemes.Magenta,
                theme={{
                    ...RefineThemes.<%= selectedTheme %>,
                    algorithm:
                        mode === "light" ? defaultAlgorithm : darkAlgorithm,
                }}
            >
                {children}
            </ConfigProvider>
        </ColorModeContext.Provider>
    );
};
