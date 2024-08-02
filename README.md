# UI Delta Calculator [![Maintainability](https://api.codeclimate.com/v1/badges/c450d8b44294549d8e5b/maintainability)](https://codeclimate.com/github/NomiJ/calculate-delta-on-chart-series/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/c450d8b44294549d8e5b/test_coverage)](https://codeclimate.com/github/NomiJ/calculate-delta-on-chart-series/test_coverage) 
# Example for specific branch:
[![CircleCI](https://circleci.com/gh/NomiJ/calculate-delta-on-chart-series/tree/main.svg?style=svg)](https://circleci.com/gh//NomiJ/calculate-delta-on-chart-series/tree/main)

This project is a UI Delta Calculator that processes series data and calculates the maximum `y_f` value for each series.

## Installation

To install the dependencies, run:


` npm install `

This module will compute the delta required to show the topraq api data on ui chart


## Usage
To use the calculator, you can import it and call the insertMaxYFIntoSeries method with your data:

```JS
    import { calculator } from './path-to-calculator';

    const data = {
    series: [
        { title: "Example", data: [{ y_f: 1 }, { y_f: 2 }, { y_f: 3 }] }
    ]
    };

    const result = calculator.insertMaxYFIntoSeries(data);
    console.log(result);
``` 

## Running Tests
To run the tests, use the following command:

`npm test`

### Example Test
Here is an example of a test case for the insertMaxYFIntoSeries method:

```JS
    it('should handle data without max_yf for insertMaxYFIntoSeries', () => {
    const dataWithoutMaxYF:any = {
        series: [
        { title: "11", data: [{ y_f: 1 }, { y_f: 2 }, { y_f: 3 }, { y_f: 4 }, { y_f: 5 }] }
        ]
    };
    const jsonData = calculator.insertMaxYFIntoSeries(dataWithoutMaxYF);
    expect(jsonData.series[0].max_yf).toEqual(5);
    });
```
## TODO
    - Benchmarking
    - Add CodeCoverage using git actions

## CircleCI
    [CircleCI Project](https://app.circleci.com/pipelines/github/NomiJ/calculate-delta-on-chart-series)
    - Use p to add/remove the number of coverage from different projects that needs to be uploaded to code climate
        `./tmp/cc-test-reporter sum-coverage tmp/codeclimate.*.json -p 1 -o tmp/codeclimate.total.json`

## CodeClimate
    [CodeClimate Project](https://codeclimate.com/github/NomiJ/calculate-delta-on-chart-series) 
 

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any changes.

## License
This project is licensed under the MIT