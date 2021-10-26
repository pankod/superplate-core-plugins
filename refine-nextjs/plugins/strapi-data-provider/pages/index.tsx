export { NextRouteComponent as default } from "@pankod/refine-nextjs-router";
import { checkAuthentication } from "@pankod/refine-nextjs-router";

import { GetServerSideProps } from "next";

import { API_URL } from "src/constants";
import strapiAuthProvider from "src/authProvider";

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { authProvider } = strapiAuthProvider(API_URL);
    const { isAuthenticated, ...props } = await checkAuthentication(
        authProvider,
        context,
    );

    if (!isAuthenticated) {
        return { props };
    }
    
    return {
        props: {},
    };
};
