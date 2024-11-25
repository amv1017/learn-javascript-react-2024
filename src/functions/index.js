export const limitAmount = (amount, min = 0, max = 5) => {
  if (amount < min) return min;
  if (amount > max) return max;
  return amount;
};

export const scrollPercentage = () =>
  (100 * window.scrollY) /
  (document.documentElement.scrollHeight -
    document.documentElement.clientHeight);
