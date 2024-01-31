"use client";

import graphqlDataProvider, { GraphQLClient } from "@refinedev/graphql";

const API_URL = "https://your-graphql-url/graphql";

export const client = new GraphQLClient(API_URL);

export const dataProvider = graphqlDataProvider(client);
