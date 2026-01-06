import { createDataProvider } from "@refinedev/rest";
import { API_URL } from "./constants";

export const { dataProvider, kyInstance } = createDataProvider(API_URL, {}, {});
