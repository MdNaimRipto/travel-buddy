import BannerSlider from "./BannerSlider";
import BannerSearchForm from "./bannerSerachForm/BannerSearchForm";

const Banner = () => {
  return (
    <div className="relative overflow-hidden container px-4 h-[300px] md:h-[600px] mb-16">
      <BannerSlider />
      <BannerSearchForm />
    </div>
  );
};

export default Banner;
