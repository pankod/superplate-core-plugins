import { Account, Appwrite, Storage } from "@pankod/refine-appwrite";

const APPWRITE_URL = "your-appwrite-url";
const APPWRITE_PROJECT = "your-appwrite-project";
const TOKEN_KEY = "token";

const appwriteClient = new Appwrite();

appwriteClient.setEndpoint(APPWRITE_URL).setProject(APPWRITE_PROJECT);
const account = new Account(appwriteClient);
const storage = new Storage(appwriteClient);

export { appwriteClient, account, storage, TOKEN_KEY };
