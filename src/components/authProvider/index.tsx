import { ComponentType, FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { checkUserExist } from "../../store/user/thunks";
import { ROUTES } from "../../enum/routes";
import React from "react";
import { useNavigate } from "react-router-dom";
import { getTokens } from "../../helpers/setTokens";
const AuthProvider: FC<{
  page: ComponentType;
  isAuthPage?: boolean;
  isProtected: boolean;
}> = ({ page, isProtected, isAuthPage }) => {
  const Page = page;
  const user = useSelector((state: RootState) => state.user.user);
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { accessToken, refreshToken } = getTokens();

  useEffect(() => {
    if (!user && accessToken && isProtected) {
      dispatch(checkUserExist());
    } else if (!accessToken && isProtected) {
      navigate(ROUTES.SIGN_IN);
    }
    if (accessToken && isAuthPage) {
      navigate(ROUTES.HOME);
    }
  }, [user, accessToken, refreshToken, navigate]);

  if (
    (!user && !accessToken && !refreshToken && isProtected) ||
    (isAuthPage && accessToken && refreshToken)
  ) {
    return null;
  }

  return (
    <>
      <Page />
    </>
  );
};

export default AuthProvider;
