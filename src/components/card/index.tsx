import React, { FC } from "react";
import { Box, Typography, useTheme } from "@mui/material";

interface Props {
  name: string;
  date: string;
  image: string;
}
const Card: FC<Props> = ({ name, date, image }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        p: 1,
        backgroundColor: theme.palette.background.paper,
        borderRadius: "12px",
        height: "500px",
      }}
    >
      <img
        style={{
          objectFit: "cover",
          width: "100%",
          height: "85%",
          borderRadius: 12,
        }}
        src={image}
        alt={name}
      />
      <Box
        sx={{
          p: 1,
        }}
      >
        <Typography variant={"subtitle1"}>{name}</Typography>
        <Typography variant={"body2"}>{date}</Typography>
      </Box>
    </Box>
  );
};

export default Card;
