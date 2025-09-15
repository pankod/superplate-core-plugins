const base = {
    _app: {
        localImport: [
            // Auth pages
            `import { Login } from "./pages/login";`,
            `import { Register } from "./pages/register";`,
            `import { ForgotPassword } from "./pages/forgot-password";`,
            // Layout components
            `import { ErrorComponent } from "./components/refine-ui/layout/error-component";`,
            `import { Layout } from "./components/refine-ui/layout/layout";`,
            `import { Header } from "./components/refine-ui/layout/header";`,
            // Notification system
            `import { useNotificationProvider } from "./components/refine-ui/notification/use-notification-provider";`,
            `import { Toaster } from "./components/refine-ui/notification/toaster";`,
            // Theme system
            `import { ThemeProvider } from "./components/refine-ui/theme/theme-provider";`,
            `import './App.css'`,
        ],
        refineProps: ["notificationProvider={useNotificationProvider()}"],
        wrapper: [[`<ThemeProvider>`, `</ThemeProvider>`]],
        isCustomLoginPage: true,
    },
};

module.exports = {
    extend() {
        return base;
    },
};
