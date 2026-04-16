
import { FaStar } from "react-icons/fa";

type Rating = {
  stars: number;
  count: number;
};

type UserReview = {
  comment?: string;
  date?: string;
  username?: string;
  rating: {
    score: number;
    max_score: number;
  };
};

type Review = {
  user_review?: UserReview;
  source_rating?: {
    score: number;
    max_score: number;
    source?: {
      name?: string;
      icon?: string;
    };
  };
};

interface ReviewsSectionProps {
  ratingData?: Rating[];
  reviews?: Review[];
}

export default function ReviewsSection({
  ratingData = [],
  reviews = [],
}: ReviewsSectionProps) {
  console.log("ratingData", ratingData);
  console.log("reviews", reviews);

  let totalReviews = 0;
  let totalScore = 0;

  ratingData.forEach((r) => {
    totalReviews += r.count;
    totalScore += r.count * r.stars;
  });

  const overallRating =
    reviews.length > 0
      ? (
          reviews.reduce(
            (acc, r) => acc + (r.user_review?.rating.score || 0),
            0
          ) / reviews.length
        ).toFixed(1)
      : "0";

  return (
      <div className="px-4 md:px-8 lg:px-20">
    <div className="max-w-screen-2xl mx-auto w-full relative bottom-2">
    <div className="">
      <div className="flex items-center gap-2 text-lg font-semibold mb-2 ">
        <FaStar className="text-black"/>
        <span>
          {overallRating} · {reviews.length} reviews
        </span>
        <span className="text-blue-600 text-sm cursor-pointer">
          Read all reviews
        </span>
      </div>

      <div className="bg-gray-100 rounded-xl p-6 flex flex-col md:flex-row gap-10">

        <div className="min-w-[120px]">
          <h3 className="text-lg font-semibold mb-2">Overall Rating</h3>

          <p className="text-4xl font-bold">{overallRating}</p>

          <div className="flex gap-1 mt-2">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="text-yellow-500 text-sm" />
            ))}
          </div>

          <p className="text-sm text-gray-500 mt-1">
            {reviews.length} reviews
          </p>
        </div>

        <div className="flex-1 space-y-3">
          {[5, 4, 3, 2, 1].map((star) => {
            const count = reviews.filter(
              (r) => r.user_review?.rating.score === star
            ).length;

            const total = reviews.length;
            const percent = total ? Math.round((count / total) * 100) : 0;

            return (
              <div
                key={star}
                className="flex items-center gap-3 w-full"
              >
                <span className="w-16 text-sm">{star} stars</span>

                <div className="flex-1 h-2 bg-gray-300 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-yellow-500"
                    style={{ width: `${percent}%` }}
                  />
                </div>

                <span className="w-10 text-sm text-gray-600">
                  {percent}%
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <div
        className={`grid gap-6 mt-6 ${
          reviews.length === 1
            ? "grid-cols-1"
            : reviews.length === 2
            ? "grid-cols-1 md:grid-cols-2"
            : "grid-cols-1 md:grid-cols-3"
        }`}
      >
        {reviews.slice(0, 3).map((review, i) => (
          <div
            key={i}
            className="border border-gray-100 rounded-xl p-4 shadow-sm hover:shadow-md transition"
          >
            <div className="flex flex-col items-start gap-3 mb-2">

              <div className="w-10 h-10 bg-blue-950 text-white flex items-center justify-center rounded-full">
                {review.user_review?.rating.score ?? "U"}
              </div>

              <p className="text-xs text-gray-500">
                {review.user_review?.username || "Anonymous"} ·{" "}
                {review.user_review?.date || ""}
              </p>

            </div>

            <div className="flex gap-1 mb-2">
              {[...Array(
                Math.max(
                  0,
                  Math.min(5, Math.floor(review?.user_review?.rating.score || 0))
                )
              )].map((_, i) => (
                <FaStar key={i} className="text-yellow-500 text-xs" />
              ))}
            </div>

            <p className="text-sm text-gray-700 line-clamp-3">
              {review.user_review?.comment ?? "No review text"}
            </p>
          </div>
        ))}
      </div>
</div>
    </div></div>
  );
}