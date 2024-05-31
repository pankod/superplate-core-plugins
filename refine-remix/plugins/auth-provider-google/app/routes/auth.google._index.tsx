import type { LoaderFunctionArgs, ActionArgs } from "@remix-run/node";
import { authenticator } from "~/utils/auth.server";

export const action = async ({ request }: ActionArgs) => {
    await authenticator.authenticate("google", request, {
        failureRedirect: "/login",
    });
};

export const loader = async ({ request }: LoaderFunctionArgs) => {
    await authenticator.authenticate("google", request, {
        failureRedirect: "/login",
    });
};
