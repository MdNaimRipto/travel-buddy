import React, { useState } from "react";
import DetailsPageBannerImages from "@/components/common/detailsPage/DetailsPageBannerImages";
import HotelFeatures from "@/components/hotels/hotelDetails/HotelFeatures";
import DetailsPageDescription from "@/components/common/detailsPage/DetailsPageDescription";
import HotelLocationMap from "@/components/hotels/hotelDetails/map/index";
import DetailsPageImageViewer from "@/components/common/detailsPage/DetailsPageImageViewer";
import HotelProfileTopContent from "@/components/dashboardComponents/sellerDashboard/profile/HotelProfileTopContent";
import { IBusinessProfile } from "@/types/hotelTypes";
import r1 from "@/assets/hotels/r1.webp";
import r2 from "@/assets/hotels/r2.webp";
import r3 from "@/assets/hotels/r3.webp";
import r4 from "@/assets/hotels/r4.webp";

const HotelDashboardProfile = ({
  hotel,
  refetch,
}: {
  hotel: IBusinessProfile;
  refetch: any;
}) => {
  const [isViewerOpen, setIsImageViewerOpen] = useState(false);

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
    <div className="container px-4 py-12">
      <HotelProfileTopContent hotel={hotel} />
      <div className="h-[400px] overflow-hidden">
        <DetailsPageBannerImages
          images={gridImageView}
          setIsImageViewerOpen={setIsImageViewerOpen}
        />
      </div>
      <HotelFeatures amenities={hotel?.amenities} />
      <DetailsPageDescription hotel={hotel} />
      <HotelLocationMap />

      {/* Viewer: */}
      <DetailsPageImageViewer
        isViewerOpen={isViewerOpen}
        setIsImageViewerOpen={setIsImageViewerOpen}
        viewerImages={viewerImages}
        title="Hotel Images"
      />
    </div>
  );
};

export default HotelDashboardProfile;
