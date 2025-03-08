import { useGetProductsQuery } from "@/api/products-api";
import { ProductCard } from "../product/product-card";
import { Button } from "../ui/button";
import { Link } from "react-router";
import { routes } from "@/config/routes";

export const HomeNewArrivals = () => {
  const { data, isLoading } = useGetProductsQuery({
    limit: 4,
    skip: 0,
  });

  return (
    <div className="flex justify-center ">
      <div className="w-[1376px]">
        <h3 className="text-center font-extrabold text-6xl mt-[72px] mb-[55px]">
          NEW ARRIVALS
        </h3>
        <div className="flex justify-center">
          <ul className="flex gap-x-[20px]">
            {isLoading ? (
              <p>loading</p>
            ) : (
              data?.products.map((product) => (
                <li key={product.id}>
                  <ProductCard product={product} />
                </li>
              ))
            )}
          </ul>
        </div>
        <div className="flex justify-center">
          <Button
            className="border mt-[36px] mb-[64px] text-base border-gray-400/50 px-[70px] py-[24px] rounded-full"
            variant="ghost"
          >
            <Link to={routes.newArrivals}>View All</Link>
          </Button>
        </div>
        <div className="h-[2px] mb-[64px] w-full bg-gray-500/20"></div>
      </div>
    </div>
  );
};
