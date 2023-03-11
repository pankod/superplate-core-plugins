import { Layout } from "@refinedev/antd";
import { Outlet } from "@remix-run/react";

import { Header } from "@components/header";

export default function BaseLayout() {
    return (
        <Layout Header={Header}>
            <Outlet />
        </Layout>
    );
}
