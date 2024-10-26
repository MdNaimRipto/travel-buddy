import { IconButton, Tooltip } from "@mui/material";
import React, { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { colorConfig } from "@/configs/colorConfig";

interface ISecurityPasswordInputField {
  label: string;
}

const SecurityPasswordInputField = ({ label }: ISecurityPasswordInputField) => {
  const [isPassHidden, setIsPassHidden] = useState(true);

  return (
    <div className="flex flex-col gap-3">
      <label className="font-inter font-medium text-sm text-darkGray">
        {label}
      </label>
      <div className="relative">
        <input
          name="password"
          id="password"
          type={isPassHidden ? "password" : "text"}
          placeholder="Enter Password"
          className="p-3 rounded-xl border border-lightGray focus:outline-darkGray font-inter font-normal text-sm appearance-none text-gray w-full"
          required
          autoComplete="off"
        />
        <div className="absolute top-1/2 -translate-y-1/2 right-3">
          {isPassHidden ? (
            <Tooltip title="Show Password">
              <IconButton
                onClick={() => {
                  setIsPassHidden(false);
                }}
              >
                <VisibilityIcon
                  sx={{ color: colorConfig.gray, fontSize: "20px" }}
                />
              </IconButton>
            </Tooltip>
          ) : (
            <Tooltip title="Hide Password">
              <IconButton
                onClick={() => {
                  setIsPassHidden(true);
                }}
              >
                <VisibilityOffIcon
                  sx={{ color: colorConfig.gray, fontSize: "20px" }}
                />
              </IconButton>
            </Tooltip>
          )}
        </div>
      </div>
    </div>
  );
};

export default SecurityPasswordInputField;
