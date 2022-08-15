import { json, LoaderFunction } from "@remix-run/node";
import axios from "axios";
import dataProvider from "@pankod/refine-simple-rest";
import { parseTableParams } from "@pankod/refine-core";
export { RemixRouteComponent as default } from "@pankod/refine-remix-router";
import { DataProvider } from "@pankod/refine-strapi";

import { requireUserId } from "~/session.server";

const axiosInstance = axios.create();

const API_URL = "https://api.fake-rest.refine.dev";
export const loader: LoaderFunction = async ({ params, request }) => {
    const {
        user: { token },
    } = await requireUserId(request);

    const { resource } = params;
    const url = new URL(request.url);

    const {
        parsedCurrent,
        parsedPageSize,
        parsedSorter,
        parsedFilters,
    } = parseTableParams(url.search);

    try {
        axiosInstance.defaults.headers.common = {
            Authorization: `Bearer ${token}`,
        };

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
