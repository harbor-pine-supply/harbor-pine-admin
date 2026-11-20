import { test } from "node:test";
import assert from "node:assert/strict";
import { lineTotal, invoiceTotal } from "../src/pricing.js";

test("a line is price x quantity", () => {
  assert.equal(lineTotal(19.99, 3), 59.97);
});

test("a discount comes off the line", () => {
  assert.equal(lineTotal(19.99, 3, 15), 50.97);
});

test("half a cent rounds up: an $8.45 item at half price costs $4.23", () => {
  assert.equal(lineTotal(8.45, 1, 50), 4.23);
});

test("half a cent rounds up on other float-noisy amounts too", () => {
  assert.equal(lineTotal(1.005, 1), 1.01);
  assert.equal(lineTotal(0.29, 1, 50), 0.15);
});

test("just under half a cent still rounds down", () => {
  assert.equal(lineTotal(4.2249, 1), 4.22);
});

test("the invoice adds sales tax for the state", () => {
  assert.equal(invoiceTotal([{ unitPrice: 19.99, qty: 3, discountPct: 15 }], "WA"), 54.28);
});
