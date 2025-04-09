import estimatePaintingTime from './estimatePaintingTime';

describe('estimatePaintingTime', () => {
  test('Verify that estimatePaintingTime should return 10 when area is 100 and paintingSpeed is 10', () => {
    expect(estimatePaintingTime(100, 10)).toBe(10);
  });

  test('Verify that estimatePaintingTime should return 10 when area is 200 and paintingSpeed is 20', () => {
    expect(estimatePaintingTime(200, 20)).toBe(10);
  });

  test('Verify that estimatePaintingTime should return 10 when area is 150 and paintingSpeed is 15', () => {
    expect(estimatePaintingTime(150, 15)).toBe(10);
  });

  test('Verify that estimatePaintingTime should return Infinity when area is 100 and paintingSpeed is 0', () => {
    expect(estimatePaintingTime(100, 0)).toBe(Infinity);
  });

  test('Verify that estimatePaintingTime should return 0 when area is 0 and paintingSpeed is 10', () => {
    expect(estimatePaintingTime(0, 10)).toBe(0);
  });

  test('Verify that estimatePaintingTime should return -10 when area is -100 and paintingSpeed is 10', () => {
    expect(estimatePaintingTime(-100, 10)).toBe(-10);
  });

  test('Verify that estimatePaintingTime should return -10 when area is 100 and paintingSpeed is -10', () => {
    expect(estimatePaintingTime(100, -10)).toBe(-10);
  });

  test('Verify that estimatePaintingTime should return 10 when area is -100 and paintingSpeed is -10', () => {
    expect(estimatePaintingTime(-100, -10)).toBe(10);
  });
});
