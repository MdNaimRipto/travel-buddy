import React, { useState } from "react";
import CommonTitle from "@/components/common/titles/CommonTitle";
import blogImg1 from "@/assets/blogs/blog1.webp";
import blogImg2 from "@/assets/blogs/blog2.webp";
import blogImg3 from "@/assets/blogs/blog3.webp";
import blogImg4 from "@/assets/blogs/blog4.webp";
import FocusedBlog from "./FocusedBlog";
import OtherBlogs from "./OtherBlogs";

const Blogs = () => {
  const [currentFocusedBlog, setCurrentFocusedBlog] = useState(0);

  const blogs = [
    {
      title: "Our Begin Now What Your Will Bean Forest This Our Agency.",
      date: "Nov 10, 2023",
      // img: "https://i.ibb.co.com/yc8sCBCn/blog1.jpg",
      img: blogImg1,
    },
    {
      title: "Our Begin Now What Your Will Bean Forest This Our Agency.",
      date: "Nov 10, 2023",
      // img: "https://i.ibb.co.com/5XJ3HmYz/blog2.jpg",
      img: blogImg2,
    },
    {
      title: "Our Begin Now What Your Will Bean Forest This Our Agency.",
      date: "Nov 10, 2023",
      // img: "https://i.ibb.co.com/yBdc8d8Y/blog3.jpg",
      img: blogImg3,
    },
    {
      title: "Our Begin Now What Your Will Bean Forest This Our Agency.",
      date: "Nov 10, 2023",
      // img: "https://i.ibb.co.com/9ktVTfmH/blog4.jpg",
      img: blogImg4,
    },
  ];

  return (
    <div className="container px-4 overflow-hidden mb-16">
      <CommonTitle title="Latest Blogs" linkTitle="View All" path="/" />
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-4 lg:px-5 lg:h-[450px] rounded-lg">
        <FocusedBlog
          blogs={blogs}
          setCurrentFocusedBlog={setCurrentFocusedBlog}
        />
        <OtherBlogs blogs={blogs} currentFocusedBlog={currentFocusedBlog} />
      </div>
    </div>
  );
};

export default Blogs;
