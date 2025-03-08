import { Stars } from "./stars";

interface ReviewApi {
  comment: string;
  date: string;
  rating: number;
  reviewerEmail: string;
  reviewerName: string;
}

interface ReviewProductPageProps {
  review: ReviewApi;
}



export const ReviewProductPage: React.FC<ReviewProductPageProps> = ({
  review,
}) => {

  return (
    <div className="border border-secondaryBg py-[28px] px-[32px] w-[450px] rounded-3xl mt-6">
      <div className="mb-[15px]">
        <Stars rating={review.rating} />
      </div>
      <h2 className="font-semibold text-xl flex gap-2">
        {review.reviewerName} <img src="/src/assets/svgs/aproved.svg" alt="" />
      </h2>
      <h4 className="text-gray-400">{review.reviewerEmail}</h4>
      <p className="text-gray-600 mt-2">{review.comment}</p>

    </div>
  );
};
