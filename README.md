# UI Delta Calculator

This project is a UI Delta Calculator that processes series data and calculates the maximum `y_f` value for each series.

## Installation

To install the dependencies, run:


npm install

This module will compute the delta required to show the topraq api data on ui chart


## Usage
To use the calculator, you can import it and call the insertMaxYFIntoSeries method with your data:

import { calculator } from './path-to-calculator';

const data = {
  series: [
    { title: "Example", data: [{ y_f: 1 }, { y_f: 2 }, { y_f: 3 }] }
  ]
};

const result = calculator.insertMaxYFIntoSeries(data);
console.log(result);


## Running Tests
To run the tests, use the following command:

npm test


### Example Test
Here is an example of a test case for the insertMaxYFIntoSeries method:

it('should handle data without max_yf for insertMaxYFIntoSeries', () => {
  const dataWithoutMaxYF:any = {
    series: [
      { title: "11", data: [{ y_f: 1 }, { y_f: 2 }, { y_f: 3 }, { y_f: 4 }, { y_f: 5 }] }
    ]
  };
  const jsonData = calculator.insertMaxYFIntoSeries(dataWithoutMaxYF);
  expect(jsonData.series[0].max_yf).toEqual(5);
});

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any changes.

## License
This project is licensed under the MIT