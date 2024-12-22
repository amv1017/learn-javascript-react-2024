export const getRestaurantById = async (id) => {
  const result = await fetch(`http://localhost:3001/api/restaurant/${id}`, {
    next: { tags: ["getRestaurantById"] },
  });
  return result.json();
};
