// Shared formatting used across the dashboard (and other teams' pages). Change with care.
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

// "2025-06-09" -> "Jun 9, 2025"
export function formatDate(iso) {
  const [y, m, d] = iso.split("-").map(Number);
  return `${MONTHS[m - 1]} ${d}, ${y}`;
}
