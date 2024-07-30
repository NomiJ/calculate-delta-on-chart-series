import DeltaCalculator  from '../delta-calculator-time-series';

describe('DeltaCalculator', () => {
  it('should adjust y values correctly', () => {
    const data = require('./time-seriesgrouping.pre.611.json');

    const calculator = new DeltaCalculator();
    calculator.calculateDelta(data.timestamp_series);

    expect(data.timestamp_series[0].y["80 cm"]).toEqual(69.9);
    expect(data.timestamp_series[0].y["60 cm"]).toEqual(60.6);
    expect(data.timestamp_series[0].y["40 cm"]).toEqual(35);
    expect(data.timestamp_series[0].y["30 cm (X-25)"]).toEqual(null);
    expect(data.timestamp_series[0].y["20 cm"]).toEqual(34);

    expect(data.timestamp_series[1].y["30 cm (X-25)"]).toEqual(36.3);
  });
});