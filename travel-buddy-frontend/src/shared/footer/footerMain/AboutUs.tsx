import React from "react";
import { CommonListsLi, FooterTitle, commonListStyle } from "../footerCommon";

const AboutUs = () => {
  const aboutList = [
    {
      title: "About Us",
      path: "/aboutUs",
    },
    {
      title: "FAQ",
      path: "/aboutUs#faq",
    },
    {
      title: "Login",
      path: "/auth/login",
    },
    {
      title: "Register",
      path: "/auth/register",
    },
    {
      title: "Terms & Conditions",
      path: "/",
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
