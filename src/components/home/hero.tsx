import { Button } from "../ui/button";
// import { RangeSlider } from "../ui/range-slider";

export const Hero = () => {
  return (
    <>
      <div className="bg-secondaryBg h-[663px] flex justify-center">
        <div className="max-w-[1440px]">
          <div className="w-[1376px] max-[1376px]:w-auto grid grid-cols-2">
            <div className="pt-[100px]">
              <h1 className="font-extrabold text-7xl mb-[32px]">
                FIND EVERYTHING YOU NEED AND SOME MORE
              </h1>
              <p className="mb-[32px] max-w-[545px] font-light">
                Browse through our diverse range of meticulously crafted
                garments, designed to bring out your individuality and cater to
                your sense of style.
              </p>
              <Button className="rounded-full h-[52px] px-[54px] py-[16px] text-lg font-normal mb-[48px]">
                Shop Now
              </Button>
              <div className="flex gap-x-[32px]">
                <div>
                  <p className="font-bold text-4xl">200+</p>
                  <p className="font-normal">International Brands</p>
                </div>
                <div className="w-[1px] bg-gray-600/30"></div>
                <div>
                  <p className="font-bold text-4xl">2,000+</p>
                  <p className="font-normal">High-Quality Products</p>
                </div>
                <div className="w-[1px] bg-gray-600/30"></div>
                <div>
                  <p className="font-bold text-4xl">30,000+</p>
                  <p className="font-normal">Happy Customers</p>
                </div>
              </div>
            </div>
            <div className="h-[663px] flex items-end">
              <img
                src="/src/assets/images/home.png"
                alt=""
                className="bottom-0 h-[600px]"
              />
            </div>
          </div>
        </div>
      </div>
      {/* <RangeSlider /> */}
      <div className="bg-black h-[122px] flex justify-center">
        <div className="flex items-center justify-between flex-wrap h-[122px] w-[1376px]">
          <img
            className="h-[38px]"
            src="/src/assets/logos/versace-logo.png"
            alt=""
          />
          <img
            className="h-[38px]"
            src="/src/assets/logos/zara-logo.png"
            alt=""
          />
          <img
            className="h-[38px]"
            src="/src/assets/logos/gucci-logo.png"
            alt=""
          />
          <img
            className="h-[38px]"
            src="/src/assets/logos/prada-logo.png"
            alt=""
          />
          <img
            className="h-[38px]"
            src="/src/assets/logos/calvin-klein-logo.png"
            alt=""
          />
        </div>
      </div>
    </>
  );
};
