import { routes } from "@/config/routes";
import { Mail } from "lucide-react";
import { Link } from "react-router";
import { Button } from "./ui/button";

export const Footer = () => {
  return (
    <div className="relative">
      <div className="bg-secondaryBg min-h-[500px] flex justify-center mt-[80px]">
        <div className="w-[1376px] flex justify-center">
          <div className="max-w-[1240px] w-full justify-between flex bg-black min-h-[180px] rounded-3xl py-[36px] px-[64px] absolute translate-y-[-50%]">
            <h3 className="text-white font-extrabold text-5xl max-w-[605px]">
              STAY UPTO DATE ABOUT OUR LATEST OFFERS
            </h3>
            <div>
              <div className="bg-secondaryBg flex  h-[48px] p-4 items-center rounded-[22px] gap-2">
                <Link to={routes.home}>
                  <Mail className="text-gray-500" />
                </Link>
                {/* <Input className="border-none"></Input> */}
                <input
                  placeholder="Enter your email address"
                  type="text"
                  className="border-none outline-0 bg-secondaryBg text-base pr-5 font-normal w-[95%]"
                />
              </div>
              <Button className="bg-white w-full text-black hover:brightness-95 hover:bg-white transition-all rounded-3xl py-[23px] mt-[14px]">
                <Link to={routes.home}> Subscribe to Newsletter</Link>
              </Button>
            </div>
          </div>
          <div className="mt-[140px] flex justify-between w-full max-w-[1240px] flex-wrap">
            <div>
              <h4 className="font-extrabold text-4xl mb-[20px]">SHOP.CO</h4>
              <p className="w-[248px] font-light mb-[30px]">
                We have clothes that suits your style and which you’re proud to
                wear. From women to men.
              </p>
              <div className="flex gap-[12px]">
                <img
                  className="size-9 cursor-pointer"
                  src="/src/assets/svgs/twitter.svg"
                  alt=""
                />
                <img
                  className="size-9 cursor-pointer"
                  src="/src/assets/svgs/facebook.svg"
                  alt=""
                />
                <img
                  className="size-9 cursor-pointer"
                  src="/src/assets/svgs/instagram.svg"
                  alt=""
                />
                <img
                  className="size-9 cursor-pointer"
                  src="/src/assets/svgs/github.svg"
                  alt=""
                />
              </div>
            </div>
            <div className="font-extralight gap-3 flex flex-col">
              <h5 className="font-medium mb-[15px] text-2xl">COMPANY</h5>
              <p>About</p>
              <p>Features</p>
              <p>Works</p>
              <p>Career</p>
            </div>
            <div className="font-extralight gap-3 flex flex-col">
              <h5 className="font-medium mb-[15px] text-2xl">HELP</h5>
              <p>Customer Support</p>
              <p>Delivery Details</p>
              <p>Terms & Conditions</p>
              <p>Privacy Policy</p>
            </div>
            <div className="font-extralight gap-3 flex flex-col">
              <h5 className="font-medium mb-[15px] text-2xl">FAQ</h5>
              <p>Account</p>
              <p>Manage Deliveries</p>
              <p>Orders</p>
              <p>Payments</p>
            </div>
            <div className="font-extralight gap-3 flex flex-col">
              <h5 className="font-medium mb-[15px] text-2xl">RESOURCES</h5>
              <p>Free eBooks</p>
              <p>Development Tutorial</p>
              <p>How to - Blog</p>
              <p>Youtube Playlist</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


















