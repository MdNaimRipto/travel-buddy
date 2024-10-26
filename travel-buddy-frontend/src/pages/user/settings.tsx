import { profileSideNavItems } from "@/components/userComponents/profileUtils";
import BasicInfoSettings from "@/components/userComponents/settings/BasicInfoSettings";
import SecurityInfoSettings from "@/components/userComponents/settings/SecurityInfoSettings";
import {
  CustomTabPanel,
  CustomTabPanelTabs,
} from "@/components/userComponents/UserProfileUtils";
import ProfileDashboardLayout from "@/layouts/ProfileDashboardLayout";
import React, { ReactElement } from "react";

const Settings = () => {
  const [value, setValue] = React.useState(0);
  return (
    <div className="pt-4">
      <CustomTabPanelTabs
        tabs={["Basic Info", "Security Info"]}
        value={value}
        setValue={setValue}
      />
      <CustomTabPanel value={value} index={0}>
        <BasicInfoSettings />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <SecurityInfoSettings />
      </CustomTabPanel>
    </div>
  );
};

export default Settings;

Settings.getLayout = function getLayout(page: ReactElement) {
  return (
    <ProfileDashboardLayout sideNavItem={profileSideNavItems}>
      {page}
    </ProfileDashboardLayout>
  );
};
