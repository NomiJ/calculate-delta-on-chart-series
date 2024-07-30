import DeltaCalculator  from '../delta-calculator-time-series';

describe('DeltaCalculator', () => {
  it('should adjust y values correctly when all values are present', () => {
    const data: TimestampSeriesItem[] = [
      {
        x: 1707840000000,
        x_f: "02/13/2024 16:00",
        y: {
          "80 cm": 69.9,
          "60 cm": 60.6,
          "40 cm": 35,
          "30 cm (X-25)": 36.3,
          "20 cm": 38.4
        }
      }
    ];

    const calculator = new DeltaCalculator();
    calculator.calculateDelta(data);

    expect(data[0].y["80 cm"]).toEqual(69.9);
    expect(data[0].y["60 cm"]).toEqual(60.6);
    expect(data[0].y["40 cm"]).toEqual(35);
    expect(data[0].y["30 cm (X-25)"]).toEqual(34);
    expect(data[0].y["20 cm"]).toEqual(35.3);
  });

  it('should handle null values correctly', () => {
    const data: TimestampSeriesItem[] = [
      {
        x: 1707840000000,
        x_f: "02/13/2024 16:00",
        y: {
          "80 cm": null,
          "60 cm": 60.6,
          "40 cm": null,
          "30 cm (X-25)": 36.3,
          "20 cm": 38.4
        }
      }
    ];

    const calculator = new DeltaCalculator();
    calculator.calculateDelta(data);

    expect(data[0].y["80 cm"]).toEqual(null);
    expect(data[0].y["60 cm"]).toEqual(60.6);
    expect(data[0].y["40 cm"]).toEqual(null);
    expect(data[0].y["30 cm (X-25)"]).toEqual(36.3);
    expect(data[0].y["20 cm"]).toEqual(35.3);
  });

  it('should handle all null values correctly', () => {
    const data: TimestampSeriesItem[] = [
      {
        x: 1707840000000,
        x_f: "02/13/2024 16:00",
        y: {
          "80 cm": null,
          "60 cm": null,
          "40 cm": null,
          "30 cm (X-25)": null,
          "20 cm": null
        }
      }
    ];

    const calculator = new DeltaCalculator();
    calculator.calculateDelta(data);

    expect(data[0].y["80 cm"]).toEqual(null);
    expect(data[0].y["60 cm"]).toEqual(null);
    expect(data[0].y["40 cm"]).toEqual(null);
    expect(data[0].y["30 cm (X-25)"]).toEqual(null);
    expect(data[0].y["20 cm"]).toEqual(null);
  });

  it('should handle empty y values correctly', () => {
    const data: TimestampSeriesItem[] = [
      {
        x: 1707840000000,
        x_f: "02/13/2024 16:00",
        y: {}
      }
    ];

    const calculator = new DeltaCalculator();
    calculator.calculateDelta(data);

    expect(data[0].y).toEqual({});
  });
});