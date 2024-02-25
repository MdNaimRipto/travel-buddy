import CommonFullWidthBtn from "@/components/common/buttons/CommonFullWidthBtn";
import React from "react";

const ContactForm = ({ isContactOpen }: { isContactOpen: boolean }) => {
  return (
    <form
      className={`${
        isContactOpen ? "opacity-100 mt-0" : "opacity-0 mt-3"
      } duration-300 delay-[.8s]`}
    >
      <div>
        <label className="block mb-3 titleFont font-medium text-black">
          Email
        </label>
        <input
          type="email"
          className="w-full p-3 border border-lightGray focus:outline-none mb-3 titleFont rounded"
          placeholder="Enter Email"
        />
      </div>
      <div>
        <label className="block mb-3 titleFont font-medium text-black">
          Message
        </label>
        <textarea
          name=""
          id=""
          rows={5}
          className="w-full p-3 border border-lightGray focus:outline-none mb-3 titleFont rounded"
          placeholder="Enter Message"
        />
      </div>
      <CommonFullWidthBtn title="Submit Message" />
    </form>
  );
};

export default ContactForm;
