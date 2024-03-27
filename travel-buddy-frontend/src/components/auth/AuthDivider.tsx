import { colorConfig } from "@/configs/colorConfig";
import { Divider } from "@mui/material";
import React from "react";

const AuthDivider = () => {
  return (
    <>
      <div className="hidden md:block">
        <Divider variant="middle" orientation="vertical">
          <span className="titleFont">Or</span>
        </Divider>
      </div>
      <div className="block md:hidden">
        <Divider variant="middle" orientation="horizontal">
          <span className="titleFont">Or</span>
        </Divider>
      </div>
    </>
  );
};

export default AuthDivider;
