import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "../axios";

export const api = createApi({
  tagTypes: ["Movie"],
  baseQuery: axiosBaseQuery,
  endpoints: () => ({}),
});
