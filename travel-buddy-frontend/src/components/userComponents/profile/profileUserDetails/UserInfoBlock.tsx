import React from "react";

const UserInfoBlock = ({
  title,
  information,
}: {
  title: string;
  information: Array<{ name: string; value: string }>;
}) => {
  return (
    <div>
      <h4 className="font-inter mb-8 text-lg lg:text-base xl:text-lg text-gray">
        {title}
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-0">
        {information.map((info, i) => (
          <div key={i} className="mb-10">
            <h6 className="text-sm lg:text-xs xl:text-sm font-inter text-black mb-3">
              {info.name}
            </h6>
            <p className="text-sm lg:text-xs xl:text-sm leading-8 font-inter text-gray font-light max-h-14 overflow-hidden">
              {info.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserInfoBlock;
