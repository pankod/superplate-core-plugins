import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import * as cookie from "cookie";
import { parseTableParams } from "@refinedev/core";
import { DataProvider } from "@refinedev/strapi";
import { checkAuthentication } from "@refinedev/remix-router";

import strapiAuthProvider from "~/authProvider";

import { API_URL, TOKEN_KEY } from "~/constants";

export { RemixRouteComponent as default } from "@refinedev/remix-router";

export const loader: LoaderFunction = async ({ params, request }) => {
    const { authProvider, axiosInstance } = strapiAuthProvider(API_URL);
    await checkAuthentication(authProvider, request);

    const { resource } = params;
    const url = new URL(request.url);

    const parsedCookie = cookie.parse(request.headers.get("Cookie") ?? "");
    const token = parsedCookie[TOKEN_KEY];

    if (token) {
        axiosInstance.defaults.headers.common = {
            Authorization: `Bearer ${token}`,
        };
    }

    const {
        parsedCurrent,
        parsedPageSize,
        parsedSorter,
        parsedFilters,
    } = parseTableParams(url.search);

    try {
        const data = await DataProvider(API_URL, axiosInstance).getList({
            resource: resource as string,
            filters: parsedFilters,
            pagination: {
                current: parsedCurrent || 1,
                pageSize: parsedPageSize || 10,
            },
            sort: parsedSorter,
        });

        return json({ initialData: data });
    } catch (error) {
        return json({});
    }
};
