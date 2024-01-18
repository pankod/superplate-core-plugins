import { Outlet } from "@remix-run/react";
import { Layout } from "~/components/layout";

export default function BaseLayout() {
    return (
        <Layout>
            <Outlet />
        </Layout>
    );
}
