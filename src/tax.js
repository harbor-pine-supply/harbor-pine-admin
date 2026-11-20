// Sales tax by state. Shared with the storefront and finance teams: a change here changes their totals too.
const RATES = { OR: 0, WA: 0.065, ID: 0.06 };

export function salesTax(amount, state) {
  return Math.round(amount * (RATES[state] ?? 0) * 100) / 100;
}
