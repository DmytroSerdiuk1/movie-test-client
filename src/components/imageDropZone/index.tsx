import React, { FC } from "react";
import VerticalAlignBottomIcon from "@mui/icons-material/VerticalAlignBottom";
import { Box, Typography } from "@mui/material";
import { useDropzone } from "react-dropzone";
import getBase64File from "../../helpers/getBase64file";
import { useTranslation } from "react-i18next";

interface Props {
  onDrop: (fileBase64: string) => void;
  value: string;
}

const ImageDropZone: FC<Props> = ({ onDrop, value }) => {
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: async (acceptedFiles) => {
      const base64 = await getBase64File(acceptedFiles[0]);
      onDrop(base64 as string);
    },
    accept: {
      "image/*": [".jpeg", ".jpg", ".png"],
    },
    multiple: false,
    maxFiles: 1,
  });
  const { t } = useTranslation("common");

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "450px",
        background: "#224957",
        borderRadius: 10,
        border: "2px dashed #fff",
        overflow: "hidden",
      }}
      {...getRootProps()}
    >
      <input {...getInputProps()} />
      {value && (
        <img
          style={{
            position: "absolute",
            zIndex: 1,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
          src={value}
          alt=""
        />
      )}
      <Box
        sx={{
          width: "100%",
          height: "100%",
          zIndex: 2,
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          transition: "background 0.3s ease",

          "&:hover": {
            background: "rgba(0, 0, 0, 0.2)",
          },
        }}
      >
        <VerticalAlignBottomIcon />
        <Typography variant={"body2"}>{t("drop-image")}</Typography>
      </Box>
    </Box>
  );
};

export default ImageDropZone;
