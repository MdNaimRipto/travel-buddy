import BasicInputField from "@/components/profileAndDashboard/profileAndDashboardInputFields/BasicInputField";
import React from "react";
import SettingsTitle from "./SettingsTitle";
import BasicSelectBox from "@/components/profileAndDashboard/profileAndDashboardInputFields/BasicSelectBox";
import DateOfBirthSelectBox from "@/components/profileAndDashboard/profileAndDashboardInputFields/DateOfBirthSelectBox";
import LocationSelectBox from "@/components/profileAndDashboard/profileAndDashboardInputFields/LocationSelectBox";
import { Button } from "@mui/material";
import { colorConfig } from "@/configs/colorConfig";
import { FaEdit as EditIcon } from "react-icons/fa";

const BasicInfoSettings = () => {
  return (
    <div>
      <SettingsTitle title="Update Basic Information's" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <BasicInputField
          label="First name"
          type="text"
          placeholder="Update First name"
          message="Current: (MD Na****)"
          required={false}
        />
        <BasicInputField
          label="Last name"
          type="text"
          placeholder="Update Last name"
          message="Current: (MD Ra****)"
          required={false}
        />
        <BasicInputField
          label="Email Address"
          type="email"
          placeholder="Update Email Address"
          message="Current: (nai*********@gmail.com)"
          required={false}
        />
        <BasicInputField
          label="Contact Number"
          type="tel"
          placeholder="Update Contact Number"
          message="Current: (+88016******90)"
          required={false}
        />
        <BasicSelectBox
          label="Gender"
          options={[
            {
              option: "Select Gender",
              value: "",
            },
            {
              option: "Male",
              value: "Male",
            },
            {
              option: "Female",
              value: "Female",
            },
          ]}
          required={false}
        />
        <DateOfBirthSelectBox />
        <BasicInputField
          label="Street"
          type="text"
          placeholder="Update Street Name"
          message="Not Updated Yet!"
          required={false}
        />
        <LocationSelectBox
          api={`https://overpass-api.de/api/interpreter?data=[out:json];area["ISO3166-1"="BD"]->.searchArea;(node["place"="city"](area.searchArea););out tags;`}
          label="City"
          required={false}
        />
        <LocationSelectBox
          api={`https://overpass-api.de/api/interpreter?data=[out:json];area[%22ISO3166-1%22=%22BD%22]-%3E.searchArea;(rel[%22admin_level%22=%224%22](area.searchArea););out%20tags;`}
          label="Division"
          required={false}
        />
      </div>
      <Button
        sx={{
          borderRadius: 2,
          background: `linear-gradient(45deg, ${colorConfig.secondary}, ${colorConfig.primary}) !important`,
          color: colorConfig.white,
          textTransform: "none",
          mt: 3,
          px: 2,
          py: 1,
        }}
      >
        <span className="font-inter mr-2 whitespace-nowrap overflow-hidden">
          Edit Profile
        </span>
        <EditIcon />
      </Button>
    </div>
  );
};

export default BasicInfoSettings;
