import OpacityTransition from "@/components/animation/OpacityTransition";
import AuthDivider from "@/components/auth/AuthDivider";
import AuthSubTitle from "@/components/auth/AuthSubTitle";
import AuthTitle from "@/components/auth/AuthTitle";
import { RadioSwitch } from "@/components/auth/authCommon";
import GeneralAuthInputField from "@/components/auth/authInputFields/GeneralAuthInputField";
import PasswordInputField from "@/components/auth/authInputFields/PasswordInputField";
import Facebook from "@/components/auth/authProviderOptions/Facebook";
import Google from "@/components/auth/authProviderOptions/Google";
import Twitter from "@/components/auth/authProviderOptions/Twitter";
import AuthBtn from "@/components/common/buttons/AuthBtn";
import Link from "next/link";
import React, { useState } from "react";

const Login = () => {
  const [value, setValue] = useState({
    email: false,
    password: false,
  });

  const handleInputBlur =
    (fieldName: string) => (e: { target: { value: any } }) => {
      setValue({
        ...value,
        [fieldName]: !e.target.value,
      });
    };

  return (
    <OpacityTransition>
      <div className="flex flex-col justify-center md:h-screen w-full md:w-11/12 xl:w-3/4 container my-12 md:my-8 lg:my-0 px-4">
        <div className="w-full md:w-1/2 mb-5">
          <AuthTitle title="Login" />
          <AuthSubTitle
            title=" Welcome Back Traveler. Let's Start Your Next Travel Plan With Travel
        Buddy"
          />
        </div>
        <div className="flex flex-col md:flex-row gap-4 w-full">
          <form className="w-full">
            <GeneralAuthInputField
              label="Email Address"
              name="email"
              type="email"
              placeHolder="Enter Email Address"
              commonError="Email Address Required"
              value={value.email}
              handleInputBlur={handleInputBlur}
            />
            <PasswordInputField
              value={value}
              handleInputBlur={handleInputBlur}
            />
            <div className="flex items-center justify-between mb-5 mt-1">
              <div className="flex items-center gap-2">
                <RadioSwitch inputProps={{ "aria-label": "ant design" }} />
                <p className="font-poppins text-xs md:text-sm">Remember me</p>
              </div>
              <Link
                href=""
                className="text-black hover:text-secondary duration-300 text-xs md:text-sm font-poppins cursor-pointer"
              >
                Forgot Password?
              </Link>
            </div>
            <AuthBtn title="Login" />
          </form>
          <div className="flex md:hidden items-center justify-center gap-1 mt-1">
            <p className="text-xs font-poppins">{`Don't Have An Account?`}</p>
            <Link
              href={"/auth/register"}
              className="text-black hover:text-secondary hover:text-secondary1 duration-300 text-xs font-poppins"
            >
              Register Now
            </Link>
          </div>
          <AuthDivider />
          <div className="w-full">
            <p className="text-black font-normal text-base font-poppins mb-[18px]">
              Other Login Options
            </p>
            <div className="flex md:flex-col items-center justify-center gap-[18px]">
              <Google />
              <Facebook />
              <Twitter />
            </div>
          </div>
        </div>
        <div className="hidden md:flex items-center justify-start gap-1 mt-5">
          <p className="text-sm font-poppins">{`Don't Have An Account?`}</p>
          <Link
            href={"/auth/register"}
            className="text-black hover:text-secondary hover:text-secondary1 duration-300 text-sm font-poppins"
          >
            Register Now
          </Link>
        </div>
      </div>
    </OpacityTransition>
  );
};

export default Login;
