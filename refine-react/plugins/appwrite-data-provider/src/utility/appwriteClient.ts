import { Appwrite } from "@pankod/refine-appwrite";

const APPWRITE_URL = "your-appwrite-url";
const APPWRITE_PROJECT = "your-appwrite-project";

const appwriteClient = new Appwrite();

appwriteClient.setEndpoint(APPWRITE_URL).setProject(APPWRITE_PROJECT);

export { appwriteClient };