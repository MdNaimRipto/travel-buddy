import { colorConfig } from "@/configs/colorConfig";
import { Box, Tab, Tabs } from "@mui/material";
import React from "react";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

export function CustomTabPanel(props: TabPanelProps) {
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

export function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export function CustomTabPanelTabs({
  tabs,
  value,
  setValue,
}: {
  tabs: Array<string>;
  value: number;
  setValue: any;
}) {
  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
      <Tabs
        value={value}
        onChange={handleTabChange}
        aria-label="basic tabs example"
        TabIndicatorProps={{
          style: {
            backgroundColor: "#00000000",
          },
        }}
        sx={{
          mb: 1,
          ".Mui-selected": {
            color: `${colorConfig.white} !important`,
            background: `linear-gradient(45deg, ${colorConfig.secondary}, ${colorConfig.primary}) !important`,
            borderRadius: 50, //"50px",
          },
        }}
      >
        {tabs.map((t, i) => (
          <Tab
            key={i}
            label={t}
            {...a11yProps(1)}
            className="titleFont"
            sx={{ textTransform: "none" }}
          />
        ))}
      </Tabs>
    </Box>
  );
}
