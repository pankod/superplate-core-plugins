"use client";

import { dataProvider, liveProvider } from "@refinedev/appwrite";
import { appwriteClient } from "@utils/appwrite/client";

export const appwriteDataProvider = dataProvider(appwriteClient, {
    databaseId: "database",
});

export const appwriteLiveProvider = liveProvider(appwriteClient, {
    databaseId: "database",
});
