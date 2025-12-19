import { IconType } from "react-icons/lib";
import { FaChartBar, FaDoorOpen, FaUsers } from "react-icons/fa";
import { TbBrandBooking } from "react-icons/tb";

interface ISideNav {
  icon: IconType;
  name: string;
  path: string;
}

export const adminSideNavItems: Array<ISideNav> = [
  {
    icon: FaChartBar,
    name: "Analytics",
    path: "/dashboard/admin/analytics",
  },
  {
    icon: FaUsers,
    name: "Users",
    path: "/dashboard/admin/users",
  },
  {
    icon: FaDoorOpen,
    name: "Reservations",
    path: "/dashboard/admin/reservations",
  },
  {
    icon: TbBrandBooking,
    name: "Bookings",
    path: "/dashboard/admin/bookings",
  },
];
