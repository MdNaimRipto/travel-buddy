import { profileSideNavItems } from "@/components/profileAndDashboard/profile/profileUtils";
import ProfileDashboardLayout from "@/layouts/ProfileDashboardLayout";
import React, { ReactElement } from "react";

const Wishlist = () => {
  return <div>Wishlist Page</div>;
};

export default Wishlist;

Wishlist.getLayout = function getLayout(page: ReactElement) {
  return (
    <ProfileDashboardLayout sideNavItem={profileSideNavItems}>
      {page}
    </ProfileDashboardLayout>
  );
};
