import { ReviewInterface } from "@/config/types";
import { Stars } from "./stars";

interface ReviewProps {
  review: ReviewInterface;
}

export const Review: React.FC<ReviewProps> = ({ review }) => {
  return (
    <div className="border border-secondaryBg py-[28px] px-[32px] h-[240px] rounded-3xl">
      <div className="mb-[15px]">
        <Stars rating={5} />
      </div>
      <div className="flex">
        <p className="mr-[6px]">{review.name}</p>
        <img src="/src/assets/svgs/aproved.svg" alt="" />
      </div>
      <p className="mt-[12px]">{review.review}</p>
    </div>
  );
};
