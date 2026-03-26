/**
 * Format a number as USD currency.
 * @param {number} amount
 * @returns {string}
 */
export function formatCurrency(amount) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
}

/**
 * Calculate percentage growth between two values.
 * @param {number} previous
 * @param {number} current
 * @returns {number}
 */
export function calculateGrowth(previous, current) {
  if (previous === 0) return 0;
  return ((current - previous) / previous) * 100;
}

/**
 * Format a date string for display.
 * @param {string} dateStr
 * @returns {string}
 */
export function formatDate(dateStr) {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}
