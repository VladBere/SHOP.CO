import { Product } from "@/config/types";

interface PriceProps {
    product: Product | undefined,
    mode: "card" | "page"
}

export const Price: React.FC<PriceProps> = ({product, mode}) => {

  const discountCalc = (
    discountPercentage: number | undefined,
    price: number | undefined
  ) => {
    const discount = (discountPercentage ? discountPercentage : 0) / 100;
    const result = (price ? price : 0) - (price ? price : 0) * discount;
    return result.toFixed(1);
  };

  return (
    <div className="flex mt-[14px]">
      <p className={`font-semibold ${mode == "page" ? "text-3xl" : "text-2xl"}  mr-2`} >
        ${discountCalc(product?.discountPercentage, product?.price)}
      </p>
      {parseInt(
        (product?.discountPercentage ? product?.discountPercentage : 0).toFixed(0)
      ) > 5 ? (
        <>
          <p className={`font-semibold text-gray-400 ${mode == "page" ? "text-3xl" : "text-2xl"} mr-2`}>
            <s>${product?.price}</s>
          </p>
          <div className="bg-[#FF3333]/10 text-[#FF3333] px-[14px] py-[6px] rounded-3xl">
            -{product?.discountPercentage.toFixed(0)}%
          </div>
        </>
      ) : null}
    </div>
  );
};
