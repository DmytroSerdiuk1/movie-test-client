import { createSlice } from "@reduxjs/toolkit";
import { checkUserExist, login, register } from "./thunks";
import { clearTokens, setTokens } from "../../helpers/setTokens";

const initialState = {
  user: null,
};

const usersSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      clearTokens();
      state.user = initialState.user;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.user = action.payload.user;
      setTokens(
        action.payload.accessToken,
        action.payload.refreshToken,
        !!action.payload.isRemember,
      );
    });
    builder.addCase(register.fulfilled, (state, action) => {
      state.user = action.payload.user;
      setTokens(
        action.payload.accessToken,
        action.payload.refreshToken,
        !!action.payload.isRemember,
      );
    });

    builder.addCase(checkUserExist.fulfilled, (state, action) => {
      state.user = action.payload.user;
    });
  },
});

export const { logout } = usersSlice.actions;
export default usersSlice.reducer;
