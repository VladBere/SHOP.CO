import { useGetProductsQuery } from "@/api/products-api";
import { ProductCard } from "@/components/product/product-card";
import { PaginationToggle } from "@/components/shop/pagination-toggle";
import { ShopSheet } from "@/components/shop/shop-sheet";
import useStore from "@/store/zustand";
import { useParams } from "react-router";

export const ShopPage = () => {
  const { brandsZustand, pagination } = useStore();

  const paginationStep = 12;

  const { category, isError } = useParams();

  const { data: productsData } = useGetProductsQuery({
    limit: paginationStep,
    skip: pagination,
    category: category ?? undefined,
  });

  const { data } = useGetProductsQuery({
    limit: 0,
    skip: 0,
    category: category ?? undefined,
  });

  const products =
    (brandsZustand && brandsZustand !== "All Brands"
      ? data?.products.filter((product) => product.brand === brandsZustand)
      : productsData?.products) || [];

  if (isError)
    return (
      <p className="font-extrabold text-7xl mb-[32px]">
        Error loading products. Please try again.
      </p>
    );

  return (
    <div className="flex justify-center ">
      <div className="w-[1376px] max-[1376px]:w-auto">
        <div className="h-[1.5px] bg-secondaryBg mb-[24px]"></div>
        <ul className="mb-20 flex flex-col">
          <div className="flex justify-center ">
            <div className="flex justify-between w-full">
              <h2 className="font-extrabold text-4xl mb-8">Shop</h2>
              <ShopSheet />
            </div>
          </div>
          <div className="flex justify-evenly flex-wrap gap-y-10 gap-x-7">
            {products?.map((product) => (
              <li key={product.id}>
                <ProductCard product={product} />
              </li>
            ))}
          </div>
        </ul>
        <PaginationToggle
          data={productsData}
          productsNum={
            brandsZustand == "All Brands"
              ? productsData?.total
              : products?.length
          }
        />
      </div>
    </div>
  );
};
