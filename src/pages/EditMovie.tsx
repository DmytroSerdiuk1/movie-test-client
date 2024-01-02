import React, { memo } from "react";
import Layout from "../components/layout";
import { Container, Typography } from "@mui/material";
import MovieForm from "../components/movieForm";
import { useTranslation } from "react-i18next";
import {
  useGetMovieQuery,
  useUpdateMovieMutation,
} from "../service/api/movies";
import { useNavigate, useParams } from "react-router-dom";
import { ROUTES } from "../enum/routes";

const EditMovie = () => {
  const { t } = useTranslation("common");
  const { movieId } = useParams();
  const { data } = useGetMovieQuery(movieId || "");
  const [updateMovie, { isLoading }] = useUpdateMovieMutation();
  const navigate = useNavigate();

  return (
    <Layout>
      <Container>
        <Typography variant={"h2"}>{t("edit-movie")}</Typography>
        <MovieForm
          values={data ? data : undefined}
          isLoading={isLoading}
          onSubmit={({ title, year, image }) =>
            updateMovie({
              title,
              id: movieId,
              year,
              image,
            }).then(() => navigate(ROUTES.HOME))
          }
        />
      </Container>
    </Layout>
  );
};

export default memo(EditMovie);
