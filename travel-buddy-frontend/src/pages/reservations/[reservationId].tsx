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
import DetailsPageImageViewer from "@/components/common/detailsPage/DetailsPageImageViewer";
import DetailsPageAddReview from "@/components/common/detailsPage/DetailsPageAddReview";
import DetailsPageAllReviews from "@/components/common/detailsPage/DetailsPageAllReviews";
import { useParams } from "next/navigation";
import { useGetReservationByIdQuery } from "@/redux/features/hotelApis/reservationApis";
import Loader from "@/components/common/loader/Loader";
import { IReservations } from "@/types/reservationTypes";
import rp01 from "@/assets/reservations/rp01.webp";
import rp02 from "@/assets/reservations/rp02.webp";
import rp03 from "@/assets/reservations/rp03.webp";
import rp04 from "@/assets/reservations/rp04.webp";
import DetailsPageDescription from "@/components/reservations/reservationDetails/DetailsPageDescription";
import { useGetReviewsQuery } from "@/redux/features/reviewApis";

const ReservationDetails = () => {
  const [isViewerOpen, setIsImageViewerOpen] = useState(false);

  const { reservationId } = useParams();

  const { data, isLoading } = useGetReservationByIdQuery({
    reservationId: String(reservationId),
  });

  const {
    data: reviewData,
    isLoading: reviewIsLoading,
    refetch: reviewRefetch,
  } = useGetReviewsQuery({ reviewForId: reservationId.toString() });

  if (isLoading) {
    return <Loader />;
  }

  const reservation = data?.data as IReservations;

  // const gridImageView = reservation?.images?.slice(0, 4)?.map((img, index) => ({
  //   img,
  //   gridStyle:
  //     index === 0
  //       ? "col-span-3 row-span-2"
  //       : index === 1
  //       ? "col-span-2 row-span-1"
  //       : "col-span-1 row-span-1",
  // }));

  const gridImageView = [
    {
      img: reservation.image,
      gridStyle: "col-span-3 row-span-2",
    },
    {
      img: rp01.src,
      gridStyle: "col-span-2 row-span-1",
    },
    {
      img: rp02.src,
      gridStyle: "col-span-1 row-span-1",
    },
    {
      img: rp03.src,
      gridStyle: "col-span-1 row-span-1",
    },
  ];

  const viewerImages = [
    reservation.image,
    rp01.src,
    rp02.src,
    rp03.src,
    rp04.src,
  ];

  return (
    <Transition>
      <div className="container px-4 py-12">
        <DetailsPageTopContent
          title={reservation.name}
          mainCrumbName="Reservations"
          mainCrumbPath="/reservations"
          path={`/reservations/${reservation._id}`}
          locationPath={`/reservations?location=${reservation.location.destination}`}
          locationName={
            reservation.location.area + ", " + reservation.location.destination
          }
          wishlistType="RESERVATION"
          reservationId={reservation?._id}
        />
        <div className="lg:grid grid-cols-4 gap-4">
          <div className="col-span-3">
            <div className="h-[170px] md:h-[380px] xl:h-[500px]">
              <DetailsPageBannerImages
                images={gridImageView}
                setIsImageViewerOpen={setIsImageViewerOpen}
              />
            </div>
            <ReservationTags
              rClass={reservation.reservationClass}
              type={reservation.reservationType}
            />
            <div className="flex flex-col md:flex-row items-start gap-8">
              <MainFeatures features={reservation.features} />
              <AdditionalFeatures features={reservation.additionalFacilities} />
            </div>
            <DetailsPageDescription reservation={reservation} />
          </div>
          <div className="col-span-1">
            <BookReservation reservation={reservation} />
            <div className="hidden lg:block">
              <RelatedReservations />
            </div>
          </div>
        </div>
        <div className="pt-12">
          <VisitHotel
            id={
              typeof reservation?.hotelId === "object" &&
              reservation?.hotelId?._id
                ? String(reservation.hotelId._id)
                : String(reservation?.hotelId)
            }
            name={
              typeof reservation?.hotelId === "object" &&
              reservation?.hotelId?.hotelName
                ? String(reservation.hotelId.hotelName)
                : String("")
            }
          />
          <div className="pt-16">
            <h4 className="text-xl font-medium titleFont mb-4">
              Reviews & Rating
            </h4>
            <DetailsPageAddReview
              reviewFor="RESERVATION"
              reviewForId={String(reservation._id)}
              refetch={reviewRefetch}
            />
            <DetailsPageAllReviews
              data={reviewData}
              isLoading={reviewIsLoading}
            />
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
