import React from "react";

interface IBasicSelectBox {
  label: string;
  options: Array<{
    option: string;
    value: string;
  }>;
  required: boolean;
  message?: string;
}

const BasicSelectBox = ({
  label,
  options,
  required,
  message,
}: IBasicSelectBox) => {
  return (
    <div className="flex flex-col gap-3">
      <label className="font-inter font-medium text-sm text-black">
        {label}
      </label>
      <select
        className="p-3 rounded-xl border border-lightGray focus:outline-darkGray font-inter font-normal text-sm appearance-none text-gray cursor-pointer"
        required={required}
      >
        {options.map((o, i) => (
          <option value={o.value} key={i}>
            {o.option}
          </option>
        ))}
      </select>
      <span className="block min-h-[16px] font-inter text-xs text-lightGray font-light">
        {message}
      </span>
    </div>
  );
};

export default BasicSelectBox;
