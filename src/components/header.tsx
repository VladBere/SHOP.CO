import { ChevronDown, Search, ShoppingCart, User } from "lucide-react";
import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Link } from "react-router";
import { routes } from "@/config/routes";

const BrandsPopover = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className="text-xl font-normal rounded-2xl" variant="ghost">
          Brands <ChevronDown />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">Brands</PopoverContent>
    </Popover>
  );
};

export const Header = () => {
  return (
    <header>
      <div className="flex justify-center bg-black text-white h-[38px] py-2">
        {/* <div className="flex justify-between px-4"> */}
        <p className="">
          Log in and get 20% off to your first order.{" "}
          <Link to={routes.login} className="font-bold underline">
            Log in Now
          </Link>
        </p>
        {/* <p className="">
              <X />
            </p> */}
        {/* </div> */}
      </div>
      <div className="h-[96px] flex items-center justify-center">
        <div className="flex items-center flex-wrap gap-10">
          <Link to={routes.home} className="font-extrabold text-4xl mr-3">
            SHOP.CO
          </Link>
          <nav>
            <Button className="text-xl font-normal rounded-2xl" variant="ghost">
              <Link to={routes.shop}>Shop</Link>
            </Button>
            <Button className="text-xl font-normal rounded-2xl" variant="ghost">
              <Link to={routes.onSale}>On Sale</Link>
            </Button>
            <Button className="text-xl font-normal rounded-2xl" variant="ghost">
              <Link to={routes.newArrivals}>New Arrivals</Link>
            </Button>
            <BrandsPopover />
          </nav>
          <div className="bg-secondaryBg flex w-[577px] h-[48px] p-4 items-center rounded-[22px] gap-2">
            <Link to={routes.home}>
              <Search className="text-gray-500" />
            </Link>
            {/* <Input className="border-none"></Input> */}
            <input
              placeholder="Search for products..."
              type="text"
              className="border-none outline-0 bg-secondaryBg text-xl font-normal w-[95%]"
            />
          </div>
          <div className="flex gap-[14px]">
            <Link to={routes.cart}>
              <ShoppingCart />
            </Link>
            <Link to={routes.userProfile}>
              <User />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
