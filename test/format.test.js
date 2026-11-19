import { test } from "node:test";
import assert from "node:assert/strict";
import { formatDate } from "../src/format.js";

test("formats dates for the dashboard", () => {
  assert.equal(formatDate("2025-06-09"), "Jun 9, 2025");
});
