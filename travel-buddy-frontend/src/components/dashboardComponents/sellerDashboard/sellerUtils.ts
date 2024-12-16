import { IconType } from "react-icons/lib";
import { FaChartBar, FaHotel, FaDoorOpen } from "react-icons/fa";

interface ISideNav {
  icon: IconType;
  name: string;
  path: string;
}

export const sellerSideNavItems: Array<ISideNav> = [
  {
    icon: FaChartBar,
    name: "Hotel Statistics",
    path: "/dashboard/seller/hotelStatistics",
  },
  {
    icon: FaHotel,
    name: "Hotel Profile",
    path: "/dashboard/seller/hotelProfile",
  },
  {
    icon: FaDoorOpen,
    name: "My Reservations",
    path: "/dashboard/seller/myReservations",
  },
];
