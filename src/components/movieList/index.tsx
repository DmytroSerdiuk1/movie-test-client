import React, { FC } from "react";
import Grid2 from "@mui/material/Unstable_Grid2";
import Card from "../card";
import { Box, Pagination, PaginationItem } from "@mui/material";
import { Link } from "react-router-dom";
import { ROUTES } from "../../enum/routes";
import { MovieData } from "../../types/MovieData";
import { useTranslation } from "react-i18next";

interface Props {
  data?: MovieData[];
  pageCount?: number;
  onPageChange?: (page: number) => void;
}
const MovieList: FC<Props> = ({ data, pageCount = 0, onPageChange }) => {
  const { t } = useTranslation("common");
  return (
    <div>
      <Grid2 sx={{ marginTop: "40px" }} container spacing={2}>
        {data?.map((item) => (
          <Grid2 xs={6} md={4} lg={3} key={item.id}>
            <Link to={`${ROUTES.EDIT_MOVIE}/${item.id}`}>
              <Card date={item.year} image={item.image} name={item.title} />
            </Link>
          </Grid2>
        ))}
      </Grid2>
      {data?.length && pageCount > 1 && (
        <Box
          sx={{
            marginTop: "120px",
          }}
        >
          <Pagination
            count={pageCount}
            shape="rounded"
            onChange={(_, page) => {
              onPageChange?.(page);
            }}
            renderItem={(item) => (
              <PaginationItem
                slots={{
                  previous: () => <>{t("previous")}</>,
                  next: () => <>{t("next")}</>,
                }}
                {...item}
              />
            )}
          />
        </Box>
      )}
    </div>
  );
};

export default MovieList;
