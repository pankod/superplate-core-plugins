"use client";

import {
    Account,
    Appwrite,
    dataProvider as appwriteDataProvider,
    liveProvider as appwriteLiveProvider,
    Storage,
} from "@refinedev/appwrite";
import {
    APPWRITE_PROJECT,
    APPWRITE_TOKEN_KEY,
    APPWRITE_URL,
} from "@utility/constants";
import Cookies from "js-cookie";

const appwriteClient = new Appwrite();

appwriteClient.setEndpoint(APPWRITE_URL).setProject(APPWRITE_PROJECT);

// for client side authentication
const appwriteJWT = Cookies.get(APPWRITE_TOKEN_KEY);
if (appwriteJWT) {
    appwriteClient.setJWT(appwriteJWT);
}

const account = new Account(appwriteClient);
const storage = new Storage(appwriteClient);

export { appwriteClient, account, storage };

export const dataProvider = appwriteDataProvider(appwriteClient, {
    databaseId: "database",
});

export const liveProvider = appwriteLiveProvider(appwriteClient, {
    databaseId: "database",
});
