import UIDeltaCalculator from '../ui-delta-calculator';
const preDataFileName = './simplified-pre.611.json'
const postDataFileName = './simplified-post.611.json'
const preDataSortedByDepthFileName = './simplified-pre.611.sorted_by_depth_in_title.json'
const preTestData = require(preDataFileName);
const postOutputData = require(postDataFileName);

let calculator:UIDeltaCalculator;
let dataReverseSortedByDepth:SeriesData ;
beforeAll(() => {
  calculator = new UIDeltaCalculator();
  dataReverseSortedByDepth = require(preDataSortedByDepthFileName);
});


describe('Calculate the max_yf of each series and insert it into series', () => {
  
  it('should reverse the data based on first two digits appearing in title', () => {
    const calculatedDataSet = calculator.reverseSortDataBasedOnFirstTwoDigitAppearingInTitle( preTestData )
    expect(calculatedDataSet).toEqual(dataReverseSortedByDepth);
  });


  it('should insert the correct max_yf value into each series', () => {
    
    const jsonData = calculator.insertMaxYFIntoSeries(dataReverseSortedByDepth);

    expect(jsonData.series[0].max_yf).toEqual(69.9);
    expect(jsonData.series[1].max_yf).toEqual(60.6);
    expect(jsonData.series[2].max_yf).toEqual(35);
    expect(jsonData.series[3].max_yf).toEqual(36.3);
    expect(jsonData.series[4].max_yf).toEqual(38.4);
  });

});
  describe('It should correctly set the valur of stack whether its null or bigger then max_yf of previous series', () => {
    let jsonDataWithMaxFY: SeriesData
    beforeEach(() => {
      const calculatedDataSet = calculator.reverseSortDataBasedOnFirstTwoDigitAppearingInTitle( preTestData )
      jsonDataWithMaxFY = calculator.insertMaxYFIntoSeries(calculatedDataSet);

    });
    
    it('should adjust y_f values based on previous series max_yf', () => {
      
      calculator.adjustYFValues(jsonDataWithMaxFY);
      expect(jsonDataWithMaxFY.series[3].data[0].stack).toEqual(34);
      expect(jsonDataWithMaxFY.series[4].data[0].stack).toEqual(35.3);
      expect(jsonDataWithMaxFY.series[3].data[1].stack).toEqual(34);
    });
  });

test('the pre test data should output post test data - refactored method', () => {
  const calculatedDataSet = calculator.calculateDelta(preTestData)
  expect(calculatedDataSet).toEqual(postOutputData);
});
