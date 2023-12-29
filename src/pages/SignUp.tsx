import React, { memo } from "react";
import Layout from "../components/layout";
import { Box, Link as MUILink, Typography } from "@mui/material";
import AuthForm from "../components/authForm";
import { ROUTES } from "../enum/routes";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store";
import { register } from "../store/user/thunks";

const SignUp = () => {
  const { t } = useTranslation("auth");
  const dispatch = useDispatch<AppDispatch>();
  return (
    <Layout>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <Typography variant={"h1"} fontWeight={"bold"}>
          {t("sign-up")}
        </Typography>
        <AuthForm
          onSubmit={(data) => {
            dispatch(
              register({
                name: data.name,
                password: data.password,
                isRemember: data.rememberMe,
              }),
            );
          }}
          buttonText={t("sign-up")}
        />
        <Link to={ROUTES.SIGN_IN}>
          <MUILink>
            <Typography>
              {t("already-have-account")}
              <br />
              {t("sign-in")}
            </Typography>
          </MUILink>
        </Link>
      </Box>
    </Layout>
  );
};

export default memo(SignUp);
