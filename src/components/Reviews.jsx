"use client";

import { useAuth } from "@/hooks";
import { getReviewsByRestaurantId } from "@/services/get-reviews-by-restaurant-id";
import { use } from "react";
import { Review } from "./Review";
import { ReviewForm } from "./ReviewForm";

const Reviews = ({ id }) => {
  const { user } = useAuth();

  const data = use(getReviewsByRestaurantId(id));

  return (
    <>
      {data ? (
        <ul>
          {data.map((review) => (
            <Review {...review} key={review.id} />
          ))}
        </ul>
      ) : (
        <span>no reviews found</span>
      )}
      {user.name && (
        <>
          <hr />
          <ReviewForm restaurantId={id} />
        </>
      )}
    </>
  );
};

export { Reviews };
