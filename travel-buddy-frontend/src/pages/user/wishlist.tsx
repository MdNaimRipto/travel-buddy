import OpacityTransition from "@/components/animation/OpacityTransition";
import { profileSideNavItems } from "@/components/userComponents/profileUtils";
import {
  CustomTabPanel,
  CustomTabPanelTabs,
} from "@/components/userComponents/UserProfileUtils";
import HotelsWishlist from "@/components/userComponents/wishlist/HotelsWishlist";
import ReservationsWishlist from "@/components/userComponents/wishlist/ReservationsWishlist";
import TopRatedWishlist from "@/components/userComponents/wishlist/TopRatedWishlist";
import ProfileDashboardLayout from "@/layouts/ProfileDashboardLayout";
import React, { ReactElement } from "react";

const Wishlist = () => {
  const [value, setValue] = React.useState(0);
  return (
    <OpacityTransition>
      <div className="py-4">
        <h6 className="text-xl font-poppins mb-4 font-normal text-black">
          Recommended Hotel
        </h6>
        <TopRatedWishlist />
        <div className="pt-4">
          <CustomTabPanelTabs
            tabs={["Hotels", "Reservations"]}
            value={value}
            setValue={setValue}
          />
          <CustomTabPanel value={value} index={0}>
            <HotelsWishlist />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <ReservationsWishlist />
          </CustomTabPanel>
        </div>
      </div>
    </OpacityTransition>
  );
};

export default Wishlist;

Wishlist.getLayout = function getLayout(page: ReactElement) {
  return (
    <ProfileDashboardLayout
      sideNavItem={profileSideNavItems}
      title="Account Menu"
    >
      {page}
    </ProfileDashboardLayout>
  );
};
