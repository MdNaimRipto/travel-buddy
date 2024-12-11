import React from "react";
import logo from "@/assets/auth/twitter.png";
import CommonProviderBtn from "./CommonProviderBtn";
import { apiConfig } from "@/configs/apiConfig";
import { signIn, useSession } from "next-auth/react";
import { useHandleProviderLogin } from "@/hooks/useProviderLogin";
import { envConfig } from "@/configs/envConfig";

const Twitter = () => {
  const checkUserEndPoint = apiConfig.USER.CHECK_PROVIDER_LOGIN;

  const handleTwitterLogin = () => {
    // signIn("twitter", {
    //   callbackUrl: `${envConfig.base_url}/auth/login?method=TWITTER`,
    // });
    console.log(envConfig.twitter_id, envConfig.twitter_secret);
  };

  const { data, status } = useSession();

  useHandleProviderLogin({
    status,
    authMethod: "TWITTER",
    checkUserEndPoint,
    data,
  });

  return (
    <CommonProviderBtn
      logo={logo}
      title="Continue With Twitter"
      handleLogin={handleTwitterLogin}
      authMethod="TWITTER"
    />
  );
};

export default Twitter;
