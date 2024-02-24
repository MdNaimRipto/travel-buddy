import React from "react";
import TargetIcon from "@mui/icons-material/AdsClickRounded";
import { colorConfig } from "@/configs/colorConfig";
import CommonButton from "@/components/common/buttons/CommonButton";
import Image from "next/image";
import users from "@/assets/about/customer-img-grp.png";
import Link from "next/link";

const AboutContent = () => {
  return (
    <div className="w-full lg:w-1/2 text-center md:text-start">
      <h2 className="text-xl md:text-5xl font-medium leading-9 md:leading-[65px] text-black">
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
          dolorem eaque accusantium culpa rem delectus autem, tenetur blanditiis
          ducimus distinctio unde deserunt aliquid porro earum eius provident
          perspiciatis cumque sint ut praesentium! Vel, praesentium! Soluta
          voluptas possimus deserunt nemo maxime, accusantium veritatis
          perspiciatis omnis libero consequuntur recusandae molestiae incidunt
          dolorem?
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
            <Link href={"#popular-location"} className="hover:text-secondary">
              <h6 className="font-semibold text-sm md:text-lg titleFont">
                500+
              </h6>
              <p className="titleFont text-xs md:text-sm text-black">
                Customers
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
