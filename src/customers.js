import { readFileSync } from "node:fs";

// Every customer record, as stored (includes internal fields such as paymentNotes).
export function loadCustomers(file = new URL("../data/customers.json", import.meta.url)) {
  return JSON.parse(readFileSync(file, "utf8"));
}
