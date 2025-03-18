import BasicInputField from "@/components/profileAndDashboard/profileAndDashboardInputFields/BasicInputField";
import React, { FormEvent, useState } from "react";
import SettingsTitle from "./SettingsTitle";
import BasicSelectBox from "@/components/profileAndDashboard/profileAndDashboardInputFields/BasicSelectBox";
import DateOfBirthSelectBox from "@/components/profileAndDashboard/profileAndDashboardInputFields/DateOfBirthSelectBox";
import LocationSelectBox from "@/components/profileAndDashboard/profileAndDashboardInputFields/LocationSelectBox";
import { Button, CircularProgress } from "@mui/material";
import { colorConfig } from "@/configs/colorConfig";
import { FaEdit as EditIcon } from "react-icons/fa";
import { useUserContext } from "@/context/AuthContext";
import { IUser } from "@/types/userTypes";
import { UseCommonImports } from "@/utils/UseCommonImports";
import { useUpdateUserMutation } from "@/redux/features/userApi";
import {
  IApiErrorResponse,
  IAuthApiSuccessResponse,
} from "@/types/apiResponseTypes";
import { SuccessToast } from "@/components/common/toasts/SuccessToast";
import { decryptData } from "@/components/auth/userEncription";
import { ErrorToast } from "@/components/common/toasts/ErrorToast";

const BasicInfoSettings = () => {
  const { user, setUser } = useUserContext();
  const { Cookies } = UseCommonImports();

  const typedUser = user as IUser;

  const [isLoading, setIsLoading] = useState(false);
  const [updateProfile] = useUpdateUserMutation();

  const handleUpdateProfile = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;

    setIsLoading(true);

    const userName = form.userName.value;
    const email = form.email.value;
    const contactNumber = form.contactNumber.value;
    const gender = form.gender.value;
    const date = form.date.value;
    const month = form.month.value;
    const year = form.year.value;
    const street = form.street.value;
    const city = form.city.value;
    const district = form.district.value;
    const facebook = form.facebook.value;
    const instagram = form.instagram.value;
    const twitter = form.twitter.value;
    const linkedin = form.linkedin.value;

    const option = {
      data: {
        ...(userName && { userName }),
        ...(email && { email }),
        ...(contactNumber && { contactNumber }),
        ...(gender && { gender }),
        ...((date || month || year) && {
          dateOfBirth: {
            ...(date && { date }),
            ...(month && { month }),
            ...(year && { year }),
          },
        }),
        ...((street || city || district) && {
          location: {
            ...(street && { street }),
            ...(city && { city }),
            ...(district && { district }),
          },
        }),
        ...((facebook || instagram || twitter || linkedin) && {
          socialLinks: {
            ...(facebook && { facebook }),
            ...(instagram && { instagram }),
            ...(twitter && { twitter }),
            ...(linkedin && { linkedin }),
          },
        }),
      },
      token: Cookies.get("token") as string,
      userID: typedUser?._id,
    };

    try {
      const res: IAuthApiSuccessResponse = await updateProfile(option).unwrap();
      if (res.success) {
        SuccessToast(res.message);

        const userData = decryptData(String(res.data?.userData));
        setUser(userData);

        Cookies.set("userData", String(res.data?.userData), {
          expires: 3,
        });
        Cookies.set("token", String(res.data?.token), { expires: 3 });
        form.reset();
      }
    } catch (e) {
      const error = e as IApiErrorResponse;
      ErrorToast(error.data.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleUpdateProfile}>
      <SettingsTitle title="Update Basic Information's" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <BasicInputField
          name="userName"
          label="UserName"
          type="text"
          placeholder="Update User Name"
          message={`Current: (${typedUser?.userName})`}
          required={false}
        />
        <BasicInputField
          name="email"
          label="Email Address"
          type="email"
          placeholder="Update Email Address"
          message={`Current: (${typedUser?.email})`}
          required={false}
        />
        <BasicInputField
          name="contactNumber"
          label="Contact Number"
          type="tel"
          placeholder="Add / Update Contact Number"
          message={`Current: (${typedUser?.contactNumber})`}
          required={false}
        />
        <BasicSelectBox
          name="gender"
          label="Gender"
          options={[
            {
              option: "Select Gender",
              value: "",
            },
            {
              option: "Male",
              value: "MALE",
            },
            {
              option: "Female",
              value: "FEMALE",
            },
          ]}
          required={false}
          message={`Current: (${
            typedUser?.gender ? typedUser?.gender : "Not Updated Yet!"
          })`}
        />
        <div className="md:col-span-2 lg:w-3/4">
          <DateOfBirthSelectBox typedUser={typedUser} />
        </div>
        <BasicInputField
          label="Street"
          type="text"
          placeholder="Add / Update Street Name"
          required={false}
          name="street"
          message={`Current(${typedUser?.location?.street})`}
        />
        <LocationSelectBox
          api={`https://overpass-api.de/api/interpreter?data=[out:json];area["ISO3166-1"="BD"]->.searchArea;(node["place"="city"](area.searchArea););out tags;`}
          label="City"
          required={false}
          message={`Current(${typedUser?.location?.city})`}
          name="city"
        />
        <LocationSelectBox
          api={`https://overpass-api.de/api/interpreter?data=[out:json];area[%22ISO3166-1%22=%22BD%22]-%3E.searchArea;(rel[%22admin_level%22=%224%22](area.searchArea););out%20tags;`}
          label="Division"
          required={false}
          message={`Current(${typedUser?.location?.district})`}
          name="district"
        />
        <div></div>
        <BasicInputField
          label="Facebook"
          type="text"
          placeholder="Add / Update Facebook Url"
          message={`Current(${typedUser?.socialLinks?.facebook})`}
          required={false}
          name="facebook"
        />
        <BasicInputField
          label="Instagram"
          type="text"
          placeholder="Add / Update Instagram Url"
          message={`Current(${typedUser?.socialLinks?.instagram})`}
          required={false}
          name="instagram"
        />
        <BasicInputField
          label="Twitter"
          type="text"
          placeholder="Add / Update Twitter Url"
          message={`Current(${typedUser?.socialLinks?.twitter})`}
          required={false}
          name="twitter"
        />
        <BasicInputField
          label="Linkedin"
          type="text"
          placeholder="Add / Update Linkedin Url"
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
              Updating...
            </span>
          ) : (
            <span>Edit / Update Profile</span>
          )}
        </span>
        <EditIcon />
      </Button>
    </form>
  );
};

export default BasicInfoSettings;
