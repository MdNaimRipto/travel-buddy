import React, { useState } from "react";
import VerifyProgress from "./VerifyProgress";
import AuthSubTitle from "../AuthSubTitle";
import AuthTitle from "../AuthTitle";
import PasswordInputField from "../authInputFields/PasswordInputField";
import OpacityTransition from "@/components/animation/OpacityTransition";
import { UseCommonImports } from "@/utils/UseCommonImports";
import { IUserRoleEnums, linkedProvidersEnums } from "@/types/userTypes";
import { useProviderLoginMutation } from "@/redux/features/userApi";
import {
  IApiErrorResponse,
  IAuthApiSuccessResponse,
} from "@/types/apiResponseTypes";
import { SuccessToast } from "@/components/common/toasts/SuccessToast";
import { decryptUser } from "../decryptUser";
import { useUserContext } from "@/context/AuthContext";
import { ErrorToast } from "@/components/common/toasts/ErrorToast";
import { signOut } from "next-auth/react";

const CreatePassword = () => {
  const { setUser } = useUserContext();

  const [value, setValue] = useState({
    password: false,
  });

  const { Router, Cookies } = UseCommonImports();
  const { userRole, authMethod } = Router.query;

  const [isLoading, setIsLoading] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const handleInputBlur =
    (fieldName: string) => (e: { target: { value: any } }) => {
      setValue({
        ...value,
        [fieldName]: !e.target.value,
      });
    };

  const [providerLogin] = useProviderLoginMutation();

  const handleProviderLogin = async (e: any) => {
    e.preventDefault();

    setIsLoading(true);

    const form = e.target;
    const password = form.password.value;

    const tempProviderData = JSON.parse(
      window.sessionStorage.getItem("tempProviderData") as string
    );

    const option = {
      data: {
        userInfo: {
          userName: tempProviderData.name as string,
          contactNumber: "Not Updated Yet!",
          email: tempProviderData.email as string,
          password: password as string,
          role: userRole as IUserRoleEnums,
        },
        authMethod: authMethod as linkedProvidersEnums,
      },
    };

    try {
      const res: IAuthApiSuccessResponse = await providerLogin(option).unwrap();
      if (res.success) {
        setTimeout(() => {
          setIsFinished(true);
          signOut({ redirect: false });
        }, 1500);

        setTimeout(() => {
          SuccessToast(res.message);
          const userData = decryptUser(String(res.data?.userData));
          setUser(userData);

          Cookies.set("userData", String(res.data?.userData), { expires: 3 });
          Cookies.set("token", String(res.data?.token), { expires: 3 });
          Router.push("/user/profile");

          form.reset();
        }, 2500);
      }
    } catch (e) {
      const error = e as IApiErrorResponse;
      ErrorToast(error.data.message);
      setIsLoading(false);
      setIsFinished(false);
    }
  };

  return (
    <OpacityTransition>
      <div className="container flex items-center justify-center min-h-screen md:px-4">
        <form
          onSubmit={handleProviderLogin}
          className="md:rounded-xl md:w-11/12 lg:w-3/5 xl:w-1/2  px-4 py-12 md:p-8"
          style={{
            boxShadow: "0px 0px 10px -2px",
          }}
        >
          <AuthTitle title="Create Password" />
          <AuthSubTitle title="We want to ensure every users security. Please provide one password so you can access your account securely!" />
          <div className="pb-3">
            <PasswordInputField
              handleInputBlur={handleInputBlur}
              value={value}
            />
            <p className="text-start text-black text-sm font-normal leading-7 font-poppins mt-1">
              Include Symbol, Uppercase, Lowercase and Numbers to Make a Strong
              Password.
            </p>
          </div>
          <VerifyProgress
            nextPath="password"
            isLoading={isLoading}
            isFinished={isFinished}
          />
        </form>
      </div>
    </OpacityTransition>
  );
};

export default CreatePassword;
