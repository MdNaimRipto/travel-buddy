import React, { useState } from "react";
import User01 from "@/assets/users/user01.jpg";
import User02 from "@/assets/users/user02.jpg";
import User03 from "@/assets/users/user03.jpg";
import User04 from "@/assets/users/user04.jpg";
import { Avatar, Button, CircularProgress, Rating } from "@mui/material";
import RatingFillIcon from "@mui/icons-material/GradeRounded";
import RatingEmptyIcon from "@mui/icons-material/StarOutlineRounded";
import { colorConfig } from "@/configs/colorConfig";

const ReservationReviews = () => {
  const [loadedReviews, setLoadedReviews] = useState(6);
  const [isLoadedMore, setIsLoadedMore] = useState(false);

  const handleLoadMoreReviews = () => {
    try {
      setIsLoadedMore(true);
      setLoadedReviews(loadedReviews + 6);
    } finally {
      setIsLoadedMore(false);
    }
  };

  const reviews = [
    {
      user: "Alice Johnson",
      review:
        "Great experience! The service was excellent and the food was delicious. Great experience! The service was excellent and the food was delicious. Great experience! The service was excellent and the food was delicious.",
      rating: 5,
      userImg: User01.src,
    },
    {
      user: "Bob Smith",
      review: "Good value for money. The room was clean and comfortable.",
      rating: 4,
      userImg: User02.src,
    },
    {
      user: "Catherine Lee",
      review:
        "Average stay. The location was convenient, but the amenities were lacking.",
      rating: 4,
      userImg: User03.src,
    },
    {
      user: "David Brown",
      review:
        "Not satisfied with the service. The staff was unresponsive and the room was noisy.",
      rating: 2,
      userImg: User04.src,
    },
    {
      user: "Alice Johnson",
      review:
        "Great experience! The service was excellent and the food was delicious.",
      rating: 5,
      userImg: User01.src,
    },
    {
      user: "Bob Smith",
      review: "Good value for money. The room was clean and comfortable.",
      rating: 4,
      userImg: User02.src,
    },
    {
      user: "Catherine Lee",
      review:
        "Average stay. The location was convenient, but the amenities were lacking.",
      rating: 2,
      userImg: User03.src,
    },
    {
      user: "David Brown",
      review:
        "Not satisfied with the service. The staff was unresponsive and the room was noisy.",
      rating: 1,
      userImg: User04.src,
    },
    {
      user: "Alice Johnson",
      review:
        "Great experience! The service was excellent and the food was delicious. Great experience! The service was excellent and the food was delicious. Great experience! The service was excellent and the food was delicious.",
      rating: 5,
      userImg: User01.src,
    },
    {
      user: "Bob Smith",
      review: "Good value for money. The room was clean and comfortable.",
      rating: 4,
      userImg: User02.src,
    },
    {
      user: "Catherine Lee",
      review:
        "Average stay. The location was convenient, but the amenities were lacking.",
      rating: 4,
      userImg: User03.src,
    },
    {
      user: "David Brown",
      review:
        "Not satisfied with the service. The staff was unresponsive and the room was noisy.",
      rating: 2,
      userImg: User04.src,
    },
    {
      user: "Alice Johnson",
      review:
        "Great experience! The service was excellent and the food was delicious.",
      rating: 5,
      userImg: User01.src,
    },
    {
      user: "Bob Smith",
      review: "Good value for money. The room was clean and comfortable.",
      rating: 4,
      userImg: User02.src,
    },
    {
      user: "Catherine Lee",
      review:
        "Average stay. The location was convenient, but the amenities were lacking.",
      rating: 2,
      userImg: User03.src,
    },
    {
      user: "David Brown",
      review:
        "Not satisfied with the service. The staff was unresponsive and the room was noisy.",
      rating: 1,
      userImg: User04.src,
    },
    {
      user: "Alice Johnson",
      review:
        "Great experience! The service was excellent and the food was delicious. Great experience! The service was excellent and the food was delicious. Great experience! The service was excellent and the food was delicious.",
      rating: 5,
      userImg: User01.src,
    },
    {
      user: "Bob Smith",
      review: "Good value for money. The room was clean and comfortable.",
      rating: 4,
      userImg: User02.src,
    },
    {
      user: "Catherine Lee",
      review:
        "Average stay. The location was convenient, but the amenities were lacking.",
      rating: 4,
      userImg: User03.src,
    },
    {
      user: "David Brown",
      review:
        "Not satisfied with the service. The staff was unresponsive and the room was noisy.",
      rating: 2,
      userImg: User04.src,
    },
    {
      user: "Alice Johnson",
      review:
        "Great experience! The service was excellent and the food was delicious.",
      rating: 5,
      userImg: User01.src,
    },
    {
      user: "Bob Smith",
      review: "Good value for money. The room was clean and comfortable.",
      rating: 4,
      userImg: User02.src,
    },
    {
      user: "Catherine Lee",
      review:
        "Average stay. The location was convenient, but the amenities were lacking.",
      rating: 2,
      userImg: User03.src,
    },
    {
      user: "David Brown",
      review:
        "Not satisfied with the service. The staff was unresponsive and the room was noisy.",
      rating: 1,
      userImg: User04.src,
    },
  ];

  return (
    <div className="mt-12">
      {reviews.slice(0, loadedReviews).map((r, i) => (
        <div key={i} className="flex items-start gap-4 mb-5">
          <div className="flex flex-col items-center gap-2 mb-4">
            <Avatar src={r.userImg} sx={{ width: 48, height: 48 }} />
            <div className="ml-8">
              <span className="w-[1px] h-[18px] bg-gray block"></span>
              <span className="w-[36px] h-[1px] bg-gray block"></span>
            </div>
          </div>
          <div>
            <h4 className="text-xl font-inter text-black font-semibold mt-3 mb-5">
              {r.user}
            </h4>
            <p className="font-inter font-normal mb-3 leading-7 text-sm">
              {r.review}
            </p>
            <Rating
              value={r.rating}
              icon={<RatingFillIcon fontSize="medium" />}
              emptyIcon={<RatingEmptyIcon fontSize="medium" />}
              readOnly
            />
          </div>
        </div>
      ))}
      <div className="flex items-center justify-center">
        <Button
          variant="contained"
          sx={{
            background: `${colorConfig.secondary} !important`,
            color: colorConfig.white,
            "&:disabled": {
              background: `${colorConfig.lightGray} !important`,
              color: colorConfig.gray,
            },
          }}
          onClick={handleLoadMoreReviews}
          disabled={isLoadedMore || loadedReviews >= reviews.length}
        >
          Load More {isLoadedMore && <CircularProgress />}
        </Button>
      </div>
    </div>
  );
};

export default ReservationReviews;
