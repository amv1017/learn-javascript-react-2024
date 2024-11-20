export const limitAmount = (amount, min = 0, max = 5) => {
  if (amount < min) return min;
  if (amount > max) return max;
  return amount;
};
