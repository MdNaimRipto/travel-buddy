import { IUser } from "@/types/userTypes";
import React from "react";

const DateOfBirthSelectBox = ({
  typedUser,
  label,
}: {
  typedUser: IUser;
  label: string;
}) => {
  let dates = [];
  for (let i = 1; i <= 31; i++) {
    dates.push(String(i).padStart(2, "0"));
  }

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let years = [];
  for (let i = 1800; i <= 2024; i++) {
    years.push(String(i));
  }

  return (
    <div className="flex flex-col gap-3">
      <label className="font-inter font-medium text-sm text-black">
        {label}
      </label>
      <div className="md:grid grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="w-full mb-3 lg:mb-0">
          <select
            name="date"
            className="mb-3 p-3 w-full rounded-xl border border-lightGray focus:outline-darkGray font-inter font-normal text-sm appearance-none text-gray cursor-pointer"
            required={false}
          >
            <option value="">dd</option>
            {dates.map((d, i) => (
              <option value={d} key={i}>
                {d}
              </option>
            ))}
          </select>
          <span className="block min-h-[16px] font-inter text-xs text-lightGray font-light">
            Current ({typedUser?.dateOfBirth?.date})
          </span>
        </div>
        <div className="w-full mb-3 lg:mb-0">
          <select
            name="month"
            className="mb-3 p-3 w-full rounded-xl border border-lightGray focus:outline-darkGray font-inter font-normal text-sm appearance-none text-gray cursor-pointer"
            required={false}
          >
            <option value="">mm</option>
            {months.map((m, i) => (
              <option value={m} key={i}>
                {m}
              </option>
            ))}
          </select>
          <span className="block min-h-[16px] font-inter text-xs text-lightGray font-light">
            Current ({typedUser?.dateOfBirth?.month})
          </span>
        </div>
        <div className="w-full mb-3 lg:mb-0">
          <select
            name="year"
            className="mb-3 p-3 w-full rounded-xl border border-lightGray focus:outline-darkGray font-inter font-normal text-sm appearance-none text-gray cursor-pointer"
            required={false}
          >
            <option value="">yyyy</option>
            {years.reverse().map((y, i) => (
              <option value={y} key={i}>
                {y}
              </option>
            ))}
          </select>
          <span className="block min-h-[16px] font-inter text-xs text-lightGray font-light">
            Current ({typedUser?.dateOfBirth?.year})
          </span>
        </div>
      </div>
    </div>
  );
};

export default DateOfBirthSelectBox;
