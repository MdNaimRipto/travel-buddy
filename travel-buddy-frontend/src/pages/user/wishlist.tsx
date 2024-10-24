import { profileSideNavItems } from "@/components/profileAndDashboard/profile/profileUtils";
import HotelsWishlist from "@/components/userComponents/wishlist/HotelsWishlist";
import ReservationsWishlist from "@/components/userComponents/wishlist/ReservationsWishlist";
import TopRatedWishlist from "@/components/userComponents/wishlist/TopRatedWishlist";
import { colorConfig } from "@/configs/colorConfig";
import ProfileDashboardLayout from "@/layouts/ProfileDashboardLayout";
import { Box, Tab, Tabs } from "@mui/material";
import React, { ReactElement } from "react";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box
          sx={{
            p: {
              md: 3,
            },
            mt: {
              xs: 3,
              md: 0,
            },
          }}
        >
          {children}
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Wishlist = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className="py-4">
      <h6 className="text-xl font-poppins mb-4 font-normal text-black">
        Recommended Hotel
      </h6>
      <TopRatedWishlist />
      <div className="pt-4">
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            TabIndicatorProps={{
              style: {
                backgroundColor: colorConfig.secondary,
              },
            }}
            sx={{
              ".Mui-selected": {
                color: `${colorConfig.white} !important`,
                background: `linear-gradient(45deg, ${colorConfig.secondary}, ${colorConfig.primary}) !important`,
                borderRadius: "14px 14px 0px 0px",
              },
            }}
          >
            <Tab
              label="Hotels"
              {...a11yProps(0)}
              className="titleFont"
              sx={{ textTransform: "none" }}
            />
            <Tab
              label="Reservations"
              {...a11yProps(1)}
              className="titleFont"
              sx={{ textTransform: "none" }}
            />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <HotelsWishlist />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <ReservationsWishlist />
        </CustomTabPanel>
      </div>
    </div>
  );
};

export default Wishlist;

Wishlist.getLayout = function getLayout(page: ReactElement) {
  return (
    <ProfileDashboardLayout sideNavItem={profileSideNavItems}>
      {page}
    </ProfileDashboardLayout>
  );
};
