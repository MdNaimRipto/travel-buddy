import React, { useEffect, useState } from "react";
import BasicSelectBox from "./BasicSelectBox";

interface ILocationSelectBox {
  api: string;
  label: string;
  required: boolean;
}

interface OverpassElement {
  tags: { [key: string]: string };
}

interface OverpassApiResponse {
  elements: OverpassElement[];
}

const LocationSelectBox = ({ api, label, required }: ILocationSelectBox) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<OverpassApiResponse | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(api);
        const result = await res.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [api]);

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

  if (!data) {
    return (
      <div className="flex flex-col gap-3">
        <label className="font-inter font-medium text-sm text-black">
          {label}
        </label>
        <select
          className="p-3 rounded-xl border border-lightGray focus:outline-darkGray font-inter font-normal text-sm appearance-none text-gray cursor-pointer"
          disabled
        >
          <option value="">Select {label}</option>
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
