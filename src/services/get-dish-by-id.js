export const getDishById = async (id) => {
  const result = await fetch(`http://localhost:3001/api/dish/${id}`, {
    next: { tags: ["getDishById"] },
  });
  return result.json();
};
