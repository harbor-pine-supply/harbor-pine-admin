import { loadCustomers } from "./customers.js";
import { formatDate } from "./format.js";
import { requireRole, ROLES } from "./roles.js";

// The customer list on the admin dashboard: what admins see on screen.
export function customerList(user) {
  requireRole(user, ROLES.admin);
  return loadCustomers().map((c) => ({ id: c.id, name: c.name, contact: c.contact, email: c.email, city: c.city, since: formatDate(c.since) }));
}
