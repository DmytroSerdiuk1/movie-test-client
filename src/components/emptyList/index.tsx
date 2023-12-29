import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ROUTES } from "../../enum/routes";

const EmptyList = () => {
  const { t } = useTranslation("common");

  return (
    <Stack direction={"column"} gap={"40px"} alignItems={"center"}>
      <Typography variant={"h2"}>{t("empty-movies")}</Typography>
      <Link to={ROUTES.CREATE_MOVIE}>
        <Button variant={"contained"} size={"large"}>
          {t("add-movie")}
        </Button>
      </Link>
    </Stack>
  );
};

export default EmptyList;
