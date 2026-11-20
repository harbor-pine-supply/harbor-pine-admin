import { test } from "node:test";
import assert from "node:assert/strict";
import { lineTotal, invoiceTotal } from "../src/pricing.js";

test("a line is price x quantity", () => {
  assert.equal(lineTotal(19.99, 3), 59.97);
});

test("a discount comes off the line", () => {
  assert.equal(lineTotal(19.99, 3, 15), 50.97);
});

test("the invoice adds sales tax for the state", () => {
  assert.equal(invoiceTotal([{ unitPrice: 19.99, qty: 3, discountPct: 15 }], "WA"), 54.28);
});
