"use client";

import dataProviderHasura, { GraphQLClient } from "@refinedev/hasura";

const API_URL = "https://flowing-mammal-24.hasura.app/v1/graphql";

export const client = new GraphQLClient(API_URL, {
    headers: {
        "x-hasura-role": "public",
    },
});

export const dataProvider = dataProviderHasura(client);
