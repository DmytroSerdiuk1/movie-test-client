import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { axiosInstance } from "../../service/axios";
import { UserData } from "../../types/UserData";

export const login = createAsyncThunk(
  "user/login",
  async ({
    name,
    password,
    isRemember,
  }: UserData & { isRemember: boolean }) => {
    return await axios
      .post(`${process.env.REACT_APP_API_URL}/sign-in`, { name, password })
      .then((res) => {
        return { ...res.data, isRemember };
      });
  },
);

export const register = createAsyncThunk(
  "user/register",
  async ({
    name,
    password,
    isRemember,
  }: UserData & { isRemember: boolean }) => {
    return await axios
      .post(`${process.env.REACT_APP_API_URL}/sign-up`, {
        name,
        password,
      })
      .then((res) => {
        return {
          ...res.data,
          isRemember,
        };
      });
  },
);
export const checkUserExist = createAsyncThunk(
  "user/checkUserExist",
  async () => {
    return await axiosInstance.post("/check-user-exist").then((res) => {
      return res.data;
    });
  },
);
