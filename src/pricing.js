import { salesTax } from "./tax.js";

// One invoice line: unit price (dollars) x quantity, less a percentage discount, to the cent.
export function lineTotal(unitPrice, qty, discountPct = 0) {
  const amount = unitPrice * qty * (1 - discountPct / 100);
  // Binary floating point stores e.g. 8.45 * 0.5 as 4.22499999..., so a true half
  // cent would round down. Trim that noise (to 6 decimal places of a cent) before
  // rounding, so half a cent rounds up.
  const cents = Number((amount * 100).toFixed(6));
  // Math.round sends -x.5 toward zero, so round a credit line (negative amount) by
  // its size: half a cent rounds away from zero, the same as a charge.
  const rounded = cents < 0 ? -Math.round(-cents) : Math.round(cents);
  return rounded / 100;
}

// The invoice total: every line, plus the state's sales tax.
export function invoiceTotal(lines, state) {
  const subtotal = lines.reduce((sum, l) => sum + lineTotal(l.unitPrice, l.qty, l.discountPct), 0);
  return Math.round((subtotal + salesTax(subtotal, state)) * 100) / 100;
}
