export const addReview = async (restaurantId, review) => {
  const result = await fetch(
    `http://localhost:3001/api/review/${restaurantId}/`,
    {
      method: "POST",
      body: JSON.stringify(review),
      headers: {
        "Content-Type": "application/json",
      },
      next: { tags: ["addReview"] },
    },
  );
  return result.json();
};
