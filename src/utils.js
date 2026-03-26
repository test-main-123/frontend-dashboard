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

/**
 * Filter an array of objects by a date range.
 * @param {Array} items - Array of objects with a date field
 * @param {string} dateField - Name of the date field
 * @param {Date} startDate - Start of the date range
 * @param {Date} endDate - End of the date range
 * @returns {Array}
 */
export function filterByDateRange(items, dateField, startDate, endDate) {
  return items.filter((item) => {
    const date = new Date(item[dateField]);
    return date >= startDate && date <= endDate;
  });
}

/**
 * Get a preset date range relative to today.
 * @param {string} preset - One of "7d", "30d", "90d", "1y"
 * @returns {{ startDate: Date, endDate: Date }}
 */
export function getDatePreset(preset) {
  const endDate = new Date();
  const startDate = new Date();
  const days = { "7d": 7, "30d": 30, "90d": 90, "1y": 365 };
  startDate.setDate(startDate.getDate() - (days[preset] || 30));
  return { startDate, endDate };
}
