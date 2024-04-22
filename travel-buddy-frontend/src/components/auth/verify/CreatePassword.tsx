import React, { useState } from "react";
import VerifyProgress from "./VerifyProgress";
import AuthSubTitle from "../AuthSubTitle";
import AuthTitle from "../AuthTitle";
import PasswordInputField from "../authInputFields/PasswordInputField";
import AuthTRansition from "@/components/animation/AuthTRansition";

const CreatePassword = () => {
  const [value, setValue] = useState({
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
    <AuthTRansition>
      <div className="container flex items-center justify-center min-h-screen md:px-4">
        <div
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
          <VerifyProgress nextPath="password" />
        </div>
      </div>
    </AuthTRansition>
  );
};

export default CreatePassword;
