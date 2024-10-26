import React from "react";

const DateOfBirthSelectBox = () => {
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
  for (let i = 1980; i <= 2024; i++) {
    years.push(String(i));
  }

  return (
    <div className="flex flex-col gap-3">
      <label className="font-inter font-medium text-sm text-black">
        Date of Birth
      </label>
      <div className="grid grid-cols-3 gap-4">
        <select
          className="p-3 rounded-xl border border-lightGray focus:outline-darkGray font-inter font-normal text-sm appearance-none text-gray cursor-pointer"
          required={false}
        >
          <option value="">dd</option>
          {dates.map((d, i) => (
            <option value={d} key={i}>
              {d}
            </option>
          ))}
        </select>
        <select
          className="p-3 rounded-xl border border-lightGray focus:outline-darkGray font-inter font-normal text-sm appearance-none text-gray cursor-pointer"
          required={false}
        >
          <option value="">mm</option>
          {months.map((m, i) => (
            <option value={m} key={i}>
              {m}
            </option>
          ))}
        </select>
        <select
          className="p-3 rounded-xl border border-lightGray focus:outline-darkGray font-inter font-normal text-sm appearance-none text-gray cursor-pointer"
          required={false}
        >
          <option value="">yyyy</option>
          {years.map((y, i) => (
            <option value={y} key={i}>
              {y}
            </option>
          ))}
        </select>
      </div>
      <span className="block min-h-[16px] font-inter text-xs text-lightGray font-light"></span>
    </div>
  );
};

export default DateOfBirthSelectBox;
