/* eslint-disable react-hooks/exhaustive-deps */
import { UseCommonImports } from "@/utils/UseCommonImports";
import { Checkbox, FormControlLabel } from "@mui/material";
import React, { useEffect } from "react";
import SideNavLabel from "./SideNavLabel";
import { muiCheckedStyle } from "./SideNavUtils";

const SideNavCheckboxOptions = ({
  option: o,
  queryParam,
}: {
  option: { label: string | any; value: string | number };
  queryParam: string;
}) => {
  const { Router } = UseCommonImports();

  const queryParamKey = Router.query[queryParam];

  useEffect(() => {
    if (queryParamKey === "" || !queryParamKey) {
      const { [queryParam]: emptyParam, ...updatedQuery } = Router.query;
      Router.push(
        {
          pathname: Router.pathname,
          query: updatedQuery,
        },
        undefined,
        { scroll: false }
      );
    }
  }, [queryParamKey]);

  const allQueryValue = queryParamKey?.toString().split("+");

  const allSelectedQueryValue =
    allQueryValue &&
    allQueryValue.length > 0 &&
    allQueryValue[allQueryValue.length - 1] === ""
      ? allQueryValue.slice(0, -1)
      : allQueryValue || [];

  const handleCheckboxChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    selectedOption: string
  ) => {
    e.preventDefault();
    let updatedValues;
    const currentOptions = queryParamKey?.toString() || "";
    updatedValues = currentOptions.includes(selectedOption)
      ? currentOptions.replace(`${selectedOption}+`, "")
      : `${currentOptions}${selectedOption}+`;
    Router.push(
      {
        pathname: Router.pathname,
        query: { ...Router.query, [queryParam]: updatedValues },
      },
      undefined,
      { scroll: false }
    );
  };

  return (
    <FormControlLabel
      value={o.value}
      control={
        <Checkbox
          onChange={e => handleCheckboxChange(e, o.value.toString())}
          checked={
            allSelectedQueryValue &&
            allSelectedQueryValue.includes(o.value.toString())
          }
          sx={muiCheckedStyle}
        />
      }
      label={<SideNavLabel option={o} />}
      sx={{
        ml: "3px",
      }}
    />
  );
};

export default SideNavCheckboxOptions;
