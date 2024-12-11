import React, { useState } from "react";
import { IUser } from "@/types/userTypes";
import {
  Avatar,
  Button,
  CircularProgress,
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Tooltip,
} from "@mui/material";
import { Settings, Logout, SpaceDashboard } from "@mui/icons-material";
import { colorConfig } from "@/configs/colorConfig";
import { useUserContext } from "@/context/AuthContext";
import { UseCommonImports } from "@/utils/UseCommonImports";
import { signOut } from "next-auth/react";
import { SuccessToast } from "@/components/common/toasts/SuccessToast";
import Link from "next/link";

const ProfileAndDashboardDropDown = ({
  user,
  isHomePage,
  isScrolled,
}: {
  user: IUser;
  isScrolled: boolean;
  isHomePage: boolean;
}) => {
  const { setUser } = useUserContext();
  const { Cookies } = UseCommonImports();

  const [isLoading, setIsLoading] = useState(false);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    setIsLoading(true);

    setTimeout(() => {
      signOut({ redirect: false });
      window.sessionStorage.clear();
    }, 500);

    setTimeout(() => {
      Cookies.remove("userData");
      Cookies.remove("token");
      setUser(null);
      SuccessToast("Logout Successful!");
      handleClose();
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div>
      <Tooltip title="Profile & Dashboard">
        <IconButton
          onClick={handleClick}
          size="small"
          aria-controls={open ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          sx={{
            borderRadius: {
              sm: 1,
            },
            display: "flex",
            alignItems: "center",
            gap: "4px",
            ":hover": {
              backgroundColor: "#00000000",
            },
          }}
        >
          <Avatar
            sx={{
              width: 32,
              height: 32,
              backgroundColor: colorConfig.secondary,
            }}
          >
            {user.userName.slice(0, 1)}
          </Avatar>
          <div className="hidden md:flex flex-col items-start gap-[3px] mt-1">
            <p
              className={`text-xs font-poppins font-normal ${
                !isScrolled && isHomePage ? "text-white" : "text-black"
              } duration-700`}
            >
              {user.userName}
            </p>
            <span
              className={`text-[10px] font-inter font-normal ${
                !isScrolled && isHomePage ? "text-white" : "text-darkGray"
              } duration-700`}
            >
              Profile & Dashboard
            </span>
          </div>
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={!isLoading ? handleClose : undefined}
        // onClick={!isLoading ? handleClose : undefined}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&::before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: "25%",
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={handleClose} disabled={isLoading}>
          <Link href="/user/profile" className="w-44 flex items-center gap-0">
            <Avatar
              src={user.profileImage}
              sx={{ border: `1px solid ${colorConfig.extraLightGray}` }}
            />{" "}
            <span className="font-inter font-normal">User Profile</span>
          </Link>
        </MenuItem>
        {user.role === "admin" && (
          <MenuItem onClick={handleClose} disabled={isLoading}>
            <Link href="/" className="w-44 flex items-center gap-3">
              <SpaceDashboard color="action" />{" "}
              <span className="font-inter font-normal">Admin Dashboard</span>
            </Link>
          </MenuItem>
        )}
        {user.role === "hotelOwner" && (
          <MenuItem onClick={handleClose} disabled={isLoading}>
            <Link href="/" className="w-44 flex items-center gap-3">
              <SpaceDashboard color="action" />{" "}
              <span className="font-inter font-normal">Hotel Dashboard</span>
            </Link>
          </MenuItem>
        )}
        <Divider />
        <MenuItem onClick={handleClose} disabled={isLoading}>
          <Link
            href="/user/settings"
            className="w-44 flex items-center gap-3 my-1"
          >
            <Settings color="action" />{" "}
            <span className="font-inter font-normal">Settings</span>
          </Link>
        </MenuItem>
        <MenuItem disabled={isLoading}>
          <Button
            onClick={() => {
              handleLogout();
            }}
            disabled={isLoading}
            variant="text"
            sx={{
              p: 0,
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            {isLoading ? (
              <>
                <CircularProgress size={20} />
                <span className="font-inter font-normal normal-case text-black text-base">
                  Logging Out...
                </span>
              </>
            ) : (
              <>
                <Logout color="action" />{" "}
                <span className="font-inter font-normal normal-case text-black text-base">
                  Logout
                </span>
              </>
            )}
          </Button>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default ProfileAndDashboardDropDown;
