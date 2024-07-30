import lodash from 'lodash';

class UIDeltaCalculator {
  
  reverseSortDataBasedOnFirstTwoDigitAppearingInTitle(jsonData: SeriesData) : SeriesData {
   
    // Sort the series array based on the first two digits in the "title"
    jsonData?.series?.sort((a: SeriesItem, b: SeriesItem) => {
      const aTitle = a.title.match(/\d+/);
      const bTitle = b.title.match(/\d+/);
      return parseInt(bTitle![0]) - parseInt(aTitle![0]);
  });
    return jsonData
  }

  
insertMaxYFIntoSeries(jsonData: SeriesData): SeriesData {
  const maxYFValues = this.getMaxYFForEachSeries(jsonData);

  jsonData.series.forEach((seriesItem) => {
    seriesItem.max_yf = maxYFValues[seriesItem.title];
  });
  return jsonData;
}

  private getMaxYFForEachSeries(jsonData: SeriesData): { [key: string]: number } {
    const maxYFValues: { [key: string]: number } = {};

    jsonData.series.forEach((seriesItem) => {
      const maxYF = seriesItem.data.reduce((max, dataPoint) => {
        const yFValue = dataPoint.y_f ? parseFloat(dataPoint.y_f) : -Infinity;
        return yFValue > max ? yFValue : max;
      }, -Infinity);

      maxYFValues[seriesItem.title] = maxYF;
    });

    return maxYFValues;
  }

  adjustYFValues(jsonData: SeriesData) {
    let previousMaxYF = 0;
  
    jsonData.series.forEach((series, index) => {
      if (index > 0) {
        previousMaxYF = jsonData.series[index - 1].max_yf || previousMaxYF;
      }
        series.data.forEach(dataPoint => {
          if (dataPoint.y_f !== null) {
            let yFValue = parseFloat(dataPoint.y_f);
            if (previousMaxYF > 0 && yFValue > previousMaxYF) {
              yFValue = previousMaxYF - 1;
            }
            dataPoint.stack = yFValue;
          } else{
            let yFValue = previousMaxYF - 1;
            dataPoint.stack = yFValue
          } 
        });
      
    
    });
  }
  
  calculateDelta(jsonData: SeriesData): SeriesData {
    const sortedData = this.reverseSortDataBasedOnFirstTwoDigitAppearingInTitle(jsonData);
    const dataWithMaxYF = this.insertMaxYFIntoSeries(sortedData);
    this.adjustYFValues(dataWithMaxYF);
    return dataWithMaxYF;
  }
}
export default UIDeltaCalculator;
