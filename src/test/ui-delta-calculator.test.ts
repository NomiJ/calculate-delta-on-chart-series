import UIDeltaCalculator from '../ui-delta-calculator';

test('adds 1 + 2 to equal 3', () => {
  const calculator = new UIDeltaCalculator();
  expect(calculator.calculateDelta(null)).toBe(3);
});
