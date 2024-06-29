import axios, { AxiosInstance } from "axios";

// helpers
import { getBaseUrlByMode } from "@/helpers/get-mode";

export const instance: AxiosInstance = axios.create({
  baseURL: getBaseUrlByMode(import.meta.env.MODE),
  timeout: 500000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});
