import paintRequiredCalculator from "./paintRequiredCalculator";

describe("paintRequiredCalculator", () => {
  test("Verify that paintRequiredCalculator should return 5 when area is 50 and coveragePerLiter is 10", () => {
    expect(paintRequiredCalculator(50, 10)).toBe(5);
  });
});
