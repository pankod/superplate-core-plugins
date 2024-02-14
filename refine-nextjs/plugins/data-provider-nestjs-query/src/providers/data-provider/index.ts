"use client";

import dataProviderNestjsQuery, {
    GraphQLClient,
    liveProvider as liveProviderNestjsQuery,
} from "@refinedev/nestjs-query";
import { createClient } from "graphql-ws";

const API_URL = "https://api.nestjs-query.refine.dev/graphql";
const WS_URL = "wss://api.nestjs-query.refine.dev/graphql";

const gqlClient = new GraphQLClient(API_URL);
const wsClient = createClient({ url: WS_URL });

export const dataProvider = dataProviderNestjsQuery(gqlClient);
export const liveProvider = liveProviderNestjsQuery(wsClient);
