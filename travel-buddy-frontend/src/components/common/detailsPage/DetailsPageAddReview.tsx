import { colorConfig } from "@/configs/colorConfig";
import { useUserContext } from "@/context/AuthContext";
import { IReviews, reviewForEnumTypes } from "@/types/reviews.types";
import { IUser } from "@/types/userTypes";
import { Button, CircularProgress, Rating } from "@mui/material";
import React, { useState } from "react";
import { ErrorToast } from "../toasts/ErrorToast";
import { useAddReviewMutation } from "@/redux/features/reviewApis";
import { postApiHandler } from "../apiHandlers/postApiHandler";

const DetailsPageAddReview = ({
  reviewFor,
  reviewForId,
  refetch,
}: {
  reviewForId: string;
  reviewFor: reviewForEnumTypes;
  refetch: any;
}) => {
  const { user } = useUserContext();
  const typedUser = user as IUser;

  const [rating, setRating] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(false);
  const [addReview] = useAddReviewMutation();

  const handleReviewSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;

    const review = form.review.value;

    if (rating <= 0) {
      return ErrorToast("Please Add Rating First!");
    }

    const option: {
      data: IReviews;
    } = {
      data: {
        reviewFor,
        reviewForId,
        email: typedUser.email,
        userName: typedUser.userName,
        profileImage: typedUser.profileImage,
        rating: rating,
        review: review,
      },
    };

    await postApiHandler({
      mutateFn: addReview,
      options: option,
      setIsLoading,
      optionalTasksFn: () => {
        refetch(), form.reset(), setRating(0);
      },
    });
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
          disabled={!user || isLoading}
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
          {isLoading ? "Adding Review..." : "Add Review"}
        </Button>
      </div>
    </form>
  );
};

export default DetailsPageAddReview;
