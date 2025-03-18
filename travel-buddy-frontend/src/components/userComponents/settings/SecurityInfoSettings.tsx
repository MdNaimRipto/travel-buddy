import React, { FormEvent, useState } from "react";
import SettingsTitle from "./SettingsTitle";
import SecurityPasswordInputField from "./securityInputFields/SecurityPasswordInputField";
import { Button, CircularProgress } from "@mui/material";
import { colorConfig } from "@/configs/colorConfig";
import { useUserContext } from "@/context/AuthContext";
import { UseCommonImports } from "@/utils/UseCommonImports";
import { IUser } from "@/types/userTypes";
import {
  IApiErrorResponse,
  IApiSuccessResponse,
} from "@/types/apiResponseTypes";
import { useUpdatePasswordMutation } from "@/redux/features/userApi";
import { SuccessToast } from "@/components/common/toasts/SuccessToast";
import { ErrorToast } from "@/components/common/toasts/ErrorToast";

const SecurityInfoSettings = () => {
  const { user } = useUserContext();
  const { Cookies } = UseCommonImports();

  const typedUser = user as IUser;

  const [isLoading, setIsLoading] = useState(false);
  const [updatePassword] = useUpdatePasswordMutation();

  const handleUpdatePassword = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsLoading(true);

    const form = e.target as HTMLFormElement;
    const currentPassword = form.currentPassword.value;
    const newPassword = form.newPassword.value;
    const confirmPassword = form.confirmPassword.value;

    const option = {
      data: {
        userId: typedUser?._id,
        currentPassword,
        newPassword,
        confirmPassword,
      },
      token: String(Cookies.get("token")),
    };

    try {
      const res: IApiSuccessResponse = await updatePassword(option).unwrap();
      if (res.success) {
        SuccessToast(res.message);
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
    <form
      className="w-full md:w-3/4 lg:w-2/3 mx-auto"
      onSubmit={handleUpdatePassword}
    >
      <SettingsTitle title="Update Password" />
      <div className="flex flex-col gap-6 lg:px-4">
        <SecurityPasswordInputField
          name="currentPassword"
          label="Current Password"
        />
        <SecurityPasswordInputField name="newPassword" label="New Password" />
        <SecurityPasswordInputField
          name="confirmPassword"
          label="Confirm Password"
        />
        <Button
          type="submit"
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
          {isLoading ? (
            <span className="flex items-center gap-2">
              <CircularProgress size={20} sx={{ color: colorConfig.white }} />{" "}
              Updating...
            </span>
          ) : (
            <span className="font-inter mr-2 whitespace-nowrap overflow-hidden">
              Update Password
            </span>
          )}
        </Button>
      </div>
    </form>
  );
};

export default SecurityInfoSettings;
