import { Outlet } from "@remix-run/react";
import { LoaderArgs, redirect } from "@remix-run/node";
import { authenticator } from "~/utils/auth.server";

export default function AuthLayout() {
    // no layout is applied for the auth routes
    return <Outlet />;
}

export const loader = async ({ request }: LoaderArgs) => {
    const session = await authenticator.isAuthenticated(request);

    if (session) {
        return redirect(`/`);
    }

    return {};
};
