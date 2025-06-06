import paintRequiredForMultipleCoats from './paintRequiredForMultipleCoats';

describe('paintRequiredForMultipleCoats', () => {
  test('Verify that paintRequiredForMultipleCoats should calculate paint required correctly for positive values', () => {
    expect(paintRequiredForMultipleCoats(100, 10, 2)).toBe(20);   
    expect(paintRequiredForMultipleCoats(200, 20, 3)).toBe(30);   
    expect(paintRequiredForMultipleCoats(150, 15, 4)).toBe(40);   
  });

  test('Verify that paintRequiredForMultipleCoats should return 0 for area of 0', () => {
    expect(paintRequiredForMultipleCoats(0, 10, 2)).toBe(0);      
  });

  test('Verify that paintRequiredForMultipleCoats should return Infinity for coveragePerLiter of 0', () => {
    expect(paintRequiredForMultipleCoats(100, 0, 2)).toBe(Infinity);  
  });

  test('Verify that paintRequiredForMultipleCoats should handle negative values correctly', () => {
    expect(paintRequiredForMultipleCoats(-100, 10, 2)).toBe(-20);   
    expect(paintRequiredForMultipleCoats(100, -10, 2)).toBe(-20);   
    expect(paintRequiredForMultipleCoats(100, 10, -2)).toBe(-20);   
  });

  test('Verify that paintRequiredForMultipleCoats should handle coats of 0 correctly', () => {
    expect(paintRequiredForMultipleCoats(100, 10, 0)).toBe(0);     
  });

  test('Verify that paintRequiredForMultipleCoats should handle decimal area and integer coveragePerLiter correctly when area is 55.5, coveragePerLiter is 10, and coats is 2', () => {
    expect(paintRequiredForMultipleCoats(55.5, 10, 2)).toBe(11.1);
  });

  test('Verify that paintRequiredForMultipleCoats should return 0 when area is 100 and coveragePerLiter is Infinity', () => {
    expect(paintRequiredForMultipleCoats(100, Infinity, 2)).toBe(0);
  });
  
  test('Verify that paintRequiredForMultipleCoats should return NaN when area is NaN and coveragePerLiter is 10', () => {
    expect(paintRequiredForMultipleCoats(NaN, 10, 2)).toBeNaN();
  });
  
});
