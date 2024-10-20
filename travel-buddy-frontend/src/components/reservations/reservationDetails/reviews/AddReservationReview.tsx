import { colorConfig } from "@/configs/colorConfig";
import { Button, CircularProgress, Rating } from "@mui/material";
import React, { useState } from "react";

const AddReservationReview = () => {
  const [rating, setRating] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(false);

  const handleReviewSubmit = async (e: any) => {
    e.preventDefault();

    setIsLoading(true);

    const form = e.target;
    const review = form.review.value;
    if (rating <= 0) {
      //    toast.error("Please Add Rating!");
      setIsLoading(false);
    } else {
    }
  };

  return (
    <form onSubmit={handleReviewSubmit} className="w-full md:w-2/3">
      <textarea
        name="review"
        id="review"
        placeholder="Write a Review"
        className="p-2 w-full rounded border-b border-b-lightGray my-4 focus:outline-none"
        required
        maxLength={250}
      />
      <div className="flex items-center gap-4">
        <Rating
          name="simple-controlled"
          value={rating}
          onChange={(event, newValue) => {
            setRating(newValue as number);
          }}
        />
        <Button
          type="submit"
          //   disabled={
          //     (!user && title === "Add Review") ||
          //     (user?.uid === envConfig.admin_uid && title === "Add Review")
          //   }
          sx={{
            background: `linear-gradient(${colorConfig.secondary}, ${colorConfig.primary}) !important`,
            color: colorConfig.white,
            paddingX: 3,
            paddingY: "10px",
            "&:disabled": {
              color: colorConfig.gray,
              background: `${colorConfig.white} !important`,
            },
          }}
        >
          {isLoading ? (
            <CircularProgress
              sx={{ color: colorConfig.white, marginLeft: 1 }}
              size={24}
            />
          ) : (
            "Add Review"
          )}
        </Button>
      </div>
    </form>
  );
};

export default AddReservationReview;
