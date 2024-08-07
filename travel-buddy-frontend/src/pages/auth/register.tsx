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
import { colorConfig } from "@/configs/colorConfig";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";

const Register = () => {
  const [value, setValue] = useState({
    firstName: false,
    lastName: false,
    email: false,
    password: false,
    contactNumber: false,
    role: false,
  });

  const handleInputBlur =
    (fieldName: string) => (e: { target: { value: any } }) => {
      setValue({
        ...value,
        [fieldName]: !e.target.value,
      });
    };

  const registerRole = [
    { name: "Customer", value: "customer" },
    { name: "Hotel Owner", value: "hotelOwner" },
  ];

  return (
    <OpacityTransition>
      <div className="flex flex-col justify-center w-full md:w-11/12 xl:w-4/5 container my-12 md:my-8 xl:my-16 px-4 min-h-screen">
        <div className="w-full md:w-1/2 mb-5">
          <AuthTitle title="Register" />
          <AuthSubTitle
            title=" Welcome Traveler. Let's Start Your Travel Plan With Travel
        Buddy"
          />
        </div>
        <div className="flex flex-col md:flex-row gap-4 w-full">
          <form className="w-full">
            <div className="grid lg:grid-cols-2 lg:gap-4">
              <GeneralAuthInputField
                label="First name"
                name="firstName"
                type="text"
                placeHolder="Enter First Name"
                commonError="First Name Required"
                value={value.firstName}
                handleInputBlur={handleInputBlur}
              />
              <GeneralAuthInputField
                label="Last name"
                name="lastName"
                type="text"
                placeHolder="Enter Last Name"
                commonError="Last Name Required"
                value={value.lastName}
                handleInputBlur={handleInputBlur}
              />
            </div>
            <div className="grid lg:grid-cols-2 lg:gap-4">
              <GeneralAuthInputField
                label="Email Address"
                name="email"
                type="email"
                placeHolder="Enter Email Address"
                commonError="Email Address Required"
                value={value.email}
                handleInputBlur={handleInputBlur}
              />
              <GeneralAuthInputField
                label="Contact Number"
                name="contactNumber"
                type="tel"
                placeHolder="Enter Contact Number"
                commonError="Contact Number Required"
                value={value.contactNumber}
                handleInputBlur={handleInputBlur}
              />
            </div>
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
            <div className="mb-3">
              <p className="text-black font-normal text-base font-poppins mb-[10px]">
                User Role
              </p>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="role"
              >
                {registerRole.map((r, i) => (
                  <FormControlLabel
                    key={i}
                    required
                    value={r.value}
                    control={
                      <Radio
                        size="small"
                        sx={{
                          "&.Mui-checked": {
                            color: colorConfig.secondary,
                          },
                        }}
                      />
                    }
                    label={
                      <p className="font-poppins text-xs md:text-sm">
                        {r.name}
                      </p>
                    }
                  />
                ))}
              </RadioGroup>
            </div>

            <AuthBtn title="Register" />
          </form>
          <div className="flex md:hidden items-center justify-center gap-1 mt-1">
            <p className="text-xs font-poppins">{`Already Have An Account?`}</p>
            <Link
              href={"/auth/login"}
              className="text-black hover:text-secondary hover:text-secondary1 duration-300 text-xs font-poppins"
            >
              Login Now
            </Link>
          </div>
          <AuthDivider />
          <div className="w-full">
            <p className="text-black font-normal text-base font-poppins mb-[18px]">
              Other Register Options
            </p>
            <div className="flex md:flex-col items-center justify-center gap-[18px]">
              <Google />
              <Facebook />
              <Twitter />
            </div>
          </div>
        </div>
        <div className="hidden md:flex items-center justify-start gap-1 mt-5">
          <p className="text-sm font-poppins">{`Already Have An Account?`}</p>
          <Link
            href={"/auth/login"}
            className="text-black hover:text-secondary hover:text-secondary1 duration-300 text-sm font-poppins"
          >
            Login Now
          </Link>
        </div>
      </div>
    </OpacityTransition>
  );
};

export default Register;
