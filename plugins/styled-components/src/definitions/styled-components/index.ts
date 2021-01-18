export * from "./common";
export * from "./dark";
export * from "./light";

import { useState } from "react";
import { dark } from "./dark";
import { light } from "./light";

export const useDarkMode = () => {
    const [theme, setTheme] = useState("light");
    const toggleTheme = () => {
        setTheme((theme) => (theme === "light" ? "dark" : "light"));
    };
    return theme === "light" ? light : dark;
};
