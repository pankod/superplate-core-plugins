"use client";

import airtable from "@refinedev/airtable";

const API_TOKEN = "keyI18pnBeEMfPAIb";
const BASE_ID = "appKYl1H4k9g73sBT";

export const dataProvider = airtable(API_TOKEN, BASE_ID);
