import React from "react";
import ProfileUserDetailsLeftContent from "./ProfileUserDetailsLeftContent";
import ProfileUserDetailsRightContent from "./ProfileUserDetailsRightContent";

const ProfileUserDetails = () => {
  return (
    <div className="bg-white rounded-xl lg:grid grid-cols-4 xl:px-4 gap-6">
      <ProfileUserDetailsLeftContent />
      <ProfileUserDetailsRightContent />
    </div>
  );
};

export default ProfileUserDetails;
