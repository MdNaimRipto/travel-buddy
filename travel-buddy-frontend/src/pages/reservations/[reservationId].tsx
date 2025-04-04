import MainLayout from "@/layouts/MainLayout";
import React, { ReactElement, useState } from "react";
import ReservationTags from "@/components/reservations/reservationDetails/ReservationTags";
import MainFeatures from "@/components/reservations/reservationDetails/reservationFeatures/MainFeatures";
import AdditionalFeatures from "@/components/reservations/reservationDetails/reservationFeatures/AdditionalFeatures";
import VisitHotel from "@/components/reservations/reservationDetails/VisitHotel";
import BookReservation from "@/components/reservations/reservationDetails/bookReservation/BookReservation";
import Transition from "@/components/animation/Transition";
import RelatedReservations from "@/components/reservations/reservationDetails/relatedReservations/RelatedReservations";
import DetailsPageTopContent from "@/components/common/detailsPage/DetailsPageTopContent";
import DetailsPageBannerImages from "@/components/common/detailsPage/DetailsPageBannerImages";
import DetailsPageDescription from "@/components/common/detailsPage/DetailsPageDescription";
import DetailsPageImageViewer from "@/components/common/detailsPage/DetailsPageImageViewer";

import img1 from "@/assets/reservations/fakeReservationImage.jpg";
import img2 from "@/assets/reservations/fakeReservationImage2.jpg";
import img3 from "@/assets/reservations/fakeReservationImage3.jpg";
import img4 from "@/assets/reservations/fakeReservationImage4.jpg";
import img5 from "@/assets/reservations/fakeReservationImage5.jpg";
import DetailsPageAddReview from "@/components/common/detailsPage/DetailsPageAddReview";
import DetailsPageAllReviews from "@/components/common/detailsPage/DetailsPageAllReviews";

const ReservationDetails = () => {
  const [isViewerOpen, setIsImageViewerOpen] = useState(false);

  const images = [
    { img: img1.src, gridStyle: "col-span-3 row-span-2" },
    { img: img2.src, gridStyle: "col-span-2 row-span-1" },
    { img: img3.src, gridStyle: "col-span-1 row-span-1" },
    { img: img4.src, gridStyle: "col-span-1 row-span-1" },
  ];

  const viewerImages = [
    img1.src,
    img2.src,
    img3.src,
    img4.src,
    img5.src,
    img1.src,
    img2.src,
    img3.src,
    img4.src,
    img5.src,
  ];

  return (
    <Transition>
      <div className="container px-4 py-12">
        <DetailsPageTopContent
          title="Phi Phi Islands Adventure Day Trip with Seaview Lunch by V. Marine
            Tour"
          mainCrumbName="Reservations"
          mainCrumbPath="/reservations"
          path="/reservations/01"
          locationPath="/reservations?location=cox%27sBazar&area=inaniBeach%2B"
          locationName="Inani Beach, Cox's Bazar"
        />
        <div className="lg:grid grid-cols-4 gap-4">
          <div className="col-span-3">
            <div className="h-[170px] md:h-[380px] xl:h-[500px]">
              <DetailsPageBannerImages
                images={images}
                setIsImageViewerOpen={setIsImageViewerOpen}
              />
            </div>
            <ReservationTags />
            <div className="flex flex-col md:flex-row items-start gap-8">
              <MainFeatures />
              <AdditionalFeatures />
            </div>
            {/* <DetailsPageDescription name="Phi Phi Islands Adventure Day Trip" /> */}
          </div>
          <div className="col-span-1">
            <BookReservation />
            <div className="hidden lg:block">
              <RelatedReservations />
            </div>
          </div>
        </div>
        <div className="pt-12">
          <VisitHotel />
          <div className="pt-16">
            <h4 className="text-xl font-medium titleFont mb-4">
              Reviews & Rating
            </h4>
            <DetailsPageAddReview />
            <DetailsPageAllReviews />
          </div>
        </div>
        <DetailsPageImageViewer
          isViewerOpen={isViewerOpen}
          setIsImageViewerOpen={setIsImageViewerOpen}
          viewerImages={viewerImages}
          title="Reservation Images"
        />
      </div>
    </Transition>
  );
};

export default ReservationDetails;

ReservationDetails.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
