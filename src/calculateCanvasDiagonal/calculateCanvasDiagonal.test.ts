import calculateCanvasDiagonal from './calculateCanvasDiagonal';

describe('calculateCanvasDiagonal', () => {
  test('Verify that calculateCanvasDiagonal should return 5 when length is 3 and width is 4', () => {
    expect(calculateCanvasDiagonal('3', '4')).toBeCloseTo(5);
  });

  test('Verify that calculateCanvasDiagonal should return 10 when length is 6 and width is 8', () => {
    expect(calculateCanvasDiagonal('6', '8')).toBeCloseTo(10);
  });

  test('Verify that calculateCanvasDiagonal should return 13 when length is 5 and width is 12', () => {
    expect(calculateCanvasDiagonal('5', '12')).toBeCloseTo(13);
  });

  test('Verify that calculateCanvasDiagonal should return 0 when length is 0 and width is 0', () => {
    expect(calculateCanvasDiagonal('0', '0')).toBe(0);
  });

  test('Verify that calculateCanvasDiagonal should return 5 when length is -3 and width is 4', () => {
    expect(calculateCanvasDiagonal('-3', '4')).toBeCloseTo(5);
  });

  test('Verify that calculateCanvasDiagonal should return 5 when length is 3 and width is -4', () => {
    expect(calculateCanvasDiagonal('3', '-4')).toBeCloseTo(5);
  });

  test('Verify that calculateCanvasDiagonal should return 5 when length is -3 and width is -4', () => {
    expect(calculateCanvasDiagonal('-3', '-4')).toBeCloseTo(5);
  });

  test('Verify that calculateCanvasDiagonal should return NaN when length is "a" and width is 4', () => {
    expect(calculateCanvasDiagonal('a', '4')).toBeNaN();
  });

  test('Verify that calculateCanvasDiagonal should return NaN when length is 3 and width is "b"', () => {
    expect(calculateCanvasDiagonal('3', 'b')).toBeNaN();
  });

  test('Verify that calculateCanvasDiagonal should return approx. 2.5 when length is 1.5 and width is 2.0', () => {
    expect(calculateCanvasDiagonal('1.5', '2.0')).toBeCloseTo(Math.sqrt(1.5 ** 2 + 2.0 ** 2));
  });

  test('Verify that calculateCanvasDiagonal should return approx. 5.385 when length is 3.1 and width is 4.2', () => {
    expect(calculateCanvasDiagonal('3.1', '4.2')).toBeCloseTo(Math.sqrt(3.1 ** 2 + 4.2 ** 2));
  });


  test('Verify that calculateCanvasDiagonal should return NaN when length is empty and width is 4', () => {
    expect(calculateCanvasDiagonal('', '4')).toBeNaN();
  });

  test('Verify that calculateCanvasDiagonal should return NaN when length is 3 and width is empty', () => {
    expect(calculateCanvasDiagonal('3', '')).toBeNaN();
  });
});
