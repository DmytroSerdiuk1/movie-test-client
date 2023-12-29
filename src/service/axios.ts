import { BaseQueryFn } from "@reduxjs/toolkit/query";
import axios, { AxiosError, AxiosRequestConfig } from "axios";
import { clearTokens, getTokens, setAccessToken } from "../helpers/setTokens";

export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

axiosInstance.interceptors.request.use((config) => {
  config.headers.set("Authentication", `Bearer ${getTokens().accessToken}`);
  return config;
});
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 403 && !originalRequest._retry) {
      originalRequest._retry = true;
      await axios
        .post(`${process.env.REACT_APP_API_URL}/refresh`, {
          refreshToken: getTokens().refreshToken,
        })
        .then(({ data }) => {
          axios.defaults.headers.common["Authorization"] =
            `Bearer ${data.accessToken} `;
          setAccessToken(data.accessToken);
        })
        .catch(() => {
          clearTokens();
        });

      return axiosInstance(originalRequest);
    }
    return Promise.reject(error);
  },
);

export const axiosBaseQuery =
  (
    { baseUrl }: { baseUrl?: string } = { baseUrl: "" },
  ): BaseQueryFn<
    {
      url: string;
      method: AxiosRequestConfig["method"];
      data?: AxiosRequestConfig["data"];
      params?: AxiosRequestConfig["params"];
      headers?: AxiosRequestConfig["headers"];
    },
    unknown,
    unknown
  > =>
  async ({ url, method, data, params, headers }) => {
    console.log(baseUrl);
    try {
      const result = await axiosInstance(url, {
        method,
        data,
        params,
        headers,
      });
      return { data: result.data };
    } catch (axiosError) {
      const err = axiosError as AxiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };
