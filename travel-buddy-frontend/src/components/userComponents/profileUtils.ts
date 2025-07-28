import { IconType } from "react-icons/lib";
import { FaUser as ProfileIcon } from "react-icons/fa";
import { BsBookmarkPlusFill as WishlistIcon } from "react-icons/bs";
import { IoSettingsSharp as SettingsIcon } from "react-icons/io5";
import { TbBrandBooking } from "react-icons/tb";

interface ISideNav {
  icon: IconType;
  name: string;
  path: string;
}

export const profileSideNavItems: Array<ISideNav> = [
  {
    icon: ProfileIcon,
    name: "User Profile",
    path: "/user/profile",
  },
  {
    icon: TbBrandBooking,
    name: "My Bookings",
    path: "/user/myBookings",
  },
  {
    icon: WishlistIcon,
    name: "Wishlist",
    path: "/user/wishlist?wishlistFor=HOTEL",
  },
  {
    icon: SettingsIcon,
    name: "Settings",
    path: "/user/settings",
  },
];
