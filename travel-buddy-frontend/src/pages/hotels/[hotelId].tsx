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

import img1 from "@/assets/hotels/hotel1.jpg";
import img2 from "@/assets/hotels/hotel2.jpg";
import img3 from "@/assets/hotels/hotel3.jpg";
import img4 from "@/assets/hotels/hotel4.jpg";
import img5 from "@/assets/hotels/hotel5.jpg";
import HotelLocationMap from "@/components/hotels/hotelDetails/map/index";
import HotelFeatures from "@/components/hotels/hotelDetails/HotelFeatures";
import HotelReservations from "@/components/hotels/hotelDetails/hotelReservations/HotelReservations";

const HotelDetails = () => {
  const [isViewerOpen, setIsImageViewerOpen] = useState(false);

  const images = [
    { img: img1.src, gridStyle: "col-span-3 row-span-2" },
    { img: img2.src, gridStyle: "col-span-1 row-span-1" },
    { img: img3.src, gridStyle: "col-span-1 row-span-1" },
    { img: img4.src, gridStyle: "col-span-1 row-span-1" },
    { img: img5.src, gridStyle: "col-span-1 row-span-1" },
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
          title="Waldorf Astoria Maldives Ithaafushi"
          mainCrumbName="Hotels"
          mainCrumbPath="/hotels"
          path="/hotels/01"
          locationPath="/hotels?location=cox%27sBazar&area=inaniBeach%2B"
        />
        <div className="h-[200px] md:h-[380px] xl:h-[500px]">
          <DetailsPageBannerImages
            images={images}
            setIsImageViewerOpen={setIsImageViewerOpen}
          />
        </div>
        <HotelFeatures />
        <DetailsPageDescription name="Waldorf Astoria Maldives" />
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
