import UIDeltaCalculator from '../ui-delta-calculator';

const preDataFileName = './data/simplified-pre.611.json';
const postDataFileName = './data/simplified-post.611.json';
const preDataSortedByDepthFileName = './data/simplified-pre.611.sorted_by_depth_in_title.json';

const preTestData = require(preDataFileName);
const postOutputData = require(postDataFileName);

let calculator: UIDeltaCalculator;
let dataReverseSortedByDepth: SeriesData;

beforeAll(() => {
  calculator = new UIDeltaCalculator();
  dataReverseSortedByDepth = require(preDataSortedByDepthFileName);
});

describe('UIDeltaCalculator', () => {
  describe('Calculate the max_yf of each series and insert it into series', () => {
    it('should reverse the data based on first two digits appearing in title', () => {
      const calculatedDataSet = calculator.reverseSortDataBasedOnFirstTwoDigitAppearingInTitle(preTestData);
      expect(calculatedDataSet).toEqual(dataReverseSortedByDepth);
    });

    it('should insert the correct max_yf value into each series', () => {
      const jsonData = calculator.insertMaxYFIntoSeries(dataReverseSortedByDepth);

      expect(jsonData.series[0].max_yf).toEqual(69.9);
      expect(jsonData.series[1].max_yf).toEqual(60.6);
      expect(jsonData.series[2].max_yf).toEqual(35);
      expect(jsonData.series[3].max_yf).toEqual(36.3);
    });
  });

  describe('Additional tests for full coverage', () => {
    it('should handle empty data set for reverseSortDataBasedOnFirstTwoDigitAppearingInTitle', () => {
      const emptyDataSet: any = {
      };
      const calculatedDataSet = calculator.reverseSortDataBasedOnFirstTwoDigitAppearingInTitle(emptyDataSet);
      expect(calculatedDataSet).toEqual({});
    });

    it('should handle empty data set for insertMaxYFIntoSeries', () => {
      const emptyDataSet:any = { series: [] };
      const jsonData = calculator.insertMaxYFIntoSeries(emptyDataSet);
      expect(jsonData.series).toEqual([]);
    });

    it('should handle data without titles for reverseSortDataBasedOnFirstTwoDigitAppearingInTitle', () => {
      const dataWithoutTitles:any = [{ data: [1, 2, 3] }];
      const calculatedDataSet = calculator.reverseSortDataBasedOnFirstTwoDigitAppearingInTitle(dataWithoutTitles);
      expect(calculatedDataSet).toEqual(dataWithoutTitles);
    });

    it('should handle data without max_yf for insertMaxYFIntoSeries', () => {
      const dataWithoutMaxYF:any = {
        series: [
          { title: "11", data: [{y_f:1}, {y_f: 2}, {y_f: 3}, {y_f: 4}, {y_f :5}] }
        ]
      };
      const jsonData = calculator.insertMaxYFIntoSeries(dataWithoutMaxYF);
      expect(jsonData.series[0].max_yf).toEqual(5);
    });

    it('should correctly calculate max_yf for series with mixed data', () => {
      const mixedData:any = {
        series: [
          { title: "12",data: [{y_f:1}, {y_f: 2}, {y_f: 3}, {y_f: 4}, {y_f :5}] },
          { title: "13",data: [{y_f:10}, {y_f: 20}, {y_f: 30}, {y_f: 40}, {y_f :50}] },
          { title: "14",data: [{y_f:5}, {y_f: 15}, {y_f: 25}, {y_f: 35}, {y_f :45}] },
        ]
      };
      const jsonData = calculator.insertMaxYFIntoSeries(mixedData);
      expect(jsonData.series[0].max_yf).toEqual(5);
      expect(jsonData.series[1].max_yf).toEqual(50);
      expect(jsonData.series[2].max_yf).toEqual(45);
    });
  });
});
