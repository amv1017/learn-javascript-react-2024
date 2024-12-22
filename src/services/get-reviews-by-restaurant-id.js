export const getReviewsByRestaurantId = async (restaurantId) => {
  const result = await fetch(
    `http://localhost:3001/api/reviews?restaurantId=${restaurantId}`,
    {
      next: { tags: ["getReviewsByRestaurantId"] },
    },
  );
  return result.json();
};
