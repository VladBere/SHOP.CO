import { useGetProductsQuery } from "@/api/products-api";
import { ProductCard } from "../product/product-card";
import { Button } from "../ui/button";
import { Link } from "react-router";
import { routes } from "@/config/routes";

export const HomeTopSelling = () => {
  const { data, isLoading } = useGetProductsQuery({
    limit: 4,
    skip: 42,
  });

  return (
    <div className="flex justify-center ">
      <div className="w-[1376px]">
        <h3 className="text-center font-extrabold text-6xl mt-[72px] mb-[55px]">
          TOP SELLING
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
            className="border mt-[36px] mb-[80px] text-base border-gray-400/50 px-[70px] py-[24px] rounded-full"
            variant="ghost"
          >
            <Link to={routes.topSelling}>View All</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
