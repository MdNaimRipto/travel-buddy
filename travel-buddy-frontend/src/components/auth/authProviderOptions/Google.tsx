import React from "react";
import logo from "@/assets/auth/google.png";
import CommonProviderBtn from "./CommonProviderBtn";
import { signIn, useSession } from "next-auth/react";
import { apiConfig } from "@/configs/apiConfig";
import { useHandleProviderLogin } from "@/hooks/useProviderLogin";
import { envConfig } from "@/configs/envConfig";

const Google = () => {
  const checkUserEndPoint = apiConfig.USER.CHECK_PROVIDER_LOGIN;

  const handleGoogleLogin = () => {
    signIn("google", {
      callbackUrl: `${envConfig.base_url}/auth/login?method=GOOGLE`,
    });
  };

  const { data, status } = useSession();

  useHandleProviderLogin({
    status,
    authMethod: "GOOGLE",
    checkUserEndPoint,
    data,
  });

  return (
    <CommonProviderBtn
      logo={logo}
      title="Continue With Google"
      handleLogin={handleGoogleLogin}
      authMethod="GOOGLE"
    />
  );
};

export default Google;
