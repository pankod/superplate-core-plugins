import { Outlet } from "@remix-run/react";
import { Layout } from "~/components/layout";

export default function Layout() {
    return (
        <Layout>
            <Outlet />
        </Layout>
    );
}
