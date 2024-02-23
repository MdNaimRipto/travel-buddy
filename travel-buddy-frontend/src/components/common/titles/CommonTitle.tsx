import Link from "next/link";
import React from "react";
import NavigateIcon from "@mui/icons-material/OpenInNew";

interface ITitle {
  title: string;
  path: string;
}

const CommonTitle = ({ title, path }: ITitle) => {
  return (
    <div className="flex items-center justify-between mb-8">
      <h4 className="text-lg md:text-xl lg:text-3xl titleFont font-medium text-black whitespace-nowrap">
        {title}
      </h4>
      <Link
        href={path}
        className="flex items-center gap-1 text-sm md:text-base lg:text-lg text-black hover:text-secondary duration-500"
      >
        <span className="titleFont font-medium mt-[2px]">See All</span>
        <NavigateIcon
          sx={{
            fontSize: {
              xs: 16,
              sm: 20,
            },
          }}
        />
      </Link>
    </div>
  );
};

export default CommonTitle;
