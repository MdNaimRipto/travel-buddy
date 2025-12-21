import Transition from "@/components/animation/Transition";
import DetailsPageTopContent from "@/components/common/detailsPage/DetailsPageTopContent";
import MainLayout from "@/layouts/MainLayout";
import React, { ReactElement, useState } from "react";
import DetailsPageBannerImages from "@/components/common/detailsPage/DetailsPageBannerImages";
import DetailsPageDescription from "@/components/common/detailsPage/DetailsPageDescription";
import DetailsPageImageViewer from "@/components/common/detailsPage/DetailsPageImageViewer";
import DetailsPageAddReview from "@/components/common/detailsPage/DetailsPageAddReview";
import DetailsPageAllReviews from "@/components/common/detailsPage/DetailsPageAllReviews";
import RelatedHotels from "@/components/hotels/hotelDetails/RelatedHotels";
import HotelLocationMap from "@/components/hotels/hotelDetails/map/index";
import HotelFeatures from "@/components/hotels/hotelDetails/HotelFeatures";
import HotelReservations from "@/components/hotels/hotelDetails/hotelReservations/HotelReservations";
import { useGetHotelDetailsQuery } from "@/redux/features/hotelApis/hotelApis";
import { useParams } from "next/navigation";
import Loader from "@/components/common/loader/Loader";
import { IBusinessProfile } from "@/types/hotelTypes";
import r1 from "@/assets/hotels/r1.webp";
import r2 from "@/assets/hotels/r2.webp";
import r3 from "@/assets/hotels/r3.webp";
import r4 from "@/assets/hotels/r4.webp";
import NotFoundMessage from "@/components/common/NotFoundMessage";
import { useGetReviewsQuery } from "@/redux/features/reviewApis";

const HotelDetails = () => {
  const [isViewerOpen, setIsImageViewerOpen] = useState(false);

  const { hotelId } = useParams();

  const { data, isLoading } = useGetHotelDetailsQuery({
    hotelId: String(hotelId),
  });

  const {
    data: reviewData,
    isLoading: reviewIsLoading,
    refetch: reviewRefetch,
  } = useGetReviewsQuery({ reviewForId: hotelId.toString() });

  if (isLoading) {
    return <Loader />;
  }

  const hotel = data?.data as IBusinessProfile;

  if (!hotel || hotel === null || hotel === undefined) {
    return <NotFoundMessage title="Hotel does not exists" />;
  }

  // const gridImageView = hotel?.hotelImages?.map((img, index) => ({
  //   img,
  //   gridStyle: index === 0 ? "col-span-3 row-span-2" : "col-span-1 row-span-1",
  // }));

  const gridImageView = [
    {
      img: hotel?.hotelImage,
      gridStyle: "col-span-3 row-span-2",
    },
    {
      img: r1.src,
      gridStyle: "col-span-1 row-span-1",
    },
    {
      img: r2.src,
      gridStyle: "col-span-1 row-span-1",
    },
    {
      img: r3.src,
      gridStyle: "col-span-1 row-span-1",
    },
    {
      img: r4.src,
      gridStyle: "col-span-1 row-span-1",
    },
  ];

  const viewerImages = [hotel?.hotelImage, r1.src, r2.src, r3.src, r4.src];

  return (
    <Transition>
      <div className="container px-4 py-12">
        <DetailsPageTopContent
          title={hotel?.hotelName}
          mainCrumbName="Hotels"
          mainCrumbPath="/hotels"
          path={`/hotels/${hotel?._id}`}
          locationPath={`/hotels?destination=${hotel?.hotelLocation?.destination}&area=${hotel?.hotelLocation?.area}`}
          locationName={`${hotel?.hotelLocation?.area}, ${hotel?.hotelLocation?.destination}`}
          wishlistType="HOTEL"
          hotelId={hotel?._id}
        />
        <div className="h-[200px] md:h-[380px] xl:h-[500px]">
          <DetailsPageBannerImages
            images={gridImageView}
            setIsImageViewerOpen={setIsImageViewerOpen}
          />
        </div>
        <HotelFeatures amenities={hotel?.amenities} />
        <DetailsPageDescription hotel={hotel} />
        <HotelReservations id={hotel?.hotelId} />
        <HotelLocationMap />
        <div className="grid grid-cols-1 lg:grid-cols-4 pt-16">
          <div className="lg:col-span-3 order-last lg:order-first mt-16 lg:mt-0">
            <h4 className="text-xl font-medium titleFont mb-4">
              Reviews & Rating
            </h4>
            <DetailsPageAddReview
              reviewFor="HOTEL"
              reviewForId={String(hotel._id)}
              refetch={reviewRefetch}
            />
            <DetailsPageAllReviews
              data={reviewData}
              isLoading={reviewIsLoading}
            />
          </div>
          <RelatedHotels location={hotel.hotelLocation.destination} />
        </div>

        {/* Viewer: */}
        <DetailsPageImageViewer
          isViewerOpen={isViewerOpen}
          setIsImageViewerOpen={setIsImageViewerOpen}
          viewerImages={viewerImages}
          title="Hotel Images"
        />
      </div>
    </Transition>
  );
};

export default HotelDetails;

HotelDetails.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
