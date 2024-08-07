import MainLayout from "@/layouts/MainLayout";
import React, { ReactElement, useState } from "react";
import ReservationImagesView from "@/components/reservations/reservationDetails/ReservationImagesView";
import ReservationBannerImages from "@/components/reservations/reservationDetails/ReservationBannerImages";
import ReservationDetailsTopContent from "@/components/reservations/reservationDetails/ReservationDetailsTopContent";
import ReservationTags from "@/components/reservations/reservationDetails/ReservationTags";
import MainFeatures from "@/components/reservations/reservationDetails/reservationFeatures/MainFeatures";
import AdditionalFeatures from "@/components/reservations/reservationDetails/reservationFeatures/AdditionalFeatures";
import ReservationDescription from "@/components/reservations/reservationDetails/ReservationDescription";

const ReservationDetails = () => {
  const [isViewerOpen, setIsImageViewerOpen] = useState(false);

  return (
    <div className="container px-4 py-12">
      <ReservationDetailsTopContent
        title="Phi Phi Islands Adventure Day Trip with Seaview Lunch by V. Marine
            Tour"
        path="/reservations/01"
        locationPath="/reservations?location=cox%27sBazar&area=inaniBeach%2B"
      />
      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-3">
          <ReservationBannerImages
            setIsImageViewerOpen={setIsImageViewerOpen}
          />
          <ReservationTags />
          <div className="flex items-start gap-8">
            <MainFeatures />
            <AdditionalFeatures />
          </div>
          <ReservationDescription />
        </div>
        <div className="bg-lightGray col-span-1">{/* Card For Booking */}</div>
      </div>
      <ReservationImagesView
        isViewerOpen={isViewerOpen}
        setIsImageViewerOpen={setIsImageViewerOpen}
      />
    </div>
  );
};

export default ReservationDetails;

ReservationDetails.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
