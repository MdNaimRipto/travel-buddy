import React from "react";
import SettingsTitle from "./SettingsTitle";
import SecurityPasswordInputField from "./securityInputFields/SecurityPasswordInputField";
import { Button } from "@mui/material";
import { colorConfig } from "@/configs/colorConfig";

const SecurityInfoSettings = () => {
  return (
    <div className="w-full md:w-3/4 lg:w-2/3 mx-auto">
      <SettingsTitle title="Update Password" />
      <div className="flex flex-col gap-6 lg:px-4">
        <SecurityPasswordInputField label="Current Password" />
        <SecurityPasswordInputField label="New Password" />
        <SecurityPasswordInputField label="Confirm Password" />
        <Button
          sx={{
            borderRadius: 2,
            background: `linear-gradient(45deg, ${colorConfig.secondary}, ${colorConfig.primary}) !important`,
            color: colorConfig.white,
            textTransform: "none",
            mt: 1,
            px: 2,
            py: 1,
            width: {
              xs: "60%",
              sm: "40%",
              lg: "30%",
            },
          }}
        >
          <span className="font-inter mr-2 whitespace-nowrap overflow-hidden">
            Update Password
          </span>
        </Button>
      </div>
    </div>
  );
};

export default SecurityInfoSettings;
