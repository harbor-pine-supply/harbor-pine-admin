# Work package WP-012: half-cent rounding on invoice lines
Goal: invoice lines round half a cent up, so an $8.45 item at half price costs $4.23.
In scope: the rounding in lineTotal (src/pricing.js) and its tests.
Out of scope: src/tax.js (shared with other teams), invoiceTotal's structure, any test's expected values other than adding new tests, any new package.
Areas the agent may edit: src/pricing.js, test/pricing.test.js.
Acceptance criteria (each one testable):
1. lineTotal(8.45, 1, 50) is 4.23.
2. Every existing test passes unchanged.
How we'll verify: npm test, and the person reads the diff: two files at most.
Restore point: pre-wp-012 (git tag made before starting)

## A person's addition at the merge gate
Found by the developer's own check, not by the reviewer: lineTotal(-8.45, 1, 50) returned -4.22; a credit line should round the same way as a charge, to -4.23.
3. A credit line (a negative amount) rounds half a cent away from zero, the same as a charge: lineTotal(-8.45, 1, 50) is -4.23.
