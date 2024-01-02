import { createSlice } from "@reduxjs/toolkit";
import { ROUTES } from "../../enum/routes";
import { clearTokens } from "../../helpers/setTokens";
import { router } from "../../routes/router";

const initialState = {
  user: null,
};

const usersSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      clearTokens();
      state.user = initialState.user;
      router.navigate(ROUTES.SIGN_IN);
    },
  },
});

export const { logout, setUser } = usersSlice.actions;
export default usersSlice.reducer;
