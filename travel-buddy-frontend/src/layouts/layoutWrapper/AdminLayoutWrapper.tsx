import Loader from "@/components/common/loader/Loader";
import { useUserContext } from "@/context/AuthContext";
import { IUser } from "@/types/userTypes";
import { UseCommonImports } from "@/utils/UseCommonImports";
import React, { ReactNode, useEffect, useState } from "react";

const AdminLayoutWrapper = ({ children }: { children: ReactNode }) => {
  const { user, setUser } = useUserContext();
  const { Cookies, Router } = UseCommonImports();

  const typedUser = user as IUser;

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (typedUser?.role !== "admin") {
      setUser(null);
      Cookies.remove("userData");
      Cookies.remove("token");
      Router.replace("/auth/login");
    } else {
      setIsLoading(false);
    }
  }, [Cookies, Router, setUser, typedUser?.role, user]);

  if (isLoading) {
    return <Loader />;
  }

  return <>{children}</>;
};

export default AdminLayoutWrapper;
