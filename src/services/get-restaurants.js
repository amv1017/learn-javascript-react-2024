export const getRestaurants = async () => {
  const result = await fetch("http://localhost:3001/api/restaurants", {
    next: { tags: ["getRestaurants"] },
  });
  return result.json();
};
