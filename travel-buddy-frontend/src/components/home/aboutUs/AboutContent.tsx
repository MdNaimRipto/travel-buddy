import React from "react";
import TargetIcon from "@mui/icons-material/AdsClickRounded";
import { colorConfig } from "@/configs/colorConfig";
import CommonButton from "@/components/common/buttons/CommonButton";
import Image from "next/image";
import users from "@/assets/about/customer-img-grp.png";
import Link from "next/link";

const AboutContent = () => {
  return (
    <div className="w-full lg:w-1/2 text-center lg:text-start">
      <h2 className="text-xl md:text-4xl xl:text-5xl font-semibold leading-9 md:leading-[65px] xl:leading-[75px] text-black uppercase">
        <span className="titleFont">{`Let's Know About`}</span>
        <br />
        <span className="titleFont">{`Travel-Buddy`}</span>
      </h2>
      <div className="flex items-center justify-center md:justify-start my-3 gap-2">
        <TargetIcon sx={{ color: colorConfig.secondary, fontSize: 36 }} />
        <p className="titleFont text-black font-medium">About Us & Our Goal</p>
      </div>
      <div>
        <p className="leading-7 md:leading-8 text-black text-justify text-sm md:text-base">
          {`Travel Buddy is your reliable companion in crafting the perfect trip.
          Whether you're planning a quick getaway or a long-awaited vacation,
          our platform helps you discover the best hotels tailored to your
          budget and preferences. With smart recommendations, personalized
          filters, and a simple booking process, we make travel stress-free and
          enjoyable. From beachside resorts to cozy mountain lodges, Travel
          Buddy ensures every journey feels just right. Trust us to turn your
          travel dreams into well-planned realities—every time, everywhere.`}
        </p>
        <div className="mt-5 flex items-center justify-between">
          <CommonButton title="Read More" />
          <div className="flex flex-col md:flex-row items-center gap-2">
            <Image
              className=""
              src={users.src}
              width={users.width}
              height={users.height}
              alt="Customer Reviews"
              loading="lazy"
            />
            <Link href={"#reviews"} className="hover:text-secondary">
              <h6 className="font-semibold text-sm md:text-lg titleFont">
                500+
              </h6>
              <p className="titleFont text-xs md:text-sm text-black">
                Travelers
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
