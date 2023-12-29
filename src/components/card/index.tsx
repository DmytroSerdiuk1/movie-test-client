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
        minHeight: "500px",
        height: "100%",

        [theme.breakpoints.down("sm")]: {
          minHeight: "300px",
        },
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
          [theme.breakpoints.down("sm")]: {
            p: 0.5,
          },
        }}
      >
        <Typography
          sx={{
            [theme.breakpoints.down("sm")]: {
              fontSize: "14px",
            },
          }}
          variant={"subtitle1"}
        >
          {name}
        </Typography>
        <Typography
          sx={{
            [theme.breakpoints.down("sm")]: {
              fontSize: "10px",
            },
          }}
          variant={"body2"}
        >
          {date}
        </Typography>
      </Box>
    </Box>
  );
};

export default Card;
