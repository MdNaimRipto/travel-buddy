import OpacityTransition from "@/components/animation/OpacityTransition";
import GeneralAuthInputField from "@/components/auth/authInputFields/GeneralAuthInputField";
import AuthSubTitle from "@/components/auth/AuthSubTitle";
import AuthTitle from "@/components/auth/AuthTitle";
import { decryptData, encryptData } from "@/components/auth/userEncription";
import AuthBtn from "@/components/common/buttons/AuthBtn";
import { ErrorToast } from "@/components/common/toasts/ErrorToast";
import { SuccessToast } from "@/components/common/toasts/SuccessToast";
import AuthLayout from "@/layouts/AuthLayout";
import { useVerifyOtpForForgetPasswordMutation } from "@/redux/features/userApi";
import {
  IApiErrorResponse,
  IApiSuccessResponse,
} from "@/types/apiResponseTypes";
import { UseCommonImports } from "@/utils/UseCommonImports";
import Link from "next/link";
import React, { ReactNode, useState } from "react";

const VerifyOtp = () => {
  const { Router } = UseCommonImports();

  const [value, setValue] = useState({
    otp: false,
  });

  const [isLoading, setIsLoading] = useState(false);

  const [verifyOtp] = useVerifyOtpForForgetPasswordMutation();

  const handleVerifyOtp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsLoading(true);

    const form = e.target as HTMLFormElement;
    const otp = form.otp.value;

    const encryptedMail = JSON.parse(
      window.sessionStorage.getItem("otpMail") as string
    );
    const otpMail = decryptData(String(encryptedMail));

    try {
      const option = {
        data: {
          email: otpMail,
          otp: String(otp),
        },
      };

      const res: IApiSuccessResponse = await verifyOtp(option).unwrap();

      if (res.success) {
        SuccessToast(res.message);
        Router.push("/auth/forgetPassword/resetPassword");
      }

      console.log(option);
    } catch (e) {
      const error = e as IApiErrorResponse;
      ErrorToast(error.data.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputBlur =
    (fieldName: string) => (e: { target: { value: any } }) => {
      setValue({
        ...value,
        [fieldName]: !e.target.value,
      });
    };

  return (
    <OpacityTransition>
      <div className="flex flex-col justify-center md:h-screen w-full md:w-11/12 xl:w-2/4 container my-12 md:my-8 lg:my-0 px-4">
        <div className="w-full md:w-1/2 mb-5">
          <AuthTitle title="OTP Sent" />
          <AuthSubTitle title="Check you mail and verify the OTP." />
        </div>
        <div className="flex flex-col md:flex-row gap-4 w-full">
          <form className="w-full" onSubmit={handleVerifyOtp}>
            <GeneralAuthInputField
              label="OTP"
              name="otp"
              type="number"
              placeHolder="Enter OTP"
              commonError="OTP is Required"
              value={value.otp}
              handleInputBlur={handleInputBlur}
            />
            <AuthBtn title="Verify OTP" isLoading={isLoading} />
          </form>
          <div className="flex md:hidden items-center justify-center gap-1 mt-1">
            <p className="text-xs font-poppins">Remembered Password?</p>
            <Link
              href={"/auth/login"}
              className="text-secondary hover:text-secondary hover:text-secondary1 duration-300 text-xs font-poppins"
            >
              Return to login page
            </Link>
          </div>
        </div>
        <div className="hidden md:flex items-center justify-start gap-1 mt-5">
          <p className="text-sm font-poppins">Remembered Password?</p>
          <Link
            href={"/auth/login"}
            className="text-secondary hover:text-secondary hover:text-secondary1 duration-300 text-sm font-poppins"
          >
            Return to login page
          </Link>
        </div>
      </div>
    </OpacityTransition>
  );
};

export default VerifyOtp;

VerifyOtp.getLayout = function getLayout(page: ReactNode) {
  return <AuthLayout>{page}</AuthLayout>;
};
