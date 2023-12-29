import { Box, useTheme } from "@mui/material";
import React, { FC, memo } from "react";
// import vectors from "../../assets/svg/bottom-vectors.svg";
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
        paddingBottom: "110px",
        background: theme.palette.background.default,
      }}
    >
      {children}
      {/*<Box*/}
      {/*  sx={{*/}
      {/*    position: "absolute",*/}
      {/*    bottom: "0",*/}
      {/*    left: "50%",*/}
      {/*    transform: "translateX(-50%)",*/}
      {/*  }}*/}
      {/*>*/}
      {/*  <img src={vectors as string} alt="bottom-vectors" />*/}
      {/*</Box>*/}
    </Box>
  );
};

export default memo(Layout);
