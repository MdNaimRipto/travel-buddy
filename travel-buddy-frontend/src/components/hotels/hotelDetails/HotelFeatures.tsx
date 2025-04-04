import Image from "next/image";
import React from "react";
import FeaturesPng from "@/assets/featured-icons/feature-list/check-mark.png";
import DetailsPageTitle from "@/components/common/detailsPage/DetailsPageTitle";

const HotelFeatures = ({ amenities }: { amenities: Array<string> }) => {
  // const lists = [
  //   "Established: 16, May 1996",
  //   "Completed Bookings: 5026",
  //   "Number of Rooms: 150",
  //   "Star Rating: 5-Star Hotel",
  //   "Check-in Time: 09:00 AM",
  //   "Check-out Time: 09:00 AM",
  //   "Free Wi-Fi: Available in all rooms and public areas",
  //   "Airport Shuttle: Complimentary for all guests",
  //   "Pets Allowed: Yes, pet-friendly rooms available",
  //   "Swimming Pool: Outdoor and heated indoor pools",
  //   "Fitness Center: Open 24/7",
  //   "Spa Services: Full-service spa available",
  //   "Parking: Free on-site parking",
  //   "Restaurant: Multiple on-site dining options",
  //   "Nearby Attractions: 2 km from city center, 1 km from beach",
  // ];

  return (
    <div className="w-full pt-4">
      <DetailsPageTitle title="Hotel Details:" />
      <ul className="ml-2 grid grid-cols-1 md:grid-cols-2 lg:px-8">
        {amenities.map((list, i) => (
          <li className="flex items-center gap-2 mb-5" key={i}>
            <div className="w-6">
              <Image
                src={FeaturesPng.src}
                alt="Features Menu"
                width={200}
                height={200}
                priority
              />
            </div>
            <span className="text-base font-normal font-inter">{list}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HotelFeatures;
