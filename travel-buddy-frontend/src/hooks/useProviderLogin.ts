import { useEffect, useState } from "react";
import { SuccessToast } from "@/components/common/toasts/SuccessToast";
import { ErrorToast } from "@/components/common/toasts/ErrorToast";
import { decryptUser } from "@/components/auth/decryptUser";
import { apiConfig } from "@/configs/apiConfig";
import { useUserContext } from "@/context/AuthContext";
import { UseCommonImports } from "@/utils/UseCommonImports";
import { signOut } from "next-auth/react";

export const useHandleProviderLogin = ({
  status,
  data,
  checkUserEndPoint,
  authMethod,
}: {
  status: string;
  data: any;
  checkUserEndPoint: string;
  authMethod: string;
}) => {
  const { setUser } = useUserContext();
  const { Cookies, Router } = UseCommonImports();

  useEffect(() => {
    const baseURL = apiConfig.BASE_URL;

    if (status !== "loading") {
      if (data && status === "authenticated") {
        window.sessionStorage.setItem(
          "tempProviderData",
          JSON.stringify(data.user)
        );

        const option = {
          data: {
            authMethod,
            email: data.user?.email as string,
          },
        };

        const checkProviderLogin = async ({
          data,
        }: {
          data: { authMethod: string; email: string };
        }) => {
          const res = await fetch(`${baseURL}${checkUserEndPoint}`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(data),
          });
          const result = await res.json();
          if (result.success) {
            SuccessToast(result.message);
            const userData = decryptUser(String(result.data?.userData));
            setUser(userData);

            Cookies.set("userData", String(result.data?.userData), {
              expires: 3,
            });
            Cookies.set("token", String(result.data?.token), { expires: 3 });

            signOut({ redirect: false });
            setTimeout(() => {
              Router.push("/user/profile");
            }, 500);
          } else if (!result.success) {
            Router.push(
              `/auth/verify?tab=userRole&email=${data.email}&authMethod=${authMethod}`
            );
            SuccessToast("Please Fill The Info To Complete Login");
          } else {
            ErrorToast("Failed To Login. Try Again!");
          }
        };

        checkProviderLogin(option);
      } else {
        window.sessionStorage.removeItem("tempProviderData");
      }
    }
  }, [Cookies, Router, checkUserEndPoint, data, setUser, status, authMethod]);
};
