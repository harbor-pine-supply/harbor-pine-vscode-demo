import { test } from "node:test";
import assert from "node:assert/strict";
import { subtotal, formatCents, itemCount } from "../src/order.js";

test("subtotal adds line totals in cents", () => {
  assert.equal(subtotal([{ unitCents: 1299, qty: 2 }, { unitCents: 450, qty: 1 }]), 3048);
});

test("formatCents formats cents as dollars", () => {
  assert.equal(formatCents(3048), "$30.48");
  assert.equal(formatCents(-250), "-$2.50");
});

test("itemCount of an empty order is 0", () => {
  assert.equal(itemCount([]), 0);
});

test("itemCount of one line is its qty", () => {
  assert.equal(itemCount([{ unitCents: 1299, qty: 3 }]), 3);
});

test("itemCount adds qty over several lines", () => {
  assert.equal(
    itemCount([
      { unitCents: 1299, qty: 2 },
      { unitCents: 450, qty: 1 },
      { unitCents: 100, qty: 5 },
    ]),
    8,
  );
});

test("itemCount throws a TypeError for a bad qty", () => {
  for (const qty of [0, -1, 1.5, "2"]) {
    assert.throws(() => itemCount([{ unitCents: 100, qty }]), TypeError);
  }
  assert.throws(() => itemCount([{ unitCents: 100 }]), TypeError);
});
