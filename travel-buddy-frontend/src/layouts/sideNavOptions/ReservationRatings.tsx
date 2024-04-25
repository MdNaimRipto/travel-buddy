import React, { useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Rating,
} from "@mui/material";
import { FaPlus as ExpandIcon } from "react-icons/fa6";
import { colorConfig } from "@/configs/colorConfig";
import { UseCommonImports } from "@/utils/UseCommonImports";
import EmptyRatingIcon from "@mui/icons-material/StarOutlineRounded";
import RatingIcon from "@mui/icons-material/StarRounded";

const ReservationRatings = () => {
  const { Router } = UseCommonImports();

  const { ratings } = Router.query;

  const allRatings = ratings?.toString().split("+");

  const allSelectedRatings =
    allRatings &&
    allRatings.length > 0 &&
    allRatings[allRatings.length - 1] === ""
      ? allRatings.slice(0, -1)
      : allRatings || [];

  console.log(allSelectedRatings);

  const handleCheckboxChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    selectedRating: string
  ) => {
    e.preventDefault();
    let updatedRatings;

    if (Array.isArray(ratings)) {
      updatedRatings = ratings.includes(selectedRating)
        ? ratings.filter(t => t !== selectedRating)
        : [...ratings, selectedRating];
    } else {
      const currentRatings = ratings || "";
      updatedRatings = currentRatings.includes(selectedRating)
        ? currentRatings.replace(`${selectedRating}+`, "")
        : `${currentRatings}${selectedRating}+`;
    }

    Router.push(
      {
        pathname: Router.pathname,
        query: { ...Router.query, ratings: updatedRatings },
      },
      undefined,
      { scroll: false }
    );
  };

  const [isOpen, setIsOpen] = useState(false);
  const options = [
    {
      icon: (
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
      icon: (
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
      icon: (
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
      icon: (
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
      icon: (
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
        <div className="flex items-center justify-between w-full">
          <h5 className="font-poppins text-base font-medium text-black">
            Reservation Ratings
          </h5>
          <ExpandIcon
            size={24}
            color={colorConfig.black}
            className={
              isOpen ? "rotate-45 duration-300" : "rotate-0 duration-300"
            }
          />
        </div>
      </AccordionSummary>
      <AccordionDetails>
        <FormGroup>
          {options.map((o, i) => (
            <FormControlLabel
              key={i}
              value={o.value}
              control={
                <Checkbox
                  onChange={e => handleCheckboxChange(e, o.value.toString())}
                  checked={
                    allSelectedRatings &&
                    allSelectedRatings.includes(o.value.toString())
                  }
                  sx={{
                    "&.Mui-checked": {
                      color: colorConfig.secondary,
                    },
                  }}
                />
              }
              label={o.icon}
              sx={{
                ml: "3px",
              }}
            />
          ))}
        </FormGroup>
      </AccordionDetails>
    </Accordion>
  );
};

export default ReservationRatings;
