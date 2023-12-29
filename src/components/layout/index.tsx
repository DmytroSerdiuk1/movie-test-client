import { Box, useTheme } from "@mui/material";
import React, { FC, memo } from "react";
import vectors from "../../assets/svg/bottom-vectors.svg";
interface Props {
  children?: React.ReactNode;
}
const Layout: FC<Props> = ({ children }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        paddingTop: "120px",
        paddingBottom: "200px",
        backgroundImage: `url(${vectors})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom",
        backgroundColor: theme.palette.background.default,
      }}
    >
      {children}
    </Box>
  );
};

export default memo(Layout);
