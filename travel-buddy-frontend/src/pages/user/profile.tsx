import { profileSideNavItems } from "@/components/userComponents/profileUtils";
import ProfileUserDetails from "@/components/userComponents/profile/profileUserDetails/ProfileUserDetails";
import ProfileUserStats from "@/components/userComponents/profile/ProfileUserStats";
import { colorConfig } from "@/configs/colorConfig";
import ProfileDashboardLayout from "@/layouts/ProfileDashboardLayout";
import { Divider } from "@mui/material";
import React, { ReactElement } from "react";
import OpacityTransition from "@/components/animation/OpacityTransition";

const Profile = () => {
  return (
    <OpacityTransition>
      <>
        <ProfileUserDetails />
        <Divider
          sx={{
            my: 4,
            mx: 5,
            borderColor: `${colorConfig.extraLightGray} !important`,
          }}
        />
        <ProfileUserStats />
      </>
    </OpacityTransition>
  );
};

export default Profile;

Profile.getLayout = function getLayout(page: ReactElement) {
  return (
    <ProfileDashboardLayout sideNavItem={profileSideNavItems}>
      {page}
    </ProfileDashboardLayout>
  );
};
