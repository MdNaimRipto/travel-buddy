import Loader from "@/components/common/loader/Loader";
import { useUserContext } from "@/context/AuthContext";
import { useGetBusinessProfileQuery } from "@/redux/features/hotelApis";
import { IUser } from "@/types/userTypes";
import { UseCommonImports } from "@/utils/UseCommonImports";
import React, {
  ReactElement,
  useEffect,
  useState,
  createContext,
  useContext,
} from "react";

const HotelDetailsContext = createContext<any | null>(null);

const HotelLayoutWrapper = ({ children }: { children: ReactElement }) => {
  const { user, setUser } = useUserContext();
  const { Cookies, Router } = UseCommonImports();

  const typedUser = user as IUser;

  const {
    data: hotelDetails,
    isLoading: detailsLoading,
    error,
    refetch,
  } = useGetBusinessProfileQuery({
    hotelId: typedUser?.uid,
  });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (typedUser?.role !== "hotelOwner") {
      setUser(null);
      Cookies.remove("userData");
      Cookies.remove("token");
      Router.replace("/auth/login");
    } else {
      setIsLoading(false);
    }
  }, [Cookies, Router, setUser, typedUser?.role, user]);

  if (isLoading || detailsLoading) {
    return <Loader />;
  }

  if (!hotelDetails || error) {
    return <p>No Details Found</p>;
  }

  const value = {
    hotelDetails,
    refetch,
  };

  return (
    <HotelDetailsContext.Provider value={value}>
      {children}
    </HotelDetailsContext.Provider>
  );
};

export default HotelLayoutWrapper;

export const useHotelDetailsContext = () => {
  const context = useContext(HotelDetailsContext);
  return context;
};
