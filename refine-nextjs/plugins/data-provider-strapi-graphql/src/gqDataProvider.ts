import dataProvider, { GraphQLClient } from "@refinedev/strapi-graphql";

const API_URL = "https://api.strapi.refine.dev/graphql";
export const client = new GraphQLClient(API_URL);
export const gqlDataProvider = dataProvider(client);