import UIDeltaCalculator from '../ui-delta-calculator';
const preTestData = require('./611-prefix.pre.test.data.json');
const postOutputData = require('./611-prefix.post.test.data.json');

let calculator:UIDeltaCalculator;
beforeEach(() => {
  calculator = new UIDeltaCalculator();
});

test('the pre test data should output post test data - refactored method', () => {
  // Use the preTestData and postOutputData variables in your test
  expect(calculator.calculateDelta(preTestData)).toEqual(postOutputData);
});

test('the pre test data should output post test data - unrefactored method', () => {
  // Use the preTestData and postOutputData variables in your test
  const calculatedDataSet = calculator.prepareAdminUIStackedDataset(preTestData)
  expect(calculatedDataSet).toEqual(postOutputData);
});

