import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';
import Utils from '../utils';

export enum ChartType {
    Weather = 1,
    Irrigation,
    Pest,
    IrrigationLevel,
    IrrigationControl,
    ET0,
    WeatherReport,
    MeasurementChart,
    Vision,
    SapAnalysisIndicator,
}


@Component({
  selector: 'app-e-charts',
  standalone: true,
  imports: [],
  templateUrl: './e-charts.component.html',
  styleUrl: './e-charts.component.css'
})
export class EChartsComponent implements OnInit {
  eChartInstance:any = null;

  type: any;
  height: any = '400';

  
  constructor() { }

  ngOnInit(): void {
    this.updateHeight(this.height);
  }

  /**
   * @param value - examples: 200, 250, 400 ...
   */
  updateHeight(value: Number) {
    this.height = value + 'px';
  }

  onChartInit(eChart:any) {
    this.eChartInstance = eChart;

    const obj = {
      eChart,
      type: this.type
    };

  }

  @HostListener("window:resize", ["$event"])
  handleChartResize() {

    // get width
    let width = this.eChartInstance.getDom().clientWidth;
    // get option
    let option = this.eChartInstance.getOption();
    // get legend
    let legend = option.legend;
    if (legend && legend.length) legend = legend[0];
    // check legend
    if (legend) {
      // get grid
      let grid = option.grid;
      if (grid && grid.length) grid = grid[0];
      if (grid) width = width - grid.left - grid.right;
      // get existing grid bottom
      let gridBottom = 0;
      if (grid) gridBottom = grid.bottom;
      // get data zoom
      let dataZoom = option.dataZoom;
      if (dataZoom && !dataZoom.length) dataZoom = null;
      if (dataZoom && dataZoom.length) dataZoom = dataZoom.find((z: { id: string; }) => z.id == 'zoom_slider');
      // get data
      let data = legend.data;
      // get existing legends height
      let numberOfLegendRows = data?.filter((d: string) => d == "\n").length + 1;
      let exLegendsHeight = numberOfLegendRows * (Math.max(Utils.echartDefaults.legend.itemHeight, Utils.echartDefaults.legend.textStyle.fontSize))
        + (numberOfLegendRows - 1) * (Utils.echartDefaults.legend.itemGap);
      // remove line breaks from data
      data = data?.filter((d: string) => d !== '\n');
      // align legends
      let alignedLegends = Utils.alignLegends(data, width, grid);
      // update chart options
      this.eChartInstance.setOption({
        legend: {
          data: alignedLegends.legends,
          width: width,
          height: alignedLegends.height,
        },
        grid: {
          bottom: gridBottom - exLegendsHeight + alignedLegends.height
        }
      });
      if (dataZoom) {        
        this.eChartInstance.setOption({
          dataZoom: [
            {
              id: 'zoom_slider',
              bottom: dataZoom.bottom - exLegendsHeight + alignedLegends.height
            }
          ]
        });
      }
    }

  }

}
