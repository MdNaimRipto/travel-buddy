import Loader from "@/components/common/loader/Loader";
import { useUserContext } from "@/context/AuthContext";
import { UseCommonImports } from "@/utils/UseCommonImports";
import React, { ReactNode, useEffect, useState } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  const { user } = useUserContext();
  const { Cookies, Router } = UseCommonImports();
  const token = Cookies.get("token");

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (user && token) {
      Router.push("/user/profile");
    } else {
      setIsLoading(false);
    }
  }, [Router, token, user]);

  if (isLoading) {
    return <Loader />;
  }

  return <>{children}</>;
};

export default AuthLayout;
