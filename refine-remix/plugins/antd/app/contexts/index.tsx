import React from "react";
import { RefineThemes } from "@refinedev/antd";
import { ConfigProvider, theme } from "antd";

type ColorModeContextType = {
    mode: string;
    setMode: (mode: string) => void;
};

export const ColorModeContext = React.createContext<ColorModeContextType>(
    {} as ColorModeContextType,
);

export const ColorModeContextProvider: React.FC<React.PropsWithChildren> = ({
    children,
}) => {
    const [mode, setMode] = React.useState("light");

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
