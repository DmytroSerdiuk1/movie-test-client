import React, { memo } from "react";
import Layout from "../components/layout";
import { Container, Typography } from "@mui/material";
import MovieForm from "../components/movieForm";
import { useTranslation } from "react-i18next";
import { useAddMovieMutation } from "../service/api/movies";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../enum/routes";

const CreateMovie = () => {
  const { t } = useTranslation("common");
  const [addMovie, { isLoading }] = useAddMovieMutation();
  const navigate = useNavigate();

  return (
    <Layout>
      <Container>
        <Typography variant={"h2"}>{t("create-movie")}</Typography>
        <MovieForm
          isLoading={isLoading}
          onSubmit={({ title, year, image }) =>
            addMovie({
              title,
              year,
              image,
            }).then(() => navigate(ROUTES.HOME))
          }
        />
      </Container>
    </Layout>
  );
};

export default memo(CreateMovie);
