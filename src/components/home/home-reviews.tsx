import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Review } from "../review-hero";

const reviews = [
  {
    name: "John D.",
    review:
      "I couldn't be happier with my experience shopping at Shop.co. The products are high-quality, stylish, and reasonably priced. Every purchase has been exactly what I hoped for and more!",
  },
  {
    name: "Sarah M.",
    review:
      "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
  },
  {
    name: "Alex K.",
    review:
      "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
  },
  {
    name: "James L.",
    review:
      "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
  },
  {
    name: "Emily R.",
    review:
      "Shop.co never disappoints! The variety of products, attention to detail, and outstanding customer service make every shopping experience enjoyable. I always recommend it to my friends!",
  },
];

export const HomeReviews = () => {
  return (
    <div className="flex justify-center">
      <div className="max-w-[1240px]">
        <div>
          <Carousel>
            <div className="flex relative">
              <CarouselPrevious className="absolute left-[94%]" />
              <CarouselNext className="absolute right-0" />
              <h2 className="text-center font-extrabold text-6xl mb-[40px]">
                OUR HAPPY CUSTOMERS
              </h2>
            </div>
            <CarouselContent className="flex">
              {reviews.map((review, index) => (
                <CarouselItem key={index} className=" min-[1280px]:basis-1/3 min-h-[300px] ">
                  <Review review={review}/>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
};
