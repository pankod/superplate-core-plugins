import { Account, Appwrite, Storage } from "@refinedev/appwrite";
import nookies from "nookies";

const APPWRITE_URL = "https://refine.appwrite.org/v1";
const APPWRITE_PROJECT = "61c4368b4e349";
export const APPWRITE_TOKEN_KEY = "appwrite-jwt";

const appwriteClient = new Appwrite();

appwriteClient.setEndpoint(APPWRITE_URL).setProject(APPWRITE_PROJECT);

// for client side authentication
const cookies = nookies.get();
const appwriteJWT = cookies[APPWRITE_TOKEN_KEY];
if (appwriteJWT) {
    appwriteClient.setJWT(appwriteJWT);
}

const account = new Account(appwriteClient);
const storage = new Storage(appwriteClient);

export { appwriteClient, account, storage };
