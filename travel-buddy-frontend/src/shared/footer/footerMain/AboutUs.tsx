import React from "react";
import Link from "next/link";
import { CommonListsLi, FooterTitle, commonListStyle } from "../footerCommon";

const AboutUs = () => {
  const aboutList = [
    {
      title: "About Us",
      path: "/aboutUs",
    },
    {
      title: "FAQ",
      path: "/faq",
    },
    {
      title: "Login",
      path: "/login",
    },
    {
      title: "Register",
      path: "/register",
    },
    {
      title: "Terms & Conditions",
      path: "/termsAndConditions",
    },
  ];
  return (
    <div>
      <FooterTitle title="About Us" />
      <ul className={commonListStyle}>
        <CommonListsLi list={aboutList} />
      </ul>
    </div>
  );
};

export default AboutUs;
