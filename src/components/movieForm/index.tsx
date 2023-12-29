import React, { FC, useEffect } from "react";
import Grid2 from "@mui/material/Unstable_Grid2";
import { Box, Button, Stack, TextField, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../enum/routes";
import ImageDropZone from "../imageDropZone";
import { Controller, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { MovieData } from "../../types/MovieData";

interface Props {
  onSubmit: (data: MovieData) => void;
  values?: MovieData;
}
const MovieForm: FC<Props> = ({ onSubmit, values }) => {
  const { t } = useTranslation("common");
  const form = useForm({
    defaultValues: {
      image: "",
      title: "",
      year: "",
    },
  });
  const theme = useTheme();
  const formValues = form.watch();
  const navigate = useNavigate();

  const isChanged = values
    ? JSON.stringify(formValues) !== JSON.stringify(values)
    : true;

  useEffect(() => {
    if (values) {
      form.reset(values);
    }
  }, [values]);

  return (
    <form onSubmit={form.handleSubmit((data) => onSubmit(data))}>
      <Grid2
        sx={{
          pt: "120px",

          [theme.breakpoints.down("lg")]: {
            pt: "40px",
            pb: "40px",
          },
        }}
        container
      >
        <Grid2 xs={12} lg={4} order={{ xs: 2, lg: 1 }}>
          <Controller
            render={({ field: { onChange, value } }) => (
              <ImageDropZone value={value} onDrop={onChange} />
            )}
            name={"image"}
            control={form.control}
          />
        </Grid2>
        <Grid2 xs={12} lg={3} lgOffset={1} order={{ xs: 1, lg: 2 }}>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: "24px",

              [theme.breakpoints.down("lg")]: {
                pb: 3,
              },
            }}
          >
            <Controller
              render={({ field: { onChange, value } }) => (
                <TextField
                  value={value}
                  onChange={onChange}
                  name={"title"}
                  fullWidth
                  label={t("title")}
                />
              )}
              name={"title"}
              control={form.control}
            />
            <Controller
              render={({ field: { onChange, value } }) => (
                <TextField
                  value={value}
                  onChange={onChange}
                  name={"publishing-year"}
                  fullWidth
                  label={t("publishing-year")}
                />
              )}
              name={"year"}
              control={form.control}
            />

            <Stack
              sx={{
                marginTop: "20px",
              }}
              direction={"row"}
              gap={"10px"}
            >
              <Button
                type={"button"}
                fullWidth
                onClick={() => navigate(ROUTES.HOME)}
                variant={"outlined"}
                size={"large"}
              >
                {t("cancel")}
              </Button>
              <Button
                type={"submit"}
                fullWidth
                variant={"contained"}
                size={"large"}
                disabled={!isChanged}
              >
                {values ? t("update") : t("submit")}
              </Button>
            </Stack>
          </Box>
        </Grid2>
      </Grid2>
    </form>
  );
};

export default MovieForm;
