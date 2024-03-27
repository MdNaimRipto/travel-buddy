import { IconButton, Tooltip } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useState } from "react";
import { colorConfig } from "@/configs/colorConfig";

interface IPasswordInputField {
  value: {
    password: boolean;
  };
  handleInputBlur: any;
}

const PasswordInputField = ({
  value,
  handleInputBlur,
}: IPasswordInputField) => {
  const [isPassHidden, setIsPassHidden] = useState(true);

  return (
    <div>
      <label
        className={"text-black font-normal text-sm md:text-base font-poppins"}
      >
        Password{" "}
        {value.password && (
          <span className={"text-error text-xs"}>Password Required!</span>
        )}
      </label>
      <div className="relative">
        <input
          name="password"
          id="password"
          type={isPassHidden ? "password" : "text"}
          placeholder="Enter Password"
          className={`w-full py-4 md:py-3 px-2 text-xs md:text-sm rounded my-3 outline-none border bg-white ${
            value.password
              ? "border-error placeholder:text-error"
              : "border-lightGray placeholder:text-gray"
          }`}
          onBlur={handleInputBlur("password")}
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
                  sx={{ color: "#1C1C1C", fontSize: "20px" }}
                />
              </IconButton>
            </Tooltip>
          )}
        </div>
      </div>
    </div>
  );
};

export default PasswordInputField;
