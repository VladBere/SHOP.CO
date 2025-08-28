import { Product } from "@/config/types";
import { Stars } from "../stars";
import { useNavigate } from "react-router";
import { Price } from "./price";

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => {
        navigate("/product/" + product.id);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      className="h-[450px] w-[295px] cursor-pointer hover:bg-gray-300/10 rounded-2xl"
    >
      <div className="h-[298px] w-[295px] rounded-xl overflow-hidden bg-secondaryBg mb-4 flex items-center shadow-sm shadow-black/20">
        <img src={product.images[0]} alt="" />
      </div>
      <p className="font-semibold text-xl mb-2">{product.title}</p>
      <div className="flex  mb-2">
        <Stars rating={product.rating} />
        <p className=" ml-[13px]">{product.rating.toFixed(1)}/5</p>
      </div>
      <Price mode="card" product={product} />
    </div>
  );
};
