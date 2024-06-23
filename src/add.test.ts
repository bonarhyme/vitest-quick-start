import add from "./add";

import { describe, expect, it } from "vitest";

describe("#Add", () => {
  it("returns 0 with no numbers", () => {
    expect(add()).toBe(0);
  });
  it("returns correct value when numbers are passed", () => {
    expect(add(25, 40, 1)).toBe(66);
  });
});
