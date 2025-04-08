import BasicInputField from "@/components/profileAndDashboard/profileAndDashboardInputFields/BasicInputField";
import BasicSelectBox from "@/components/profileAndDashboard/profileAndDashboardInputFields/BasicSelectBox";
import DateOfBirthSelectBox from "@/components/profileAndDashboard/profileAndDashboardInputFields/DateOfBirthSelectBox";
import SettingsTitle from "@/components/userComponents/settings/SettingsTitle";
import { colorConfig } from "@/configs/colorConfig";
import { useUserContext } from "@/context/AuthContext";
import { IUser } from "@/types/userTypes";
import { locations } from "@/utils/locations";
import { UseCommonImports } from "@/utils/UseCommonImports";
import { Button, CircularProgress, IconButton } from "@mui/material";
import React, { useState } from "react";
import AmenitiesInputField from "./AmenitiesInputField";
import { postApiHandler } from "@/components/common/apiHandlers/postApiHandler";
import { useUploadHotelDetailsMutation } from "@/redux/features/hotelApis/hotelApis";
import UploadImages from "@/components/common/UploadImages";
import { ErrorToast } from "@/components/common/toasts/ErrorToast";

const CreateHotelProfile = ({ refetch }: { refetch: any }) => {
  const { user } = useUserContext();

  const typedUser = user as IUser;

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
      loc => loc.destination.label === selectedValue
    );

    // Set the areas for the selected destination
    if (selectedLocation) {
      const updatedAreas = selectedLocation.areas.map(area => ({
        option: area.label,
        value: area.label,
      }));
      setAreaOptions([{ option: "Select Area", value: "" }, ...updatedAreas]);
    } else {
      setAreaOptions([{ option: "Select Area", value: "" }]);
    }
  };

  // Create Hotel Profile State & Functions

  const uploadedImages = JSON.parse(
    String(window.sessionStorage.getItem("uploadedImages"))
  );

  const [isLoading, setIsLoading] = useState(false);
  const [images, setImages] = useState<Array<string>>(
    uploadedImages && uploadedImages?.length ? uploadedImages : []
  );
  const [amenities, setAmenities] = useState<string[]>([""]);

  const [createHotelProfile] = useUploadHotelDetailsMutation();

  const handleCreateProfile = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const hotelName = form.hotelName.value;
    const email = form.email.value;
    const contactNumber = form.contactNumber.value;
    const totalReservations = form.totalReservations.value;
    const date = form.date.value;
    const month = form.month.value;
    const year = form.year.value;
    const destination = form.destination.value;
    const area = form.area.value;
    const street = form.street.value;
    const description = form.description.value;
    const website = form.website.value;
    const facebook = form.facebook.value;
    const instagram = form.instagram.value;
    const twitter = form.twitter.value;
    const linkedin = form.linkedin.value;

    if (!images.length) {
      ErrorToast("Minimum 1 Image is Required!");
      return;
    }

    const option = {
      data: {
        hotelOwnerId: typedUser?.uid,
        hotelName,
        hotelLocation: {
          street,
          area,
          destination,
          coordinates: {
            latitude: "0",
            longitude: "0",
          },
        },
        hotelImages: images,
        amenities,
        description,
        totalReservations: Number(totalReservations),
        ...((facebook || instagram || twitter || linkedin || website) && {
          socialLinks: {
            ...(facebook && { facebook }),
            ...(instagram && { instagram }),
            ...(twitter && { twitter }),
            ...(linkedin && { linkedin }),
            ...(website && { website }),
          },
        }),
        email,
        contactNumber,
        establishedDate: {
          date,
          month,
          year,
        },
      },
    };

    function optionalTasks() {
      refetch();
      form.reset();
      window.sessionStorage.removeItem("Uploaded Image");
    }

    await postApiHandler({
      mutateFn: createHotelProfile,
      options: option,
      setIsLoading: setIsLoading,
      optionalTasksFn: optionalTasks,
    });
  };

  return (
    <form onSubmit={handleCreateProfile}>
      <SettingsTitle title="Create Business Profile" />
      <UploadImages images={images} setImages={setImages} />
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
          defaultValue={typedUser?.email}
        />
        <BasicInputField
          name="contactNumber"
          label="Contact Number"
          type="tel"
          placeholder="Add Contact Number"
          message={`Current: (Not Update Yet!)`}
          required={true}
          defaultValue={typedUser?.contactNumber}
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
              value: loc.destination.label,
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
          placeholder="Add Website Url (Optional)"
          message={`Current(${typedUser?.socialLinks?.facebook})`}
          required={false}
          name="website"
        />
        <BasicInputField
          label="Facebook"
          type="text"
          placeholder="Add / Update Facebook Url (Optional)"
          message={`Current(${typedUser?.socialLinks?.facebook})`}
          required={false}
          name="facebook"
        />
        <BasicInputField
          label="Instagram"
          type="text"
          placeholder="Add / Update Instagram Url (Optional)"
          message={`Current(${typedUser?.socialLinks?.instagram})`}
          required={false}
          name="instagram"
        />
        <BasicInputField
          label="Twitter"
          type="text"
          placeholder="Add / Update Twitter Url (Optional)"
          message={`Current(${typedUser?.socialLinks?.twitter})`}
          required={false}
          name="twitter"
        />
        <BasicInputField
          label="Linkedin"
          type="text"
          placeholder="Add / Update Linkedin Url (Optional)"
          message={`Current(${typedUser?.socialLinks?.linkedin})`}
          required={false}
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
              Uploading...
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
