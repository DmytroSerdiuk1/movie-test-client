import React, { memo } from "react";
import Layout from "../components/layout";
import { Box, Link as MUILink, Typography } from "@mui/material";
import AuthForm from "../components/authForm";
import { ROUTES } from "../enum/routes";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useLoginMutation } from "../service/api/auth";

const SignIn = () => {
  const { t } = useTranslation("auth");
  const [login, { isLoading }] = useLoginMutation();

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
          {t("sign-in")}
        </Typography>
        <AuthForm
          isLoading={isLoading}
          onSubmit={(data) => {
            login({
              name: data.name,
              password: data.password,
              isRemember: data.rememberMe,
            });
          }}
          buttonText={t("login")}
        />
        <Link to={ROUTES.SIGN_UP}>
          <MUILink>
            <Typography>
              {t("dont-have-account")}
              <br /> {t("sign-up")}
            </Typography>
          </MUILink>
        </Link>
      </Box>
    </Layout>
  );
};

export default memo(SignIn);
