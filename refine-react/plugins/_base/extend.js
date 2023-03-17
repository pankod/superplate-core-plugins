const base = {
    _app: {
        isAuthRoutes: false,
        isNoAuthRoutes: false,
        hasRoutes: true,
        isCustomLoginPage: false,
        authPageProps: [],
        loginPageProps: [],
        refineProps: [],
        localImport: [],
        refineImports: [`Authenticated`],
        refineAntdImports: [],
        refineChakraImports: [],
        refineMuiImports: [],
        refineMantineImports: [],
    },
};

module.exports = {
    extend(answers) {
        const uiFramework = answers["ui-framework"];
        const dataProvider = answers["data-provider"];
        const inferencer = answers["inferencer"];

        switch (uiFramework) {
            case "antd":
                base._app.refineAntdImports.push([`WelcomePage`, `AuthPage`, `ErrorComponent`]);
                break;
            case "mui":
                base._app.refineMuiImports.push([`WelcomePage`, `AuthPage`, `ErrorComponent`]);
                break;
            case "mantine":
                base._app.refineMantineImports.push([`WelcomePage`, `AuthPage`, `ErrorComponent`]);
                break;
            case "chakra":
                base._app.refineChakraImports.push([`WelcomePage`, `AuthPage`, `ErrorComponent`]);
                break;
            default:
                base._app.refineImports.push([`WelcomePage`, `AuthPage`, `ErrorComponent`]);
                break;
        }

        if (inferencer === "no" && answers["inferencer-headless"] === "no") {
            base._app.hasRoutes = false;
        }

        if (answers["auth-provider"] === "none") {
            if (["data-provider-appwrite",
                "data-provider-supabase",
                "auth-provider-auth0",
                "data-provider-strapi-v4"].includes(dataProvider)) {
                base._app.isAuthRoutes = true;
            } else {
                base._app.isNoAuthRoutes = true;
            }
        } else {
            base._app.isAuthRoutes = true;
        }

        if (
            answers["auth-provider"] === "auth-provider-auth0" ||
            answers["auth-provider"] === "auth-provider-google"
        ) {
            base._app.isCustomLoginPage = true;
        }



        // ## authPageProps
        let defaultValuePropsName = "initialValues";
        let defaultValues = `email: "demo@refine.dev", password: "demodemo"`;
        // change supabase login credentials
        if (dataProvider === "data-provider-supabase") {
            defaultValues = `email: "info@refine.dev", password: "refine-supabase"`;
        }

        // mui || chakra
        if (uiFramework === "mui" || uiFramework === "chakra") {
            defaultValuePropsName = "defaultValues";
        }

        base._app.authPageProps = [`formProps={{ ${defaultValuePropsName}:{ ${defaultValues} } }}`];

        // clear for headless
        if (uiFramework === "no") {
            base._app.authPageProps = [];
        }
        // ## authPageProps

        // ## resources & localImport
        if (base._app.isAuthRoutes || base._app.isNoAuthRoutes) {
            // ignore this data providers
            if (!["data-provider-graphql",
                "data-provider-hasura",
                "data-provider-medusa"].includes(dataProvider)) {

                base._app.localImport.push(`import { ProductList, ProductCreate, ProductEdit, ProductShow } from "pages/products";`);
                base._app.localImport.push(`import { CategoryList, CategoryCreate, CategoryEdit, CategoryShow } from "pages/categories";`);
            }
        }
        // ## resources
        return base;
    },
};
