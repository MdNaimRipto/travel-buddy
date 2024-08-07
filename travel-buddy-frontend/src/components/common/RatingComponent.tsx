import { Rating } from "@mui/material";
import React from "react";
import RatingIcon from "@mui/icons-material/StarRounded";
import EmptyRatingIcon from "@mui/icons-material/StarBorderRounded";
import { colorConfig } from "@/configs/colorConfig";

const RatingComponent = ({
  value,
  readonly,
}: {
  readonly: boolean;
  value: number;
}) => {
  return (
    <Rating
      value={value}
      icon={
        <RatingIcon
          sx={{
            color: colorConfig.secondary,
            fontSize: {
              xs: 18,
              md: 22,
            },
          }}
        />
      }
      emptyIcon={
        <EmptyRatingIcon
          sx={{
            fontSize: {
              xs: 18,
              md: 22,
            },
          }}
        />
      }
      readOnly={readonly}
    />
  );
};

export default RatingComponent;
