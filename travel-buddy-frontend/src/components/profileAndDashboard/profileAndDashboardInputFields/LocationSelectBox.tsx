import { useQuery } from "@tanstack/react-query";
import React from "react";
import BasicSelectBox from "./BasicSelectBox";

interface ILocationSelectBox {
  api: string;
  label: string;
  required: boolean;
}

const LocationSelectBox = ({ api, label, required }: ILocationSelectBox) => {
  console.log({ label, api });
  const { isLoading, data } = useQuery({
    queryKey: [label],
    queryFn: async () => {
      const res = await fetch(api);
      const result = await res.json();
      return result;
    },
  });

  if (isLoading) {
    return (
      <div className="flex flex-col gap-3">
        <label className="font-inter font-medium text-sm text-black">
          {label}
        </label>
        <select
          className="p-3 rounded-xl border border-lightGray focus:outline-darkGray font-inter font-normal text-sm appearance-none text-gray cursor-pointer"
          disabled
        >
          <option value="">Loading...</option>
        </select>
        <span className="block min-h-[16px] font-inter text-xs text-lightGray font-light"></span>
      </div>
    );
  }

  let options: Array<{ option: string; value: string }> = [
    {
      option: `Select ${label}`,
      value: "",
    },
  ];
  data.elements.map((c: any, i: number) =>
    options.push({
      option: c.tags["name:en"],
      value: c.tags["name:en"],
    })
  );

  return (
    <BasicSelectBox
      label={label}
      options={options}
      required={required}
      message="Not Update Yet!"
    />
  );
};

export default LocationSelectBox;
