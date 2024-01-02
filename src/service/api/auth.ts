import { api } from "./api";
import { setTokens } from "../../helpers/setTokens";
import { setUser } from "../../store/user/slice";

export const authApi = api.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation({
      query: ({ name, password }) => ({
        url: "/sign-in",
        method: "POST",
        data: {
          name,
          password,
        },
      }),
      onQueryStarted: async (args, { dispatch, queryFulfilled }) => {
        const { data } = await queryFulfilled;
        if (data) {
          setTokens(data.accessToken, data.refreshToken, args.isRemember);
          dispatch(setUser(data.user));
          dispatch(authApi.util.resetApiState());
        }
      },
    }),
    register: build.mutation({
      query: ({ name, password }) => ({
        url: "/sign-up",
        method: "POST",
        data: {
          name,
          password,
        },
      }),
      onQueryStarted: async (args, { dispatch, queryFulfilled }) => {
        const { data } = await queryFulfilled;
        if (data) {
          setTokens(data.accessToken, data.refreshToken, args.isRemember);
          dispatch(setUser(data.user));
          dispatch(authApi.util.resetApiState());
        }
      },
    }),
    checkUserExist: build.mutation({
      query: () => ({
        url: "/check-user-exist",
        method: "POST",
      }),
    }),
  }),
});

export const {
  useCheckUserExistMutation,
  useLoginMutation,
  useRegisterMutation,
} = authApi;
