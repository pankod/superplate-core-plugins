import { RefineTheme, ThemeOptions as RefineThemeOptions } from "@refinedev/mui";

export interface CustomTheme {
    // Add custom variables here like below:
    // status: {
    //   danger: string;
    // };
}

declare module "@refinedev/mui" {
    interface Theme extends RefineTheme, CustomTheme {}
    interface ThemeOptions extends RefineThemeOptions, CustomTheme {}
}
