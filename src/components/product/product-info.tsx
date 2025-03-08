import { Product } from "@/config/types";
import { Separator } from "../ui/separator";
import { Stars } from "../stars";
import { Price } from "./price";

interface ProductInfoProps {
  product: Product | undefined;
}

export const ProductInfo: React.FC<ProductInfoProps> = ({ product }) => {
  return (
    <div>
      <h2 className="font-extrabold text-5xl mt-2 mb-1">
        {product?.title.toUpperCase()}
      </h2>
      <div className="flex mb-3">
        <p className="mr-1 text-black/80">Tags:</p>
        {product?.tags.map((tag, index) =>
          index !== 0 ? (
            <div key={tag + index} className="flex">
              <Separator className="mx-3 bg-black/40" orientation="vertical" />
              <p> {tag}</p>
            </div>
          ) : (
            <p key={tag + index}>{tag}</p>
          )
        )}
      </div>
      <div className="flex">
        <Stars rating={product?.rating} />
        <p className="ml-2 flex">
          {product?.rating} <p className="text-black/40">/5</p>
        </p>
      </div>
      <Price mode="page" product={product} />
      <p className="text-black/60 text-xl mt-[20px]">{product?.description}</p>
      <Separator className="mt-6" />
      {product?.brand ? (
        <p className="text-black/60 mt-5 text-xl">
          Brand: <span className="text-black">{product?.brand}</span>{" "}
        </p>
      ) : null}
      <p className="mt-5 text-xl flex text-black/60">
        <p className="mr-1">Status: </p>{" "}
        {product?.availabilityStatus !== "Out of Stock" ? (
          <p className="text-black"> {product?.availabilityStatus}</p>
        ) : (
          <p className="font-semibold text-red-600 brightness-95">
            Out of stock
          </p>
        )}
      </p>
      <Separator className="mt-6" />
      <p className="text-black/60 mt-5 text-xl flex">
        Warranty:{" "}
        <p className="text-black ml-1">{product?.warrantyInformation}</p>
      </p>
      <p className="text-black/60 mt-3 text-xl flex">
        Return Policy:{" "}
        <p className="text-black ml-1">{product?.returnPolicy}</p>
      </p>
    </div>
  );
};
