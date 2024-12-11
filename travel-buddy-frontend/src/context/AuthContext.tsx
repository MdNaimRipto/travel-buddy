import React, {
  createContext,
  useState,
  SetStateAction,
  Dispatch,
  ReactNode,
  useContext,
  useEffect,
  useCallback,
} from "react";
import Cookies from "js-cookie";
import Loader from "@/components/common/loader/Loader";
import { decryptData } from "@/components/auth/userEncription";

interface UserContextType {
  user: null | any;
  setUser: Dispatch<SetStateAction<null | any>>;
  contextLoading: boolean;
  setContextLoading: Dispatch<SetStateAction<boolean>>;
}

export const UserContext = createContext<UserContextType>({
  user: null,
  setUser: () => {},
  contextLoading: true,
  setContextLoading: () => {},
});

const AuthContext = ({ children }: { children: ReactNode }) => {
  const [contextLoading, setContextLoading] = useState(true);

  const [user, setUser] = useState<null | any>(null);

  const getUserData = useCallback(() => {
    if (Cookies.get("userData")) {
      const value = Cookies.get("userData");
      const userData = decryptData(value as string);
      return userData;
    }
  }, []);

  useEffect(() => {
    const userData = getUserData();
    setUser(userData);
  }, [getUserData]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setContextLoading(false);
    }, 2500);

    return () => clearTimeout(timeoutId);
  }, [contextLoading]);

  const value = {
    user: user ? user : null,
    setUser,
    contextLoading,
    setContextLoading,
  };
  console.log({
    user: value.user,
    contextLoading,
  });

  if (contextLoading) {
    return <Loader />;
  }

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
export default AuthContext;

export function useUserContext(): UserContextType {
  return useContext(UserContext);
}
