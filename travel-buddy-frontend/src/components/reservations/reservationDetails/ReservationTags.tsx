import React from "react";
import Link from "next/link";
import BestDealPng from "@/assets/featured-icons/percentage.webp";
import FirstClassPng from "@/assets/featured-icons/crown.webp";
import FamilyTypePng from "@/assets/featured-icons/family.webp";
import NatureViewPng from "@/assets/featured-icons/view.webp";
import RoomsPng from "@/assets/featured-icons/room.webp";
import BedsPng from "@/assets/featured-icons/bed.webp";
import HotTubPng from "@/assets/featured-icons/hot-tub.webp";
import TourGuidePng from "@/assets/featured-icons/guide.webp";
import Image from "next/image";

const ReservationTags = ({
  rClass,
  type,
}: {
  rClass: string;
  type: string;
}) => {
  const tags = [
    {
      icon: BestDealPng,
      tag: "Best Deal",
      link: "",
    },
    {
      icon: FirstClassPng,
      tag: rClass + " Class",
      link: `/reservations?reservationClasses=${rClass}`,
    },
    {
      icon: FamilyTypePng,
      tag: type + " Type",
      link: `/reservations?reservationTypes=${type}`,
    },
    {
      icon: NatureViewPng,
      tag: "Balcony View",
      link: "",
    },
    {
      icon: RoomsPng,
      tag: "2 Rooms",
      link: "",
    },
    {
      icon: BedsPng,
      tag: "2 Beds",
      link: "",
    },
    {
      icon: HotTubPng,
      tag: "Hot Bath Tub",
      link: "",
    },
    {
      icon: TourGuidePng,
      tag: "Personal Guide",
      link: "",
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 my-8 px-5">
      {tags.map((tag, i) => (
        <Link
          key={i}
          href={tag.link}
          className="flex flex-col items-center justify-center gap-1 border border-black group hover:border-secondary duration-300 rounded-lg h-24 p-2"
        >
          <div className="w-8 md:w-10">
            <Image
              src={tag.icon.src}
              alt="Features Icon"
              width={200}
              height={200}
              priority
            />
          </div>
          <span className="text-center text-xs lg:text-sm titleFont uppercase font-semibold group-hover:text-secondary duration-300">
            {tag.tag}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default ReservationTags;
