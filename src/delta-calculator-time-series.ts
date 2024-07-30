class DeltaCalculator {
  calculateDelta(timestamp_series: TimestampSeriesItem[]): void {
      timestamp_series.forEach(item => {
      this.reverseSortAndAdjust(item.y);
    });
}
  

  private reverseSortAndAdjust(yValues: { [key: string]: number | null }): void {
    const keys = Object.keys(yValues).sort((a, b) => {
      return parseInt(b.split(' ')[0]) - parseInt(a.split(' ')[0]);
    });

    for (let i = keys.length - 1; i >= 0; i--) {
      const key = keys[i];
      if (yValues[key] !== null) {
        let currentValue = yValues[key]!;
        for (let j = i - 1; j >= 0; j--) {
          const upperKey = keys[j];
          if (yValues[upperKey] !== null) {
            if (currentValue > yValues[upperKey]!) {
              currentValue = yValues[upperKey]! - 1;
              yValues[key] = currentValue;
            }
            break;
          }
        }
      }
    }
  }
}
export default DeltaCalculator;