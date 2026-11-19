import { test } from "node:test";
import assert from "node:assert/strict";
import { customerList } from "../src/dashboard.js";

test("admins see the customer list", () => {
  const rows = customerList({ role: "admin" });
  assert.equal(rows.length, 5);
  assert.equal(rows[0].since, "Mar 14, 2024");
});

test("other roles can't see it", () => {
  assert.throws(() => customerList({ role: "support" }), /forbidden/);
});

test("the list never shows payment notes", () => {
  for (const r of customerList({ role: "admin" })) assert.equal(r.paymentNotes, undefined);
});
