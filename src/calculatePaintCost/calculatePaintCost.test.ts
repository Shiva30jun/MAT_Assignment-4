import calculatePaintCost from './calculatePaintCost';

describe('calculatePaintCost', () => {
  test('Verify that calculatePaintCost should return 50 when paintRequired is 10 and costPerLiter is 5', () => {
    expect(calculatePaintCost(10, 5)).toBe(50);
  });

  test('Verify that calculatePaintCost should return 150 when paintRequired is 20 and costPerLiter is 7.5', () => {
    expect(calculatePaintCost(20, 7.5)).toBe(150);
  });

  test('Verify that calculatePaintCost should return 150 when paintRequired is 15 and costPerLiter is 10', () => {
    expect(calculatePaintCost(15, 10)).toBe(150);
  });

  test('Verify that calculatePaintCost should return 0 when paintRequired is 0 and costPerLiter is 5', () => {
    expect(calculatePaintCost(0, 5)).toBe(0);
  });

  test('Verify that calculatePaintCost should return 0 when paintRequired is 10 and costPerLiter is 0', () => {
    expect(calculatePaintCost(10, 0)).toBe(0);
  });

  test('Verify that calculatePaintCost should return -50 when paintRequired is -10 and costPerLiter is 5', () => {
    expect(calculatePaintCost(-10, 5)).toBe(-50);
  });

  test('Verify that calculatePaintCost should return -50 when paintRequired is 10 and costPerLiter is -5', () => {
    expect(calculatePaintCost(10, -5)).toBe(-50);
  });

  test('Verify that calculatePaintCost should return 50 when paintRequired is -10 and costPerLiter is -5', () => {
    expect(calculatePaintCost(-10, -5)).toBe(50);
  });


  test('Verify that calculatePaintCost should return 10.5 when paintRequired is 2.5 and costPerLiter is 4.2', () => {
    expect(calculatePaintCost(2.5, 4.2)).toBeCloseTo(10.5);
  });

});
