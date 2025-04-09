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

});
