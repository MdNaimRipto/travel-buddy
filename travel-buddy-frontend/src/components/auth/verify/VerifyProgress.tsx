import React from "react";
import { GrCheckmark } from "react-icons/gr";
import { colorConfig } from "@/configs/colorConfig";
import { Button, ButtonGroup } from "@mui/material";
import { UseCommonImports } from "@/utils/UseCommonImports";

interface IQueryType {
  tab: "userRole" | "password";
  email: string;
  userRole: string;
  password: string;
}

const VerifyProgress = ({ nextPath }: { nextPath: string }) => {
  const { Router } = UseCommonImports();
  const { query } = Router;

  const { email, password, tab, userRole } = query as unknown as IQueryType;

  return (
    <div className="flex flex-col md:flex-row items-center justify-between mt-5">
      <div className="flex flex-wrap items-center gap-2 mb-5 md:mb-0">
        <p className={`flex items-center gap-2`}>
          <span
            className={`border border-lightGray rounded-full p-[2px] w-5 h-5 text-xs flex items-center justify-center`}
          >
            <GrCheckmark color={colorConfig.lightGray} />
          </span>
          <span className="text-xs font-poppins text-black font-medium">
            Role
          </span>
        </p>
        <p className="w-4 xl:w-6 h-[1px] bg-lightGray"></p>
        <p className={`flex items-center gap-2`}>
          <span
            className={`border border-lightGray rounded-full p-[2px] w-5 h-5 text-xs flex items-center justify-center`}
          >
            <GrCheckmark color={colorConfig.lightGray} />
          </span>
          <span className="text-xs font-poppins text-black font-medium">
            Password
          </span>
        </p>
        <p className="w-4 xl:w-6 h-[1px] bg-lightGray"></p>
        <p className={`flex items-center gap-2`}>
          <span
            className={`border border-lightGray rounded-full p-[2px] w-5 h-5 text-xs flex items-center justify-center`}
          >
            <GrCheckmark color={colorConfig.lightGray} />
          </span>
          <span className="text-xs font-poppins text-black font-medium">
            Finish
          </span>
        </p>
      </div>
      <div className="flex items-center gap-2">
        <Button
          onClick={() => Router.back()}
          variant="outlined"
          sx={{
            width: 90,
            borderColor: colorConfig.secondary,
            color: colorConfig.secondary,
            ":hover": {
              borderColor: colorConfig.secondary,
            },
          }}
        >
          Back
        </Button>
        {tab === "password" ? (
          <Button
            variant="contained"
            sx={{
              width: 100,
              background: `linear-gradient(45deg, ${colorConfig.secondary}, ${colorConfig.primary}) !important`,
              boxShadow: "none",
            }}
          >
            Finish
          </Button>
        ) : (
          <Button
            onClick={() => {
              Router.push(
                {
                  pathname: Router.pathname,
                  query: { ...Router.query, tab: nextPath },
                },
                undefined,
                { scroll: false }
              );
            }}
            variant="contained"
            sx={{
              width: 100,
              background: `linear-gradient(45deg, ${colorConfig.secondary}, ${colorConfig.primary}) !important`,
              boxShadow: "none",
            }}
          >
            Next
          </Button>
        )}
      </div>
    </div>
  );
};

export default VerifyProgress;
