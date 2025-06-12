import { useGetSingleProductQuery } from "@/api/products-api";
import { ProductInfo } from "@/components/product/product-info";
import { ReviewProductPage } from "@/components/review-product-page";
import { Button } from "@/components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

export const ProductPage = () => {
  const { id } = useParams();

  const { data: product, isLoading } = useGetSingleProductQuery(id);

  const [focusImage, setFocusImage] = useState<string | undefined>(undefined);
  const [imgNum, setImgNum] = useState<number | undefined>(undefined);
  const [toggleImage, setToggleImage] = useState<number>(0);

  useEffect(() => {
    if (product?.images?.length) {
      setFocusImage(product.images[0]);
      setImgNum(product?.images?.length);
    }
  }, [product]);

  return (
    <div className="flex justify-center">
      <div className="mb-[120px] w-[1376px]">
        <div className="flex">
          {isLoading ? null : (
            <div className="flex mr-[40px]">
              {imgNum == 1 ? null : (
                <ToggleGroup
                  type="single"
                  className="h-full w-[152px] flex flex-col justify-between"
                >
                  {product?.images.map((image, index) => (
                    <ToggleGroupItem
                      value={image}
                      onClick={() => {
                        setFocusImage(image);
                        setToggleImage(index);
                      }}
                      className="overflow-hidden bg-secondaryBg rounded-2xl w-[152px] flex justify-center active:scale-95 transition-all items-center"
                      style={{
                        height: `${520 / (imgNum ?? 1) - 14}px`,
                        border: `${
                          index == toggleImage ? "solid gray 0.5px" : ""
                        }`,
                      }}
                      key={index + product.id}
                    >
                      <img
                        src={image}
                        alt=""
                        className="w-full h-full object-cover rounded-2xl"  
                      />
                    </ToggleGroupItem>
                  ))}
                </ToggleGroup>
              )}
              <div className="overflow-hidden  h-full w-[444px] bg-secondaryBg rounded-2xl ml-[14px] flex justify-center items-center">
                <img className="max-h-[600px]" src={focusImage} alt="" />
              </div>
            </div>
          )}
          <div>
            <ProductInfo product={product} />
            <Button
              variant="default"
              className="mt-5 h-[40px] rounded-full px-6 w-[140px] text-lg"
            >
              Add to Cart
            </Button>
          </div>
        </div>
        <h4 className="font-bold text-4xl text-center mt-5">Reviews</h4>
        <ul className="flex gap-4">
          {
            product?.reviews.map((review, index) => (
              <li key={index * Math.random()}>
                <ReviewProductPage review={review}/>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  );
};
