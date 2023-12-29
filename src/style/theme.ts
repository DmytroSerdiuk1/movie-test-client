import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#2BD17E",
    },
    error: {
      main: "#EB5757",
    },
    background: {
      default: "#093545",
      paper: "#092C39",
    },
  },
  typography: {
    fontFamily: "Montserrat",
    h1: {
      fontWeight: "semi-bold",
      fontSize: 64,
    },
    h2: {
      fontWeight: "semi-bold",
      fontSize: 48,
    },
    h3: {
      fontWeight: "semi-bold",
      fontSize: 32,
    },
    h4: {
      fontWeight: "bold",
      fontSize: 24,
    },
    h5: {
      fontWeight: "bold",
      fontSize: 20,
    },
    h6: {
      fontWeight: "bold",
      fontSize: 16,
    },
    body1: {
      fontSize: 14,
    },
    body2: {
      fontSize: 12,
    },
    subtitle1: {
      fontSize: 20,
    },
    subtitle2: {
      fontSize: 16,
    },
    caption: {
      fontSize: 14,
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        maxWidthXl: {
          maxWidth: "1440px !important",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          padding: "11px 16px",

          "&:-webkit-autofill": {
            "-webkit-box-shadow": "none",
          },
        },
        root: {
          borderRadius: 10,
          backgroundColor: "#224957 !important",
          transition: "margin-top 0.2s ease-in-out",
          border: "none",

          "&::before": {
            display: "none",
          },

          "&::after": {
            display: "none",
          },

          "&.Mui-error": {
            backgroundColor: "transparent !important",
            border: "1px solid #EB5757 !important",
          },

          "&.Mui-focused": {
            backgroundColor: "transparent !important",
            border: "1px solid #224957 !important",
            transition: "margin-top 0.2s ease-in-out",
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          "&:-webkit-autofill": {
            "-webkit-text-fill-color": "black !important",
          },
        },
        root: {
          fieldset: {
            border: "none",
          },
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          fontSize: 12,
          marginLeft: 0,
          marginTop: "3px",
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        shrink: {
          transform: "translate(0, -40px) scale(1) !important",
        },
        outlined: {
          color: "white",
          fontSize: 12,
          top: "50%",
          transform: "translate(14px,-50%) scale(1)",

          "&.Mui-focused": {
            color: "white",
          },

          "&.Mui-error": {
            transform: "translate(0, -53px) scale(1) !important",
          },

          "&.Mui-focused&.Mui-error": {
            transform: "translate(0, -53px) scale(1) !important",
          },
        },
      },
    },
    MuiPagination: {
      styleOverrides: {
        ul: {
          justifyContent: "center",
        },
      },
    },
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          fontWeight: "bold",

          "&.Mui-selected": {
            backgroundColor: "#2BD17E",
            color: "white",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: "white",
          textTransform: "none",
          fontWeight: "bold",
          padding: "5px 10px",
        },
        sizeLarge: {
          boxShadow: "none",
          textTransform: "none",
          fontWeight: "bold",
          padding: "15px 28px",
          fontSize: 16,
          color: "white",
          borderRadius: 10,

          "&:hover": {
            boxShadow: "none",
          },
        },
      },
    },
  },
});
export default theme;
