import { useState } from "react";
import CommonFullWidthBtn from "@/components/common/buttons/CommonFullWidthBtn";
import { SuccessToast } from "@/components/common/toasts/SuccessToast";

const ContactForm = ({
  isContactOpen,
  setIsContactOpen,
}: {
  isContactOpen: boolean;
  setIsContactOpen: (v: boolean) => void;
}) => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !message || loading) return;

    setLoading(true);

    // simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    SuccessToast("Message sent successfully!");

    setEmail("");
    setMessage("");
    setLoading(false);

    // close contact panel
    setIsContactOpen(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`${
        isContactOpen ? "opacity-100 mt-0" : "opacity-0 mt-3"
      } duration-300 delay-[.4s]`}
    >
      <div>
        <label className="block mb-3 titleFont font-medium text-black">
          Email
        </label>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="w-full p-3 border border-lightGray focus:outline-none mb-3 titleFont rounded"
          placeholder="Enter Email"
          required
          disabled={loading}
        />
      </div>

      <div>
        <label className="block mb-3 titleFont font-medium text-black">
          Message
        </label>
        <textarea
          rows={5}
          value={message}
          onChange={e => setMessage(e.target.value)}
          className="w-full p-3 border border-lightGray focus:outline-none mb-3 titleFont rounded"
          placeholder="Enter Message"
          required
          disabled={loading}
        />
      </div>

      <CommonFullWidthBtn
        title={loading ? "Sending..." : "Submit Message"}
        type="submit"
        disabled={loading}
      />
    </form>
  );
};

export default ContactForm;
