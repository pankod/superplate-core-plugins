"use client";

import { DataProvider } from "@refinedev/strapi-v4";
import { axiosInstance } from "@utility/axios-instance";
import { API_URL } from "@utility/constants";

export const dataProvider = DataProvider(API_URL + `/api`, axiosInstance);
