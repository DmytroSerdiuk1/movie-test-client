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
  useTheme,
} from "@mui/material";
import React, { memo, useCallback, useState } from "react";
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
import { useGetMoviesQuery } from "../service/api/movies";
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
  const theme = useTheme();

  const handleChangeLanguage = useCallback((lng: string) => {
    localStorage.setItem("i18nextLng", lng);
    changeLanguage(lng);
  }, []);

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
              <Stack alignItems={"center"} direction={"row"}>
                <Typography
                  sx={{
                    [theme.breakpoints.down("sm")]: {
                      fontSize: "18px",
                    },
                  }}
                  variant={"h2"}
                >
                  {t("my-movies")}
                </Typography>
                <Box padding={"4px"}>
                  <Link to={ROUTES.CREATE_MOVIE}>
                    <IconButton>
                      <AddCircleOutlineIcon />
                    </IconButton>
                  </Link>
                </Box>
              </Stack>
              <Stack direction={"row"} spacing={2}>
                <Select
                  size={"small"}
                  value={language}
                  onChange={(e) => handleChangeLanguage(e.target.value)}
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
              data={data?.movies}
              pageCount={data?.totalPages}
              onPageChange={(page) => setPage(page)}
            />
          </>
        )}
      </Container>
    </Layout>
  );
};

export default memo(Home);
