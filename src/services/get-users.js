export const getUsers = async () => {
  const result = await fetch("http://localhost:3001/api/users", {
    next: { tags: ["getUsers"] },
  });
  return result.json();
};
