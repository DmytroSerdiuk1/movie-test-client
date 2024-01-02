import React, { FC } from "react";
import {
  Box,
  Button,
  Checkbox,
  CircularProgress,
  FormControlLabel,
  TextField,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { Controller, useForm } from "react-hook-form";

export interface AuthFormValues {
  name: string;
  password: string;
  rememberMe: boolean;
}

interface Props {
  buttonText?: string;
  isLoading?: boolean;
  onSubmit?: (data: AuthFormValues) => void;
}
const AuthForm: FC<Props> = ({ isLoading, buttonText, onSubmit }) => {
  const { t } = useTranslation("auth");
  const form = useForm({
    defaultValues: {
      name: "",
      password: "",
      rememberMe: true,
    },
  });

  return (
    <form
      autoComplete={"off"}
      onSubmit={form.handleSubmit((data) => {
        onSubmit?.(data);
      })}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          width: "300px",
          marginTop: "40px",
          marginBottom: "40px",
        }}
      >
        <Controller
          control={form.control}
          name={"name"}
          rules={{
            required: {
              value: true,
              message: t("name-required"),
            },
          }}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <TextField
              name={"name"}
              value={value}
              fullWidth
              error={!!error}
              helperText={error?.message}
              onChange={onChange}
              label={t("name")}
            />
          )}
        />
        <Controller
          control={form.control}
          name={"password"}
          rules={{
            required: {
              value: true,
              message: t("password-required"),
            },
          }}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <TextField
              name={"password"}
              type={"password"}
              fullWidth
              error={!!error}
              helperText={error?.message}
              value={value}
              onChange={onChange}
              label={t("password")}
            />
          )}
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Controller
            control={form.control}
            name={"rememberMe"}
            render={({ field: { onChange, value } }) => (
              <FormControlLabel
                control={
                  <Checkbox
                    checked={value}
                    onChange={(e) => onChange(e.target.checked)}
                    size={"small"}
                    defaultChecked
                  />
                }
                label={t("remember-me")}
              />
            )}
          />
        </Box>
        {buttonText && (
          <Button
            type={"submit"}
            size={"large"}
            variant={"contained"}
            {...(isLoading
              ? {
                  startIcon: <CircularProgress size={15} color={"inherit"} />,
                }
              : {})}
          >
            {buttonText}
          </Button>
        )}
      </Box>
    </form>
  );
};

export default AuthForm;
