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
import { decryptData } from "@/components/auth/userEncription";
import AuthBtn from "@/components/common/buttons/AuthBtn";
import { ErrorToast } from "@/components/common/toasts/ErrorToast";
import { SuccessToast } from "@/components/common/toasts/SuccessToast";
import { useUserContext } from "@/context/AuthContext";
import AuthLayout from "@/layouts/AuthLayout";
import { useCustomLoginMutation } from "@/redux/features/userApi";
import {
  IApiErrorResponse,
  IAuthApiSuccessResponse,
} from "@/types/apiResponseTypes";
import { UseCommonImports } from "@/utils/UseCommonImports";
import Link from "next/link";
import React, { ReactNode, useState } from "react";

const Login = () => {
  const { setUser } = useUserContext();
  const { Cookies, Router } = UseCommonImports();

  const [value, setValue] = useState({
    email: false,
    password: false,
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isRememberMeSelected, setIsRememberSelected] = useState(false);

  const handleInputBlur =
    (fieldName: string) => (e: { target: { value: any } }) => {
      setValue({
        ...value,
        [fieldName]: !e.target.value,
      });
    };

  const [customLogin] = useCustomLoginMutation();

  const handleCustomLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsLoading(true);

    const form = e.target as HTMLFormElement;

    const email = form.email.value;
    const password = form.password.value;

    try {
      const option = {
        data: {
          email,
          password,
        },
      };

      const res: IAuthApiSuccessResponse = await customLogin(option).unwrap();
      if (res.success) {
        console.log(res);
        SuccessToast(res.message);
        const userData = decryptData(String(res.data?.userData));
        setUser(userData);

        if (isRememberMeSelected) {
          Cookies.set("userData", String(res.data?.userData), { expires: 3 });
          Cookies.set("token", String(res.data?.token), { expires: 3 });
        } else {
          Cookies.set("userData", String(res.data?.userData));
          Cookies.set("token", String(res.data?.token));
        }

        Router.push("/user/profile");

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
          <form className="w-full" onSubmit={handleCustomLogin}>
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
                <RadioSwitch
                  inputProps={{ "aria-label": "ant design" }}
                  onChange={() => setIsRememberSelected(!isRememberMeSelected)}
                />
                <p className="font-poppins text-xs md:text-sm">Remember me</p>
              </div>
              <Link
                href="/auth/forgetPassword/verifyEmail"
                className="text-black hover:text-secondary duration-300 text-xs md:text-sm font-poppins cursor-pointer"
              >
                Forgot Password?
              </Link>
            </div>
            <AuthBtn title="Login" isLoading={isLoading} />
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

Login.getLayout = function getLayout(page: ReactNode) {
  return <AuthLayout>{page}</AuthLayout>;
};
