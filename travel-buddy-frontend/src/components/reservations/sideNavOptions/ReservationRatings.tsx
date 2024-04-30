import React, { useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  FormGroup,
  Rating,
} from "@mui/material";
import { colorConfig } from "@/configs/colorConfig";
import EmptyRatingIcon from "@mui/icons-material/StarOutlineRounded";
import RatingIcon from "@mui/icons-material/StarRounded";
import SideNavTitle from "./SideNavTitle";
import SideNavCheckboxOptions from "./SideNavCheckboxOptions";

const ReservationRatings = () => {
  const [isOpen, setIsOpen] = useState(false);
  const options = [
    {
      label: (
        <Rating
          value={5}
          readOnly
          emptyIcon={<EmptyRatingIcon fontSize="small" />}
          icon={
            <RatingIcon
              fontSize="small"
              sx={{ color: colorConfig.secondary }}
            />
          }
        />
      ),
      value: 5,
    },
    {
      label: (
        <Rating
          value={4}
          readOnly
          emptyIcon={<EmptyRatingIcon fontSize="small" />}
          icon={
            <RatingIcon
              fontSize="small"
              sx={{ color: colorConfig.secondary }}
            />
          }
        />
      ),
      value: 4,
    },
    {
      label: (
        <Rating
          value={3}
          readOnly
          emptyIcon={<EmptyRatingIcon fontSize="small" />}
          icon={
            <RatingIcon
              fontSize="small"
              sx={{ color: colorConfig.secondary }}
            />
          }
        />
      ),
      value: 3,
    },
    {
      label: (
        <Rating
          value={2}
          readOnly
          emptyIcon={<EmptyRatingIcon fontSize="small" />}
          icon={
            <RatingIcon
              fontSize="small"
              sx={{ color: colorConfig.secondary }}
            />
          }
        />
      ),
      value: 2,
    },
    {
      label: (
        <Rating
          value={1}
          readOnly
          emptyIcon={<EmptyRatingIcon fontSize="small" />}
          icon={
            <RatingIcon
              fontSize="small"
              sx={{ color: colorConfig.secondary }}
            />
          }
        />
      ),
      value: 1,
    },
  ];
  return (
    <Accordion onChange={() => setIsOpen(!isOpen)}>
      <AccordionSummary>
        <SideNavTitle title="Reservation Ratings" isOpen={isOpen} />
      </AccordionSummary>
      <AccordionDetails>
        <FormGroup>
          {options.map((o, i) => (
            <SideNavCheckboxOptions key={i} option={o} queryParam="ratings" />
          ))}
        </FormGroup>
      </AccordionDetails>
    </Accordion>
  );
};

export default ReservationRatings;
