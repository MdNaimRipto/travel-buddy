import React from "react";

interface IGeneralAuthInputField {
  label: string;
  placeHolder: string;
  type: string;
  name: string;
  commonError: string;
  value: boolean;
  handleInputBlur: any;
}

const GeneralAuthInputField = ({
  label,
  placeHolder,
  type,
  name,
  commonError,
  value,
  handleInputBlur,
}: IGeneralAuthInputField) => {
  return (
    <div>
      <label
        className={"text-black font-normal text-sm md:text-base font-poppins"}
      >
        {label}{" "}
        {value && <span className={"text-error text-xs"}>{commonError}</span>}
      </label>
      <input
        name={name}
        id={name}
        type={type}
        placeholder={placeHolder}
        className={`w-full py-4 md:py-3 px-2 text-xs md:text-sm rounded my-3 outline-none border bg-white ${
          value
            ? "border-error placeholder:text-error"
            : "border-lightGray placeholder:text-gray"
        }`}
        onBlur={handleInputBlur(name)}
        required
      />
    </div>
  );
};

export default GeneralAuthInputField;
