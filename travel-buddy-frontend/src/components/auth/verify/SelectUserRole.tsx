import React, { useState } from "react";
import AuthTitle from "../AuthTitle";
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import AuthSubTitle from "../AuthSubTitle";
import { GrUserAdmin, GrUser } from "react-icons/gr";
import VerifyProgress from "./VerifyProgress";
import OpacityTransition from "@/components/animation/OpacityTransition";
import { UseCommonImports } from "@/utils/UseCommonImports";

const SelectUserRole = () => {
  const { Router } = UseCommonImports();

  const { userRole } = Router.query;

  // const [role, setRole] = useState(userRole ? userRole : "");

  const options = [
    {
      label: "Customer",
      value: "customer",
      icon: <GrUser size={44} />,
    },
    {
      label: "Hotel Owner",
      value: "hotelOwner",
      icon: <GrUserAdmin size={44} />,
    },
  ];

  return (
    <OpacityTransition>
      <div className="container flex items-center justify-center min-h-screen md:px-4">
        <div
          className="md:rounded-xl md:w-11/12 lg:w-3/5 xl:w-1/2  px-4 py-12 md:p-8"
          style={{
            boxShadow: "0px 0px 10px -2px",
          }}
        >
          <AuthTitle title="User Role" />
          <AuthSubTitle title="We are giving users chance to select there role and use this platform according there need!" />
          <FormControl
            sx={{
              width: {
                xs: "100%",
                sm: "auto",
              },
            }}
          >
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="userRole"
              defaultValue={userRole}
              sx={{
                display: "flex",
                flexDirection: {
                  xs: "column",
                  sm: "row",
                },
                alignItems: "center",
                gap: 4,
                mx: {
                  xs: 0,
                  sm: 4,
                },
              }}
              onChange={e => {
                // setRole(String(e.target.value));
                Router.replace(
                  {
                    pathname: Router.pathname,
                    query: { ...Router.query, userRole: e.target.value },
                  },
                  undefined,
                  { shallow: true }
                );
              }}
            >
              {options.map((o, i) => (
                <FormControlLabel
                  key={i}
                  value={o.value}
                  control={<Radio sx={{ display: "none" }} />}
                  label={
                    <div
                      className={`w-full h-full flex flex-col items-center justify-center gap-2 border rounded-xl ${
                        userRole === o.value
                          ? "bg-gradient-to-l from-primary to-secondary text-white border-secondary"
                          : "bg-white border-lightGray text-black"
                      }`}
                    >
                      {o.icon}
                      <p className="font-poppins text-lg">{o.label}</p>
                    </div>
                  }
                  sx={{
                    ml: 0,
                    mr: 0,
                    width: {
                      xs: "100%",
                      sm: 200,
                      md: 180,
                    },
                    height: {
                      xs: 150,
                      sm: 140,
                      md: 120,
                    },
                    display: "block",
                    transition: ".3s",
                    ":hover": {
                      transform: "scale(1.1)",
                    },
                  }}
                />
              ))}
            </RadioGroup>
          </FormControl>
          <VerifyProgress nextPath="password" />
        </div>
      </div>
    </OpacityTransition>
  );
};

export default SelectUserRole;
