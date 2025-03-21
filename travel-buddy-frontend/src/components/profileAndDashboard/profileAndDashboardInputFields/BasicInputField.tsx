import React from "react";

interface IBasicInputField {
  label: string;
  type: "text" | "email" | "tel" | "number";
  placeholder: string;
  message?: string;
  required: boolean;
  name: string;
}

const BasicInputField = ({
  label,
  type,
  placeholder,
  message,
  required,
  name,
}: IBasicInputField) => {
  return (
    <div className="flex flex-col gap-3">
      <label className="font-inter font-medium text-sm text-darkGray">
        {label}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="p-3 rounded-xl border border-lightGray focus:outline-darkGray font-inter font-normal text-sm appearance-none text-gray w-full"
        required={required}
      />
      <span className="block min-h-[16px] font-inter text-xs text-lightGray font-light">
        {message && message?.length >= 40
          ? `${message?.slice(0, 37)}...`
          : message}
      </span>
    </div>
  );
};

export default BasicInputField;
