import React from "react";
import UserInfoBlock from "./UserInfoBlock";
import { Divider } from "@mui/material";

const ProfileUserDetailsRightContent = () => {
  const info = {
    personalInfo: [
      {
        name: "Email",
        value: "naimurtsc567@gmail.com",
      },
      {
        name: "Phone Number",
        value: "+8801632970990",
      },
      {
        name: "Address",
        value: "946 Melvina Coves, CA, Mountain view",
      },
    ],
    socialInfo: [
      {
        name: "Facebook",
        value: "https://www.facebook.com",
      },
      {
        name: "Instagram",
        value: "https://www.instagram.com",
      },
      {
        name: "Twitter",
        value: "https://www.x.com",
      },
      {
        name: "Linkedin",
        value: "https://www.linkedin.com",
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
