import { ChevronDown, ShoppingCart, User, X } from "lucide-react";
import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Link } from "react-router";
import { routes } from "@/config/routes";
import { ChangeEvent, useState } from "react";
import { Input } from "./ui/input";
import { useGetProductsQuery } from "@/api/products-api";
import { Product } from "@/config/types";
import { Separator } from "./ui/separator";
import useStore from "@/store/zustand";

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

  const {isSearching, setIsSearching} = useStore();
  
  const [searchedProducts, setSearchedProducts] = useState<Product[]>([]);

  const { data } = useGetProductsQuery({
    limit: 0,
    skip: 0,
  });

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value.toLowerCase();

    const filtered =
      data?.products.filter((product) =>
        product.title.toLowerCase().includes(searchValue)
      ) ?? [];

    filtered.length < 150 && filtered.length > 1 ? setIsSearching(true) : setIsSearching(false) 

    setSearchedProducts(filtered);
  };

  return (
    <header>
      <div className="flex justify-center bg-black text-white h-[38px] py-2">
        <p className="">
          Log in and get 20% off to your first order.{" "}
          <Link to={routes.login} className="font-bold underline">
            Log in Now
          </Link>
        </p>
        <p className="absolute right-0">
          <X />
        </p>
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
          <div className="bg-secondaryBg relative flex w-[577px] h-[48px] p-4 items-center rounded-[22px] gap-2">
            <Input onChange={handleSearch} placeholder="Search..." className="border-none z-10 shadow-none scale-105"></Input>
            {isSearching ? (
              <div className="rounded-lg overflow-hidden bg-secondaryBg flex flex-col w-[573px] h-[300px] absolute top-[50px] z-0 left-[2px] shadow-md border-x-2 border-black/10 shadow-black/30">
                <div className="overflow-y-scroll">
                  {searchedProducts?.map((product, index) => (
                    <Link onClick={() => {setIsSearching(false)}} key={Math.random()} to={`product` + `/${product.id}`}>
                      {index !== 0 ? (
                        <Separator
                          className="bg-black/10 "
                          orientation="horizontal"
                        />
                      ) : null}
                      <div className="flex items-center">
                        <img
                          className="size-16"
                          src={product.images[0]}
                          alt=""
                        />
                        {product.title}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ) : null}
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
