"use client";

import { useCallback } from "react";
import { Review } from "./Review";
import {
  useGetReviewsByRestaurantIdQuery,
  useAddReviewMutation,
} from "@/store/features/api";
import { useAuth } from "@/hooks";
import { ReviewForm } from "./ReviewForm";

const Reviews = ({ id }) => {
  const { user } = useAuth();
  const {
    data,
    isLoading: isLoadingReviews,
    isError,
  } = useGetReviewsByRestaurantIdQuery(id);
  const [addReview, { isLoading: isLoadingForm }] = useAddReviewMutation();

  const handleAddReview = useCallback(
    (review) => {
      addReview({ restaurantId: id, review });
    },
    [addReview, id],
  );

  if (isLoadingReviews || isLoadingForm) {
    return "loading ...";
  }

  if (isError) {
    return "error";
  }

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
          <ReviewForm onAddReview={handleAddReview} />
        </>
      )}
    </>
  );
};

export { Reviews };
