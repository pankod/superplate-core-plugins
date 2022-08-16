import dataProvider, { GraphQLClient } from "@pankod/refine-strapi-graphql";

import { API_URL } from "~/constants";
export const client = new GraphQLClient(API_URL);
export const gqlDataProvider = dataProvider(client);
