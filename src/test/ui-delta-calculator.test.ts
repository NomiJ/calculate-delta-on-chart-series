import UIDeltaCalculator from '../ui-delta-calculator';
const preTestData = require('./611.pre.test.data.json');
const postOutputData = require('./611.post.test.data.json');

let calculator:UIDeltaCalculator;
beforeEach(() => {
  calculator = new UIDeltaCalculator();
});

test('the pre test data should output post test data - refactored method', () => {
  const calculatedDataSet = calculator.calculateDelta(preTestData)
  expect(calculatedDataSet).toEqual(postOutputData);
});

test('the pre test data should output post test data - unrefactored method', () => {
  const calculatedDataSet = calculator.prepareAdminUIStackedDataset(preTestData)
  expect(calculatedDataSet).toEqual(postOutputData);
});

