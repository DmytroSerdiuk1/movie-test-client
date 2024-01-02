import { ComponentType, FC, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { ROUTES } from "../../enum/routes";
import React from "react";
import { useNavigate } from "react-router-dom";
import { getTokens } from "../../helpers/setTokens";
import { useCheckUserExistMutation } from "../../service/api/auth";
const AuthProvider: FC<{
  page: ComponentType;
  isAuthPage?: boolean;
  isProtected: boolean;
}> = ({ page, isProtected, isAuthPage }) => {
  const Page = page;
  const user = useSelector((state: RootState) => state.user.user);
  const navigate = useNavigate();
  const { accessToken, refreshToken } = getTokens();
  const [checkUserExist] = useCheckUserExistMutation();
  useEffect(() => {
    if (!user && accessToken && isProtected) {
      checkUserExist({});
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
