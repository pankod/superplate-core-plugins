import { createSimpleRestDataProvider } from "@refinedev/rest/simple-rest";
import { API_URL } from "./constants";
export const { dataProvider, kyInstance } = createSimpleRestDataProvider({
    apiURL: API_URL,
});
