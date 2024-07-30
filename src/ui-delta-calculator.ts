import lodash from 'lodash';

class UIDeltaCalculator {
  
  reverseSortDataBasedOnFirstTwoDigitAppearingInTitle(jsonData: SeriesData) : SeriesData {
   
    // Sort the series array based on the first two digits in the "title"
    jsonData.series.sort((a: SeriesItem, b: SeriesItem) => {
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
  
  prepareAdminUIStackedDataset(dataset:any) {

    let stackedDataset = [];
    if (dataset && dataset.series && dataset.series.length) {
        // clone sensor data
        stackedDataset = lodash.cloneDeep(dataset);
        // reverse serie order
        stackedDataset.series = lodash.reverse(stackedDataset.series);
        // get first not null seriaserie
        let { serie, serieIndex } = this.getFirstNotNullSerie(stackedDataset.series);
        // check serie
        if (serie != null) {
            // variables        
            let previousSerie:any = null;
            let previousSerieDataItem = null;
            let minValueDiff = 0;
            let valueDiff = 0;
            let diffCorrection = 1;
            // get first serie
            serie = stackedDataset.series[0];
            // set stack values of first serie            
            serie.data.forEach(function (d:any, i:any) {
                d.stack = d.y;
            });
            // loop on other series
            for (var si = (serieIndex + 1), sl = stackedDataset.series.length; si < sl; si++) {
                // get serie
                serie = stackedDataset.series[si];
                // check serie
                if (this.isSerieNotNull(serie)) {
                    // get previous serie                
                    previousSerie = this.getPreviousNotNullSerie(stackedDataset.series, si);
                    // set variables
                    minValueDiff = Number.MAX_SAFE_INTEGER;
                    previousSerieDataItem = null;
                    valueDiff = 0;
                    // loop on serie data to find min. diff.
                    if (previousSerie) {
                        serie.data.forEach((serieDataItem:any, serieDataIndex:any) => {
                            previousSerieDataItem = previousSerie.data[serieDataIndex];
                            if (serieDataItem && previousSerieDataItem && serieDataItem.y != null && previousSerieDataItem.stack != null) {
                                valueDiff = serieDataItem.y - previousSerieDataItem.stack;
                                if (minValueDiff > valueDiff) minValueDiff = valueDiff;
                            }
                        });
                    }
                    // check min. value diff
                    if (minValueDiff == Number.MAX_SAFE_INTEGER) minValueDiff = 0;
                    if (minValueDiff < 0) minValueDiff = Math.abs(minValueDiff) + diffCorrection;
                    else if (minValueDiff == 0) minValueDiff = diffCorrection;
                    else if (minValueDiff > 0) minValueDiff = diffCorrection - minValueDiff;
                    // round min. value diff
                    minValueDiff = Math.ceil(minValueDiff);
                    // calculate stack value of serie
                    serie.data.forEach((serieDataItem:any) => {
                        serieDataItem.stack = (serieDataItem.y != null ? serieDataItem.y + minValueDiff : null);
                    });
                }
            }
            // reverse series to original order
            stackedDataset.series = lodash.reverse(stackedDataset.series);
        }
    }
    return stackedDataset;
  }

  private isSerieNotNull(serie: any) {
    return serie.data.some((dataItem: { y: null | undefined }) => dataItem.y != null && dataItem.y != undefined);
  }

  private getFirstNotNullSerie(series:Array<any>) {
    for (let i = 0; i < series.length; i++) {
      if (series[i].data && series[i].data.length && this.isSerieNotNull(series[i])) {
        return { serie: series[i], serieIndex: i };
      }
    }
    return { serie: null, serieIndex: -1 };
  }

  private getPreviousNotNullSerie(series: any, currentIndex: any) {
    for (let i = currentIndex - 1; i >= 0; i--) {
      if (this.isSerieNotNull(series[i]) === true) {
        return series[i];
      }
    }
    return null;
  }


  prepareAdminUIStackedDatasetV2(dataset:any) {

    if (dataset && dataset.series && dataset.series.length) {
        // clone sensor data
        let stackedDataset = lodash.cloneDeep(dataset);
        // reverse serie order
        stackedDataset.series = lodash.reverse(stackedDataset.series);
        // get first not null seriaserie
        let { serie, serieIndex } = this.getFirstNotNullSerie(stackedDataset.series);
        // check serie
        if (serie != null) {
            // variables        
            let previousSerie:any = null;
            let previousSerieDataItem = null;
            let minValueDiff = 0;
            let valueDiff = 0;
            let diffCorrection = 1;

            // get first serie
            serie = stackedDataset.series[0];

            // Step 1: Filter out objects where 'y axis' is null
            const filteredData = serie.data.filter(function(item: {y:any}) { if(item.y !== null) return item.y})
            // Step 2: Map the filtered objects to extract the 'y axis' values
            const yValues = filteredData.map(function(item: {y:any}) { return item.y;})
            // Step 3: Find the maximum value from the 'stack' values
            const maxStackValue = Math.max(...yValues);

            // set stack values of first serie            
            serie.data.forEach(function (d:any, i:any) {
                // if y axis has some value use it as a stack for the series
                if(d.y) {
                    d.stack = d.y;
                }
                // else use the stack value from max value available for the current series
                // and add isDataNull flag for UI to understand that the stack value is available but data was null
                else {
                    d.stack = maxStackValue;
                    d.isStackManipulated = true;
                }
            });

            // loop on other series
            for (var si = (serieIndex + 1), sl = stackedDataset.series.length; si < sl; si++) {
                // get serie
                serie = stackedDataset.series[si];
                // check serie
                if (this.isSerieNotNull(serie)) {
                    // get previous serie                
                    previousSerie = this.getPreviousNotNullSerie(stackedDataset.series, si);
                    // set variables
                    minValueDiff = Number.MAX_SAFE_INTEGER;
                    previousSerieDataItem = null;
                    valueDiff = 0;
                    // loop on serie data to find min. diff.
                    if (previousSerie) {
                        serie.data.forEach((serieDataItem: any, serieDataIndex: any) => {
                            previousSerieDataItem = previousSerie.data[serieDataIndex];
                            if (serieDataItem && previousSerieDataItem && serieDataItem.y != null && previousSerieDataItem.stack != null) {
                                valueDiff = serieDataItem.y - previousSerieDataItem.stack;
                                if (minValueDiff > valueDiff) minValueDiff = valueDiff;
                            }
                        });
                    }
                    // check min. value diff
                    if (minValueDiff == Number.MAX_SAFE_INTEGER) minValueDiff = 0;
                    if (minValueDiff < 0) minValueDiff = Math.abs(minValueDiff) + diffCorrection;
                    else if (minValueDiff == 0) minValueDiff = diffCorrection;
                    else if (minValueDiff > 0) minValueDiff = diffCorrection - minValueDiff;
                    // round min. value diff
                    minValueDiff = Math.ceil(minValueDiff);
                    // calculate stack value of serie
                    serie.data.forEach((serieDataItem:any, i:any) => {
                        // if y axis has some value use it as a stack for the series
                        if(serieDataItem.y != null) {
                            serieDataItem.stack = serieDataItem.y + minValueDiff;
                        }
                        // else use the stack value from previous series to keep the current series at the top of previous one
                        // and add isDataNull flag for UI to understand that the stack value is available but data was null
                        else {
                            serieDataItem.stack = stackedDataset.series[si - 1].data[i].stack + diffCorrection;
                            serieDataItem.isDataNull = true;
                        }
                    });
                }
            }
            // reverse series to original order
            stackedDataset.series = lodash.reverse(stackedDataset.series);
        }
        return stackedDataset;

    }
    return null;

  }
}
export default UIDeltaCalculator;
