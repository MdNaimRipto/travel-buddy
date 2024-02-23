import BannerSlider from "./BannerSlider";
import BannerSearchForm from "./bannerSerachForm/BannerSearchForm";

const Banner = () => {
  return (
    <div className="relative overflow-hidden px-4 h-[470px] md:h-[560px] lg:h-[850px] mb-16 pt-4">
      <BannerSlider />
      <BannerSearchForm />
    </div>
  );
};

export default Banner;
