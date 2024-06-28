import lodash from 'lodash';

class UIDeltaCalculator {
  

  calculateDelta(dataset: any) {
    let stackedDataset = [];
    if (dataset && dataset.series && dataset.series.length) {
      stackedDataset = lodash.cloneDeep(dataset);
      stackedDataset.series = lodash.reverse(stackedDataset.series);
      let { serie, serieIndex } = this.getFirstNotNullSerie(stackedDataset.series);
      if (serie != null) {
       this.calculateDeltaForSeries(stackedDataset.series, serieIndex);
        stackedDataset.series = lodash.reverse(stackedDataset.series);
      }
    }
    return stackedDataset;
  }

  private calculateDeltaForSeries(stackedDataset: any, serieIndex: number) {
    let previousSerie: any = null;
    let previousSerieDataItem = null;
    let minValueDiff = 0;
    let valueDiff = 0;
    let diffCorrection = 1;
    let serie = stackedDataset.series[0];
    serie.data.forEach((d: any) => {
      d.stack = d.y;
    });
    for (let si = serieIndex + 1, sl = stackedDataset.series.length; si < sl; si++) {
      serie = stackedDataset.series[si];
      if (this.isSerieNotNull(serie)) {
        previousSerie = this.getPreviousNotNullSerie(stackedDataset.series, si);
        minValueDiff = Number.MAX_SAFE_INTEGER;
        previousSerieDataItem = null;
        valueDiff = 0;
        if (previousSerie) {
          serie.data.forEach((serieDataItem: any, serieDataIndex: any) => {
            previousSerieDataItem = previousSerie.data[serieDataIndex];
            if (serieDataItem && previousSerieDataItem && serieDataItem.y != null && previousSerieDataItem.stack != null) {
              valueDiff = serieDataItem.y - previousSerieDataItem.stack;
              if (minValueDiff > valueDiff) minValueDiff = valueDiff;
            }
          });
        }
        if (minValueDiff == Number.MAX_SAFE_INTEGER) minValueDiff = 0;
        if (minValueDiff < 0) minValueDiff = Math.abs(minValueDiff) + diffCorrection;
        else if (minValueDiff == 0) minValueDiff = diffCorrection;
        else if (minValueDiff > 0) minValueDiff = diffCorrection - minValueDiff;
        minValueDiff = Math.ceil(minValueDiff);
        serie.data.forEach((serieDataItem: any) => {
          serieDataItem.stack = serieDataItem.y != null ? serieDataItem.y + minValueDiff : null;
        });
      }
    }
  }

  private isSerieNotNull(serie: any) {
    return serie.data.some((dataItem: { y: null | undefined }) => dataItem.y != null && dataItem.y != undefined);
  }

  private getFirstNotNullSerie(series: any) {
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
}

export default UIDeltaCalculator;
