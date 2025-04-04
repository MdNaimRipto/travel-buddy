import React from "react";
import { FaExclamation } from "react-icons/fa";

const NotFoundMessage = ({ title }: { title: string }) => {
  return (
    <div className="h-screen flex flex-col gap-4 justify-center items-center">
      <FaExclamation className="p-4 text-6xl bg-primary bg-opacity-20 text-secondary rounded-full" />
      <p className="text-2xl font-poppins">{title}</p>
      <span className="text-sm font-inter">Please try again later.</span>
    </div>
  );
};

export default NotFoundMessage;
