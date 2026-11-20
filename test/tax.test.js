import { test } from "node:test";
import assert from "node:assert/strict";
import { salesTax } from "../src/tax.js";

test("Oregon has no sales tax", () => {
  assert.equal(salesTax(100, "OR"), 0);
});

test("Washington's rate applies to the subtotal", () => {
  assert.equal(salesTax(50.97, "WA"), 3.31);
});
