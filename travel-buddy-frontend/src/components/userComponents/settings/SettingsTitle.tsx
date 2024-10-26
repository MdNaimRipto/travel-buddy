import React from "react";

const SettingsTitle = ({ title }: { title: string }) => {
  return (
    <h4 className="font-inter mt-6 mb-8 text-lg lg:text-base xl:text-lg text-gray">
      {title}
    </h4>
  );
};

export default SettingsTitle;
