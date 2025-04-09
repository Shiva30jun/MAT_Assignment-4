import calculateTotalCost from './calculateTotalCost';

describe('calculateTotalCost', () => {
  test('Verify that calculateTotalCost should return 150 when paintCost is 100 and laborCost is 50', () => {
    expect(calculateTotalCost(100, 50)).toBe(150);
  });

  test('Verify that calculateTotalCost should return 275 when paintCost is 200 and laborCost is 75', () => {
    expect(calculateTotalCost(200, 75)).toBe(275);
  });

  test('Verify that calculateTotalCost should return 250 when paintCost is 150 and laborCost is 100', () => {
    expect(calculateTotalCost(150, 100)).toBe(250);
  });

  test('Verify that calculateTotalCost should return 100 when paintCost is 100 and laborCost is 0', () => {
    expect(calculateTotalCost(100, 0)).toBe(100);
  });

  test('Verify that calculateTotalCost should return 50 when paintCost is 0 and laborCost is 50', () => {
    expect(calculateTotalCost(0, 50)).toBe(50);
  });

  test('Verify that calculateTotalCost should return -50 when paintCost is -100 and laborCost is 50', () => {
    expect(calculateTotalCost(-100, 50)).toBe(-50);
  });

  test('Verify that calculateTotalCost should return 50 when paintCost is 100 and laborCost is -50', () => {
    expect(calculateTotalCost(100, -50)).toBe(50);
  });

  test('Verify that calculateTotalCost should return -150 when paintCost is -100 and laborCost is -50', () => {
    expect(calculateTotalCost(-100, -50)).toBe(-150);
  });

  test('Verify that calculateTotalCost should return 0 when paintCost is 0 and laborCost is 0', () => {
    expect(calculateTotalCost(0, 0)).toBe(0);
  });
});
