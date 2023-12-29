import {
  Box,
  Button,
  CircularProgress,
  Container,
  IconButton,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import React, { memo, useState } from "react";
import Layout from "../components/layout";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import LoginIcon from "@mui/icons-material/Login";
import { ROUTES } from "../enum/routes";
import MovieList from "../components/movieList";
import { Link } from "react-router-dom";
import EmptyList from "../components/emptyList";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store";
import { logout } from "../store/user/slice";
import { useGetMoviesQuery } from "../service/rtkQuery/movies";
import { useTranslation } from "react-i18next";

const Home = () => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch<AppDispatch>();
  const {
    t,
    i18n: { language, changeLanguage },
  } = useTranslation(["common", "auth"]);
  const { data, isLoading } = useGetMoviesQuery({
    page,
  });

  return (
    <Layout>
      <Container maxWidth={"xl"}>
        {isLoading ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CircularProgress size={100} />
          </Box>
        ) : !data?.movies?.length ? (
          <EmptyList />
        ) : (
          <>
            <Stack
              alignItems={"center"}
              direction={"row"}
              justifyContent={"space-between"}
            >
              <Stack alignItems={"flex-end"} direction={"row"}>
                <Typography variant={"h2"}>{t("my-movies")}</Typography>
                <Box padding={"4px"}>
                  <Link to={ROUTES.CREATE_MOVIE}>
                    <IconButton>
                      <AddCircleOutlineIcon />
                    </IconButton>
                  </Link>
                </Box>
              </Stack>
              <Stack direction={"row"} gap={5}>
                <Select
                  value={language}
                  onChange={(e) => changeLanguage(e.target.value)}
                >
                  <MenuItem value={"en"}>English</MenuItem>
                  <MenuItem value={"ua"}>Ukrainian</MenuItem>
                  <MenuItem value={"de"}>German</MenuItem>
                </Select>
                <Button
                  onClick={() => dispatch(logout())}
                  size={"small"}
                  endIcon={<LoginIcon />}
                >
                  {t("auth:logout")}
                </Button>
              </Stack>
            </Stack>
            <MovieList
              data={data.movies}
              pageCount={data.totalPages}
              onPageChange={(page) => setPage(page)}
            />
          </>
        )}
      </Container>
    </Layout>
  );
};

export default memo(Home);
