import React from "react";
import CommonProviderBtn from "./CommonProviderBtn";
import logo from "@/assets/auth/facebook.png";
import { apiConfig } from "@/configs/apiConfig";
import { signIn, useSession } from "next-auth/react";
import { useHandleProviderLogin } from "@/hooks/useProviderLogin";

const Facebook = () => {
  const checkUserEndPoint = apiConfig.USER.CHECK_PROVIDER_LOGIN;

  const handleFacebookLogin = () => {
    signIn("facebook", {
      callbackUrl: "http://localhost:3000/auth/login?method=FACEBOOK",
    });
  };

  const { data, status } = useSession();

  useHandleProviderLogin({
    status,
    authMethod: "FACEBOOK",
    checkUserEndPoint,
    data,
  });

  return (
    <CommonProviderBtn
      logo={logo}
      title="Continue With Facebook"
      handleLogin={handleFacebookLogin}
      authMethod="FACEBOOK"
    />
  );
};

export default Facebook;
