import React from "react";
import logo from "@/assets/auth/google.png";
import CommonProviderBtn from "./CommonProviderBtn";
import Link from "next/link";

const Google = () => {
  return (
    <Link
      href={`/auth/verify?tab=userRole&email=email@gmail.com`}
      className="w-auto md:w-full"
    >
      <CommonProviderBtn logo={logo} title="Continue With Google" />
    </Link>
  );
};

export default Google;
