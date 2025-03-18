import React from "react";
import UserInfoBlock from "./UserInfoBlock";
import { Divider } from "@mui/material";
import { useUserContext } from "@/context/AuthContext";
import { IUser } from "@/types/userTypes";

const ProfileUserDetailsRightContent = () => {
  const { user } = useUserContext();

  const typedUser = user as IUser;

  const location = typedUser?.location;

  const info = {
    personalInfo: [
      {
        name: "Email",
        value: String(typedUser?.email),
      },
      {
        name: "Phone Number",
        value: String(typedUser?.contactNumber),
      },
      {
        name: "Address",
        value: `${location?.street}, ${location?.city}, ${location?.district}`,
      },
    ],
    socialInfo: [
      {
        name: "Facebook",
        value: `${typedUser?.socialLinks?.facebook}`,
      },
      {
        name: "Instagram",
        value: `${typedUser?.socialLinks?.instagram}`,
      },
      {
        name: "Twitter",
        value: `${typedUser?.socialLinks?.twitter}`,
      },
      {
        name: "Linkedin",
        value: `${typedUser?.socialLinks?.linkedin}`,
      },
    ],
  };

  return (
    <div className="col-span-3 py-8">
      <UserInfoBlock
        title="Personal Information's:"
        information={info.personalInfo}
      />
      <Divider
        sx={{
          mb: 5,
        }}
      />
      <UserInfoBlock
        title="Social Information's:"
        information={info.socialInfo}
      />
    </div>
  );
};

export default ProfileUserDetailsRightContent;
