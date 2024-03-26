"use client";

import airtable from "@refinedev/airtable";

const API_TOKEN = "patI3quNRP17TNsjK.d59600d5955939ed02110fb1107036ff4482496004f020f5bf031f55789cd321";
const BASE_ID = "appKYl1H4k9g73sBT";

export const dataProvider = airtable(API_TOKEN, BASE_ID);
