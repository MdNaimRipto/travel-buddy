import BasicInputField from "@/components/profileAndDashboard/profileAndDashboardInputFields/BasicInputField";
import BasicSelectBox from "@/components/profileAndDashboard/profileAndDashboardInputFields/BasicSelectBox";
import DateOfBirthSelectBox from "@/components/profileAndDashboard/profileAndDashboardInputFields/DateOfBirthSelectBox";
import LocationSelectBox from "@/components/profileAndDashboard/profileAndDashboardInputFields/LocationSelectBox";
import SettingsTitle from "@/components/userComponents/settings/SettingsTitle";
import { colorConfig } from "@/configs/colorConfig";
import { useUserContext } from "@/context/AuthContext";
import { IUser } from "@/types/userTypes";
import { locations } from "@/utils/locations";
import { UseCommonImports } from "@/utils/UseCommonImports";
import { Button, CircularProgress, IconButton } from "@mui/material";
import React, { useState } from "react";
import { IoAddOutline } from "react-icons/io5";
import AmenitiesInputField from "./AmenitiesInputField";

const CreateHotelProfile = () => {
  const { user, setUser } = useUserContext();
  const { Cookies } = UseCommonImports();

  const typedUser = user as IUser;

  const [isLoading, setIsLoading] = useState(false);

  const [selectedDestination, setSelectedDestination] = useState("");
  const [areaOptions, setAreaOptions] = useState([
    { option: "Select Area", value: "" },
  ]);

  const handleDestinationChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedValue = event.target.value;
    setSelectedDestination(selectedValue);

    // Find the corresponding destination
    const selectedLocation = locations.find(
      loc => loc.destination.value === selectedValue
    );

    // Set the areas for the selected destination
    if (selectedLocation) {
      const updatedAreas = selectedLocation.areas.map(area => ({
        option: area.label,
        value: area.value,
      }));
      setAreaOptions([{ option: "Select Area", value: "" }, ...updatedAreas]);
    } else {
      setAreaOptions([{ option: "Select Area", value: "" }]);
    }
  };

  const [amenities, setAmenities] = useState<string[]>([""]);

  return (
    <form>
      <SettingsTitle title="Create Business Profile" />
      <div className="flex flex-col gap-3 mb-8">
        <label className="font-inter font-medium text-sm text-black">
          Upload Images
        </label>
        <div className="grid grid-cols-6 gap-4 border border-lightGray rounded-xl p-4 w-full h-[180px]">
          <IconButton
            sx={{
              border: `1px solid ${colorConfig.lightGray}`, // Equivalent to border-lightGray
              width: "100%",
              height: "100%",
              fontSize: "1.125rem", // text-lg
              borderRadius: "0.75rem", // rounded-xl
              fontFamily: "Inter, sans-serif", // font-inter
              fontWeight: 500, // font-medium
            }}
          >
            <IoAddOutline className="text-4xl" /> {/* text-3xl */}
          </IconButton>
        </div>
        <span className="block min-h-[16px] font-inter text-xs text-lightGray font-light">
          Max 5 images can be uploaded!
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <BasicInputField
          name="hotelName"
          label="Hotel Name"
          type="text"
          placeholder="Enter Hotel name"
          message={`Current: (Not Update Yet!)`}
          required={true}
        />
        <BasicInputField
          name="email"
          label="Email Address"
          type="email"
          placeholder="Enter Email Address"
          message={`Current: (Not Update Yet!)`}
          required={true}
        />
        <BasicInputField
          name="contactNumber"
          label="Contact Number"
          type="tel"
          placeholder="Add Contact Number"
          message={`Current: (Not Update Yet!)`}
          required={true}
        />
        <BasicInputField
          name="totalReservations"
          label="Total Reservations"
          type="number"
          placeholder="Add Total Reservations Count"
          message={`Current: (Not Update Yet!)`}
          required={true}
        />
        <div className="md:col-span-2 lg:w-3/4">
          <DateOfBirthSelectBox
            typedUser={typedUser}
            label="Established Date"
          />
        </div>
        <BasicSelectBox
          name="destination"
          label="Destination"
          options={[
            { option: "Select Destination", value: "" },
            ...locations.map(loc => ({
              option: loc.destination.label,
              value: loc.destination.value,
            })),
          ]}
          required={true}
          handlerFn={handleDestinationChange}
          message={`Current: (Not Update Yet!)`}
        />
        <BasicSelectBox
          name="area"
          label="Select Area"
          options={areaOptions}
          required={true}
          disabled={selectedDestination === ""}
          message={`Current: (Not Update Yet!)`}
        />
        <BasicInputField
          label="Street"
          type="text"
          placeholder="Add Street Name"
          required={true}
          name="street"
          message={`Current: (Not Update Yet!)`}
        />
        <div></div>
        <AmenitiesInputField
          amenities={amenities}
          setAmenities={setAmenities}
          label="Amenities (Add Hotel Features)"
        />
        <div className="col-span-2 flex flex-col gap-3">
          <label className="font-inter font-medium text-sm text-black">
            Description
          </label>
          <textarea
            name="description"
            placeholder="Add Description"
            className="p-3 rounded-xl border border-lightGray focus:outline-darkGray font-inter font-normal text-sm appearance-none text-gray w-full"
            required={true}
            rows={8}
          />
          <span className="block min-h-[16px] font-inter text-xs text-lightGray font-light">
            Current: (Not Update Yet!)
          </span>
        </div>
        <BasicInputField
          label="Website"
          type="text"
          placeholder="Add Website Url"
          message={`Current(${typedUser?.socialLinks?.facebook})`}
          required={true}
          name="facebook"
        />
        <BasicInputField
          label="Facebook"
          type="text"
          placeholder="Add / Update Facebook Url"
          message={`Current(${typedUser?.socialLinks?.facebook})`}
          required={true}
          name="facebook"
        />
        <BasicInputField
          label="Instagram"
          type="text"
          placeholder="Add / Update Instagram Url"
          message={`Current(${typedUser?.socialLinks?.instagram})`}
          required={true}
          name="instagram"
        />
        <BasicInputField
          label="Twitter"
          type="text"
          placeholder="Add / Update Twitter Url"
          message={`Current(${typedUser?.socialLinks?.twitter})`}
          required={true}
          name="twitter"
        />
        <BasicInputField
          label="Linkedin"
          type="text"
          placeholder="Add / Update Linkedin Url"
          message={`Current(${typedUser?.socialLinks?.linkedin})`}
          required={true}
          name="linkedin"
        />
      </div>
      <Button
        type="submit"
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
          {isLoading ? (
            <span className="flex items-center gap-2">
              <CircularProgress size={20} sx={{ color: colorConfig.white }} />{" "}
              Creating...
            </span>
          ) : (
            <span>Create Hotel Profile</span>
          )}
        </span>
      </Button>
    </form>
  );
};

export default CreateHotelProfile;
