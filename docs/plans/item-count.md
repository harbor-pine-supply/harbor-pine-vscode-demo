# Plan: item count (issue #2)

## Decision (a person, 2026-11-18)
- Approved. The scope is `itemCount(lines)` and its tests, as the acceptance criteria say.
- Printing the count on a receipt is a separate issue: #6.

## Acceptance criteria (from the issue)
- `itemCount(lines)` in `src/order.js` returns the sum of `qty` over the order lines
- An empty order has 0 items
- A line whose `qty` isn't a positive whole number throws a `TypeError`
- Tests cover an empty order, one line, several lines, and a bad quantity

## Plan (written by Claude Code in plan mode; only its last line, where it saved its own copy, is left out)
I've written the plan for #2 to the plan file. I couldn't find the tool for submitting a plan for approval, so here it is to review. I haven't changed any code.

**Scope:** The repo has no receipt code yet, so this change only adds the `itemCount(lines)` helper and its tests. Showing the count on an actual receipt can follow once receipt code exists.

**1. `src/order.js`:** add `itemCount(lines)`.
- It adds up each line's `qty`, the same way `subtotal` adds up line totals.
- Before adding a line, it checks that `qty` is a whole number above zero. If not, it throws a `TypeError`, the same kind of check `formatCents` already does.
- An empty order returns `0`.
- `subtotal` stays as it is.

**2. `test/order.test.js`:** import `itemCount` and add four tests:
- **Empty order:** `[]` gives `0`.
- **One line:** a line with `qty: 3` gives `3`.
- **Several lines:** quantities 2, 1 and 5 give `8`.
- **Bad quantity:** `qty` of `0`, `-1`, `1.5`, `"2"`, or missing each throws a `TypeError`.

**To check it:** run `npm test`. The existing tests and the new ones should all pass.

Tell me to go ahead and I'll make the changes.
