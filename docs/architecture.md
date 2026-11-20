# Architecture (short)

- `src/customers.js` loads customer records. Records include internal fields (`paymentNotes`) that finance owns; they are never shown outside finance tools.
- `src/dashboard.js` builds what the admin dashboard shows.
- `src/format.js` is shared with other teams' pages: a change there changes their pages too.
- `src/roles.js` checks roles. Admin-only features call `requireRole(user, ROLES.admin)`.
- `src/pricing.js` turns order lines into invoice totals, to the cent.
- `src/tax.js` is shared with the storefront and finance teams: a change there changes their totals too.
