export { NextRouteComponent as default } from "@pankod/refine-nextjs-router";
// import { checkAuthentication } from "@pankod/refine-nextjs-router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { GetServerSideProps } from "next";

// import { authProvider } from "../../../src/authProvider";

export const getServerSideProps: GetServerSideProps = async (context) => {
    // const { isAuthenticated, ...props } = await checkAuthentication(
    //     authProvider,
    //     context,
    // );

    // if (!isAuthenticated) {
    //     return props;
    // }

    return {
        props: {
            ...(await serverSideTranslations(context.locale ?? "en", [
                "common",
            ])),
        },
    };
};
