import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles";
import { RemixBrowser } from "@remix-run/react";
import { startTransition, StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";
import { ClientStyleCacheProvider, ColorModeContextProvider } from "~/contexts";

const hydrate = () => {
    startTransition(() => {
        hydrateRoot(
            document,
            <StrictMode>
                <ClientStyleCacheProvider>
                    <ColorModeContextProvider>
                        <CssBaseline />
                        <GlobalStyles
                            styles={{ html: { WebkitFontSmoothing: "auto" } }}
                        />
                        <RemixBrowser />
                    </ColorModeContextProvider>
                </ClientStyleCacheProvider>
            </StrictMode>,
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
