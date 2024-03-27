import React from "react";

const AuthSubTitle = ({ title }: { title: string }) => {
  return (
    <p className="text-start text-black text-sm font-normal leading-7 font-poppins mb-3">
      {title}
    </p>
  );
};

export default AuthSubTitle;
