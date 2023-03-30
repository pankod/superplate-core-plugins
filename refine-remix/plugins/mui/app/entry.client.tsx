import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { RemixBrowser } from "@remix-run/react";
import { CssBaseline, GlobalStyles } from "@mui/material";
import { ClientStyleCacheProvider, ColorModeContextProvider } from "~/contexts";

const hydrate = () => {
    React.startTransition(() => {
        ReactDOM.hydrateRoot(
            document,
            <ClientStyleCacheProvider>
                <ColorModeContextProvider>
                    <CssBaseline />
                    <GlobalStyles
                        styles={{ html: { WebkitFontSmoothing: "auto" } }}
                    />
                    <RemixBrowser />
                </ColorModeContextProvider>
            </ClientStyleCacheProvider>,
        );
    });
};

if (window.requestIdleCallback) {
    window.requestIdleCallback(hydrate);
} else {
    // Safari doesn't support requestIdleCallback
    // https://caniuse.com/requestidlecallback
    window.setTimeout(hydrate, 1);
}
