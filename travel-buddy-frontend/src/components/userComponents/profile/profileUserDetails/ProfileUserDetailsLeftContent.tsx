import React, { useState } from "react";
import {
  FaFacebookF as FacebookIcon,
  FaInstagram as InstagramIcon,
  FaTwitter as XIcon,
  FaLinkedin as LinkedInIcon,
  FaEdit as EditIcon,
} from "react-icons/fa";
import { colorConfig } from "@/configs/colorConfig";
import {
  Avatar,
  Button,
  CircularProgress,
  IconButton,
  Tooltip,
} from "@mui/material";
import { useUserContext } from "@/context/AuthContext";
import { IUser } from "@/types/userTypes";
import { formatDate } from "@/components/common/dateFormatter";
import Link from "next/link";
import { useUpdateUserMutation } from "@/redux/features/userApi";
import { envConfig } from "@/configs/envConfig";
import { UseCommonImports } from "@/utils/UseCommonImports";
import { SuccessToast } from "@/components/common/toasts/SuccessToast";
import {
  IApiErrorResponse,
  IApiSuccessResponse,
  IAuthApiSuccessResponse,
} from "@/types/apiResponseTypes";
import { ErrorToast } from "@/components/common/toasts/ErrorToast";
import { decryptData } from "@/components/auth/userEncription";

const ProfileUserDetailsLeftContent = () => {
  const { user, setUser } = useUserContext();
  const { Cookies } = UseCommonImports();

  const typedUser = user as IUser;

  const options = [
    {
      logo: FacebookIcon,
      link:
        typedUser?.socialLinks.facebook === "Not Updated Yet!"
          ? null
          : typedUser.socialLinks.facebook,
    },
    {
      logo: InstagramIcon,
      link:
        typedUser?.socialLinks.instagram === "Not Updated Yet!"
          ? null
          : typedUser.socialLinks.instagram,
    },
    {
      logo: XIcon,
      link:
        typedUser?.socialLinks.twitter === "Not Updated Yet!"
          ? null
          : typedUser.socialLinks.twitter,
    },
    {
      logo: LinkedInIcon,
      link:
        typedUser?.socialLinks.linkedin === "Not Updated Yet!"
          ? null
          : typedUser.socialLinks.linkedin,
    },
  ];

  const [updateUser] = useUpdateUserMutation();
  const [isHovered, setIsHovered] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleUpdateProfilePic = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setIsLoading(true);
    const files = event.target.files;

    if (files && files.length > 0) {
      const img = files[0];

      const formData = new FormData();
      formData.append("image", img);

      const imageApiKey = envConfig.image_api_key;
      fetch(`https://api.imgbb.com/1/upload?key=${imageApiKey}`, {
        method: "POST",
        body: formData,
      })
        .then(res => res.json())
        .then(async data => {
          if (data.success) {
            try {
              const option = {
                data: {
                  profileImage: data?.data?.url,
                },
                userID: user?._id as string,
                token: Cookies.get("token") as string,
              };
              const res: IAuthApiSuccessResponse = await updateUser(
                option
              ).unwrap();
              if (res.success) {
                SuccessToast(res.message);

                const userData = decryptData(String(res.data?.userData));
                setUser(userData);

                Cookies.set("userData", String(res.data?.userData), {
                  expires: 3,
                });
                Cookies.set("token", String(res.data?.token), { expires: 3 });
              }
            } catch (e) {
              const error = e as IApiErrorResponse;
              ErrorToast(error.data.message);
            } finally {
              setIsLoading(false);
            }
          } else {
            ErrorToast("Something Went Wrong! Try Again");
            setIsLoading(false);
          }
        });
    }
  };

  return (
    <div className="col-span-1 lg:border-r lg:border-r-extraLightGray flex flex-col gap-4 items-center lg:pr-8 py-8">
      <IconButton
        component="label"
        sx={{ position: "relative" }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Avatar
          src={typedUser?.profileImage}
          sx={{
            width: {
              xs: 150,
              md: 100,
            },
            height: {
              xs: 150,
              md: 100,
            },
          }}
        />
        {isHovered && (
          <Tooltip title="Update Profile Picture">
            <div className="absolute left-1/2 -translate-x-1/2 bg-[#00000020] w-[90%] h-[90%] flex items-center justify-center rounded-full opacity-0 hover:opacity-100 duration-300"></div>
          </Tooltip>
        )}

        {isLoading && (
          <div className="absolute left-1/2 -translate-x-1/2 bg-[#00000050] w-[85%] h-[85%] flex items-center justify-center rounded-full opacity-100 duration-300">
            <CircularProgress sx={{ color: "#ffffff" }} size={40} />
          </div>
        )}

        <input
          type="file"
          accept="image/*"
          name="userProfile"
          id="userProfile"
          onChange={handleUpdateProfilePic}
          multiple={false}
          style={{
            clip: "rect(0 0 0 0)",
            clipPath: "inset(50%)",
            height: 1,
            overflow: "hidden",
            position: "absolute",
            bottom: 0,
            left: 0,
            whiteSpace: "nowrap",
            width: 1,
          }}
        />
        <EditIcon className="absolute bottom-5 right-4 lg:bottom-3 lg:right-3 p-0 text-gray" />
      </IconButton>
      <h2 className="text-xl lg:text-base xl:text-xl font-inter text-black mt-5 whitespace-nowrap overflow-hidden">
        {typedUser?.userName}
      </h2>
      <h6 className="font-inter text-sm lg:text-xs xl:text-sm text-gray font-light whitespace-nowrap overflow-hidden">
        {typedUser?.role.toUpperCase()}
      </h6>
      <h6 className="font-inter text-sm lg:text-xs xl:text-sm text-gray font-light mb-3 whitespace-nowrap overflow-hidden">
        Member Since: {formatDate(String(typedUser?.createdAt))}
      </h6>
      <Link href="/user/settings" className="w-full mx-auto text-center">
        <Button
          sx={{
            borderRadius: 0,
            background: `linear-gradient(45deg, ${colorConfig.secondary}, ${colorConfig.primary}) !important`,
            color: colorConfig.white,
            width: "60%",
            textTransform: "none",
          }}
        >
          <span className="font-inter mr-2 whitespace-nowrap overflow-hidden">
            Edit Profile
          </span>
          <EditIcon />
        </Button>
      </Link>
      <div className="flex items-center justify-center gap-1 mt-3">
        {options.map((o, i) =>
          o.link ? (
            <Link key={i} href={o.link} target="_blank">
              <IconButton
                sx={{
                  background: colorConfig.white,
                  color: colorConfig.lightGray,
                  transition: ".8s",
                }}
              >
                {<o.logo className="text-lg" />}
              </IconButton>
            </Link>
          ) : (
            <IconButton
              key={i}
              sx={{
                background: colorConfig.white,
                color: colorConfig.lightGray,
                transition: ".8s",
                cursor: "not-allowed",
              }}
              disabled
            >
              {<o.logo className="text-lg" />}
            </IconButton>
          )
        )}
      </div>
    </div>
  );
};

export default ProfileUserDetailsLeftContent;
