import CommonTitle from "@/components/common/titles/CommonTitle";
import React from "react";
import AboutContent from "./AboutContent";
import Image from "next/image";
import aboutImg from "@/assets/about/about.webp";
import OnScrollAnimation from "@/components/animation/OnScrollAnimation";

const AboutUs = () => {
  return (
    <OnScrollAnimation>
      <div className="container px-4 mb-16">
        <CommonTitle title="About Us" path="/" linkTitle="Read More" />
        <div className="flex flex-col lg:flex-row items-center justify-center gap-4 xl:gap-16">
          <div className="h-[550px] overflow-hidden rounded-xl">
            <Image
              src={aboutImg.src}
              height={aboutImg.height}
              width={aboutImg.width}
              alt="About-Image"
              priority
              className="w-full h-full object-cover"
            />
          </div>
          <AboutContent />
        </div>
      </div>
    </OnScrollAnimation>
  );
};

export default AboutUs;
