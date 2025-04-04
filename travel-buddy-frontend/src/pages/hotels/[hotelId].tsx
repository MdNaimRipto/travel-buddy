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
import { useGetHotelDetailsQuery } from "@/redux/features/hotelApis";
import { useParams } from "next/navigation";
import Loader from "@/components/common/loader/Loader";
import { IBusinessProfile } from "@/types/hotelTypes";

const HotelDetails = () => {
  const [isViewerOpen, setIsImageViewerOpen] = useState(false);

  const { hotelId } = useParams();

  const { data, isLoading } = useGetHotelDetailsQuery({
    hotelId: String(hotelId),
  });

  if (isLoading) {
    return <Loader />;
  }

  const hotel = data?.data as IBusinessProfile;

  const gridImageView = hotel?.hotelImages?.map((img, index) => ({
    img,
    gridStyle: index === 0 ? "col-span-3 row-span-2" : "col-span-1 row-span-1",
  }));

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
        />
        <div className="h-[200px] md:h-[380px] xl:h-[500px]">
          <DetailsPageBannerImages
            images={gridImageView}
            setIsImageViewerOpen={setIsImageViewerOpen}
          />
        </div>
        <HotelFeatures amenities={hotel?.amenities} />
        <DetailsPageDescription hotel={hotel} />
        <HotelReservations />
        <HotelLocationMap />
        <div className="grid grid-cols-1 lg:grid-cols-4 pt-16">
          <div className="lg:col-span-3 order-last lg:order-first mt-16 lg:mt-0">
            <h4 className="text-xl font-medium titleFont mb-4">
              Reviews & Rating
            </h4>
            <DetailsPageAddReview />
            <DetailsPageAllReviews />
          </div>
          <RelatedHotels />
        </div>

        {/* Viewer: */}
        <DetailsPageImageViewer
          isViewerOpen={isViewerOpen}
          setIsImageViewerOpen={setIsImageViewerOpen}
          viewerImages={hotel?.hotelImages}
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
