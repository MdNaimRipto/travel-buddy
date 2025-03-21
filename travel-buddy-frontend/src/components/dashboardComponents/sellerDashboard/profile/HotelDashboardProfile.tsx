import React, { useState } from "react";
import DetailsPageBannerImages from "@/components/common/detailsPage/DetailsPageBannerImages";
import HotelFeatures from "@/components/hotels/hotelDetails/HotelFeatures";
import DetailsPageDescription from "@/components/common/detailsPage/DetailsPageDescription";
import HotelLocationMap from "@/components/hotels/hotelDetails/map/index";
import DetailsPageImageViewer from "@/components/common/detailsPage/DetailsPageImageViewer";
import HotelProfileTopContent from "@/components/dashboardComponents/sellerDashboard/profile/HotelProfileTopContent";
import { IBusinessProfile } from "@/types/hotelTypes";
import hotel01 from "@/assets/hotels/hotel1.jpg";
import hotel02 from "@/assets/hotels/hotel2.jpg";
import hotel03 from "@/assets/hotels/hotel3.jpg";
import hotel04 from "@/assets/hotels/hotel4.jpg";
import hotel05 from "@/assets/hotels/hotel5.jpg";

const HotelDashboardProfile = () => {
  const [isViewerOpen, setIsImageViewerOpen] = useState(false);

  const sampleBusinessProfile: IBusinessProfile = {
    hotelId: "hotel-12345",
    hotelOwnerId: "owner-67890",
    hotelName: "Paradise Beach Resort",
    totalRating: 4.5,
    startingPrice: 1500,
    hotelLocation: {
      street: "123 Seaside Avenue",
      area: "Inani Beach",
      destination: "Cox's Bazar",
      coordinates: {
        latitude: "21.4375",
        longitude: "91.9832",
      },
    },
    totalReservations: 250,
    hotelImages: [
      hotel01.src,
      hotel02.src,
      hotel03.src,
      hotel04.src,
      hotel05.src,
    ],
    amenities: [
      "Free WiFi",
      "Swimming Pool",
      "Gym",
      "Spa",
      "24/7 Room Service",
      "Beach View",
      "Restaurant",
    ],
    description:
      "Paradise Beach Resort offers a luxurious stay with breathtaking ocean views, top-notch amenities, and world-class service. Experience tranquility and comfort at its finest.",
    socialLinks: {
      facebook: "https://facebook.com/paradisebeachresort",
      instagram: "https://instagram.com/paradisebeachresort",
      twitter: "https://twitter.com/paradisebeach",
      linkedin: "https://linkedin.com/company/paradisebeachresort",
    },
  };

  const gridImageView = sampleBusinessProfile.hotelImages.map((img, index) => ({
    img,
    gridStyle: index === 0 ? "col-span-3 row-span-2" : "col-span-1 row-span-1",
  }));

  return (
    <div className="container px-4 py-12">
      <HotelProfileTopContent
        title={sampleBusinessProfile.hotelName}
        mainCrumbName="Hotels"
        mainCrumbPath="/hotels"
        path="/hotels/01"
        locationPath="/hotels?location=cox%27sBazar&area=inaniBeach%2B"
      />
      <div className="h-[400px] overflow-hidden">
        <DetailsPageBannerImages
          images={gridImageView}
          setIsImageViewerOpen={setIsImageViewerOpen}
        />
      </div>
      <HotelFeatures />
      <DetailsPageDescription name={sampleBusinessProfile.hotelName} />
      <HotelLocationMap />

      {/* Viewer: */}
      <DetailsPageImageViewer
        isViewerOpen={isViewerOpen}
        setIsImageViewerOpen={setIsImageViewerOpen}
        viewerImages={sampleBusinessProfile.hotelImages}
        title="Hotel Images"
      />
    </div>
  );
};

export default HotelDashboardProfile;
