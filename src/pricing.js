import { salesTax } from "./tax.js";

// One invoice line: unit price (dollars) x quantity, less a percentage discount, to the cent.
export function lineTotal(unitPrice, qty, discountPct = 0) {
  const amount = unitPrice * qty * (1 - discountPct / 100);
  return Math.round(amount * 100) / 100;
}

// The invoice total: every line, plus the state's sales tax.
export function invoiceTotal(lines, state) {
  const subtotal = lines.reduce((sum, l) => sum + lineTotal(l.unitPrice, l.qty, l.discountPct), 0);
  return Math.round((subtotal + salesTax(subtotal, state)) * 100) / 100;
}
