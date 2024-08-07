import React from "react";
import Link from "next/link";
import BestDealPng from "@/assets/featured-icons/percentage.png";
import FirstClassPng from "@/assets/featured-icons/crown.png";
import FamilyTypePng from "@/assets/featured-icons/family.png";
import NatureViewPng from "@/assets/featured-icons/view.png";
import RoomsPng from "@/assets/featured-icons/room.png";
import BedsPng from "@/assets/featured-icons/bed.png";
import HotTubPng from "@/assets/featured-icons/hot-tub.png";
import TourGuidePng from "@/assets/featured-icons/guide.png";
import Image from "next/image";

const ReservationTags = () => {
  const tags = [
    {
      icon: BestDealPng,
      tag: "Best Deal",
      link: "01",
    },
    {
      icon: FirstClassPng,
      tag: "First Class",
      link: "/reservations?reservationClasses=first%2B",
    },
    {
      icon: FamilyTypePng,
      tag: "Family Type",
      link: "/reservations?reservationTypes=family%2B",
    },
    {
      icon: NatureViewPng,
      tag: "Balcony View",
      link: "01",
    },
    {
      icon: RoomsPng,
      tag: "2 Rooms",
      link: "01",
    },
    {
      icon: BedsPng,
      tag: "2 Beds",
      link: "01",
    },
    {
      icon: HotTubPng,
      tag: "Hot Bath Tub",
      link: "01",
    },
    {
      icon: TourGuidePng,
      tag: "Personal Guide",
      link: "01",
    },
  ];

  return (
    <div className="grid grid-cols-5 gap-4 my-8 px-5">
      {tags.map((tag, i) => (
        <Link
          key={i}
          href={tag.link}
          className="flex flex-col items-center justify-center gap-1 border border-black group hover:border-secondary duration-300 rounded-lg h-24"
        >
          <div className="w-10">
            <Image
              src={tag.icon.src}
              alt="Features Icon"
              width={200}
              height={200}
              priority
            />
          </div>
          <span className="text-sm titleFont uppercase font-semibold group-hover:text-secondary duration-300">
            {tag.tag}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default ReservationTags;
