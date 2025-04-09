import paintRequiredCalculator from "./paintRequiredCalculator";

describe("paintRequiredCalculator", () => {
  test("Verify that paintRequiredCalculator should return 5 when area is 50 and coveragePerLiter is 10", () => {
    expect(paintRequiredCalculator(50, 10)).toBe(5);
  });


  test("Verify that paintRequiredCalculator should return 0 when area is 0 and coveragePerLiter is 10", () => {
    expect(paintRequiredCalculator(0, 10)).toBe(0);
  });

  test("Verify that paintRequiredCalculator should return Infinity when area is 50 and coveragePerLiter is 0", () => {
    expect(paintRequiredCalculator(50, 0)).toBe(Infinity);
  });

  test("Verify that paintRequiredCalculator should handle decimal values correctly when area is 25.5 and coveragePerLiter is 5.1", () => {
    expect(paintRequiredCalculator(25.5, 5.1)).toBeCloseTo(5);
  });

  test("Verify that paintRequiredCalculator should handle negative values correctly when area is -50 and coveragePerLiter is 10", () => {
    expect(paintRequiredCalculator(-50, 10)).toBe(-5);
  });

  test("Verify that paintRequiredCalculator should return NaN when area is NaN and coveragePerLiter is 10", () => {
    expect(paintRequiredCalculator(NaN, 10)).toBeNaN();
  });
});
