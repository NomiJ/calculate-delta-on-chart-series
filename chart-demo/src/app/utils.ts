import { EChartsOption } from 'echarts';
import * as moment from 'moment';
import {MomentInput} from 'moment-timezone'
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
  production: false,
  version: '1.0',
  serverUrl: 'http://localhost:4000/api/v22/',
  visionServerUrl: 'http://localhost:4000/api/vision/',
  agromatiqServerUrl: 'http://localhost:4000/api/agromatiq/v6/',
  socketUrl: 'http://localhost:4000',
  socketPath: '/socket',
  apple_maps_token: 'eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik1CNTY4MzdHTjMifQ.eyJpc3MiOiJRWjU1UDI1Q0E4IiwiaWF0IjoxNjkyNjg4MjUyLCJleHAiOjE3MjQxOTg0MDB9.YP1OAfRA5lufFmoz18mEA8Yx3zsnXtiE6Rm8DcHORPpOxC-Xh6IsUqO33cWeEAyYev-hLZNjy1PraRj7H_3ZYA'

  // production: true,
  // version: "1.0",
  // serverUrl: "https://agro.topraq.ai/api/v22/",
  // visionServerUrl: 'https://agro.topraq.ai/api/vision/',
  // agromatiqServerUrl: "https://agro.topraq.ai/api/agromatiq/v6/",
  // socketUrl: 'https://agro.topraq.ai',
  // socketPath: '/socket',  
  // apple_maps_token: "eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik1CNTY4MzdHTjMifQ.eyJpc3MiOiJRWjU1UDI1Q0E4IiwiaWF0IjoxNjkyNjg4MjUyLCJleHAiOjE3MjQxOTg0MDB9.YP1OAfRA5lufFmoz18mEA8Yx3zsnXtiE6Rm8DcHORPpOxC-Xh6IsUqO33cWeEAyYev-hLZNjy1PraRj7H_3ZYA"

};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


enum ChartType {
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

enum GraphType {
    Line = 'line',
    Step = 'step',
    Bar = 'bar',
    Polygon = 'polygon',
    Drop = 'drop',
    Scatter = 'scatter'
}

class BrandUtils {
  static TAG = "BrandUtils"

  static brands: any = {
    topraq: {
      host_name: "topraq.ai",
      label: "Topraq",
      paths: {
        dashboard: 'dashboard',
        field_detail: 'field-detail',
        reports: 'reports',
        irrigation_plan: 'irrigation-plan',
        pressure_chamber: 'pressure-chamber',
        irrigation_lines: 'irrigation-lines',
        et0_chart: 'et0',
        data: 'data',
        irrigation_report: 'irrigation',
        weather: 'weather',
        vision: 'vision',
        satellite: 'satellite',
        observation: 'observation'
      },
      manifest_file: "manifest.webmanifest",
      browser_config_file: "assets/images/favicon/brand/topraq/browserconfig.xml",
      logo: 'assets/images/login/topraq_logo.svg',      
      loading_icon: 'assets/images/favicon/brand/topraq/favicon.ico',
      loading_color: '#186972',
      pwa: {
        description: 'pwa.banner.description',
        logo: 'assets/images/favicon/brand/topraq/favicon.ico'
      },
      favicon: {
        appFavicon: 'assets/images/favicon/brand/topraq/favicon.ico',
        apple_touch_icon: "assets/images/favicon/brand/topraq/apple-touch-icon.png",
        favicon_32: "assets/images/favicon/brand/topraq/favicon-32x32.png",
        favicon_16: "assets/images/favicon/brand/topraq/favicon-16x16.png",
        mask_icon: "assets/images/favicon/brand/topraq/safari-pinned-tab.svg",
        shortcut_icon: "assets/images/favicon/brand/topraq/favicon.ico"
      },
      logo_height: 35,
      logos: {
        en: 'assets/images/login/topraq_logo.svg',
        tr: 'assets/images/login/topraq_logo.svg',
        az: 'assets/images/login/topraq_logo.svg'
      }
    },
    hektas: {
      host_name: "hektas.com.tr",
      label: "Hektaş",
      paths: {
        /*
        dashboard: 'ana-sayfa',
        field_detail: 'bahce',
        reports: 'raporlar',
        irrigation_plan: 'sulama-plani',
        pressure_chamber: 'pms',
        irrigation_lines: 'sulama-otomasyonu',
        et0_chart: 'et0',
        data: 'veri',
        irrigation_report: 'irrigation',
        weather: 'hava',
        */
        dashboard: 'dashboard',
        field_detail: 'field-detail',
        reports: 'reports',
        irrigation_plan: 'irrigation-plan',
        pressure_chamber: 'pressure-chamber',
        irrigation_lines: 'irrigation-lines',
        et0_chart: 'et0',
        data: 'data',
        irrigation_report: 'irrigation',
        weather: 'weather',
      },
      manifest_file: "hektas.webmanifest",
      browser_config_file: "assets/images/favicon/brand/hektas/browserconfig.xml",
      logo: 'assets/images/login/hektas_logo.svg',
      loading_icon: 'assets/images/favicon/brand/hektas/favicon.ico',
      loading_color: '#8cc832',
      pwa: {
        description: null,
        logo: 'assets/images/login/hektas_logo.svg'
      },
      favicon: {
        appFavicon: 'assets/images/favicon/brand/hektas/favicon.ico',
        apple_touch_icon: "assets/images/favicon/brand/hektas/apple-touch-icon.png",
        favicon_32: "assets/images/favicon/brand/hektas/favicon-32x32.png",
        favicon_16: "assets/images/favicon/brand/hektas/favicon-16x16.png",
        mask_icon: "assets/images/favicon/brand/hektas/safari-pinned-tab.svg",
        shortcut_icon: "assets/images/favicon/brand/hektas/favicon.ico"
      },
      logo_height: 100,
      logos: {
        en: 'assets/images/login/hektas_logo.svg',
        tr: 'assets/images/login/hektas_logo.svg',
        az: 'assets/images/login/hektas_logo.svg'
      }
    },
    aigros: {
      host_name: "aigros.com",
      label: "Aigros",
      paths: {
        dashboard: 'dashboard',
        field_detail: 'field-detail',
        reports: 'reports',
        irrigation_plan: 'irrigation-plan',
        pressure_chamber: 'pressure-chamber',
        irrigation_lines: 'irrigation-lines',
        et0_chart: 'et0',
        data: 'data',
        irrigation_report: 'irrigation',
        weather: 'weather',
        vision: 'vision',
        satellite: 'satellite',
        observation: 'observation'
      },
      manifest_file: "aigros.webmanifest",
      browser_config_file: "assets/images/favicon/brand/aigros/browserconfig.xml",
      logo: 'assets/images/login/aigros_logo.svg',      
      loading_icon: 'assets/images/favicon/brand/aigros/favicon.ico',
      loading_color: '#31b2d2',
      pwa: {
        description: 'pwa.banner.description',
        logo: 'assets/images/favicon/brand/aigros/favicon.ico'
      },
      favicon: {
        appFavicon: 'assets/images/favicon/brand/aigros/favicon.ico',
        apple_touch_icon: "assets/images/favicon/brand/aigros/apple-touch-icon.png",
        favicon_32: "assets/images/favicon/brand/aigros/favicon-32x32.png",
        favicon_16: "assets/images/favicon/brand/aigros/favicon-16x16.png",
        mask_icon: "assets/images/favicon/brand/aigros/safari-pinned-tab.svg",
        shortcut_icon: "assets/images/favicon/brand/aigros/favicon.ico"
      },
      logo_height: 40,
      logos: {
        en: 'assets/images/login/aigros_logo.svg',
        tr: 'assets/images/login/aigros_logo.svg',
        az: 'assets/images/login/aigros_logo.svg'
      }
    }
  }

  static getBrand() {
    let brand = Object.assign({}, this.brands['topraq']);


    return brand;
  }

  static isBrandTopraq(brand:any) {
    return true;
  }
}

export default class Utils {
    
    static echartInstances:any = {};

    static echartDefaults = {
        color: '#212529',
        grid: {
            top: 15,
            right: 15,
            bottom: 0,
            left: 0
        },
        title: {
            top: 15,
            bottom: 15,
            textStyle: {
                fontSize: 16
            }
        },
        xAxis: {
            axisLine: {
                lineStyle: {
                    width: 1
                }
            },
            axisTick: {
                length: 5
            },
            axisLabel: {
                fontSize: 10,
                margin: 8
            },
            offset: 30
        },
        yAxis: {
            nameGap: 15,
            nameTextStyle: {
                fontSize: 12
            },
            axisLabel: {
                fontSize: 10
            },
            offset: 35
        },
        serie: {
            line: {
                lineStyle: {
                    width: 1,
                    type: 'solid',
                    opacity: 1
                }
            },
            bar: {
                itemStyle: {
                    borderWidth: 0,
                    borderType: 'solid',
                    opacity: 1
                }
            },
            polygon: {
                itemStyle: {
                    borderWidth: 0,
                    borderType: 'solid',
                    opacity: 1
                }
            },
            drop: {
                itemStyle: {
                    borderWidth: 0,
                    borderType: 'solid',
                    opacity: 1
                }
            },
            scatter: {
                label: {
                    show: true,
                    padding: 5,
                    backgroundColor: "#4e5667",
                    color: "#fff",
                    fontSize: 10,
                    fontWeight: 'bold',
                    opacity: 0.8
                },
                emphasis: {
                    label: {
                        lineHeight: 12,
                        padding: 5,
                        opacity: 1
                    }
                }
            }
        },
        zoom: {
            top: 10,
            bottom: 15,
            height: 5,
            handleSize: "300%",
            colors: {
                background: "rgba(78, 86, 103, 0.25)",
                filler: "#28885b"
            }
        },
        legend: {
            itemWidth: 14,
            itemHeight: 12,
            itemGap: 10,
            top: 15,
            bottom: 15,
            textStyle: {
                fontSize: 12
            },
            lineStyle: {
                width: 2,
                type: [5, 4]
            }
        },
        tooltip: {
            margin: 25
        }
    };

    static getDefaultSelectedDeviceId(devices: any, deviceId: any) {
        let selectedDevice = null;
        for (let i = 0, L = devices.length; i < L; i++) {
            if (devices[i].id == deviceId) {
                selectedDevice = devices[i];
                devices[i].selected = true;
                break;
            }
            // if device id not match with id in devices list, then it could be irrigation line
            // so check for id inside related_devices array of numbers
            else if (devices[i].irrigation_line_devices && devices[i].irrigation_line_devices.includes(parseInt(deviceId))) {
                deviceId = devices[i].id
                devices[i].selected = true;
                selectedDevice = devices[i];
                break;
            }
        }
        // if device is found by given id return otherwise look for selected true device
        if (selectedDevice) {
            for (let i = 0, L = devices.length; i < L; i++) {
                if (devices[i].id != deviceId) {
                    devices[i].selected = false;
                }
            }
            return selectedDevice;
        }

        for (let i = 0, L = devices.length; i < L; i++) {
            if (devices[i].selected) {
                selectedDevice = devices[i];
                break;
            }
        }
        return selectedDevice;
    }

    static getDefaultFirmWareKey(measurements: any) {
        let selectedMeasurement = null;
        for (let i = 0, L = measurements.length; i < L; i++) {
            if (measurements[i].selected) {
                selectedMeasurement = measurements[i];
                break;
            }
        }
        if (!selectedMeasurement) {
            measurements[0]['selected'] = true;
            selectedMeasurement = measurements[0]
        }
        return selectedMeasurement.fw_key;
    }

    static getDefaultTimeFilterValue(filters: any) {
        let selectedFilter = null;
        for (let i = 0, L = filters.length; i < L; i++) {
            if (filters[i].selected && filters[i].value) {
                selectedFilter = filters[i];
                break;
            }
        }
        if (selectedFilter) {
            return selectedFilter.value;
        }
        else {
            return null;
        }
    }

    static getDefaultDateRangeFilterValue(filters: any) {
        let selectedFilter = null;
        for (let i = 0, L = filters.length; i < L; i++) {
            if (filters[i].selected && filters[i].start_at && filters[i].end_at) {
                selectedFilter = filters[i];
                break;
            }
        }
        if (selectedFilter) {
            return {
                start: selectedFilter.start_at,
                end: selectedFilter.end_at
            }
        }
        else {
            return null;
        }

    }

    static getChartOptions(containerSelector: any, data: any, options: any = {}) {

        const self = this;

        let chartOptions: any = {};

        // check data
        if (data && data.length) {

            let language = self.getLanguageForUser();
            let isSingleBarChart = true;

            // calculate chart width
            let chartWidth = 0;
            // get container
            let container = document.querySelector(containerSelector);
            //check container
            if (container) {
                // get container width
                let containerClientWidth = container.clientWidth;
                // get style of container
                let containerStyle = getComputedStyle(container);
                // remove padding from container width to find chart width
                chartWidth = containerClientWidth - (parseInt(containerStyle.paddingLeft) || 0) - (parseInt(containerStyle.paddingRight) || 0);
            }
            // set data width as chart with
            let dataWidth = chartWidth;

            // any y axis has unit. we use this flag to set "top" property of "grid"            
            let anyYAxisHasUnit = data.map((d: { axes: { y: any; }; }) => d.axes.y).findIndex((y: { unit: any; }) => y.unit) > -1;

            // set grid properties
            let top = (
                options.hasToolbox
                    ? 0
                    : self.echartDefaults.grid.top
            )
                + (
                    anyYAxisHasUnit
                        ?
                        (
                            // add space for y axis name
                            (self.echartDefaults.yAxis.nameGap) + (self.echartDefaults.yAxis.nameTextStyle.fontSize)
                            // add space top tick label of y axis
                            + (self.echartDefaults.yAxis.axisLabel.fontSize / 2)
                        )
                        : 0
                );
            let right = data.length > 1
                // add space for y axes which are on right side
                ? (data.length - 1) * self.echartDefaults.yAxis.offset
                : self.echartDefaults.grid.right;
            // add space for y axis which is on left
            let left = self.echartDefaults.grid.left + self.echartDefaults.yAxis.offset;
            let grid = {
                top: top,
                right: right,
                bottom: self.echartDefaults.grid.bottom,
                left: left
            };
            // remove left and right offset of grid from data width
            if (dataWidth) dataWidth = dataWidth - left - right;

            // save right offset in chart options, used to adjust width of irrigation level chart same as irrigation chart in field detail page
            chartOptions['rightOffset'] = right;

            // create x axis of chart
            const multipleXAxis: any[] = [];
            let xAxisMin = Number.MAX_SAFE_INTEGER;
            let xAxisMax = Number.MIN_SAFE_INTEGER;
            let xAxisFirst:MomentInput =null;
            let xAxisPrevious: MomentInput = null;
            let xAxis: any = {
                type: 'time',
                axisLine: {
                    onZero: false,
                    lineStyle: {
                        color: self.echartDefaults.color
                    }
                },
                axisLabel: {
                    rotate: 90,
                    fontSize: self.echartDefaults.xAxis.axisLabel.fontSize,
                    showMinLabel: null,
                    showMaxLabel: null,
                    formatter: function (value:any, index:number) {
                        if (isSingleBarChart && (value < xAxis.min || value > xAxis.max)) {
                            return "";
                        }
                        // create date object from value
                        let date = moment.utc(value);
                        // cache first tick which is > xAxisMin to fix first label on 2nd tour                        
                        if (xAxisFirst == null && value > xAxisMin) {
                            xAxisFirst = date;
                        }
                        // set format
                        let formatOptions: any = { timeZone: 'UTC', hour12: false };
                        let label = "";
                        if (value == xAxisMin && xAxisFirst) {
                            if (date.year() !== moment.utc(xAxisFirst).year() || date.month() !== moment.utc(xAxisFirst).month() || date.date() !== moment.utc(xAxisFirst).date()) {
                                formatOptions.month = 'short';
                                if (date.date() !== 1) {
                                    formatOptions.day = 'numeric';
                                }
                            }
                            else {
                                formatOptions.hour = '2-digit';
                                formatOptions.minute = '2-digit';
                            }
                        }
                        else if (value == xAxisMax && xAxisPrevious) {
                            if (date.year() !== moment.utc(xAxisPrevious).year()) {
                                formatOptions.year = 'numeric';
                            }
                            else if (date.month() !== moment.utc(xAxisPrevious).month()) {
                                formatOptions.month = 'short';
                                if (date.date() !== 1) {
                                    formatOptions.day = 'numeric';
                                }
                            }
                            else if (date.date() !== moment.utc(xAxisPrevious).date()) {
                                formatOptions.month = 'short';
                                formatOptions.day = 'numeric';
                            }
                            else if (date.hour() !== moment.utc(xAxisPrevious).hour() || date.minute() !== moment.utc(xAxisPrevious).minute()) {
                                formatOptions.hour = '2-digit';
                                formatOptions.minute = '2-digit';
                            }
                        }
                        else {
                            if (date.hour() !== 0) {
                                formatOptions.hour = '2-digit';
                                formatOptions.minute = '2-digit';
                            }
                            else if (date.date() !== 1) {
                                formatOptions.month = 'short';
                                formatOptions.day = 'numeric';
                            }
                            else if (date.month() !== 0) {
                                formatOptions.month = 'short';
                            }
                            else {
                                formatOptions.year = 'numeric';
                            }
                        }
                        try {
                            if (formatOptions.year || formatOptions.month || formatOptions.day || formatOptions.hour || formatOptions.minute) {
                                label = new Intl.DateTimeFormat(language, formatOptions).format(value);
                            }
                        } catch (error) {
                            if (!environment.production) {
                                console.log(value);
                                console.log(index);
                                console.log(error);
                            }
                        }
                        xAxisPrevious = date;
                        return label;
                    }
                },
                axisTick: {
                    show: false,
                    alignWithLabel: true
                },
                splitLine: {
                    show: false
                },
                minInterval: 60000,         // 1 minute
                maxInterval: 31556952000    // 1 year                
            };
            // check axis ticks values                
            let maxXAxisFormatWidth = self.echartDefaults.xAxis.offset;
            // update grid bottom                                                    
            grid.bottom = self.echartDefaults.xAxis.axisLine.lineStyle.width
                + self.echartDefaults.xAxis.axisLabel.margin
                + maxXAxisFormatWidth
                + self.echartDefaults.grid.bottom;

            // check x axis            
            let dataXAxis = data[0].axes.x;
            if (dataXAxis) {
                if (dataXAxis.ticks) {
                    if (dataXAxis.ticks.interval !== undefined) xAxis.interval = dataXAxis.ticks.interval;
                    if (dataXAxis.ticks.min_interval !== undefined) xAxis.minInterval = dataXAxis.ticks.min_interval;
                    if (dataXAxis.ticks.max_interval !== undefined) xAxis.maxInterval = dataXAxis.ticks.max_interval;
                }
            }

            // check title
            let title = null;
            if (data[0].title) {
                let titleBottom = anyYAxisHasUnit ? 0 : this.echartDefaults.title.bottom;
                title = {
                    show: true,
                    text: data[0].title,
                    left: 'center',
                    right: 'center',
                    top: self.echartDefaults.title.top,
                    bottom: titleBottom,
                    textStyle: {
                        fontSize: self.echartDefaults.title.textStyle.fontSize
                    }
                };
                // update grid.top property
                grid.top = grid.top
                    + self.echartDefaults.title.top
                    + self.echartDefaults.title.textStyle.fontSize
                    + titleBottom;
            }

            // create y axes of chart
            let yAxes: any[] = [];
            // create series of chart
            let series: any[] = [];
            // create legends of chart
            let legends: any[] = [];

            // sort data by y axes
            data.sort((d1: { axes: { y: { uiOrder: any; }; }; }, d2: { axes: { y: { uiOrder: any; }; }; }) => ((d1.axes.y.uiOrder || 0) - (d2.axes.y.uiOrder || 0)));

            // loop on data to create y axes and series            
            data.forEach((d:any, di:any) => {
                // create y axis 
                let yAxisMin = Number.MAX_SAFE_INTEGER;
                let yAxisMax = Number.MIN_SAFE_INTEGER;
                let yAxis = d.axes.y;
                let yAxisUnit = yAxis.unit ? `${yAxis.unit}` : '';
                let chartYAxis: any = {
                    type: 'value',
                    name: yAxisUnit ? `(${yAxisUnit})` : null,
                    nameLocation: 'end',
                    position: di == 0 ? 'left' : 'right',
                    offset: (di - 1 > 0) ? (di - 1) * self.echartDefaults.yAxis.offset : 0.5,
                    axisLabel: {
                        formatter: function (value:any, index: number) {
                            return new Intl.NumberFormat(language, {}).format(value);;
                        },
                        fontSize: self.echartDefaults.yAxis.axisLabel.fontSize,
                        showMinLabel: null,
                        showMaxLabel: null
                    },
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: data.length > 1 && yAxis.style && yAxis.style.color ? yAxis.style.color : self.echartDefaults.color
                        }
                    },
                    splitLine: {
                        show: false
                    },
                    _custom: {
                        uiOrder: yAxis.uiOrder || 0,
                        dataIndex: di
                    }
                };
                // check ticks
                if (yAxis.ticks) {
                    if (yAxis.ticks.domain) {
                        if (yAxis.ticks.domain.length > 0) chartYAxis.min = yAxis.ticks.domain[0];
                        if (yAxis.ticks.domain.length > 1) chartYAxis.max = yAxis.ticks.domain[1];
                    }
                    if (yAxis.ticks.interval !== undefined) chartYAxis.interval = yAxis.ticks.interval;
                    if (yAxis.ticks.min_interval !== undefined) chartYAxis.minInterval = yAxis.ticks.min_interval;
                    if (yAxis.ticks.max_interval !== undefined) chartYAxis.maxInterval = yAxis.ticks.max_interval;
                }
                // add axis to chart axes
                yAxes.push(chartYAxis);

                // create series
                d.series.forEach((s:any) => {
                    // get serie properties                                                
                    let serieName = s.legend && s.legend.title ? s.legend.title : s.title;
                    let serieId = s.id || (d.series.filter((f: { fw_key: any; }) => f.fw_key == s.fw_key).length == 1 ? s.fw_key : "") || s.name;
                    let serieColor = s.style && s.style.color ? s.style.color : self.echartDefaults.color;
                    let serieShowInTooltip = (s.tooltip != false && s.type != GraphType.Scatter) || (s.tooltip && s.type == GraphType.Scatter);
                    let serieTooltipTitle = s.tooltip && s.tooltip.title ? s.tooltip.title : s.title;
                    let isSerieStack = s.data && s.data.length && s.data[0].hasOwnProperty("stack");
                    if (isSerieStack) {
                        chartYAxis.axisLabel.show = false;
                    }
                    let serieShowInLegend = s.legend != false;
                    // create chart serie
                    let chartSerie: any = {
                        type: s.type ? s.type : 'line',
                        id: serieId,
                        name: serieName,
                        color: serieColor,
                        showSymbol: s.data.length > 1 ? false : true,   // circle symbol on each series line, show only when there is only 1 item data inside series                        
                        showAllSymbol: false,
                        smooth: true,
                        data: [],
                        _custom: {
                            zIndex: s.zIndex || 0,
                            tooltipIndex: serieShowInTooltip
                                ? s.tooltip && s.tooltip.uiOrder ? s.tooltip.uiOrder : (s.zIndex ? s.zIndex : 0)
                                : null,
                            dataIndex: di,
                            dataX: [],
                            nearestXIndex: {}
                        }
                    };

                    if (s.xAxis) {
                        chartSerie._custom.minDate = s.xAxis.minDate
                        chartSerie._custom.maxDate = s.xAxis.maxDate
                        delete s.xAxis.minDate;
                        delete s.xAxis.maxDate;
                        multipleXAxis.push(s.xAxis);
                        chartSerie.xAxisIndex = multipleXAxis.length - 1;
                    }
                    // add data  
                    let serieHasX = s.data && s.data.length && s.data[0].hasOwnProperty("x");
                    let serieHasX1 = s.data && s.data.length && s.data[0].hasOwnProperty("x1");
                    let serieHasX2 = s.data && s.data.length && s.data[0].hasOwnProperty("x2");
                    let serieHasY = s.data && s.data.length && s.data[0].hasOwnProperty("y");
                    let serieHasYF = s.data && s.data.length && s.data[0].hasOwnProperty("y_f");
                    chartSerie._custom.dataHasX = serieHasX;
                    chartSerie._custom.dataHasX1 = serieHasX1;
                    chartSerie._custom.dataHasX2 = serieHasX2;
                    s.data.map((d:any) => {
                        if (serieHasX1 && serieHasX2) {
                            if (d.x1 != null) xAxisMin = Math.min(xAxisMin, d.x1);
                            if (d.x2 != null) xAxisMax = Math.max(xAxisMax, d.x2);
                            chartSerie._custom.dataX.push([d.x1, d.x2]);
                        }
                        else if (serieHasX) {
                            if (d.x != null) {
                                xAxisMin = Math.min(xAxisMin, d.x);
                                xAxisMax = Math.max(xAxisMax, d.x);
                            }
                            chartSerie._custom.dataX.push(d.x);
                        }
                        if (isSerieStack) {
                            // isDataNull will be true if line chart actual value was null but stack value is assigned to keep the line series in the stack order
                            if (d.stack != null && !d?.isDataNull) {
                                yAxisMin = Math.min(yAxisMin, d.stack);
                                yAxisMax = Math.max(yAxisMax, d.stack);
                            }
                        }
                        else if (serieHasY) {
                            if (d.y != null) {
                                yAxisMin = Math.min(yAxisMin, d.y);
                                yAxisMax = Math.max(yAxisMax, d.y);
                            }
                        }
                        let tooltipValue = "-";
                        if (s.type == GraphType.Drop && serieHasX1 && serieHasX2) {
                            if (d.x1_f != null && d.x2_f != null) {
                                tooltipValue = self.formatDateRange(d.x1, d.x2);
                            }
                            else if (d.x1 != null && d.x2 != null) {
                                tooltipValue = d.x1 + " - " + d.x2;
                            }
                        }
                        else if (serieHasYF) {
                            if (d.y_f != null) tooltipValue = d.y_f;
                        }
                        else if (serieHasY) {
                            if (d.y != null) tooltipValue = d.y.toString();
                        }
                        else if (serieHasX1 && serieHasX2) {
                            if (d.x1_f != null && d.x2_f != null) {
                                tooltipValue = self.formatDateRange(d.x1, d.x2);
                            }
                            else if (d.x1 != null && d.x2 != null) {
                                tooltipValue = d.x1 + " - " + d.x2;
                            }
                        }
                        if (yAxisUnit && tooltipValue.toString().indexOf(" - ") == -1) {
                            if (yAxis.unit_inverse) tooltipValue = yAxisUnit + tooltipValue;
                            else tooltipValue += ' ' + yAxisUnit;
                        }
                        chartSerie.data.push({
                            // isDataNull will be true if line chart actual value was null but stack value is assigned to keep the line series in the stack order
                            value: serieHasX1 && serieHasX2
                                ? [d.x1, d.x2, isSerieStack && !d?.isDataNull ? d.stack : (serieHasY ? d.y : null)]
                                : [d.x, isSerieStack && !d?.isDataNull ? d.stack : (serieHasY ? d.y : null)],
                            label: d.label ? d.label : null, // label for scatter graph
                            symbol: d.symbol ? d.symbol : null, // symbol for scatter graph,
                            symbolSize: d.symbolSize ? d.symbolSize : null, // symbolSize for scatter graph
                            _custom: {
                                tooltip: serieShowInTooltip
                                    ? {
                                        header: serieHasX1 && serieHasX2
                                            ? null
                                            : d.x_f,
                                        item: d.tooltip && d.tooltip.value
                                            ? `<span style="color:${serieColor}">${d.tooltip.value}</span>`
                                            : `<span style="color:${serieColor}">${serieTooltipTitle}: ${tooltipValue}</span>`
                                    }
                                    : null,
                                emphasis: d.emphasis
                                    ?
                                    (d.emphasis.header ? d.emphasis.header + "\n" : "")
                                    +
                                    (d.emphasis.items || []).map((ei:any) => {
                                        return `${ei.label}: ${ei.value}`
                                    }).join("\n")
                                    : null,
                                min: d.min,
                                max: d.max,
                                mean: d.mean,
                                popup_header: d.popup_header,
                                popup_template: d.popup_template
                            }
                        });
                        // label for scatter graph
                        if (d.label) {
                            chartSerie.data[chartSerie.data.length - 1]._custom.label = tooltipValue;
                        }
                    });

                    // create chart legend
                    let chartLegend: any = {
                        name: serieName,
                        _custom: {
                            uiOrder: s.legend && s.legend.uiOrder ? s.legend.uiOrder : (s.zIndex ? s.zIndex : 0)
                        }
                    };

                    // check serie type and add additional properties to chart                             
                    switch (s.type) {
                        case GraphType.Polygon:
                            isSingleBarChart = false;
                            // set chart styles
                            chartSerie.itemStyle = { ...self.echartDefaults.serie.polygon.itemStyle };
                            if (serieColor) chartSerie.itemStyle.color = serieColor;
                            if (s.style) {
                                if (s.style.hasOwnProperty("opacity")) chartSerie.itemStyle.opacity = s.style.opacity;
                                if (s.style.hasOwnProperty("border")) {
                                    if (s.style.border.hasOwnProperty("color")) chartSerie.itemStyle.borderColor = s.style.border.color;
                                    if (s.style.border.hasOwnProperty("width")) chartSerie.itemStyle.borderWidth = s.style.border.width;
                                    if (s.style.border.hasOwnProperty("dashArray")) chartSerie.itemStyle.borderType = s.style.dashArray.split(',');
                                }
                            }
                            // set item style                            
                            let polygonStyle:any = {};
                            if (chartSerie.itemStyle.color) polygonStyle["fill"] = chartSerie.itemStyle.color;
                            if (chartSerie.itemStyle.opacity) polygonStyle["opacity"] = chartSerie.itemStyle.opacity;
                            if (chartSerie.itemStyle.borderColor) polygonStyle["stroke"] = chartSerie.itemStyle.borderColor;
                            if (chartSerie.itemStyle.borderWidth) polygonStyle["stroke-width"] = chartSerie.itemStyle.borderWidth;
                            // set chart type as custom
                            chartSerie.type = 'custom';
                            // render item function
                            chartSerie.renderItem = function (params:any , api: any) {
                                if (!params.context.rendered && params.dataIndexInside == 0 && params.dataInsideLength == chartSerie.data.length) {
                                    params.context.rendered = true;
                                    let points = chartSerie.data.map((d: { value: any[]; }) => { return api.coord([d.value[0], d.value[1]]); });
                                    return {
                                        type: 'polygon',
                                        shape: {
                                            points: points
                                        },
                                        style: polygonStyle,
                                        transition: []
                                    };
                                }
                                return null;
                            };
                            // update legend properties
                            chartLegend.icon = 'rect';
                            break;
                        case GraphType.Drop:
                            isSingleBarChart = false;
                            // set chart styles
                            chartSerie.itemStyle = { ...self.echartDefaults.serie.drop.itemStyle };
                            if (serieColor) chartSerie.itemStyle.color = serieColor;
                            if (s.style) {
                                if (s.style.hasOwnProperty("opacity")) chartSerie.itemStyle.opacity = s.style.opacity;
                                if (s.style.hasOwnProperty("border")) {
                                    if (s.style.border.hasOwnProperty("color")) chartSerie.itemStyle.borderColor = s.style.border.color;
                                    if (s.style.border.hasOwnProperty("width")) chartSerie.itemStyle.borderWidth = s.style.border.width;
                                    if (s.style.border.hasOwnProperty("dashArray")) chartSerie.itemStyle.borderType = s.style.dashArray.split(',');
                                }
                            }
                            // set item style                            
                            let dropStyle:any = {};
                            if (chartSerie.itemStyle.color) dropStyle["fill"] = chartSerie.itemStyle.color;
                            if (chartSerie.itemStyle.opacity) dropStyle["opacity"] = chartSerie.itemStyle.opacity;
                            if (chartSerie.itemStyle.borderColor) dropStyle["stroke"] = chartSerie.itemStyle.borderColor;
                            if (chartSerie.itemStyle.borderWidth) dropStyle["stroke-width"] = chartSerie.itemStyle.borderWidth;
                            // set chart type as custom
                            chartSerie.type = 'custom';
                            // render item function
                            chartSerie.renderItem = function (params:any , api:any ) {
                                if (!params.context.rendered) {
                                    let x0Value = api.value(0);
                                    let x1Value = api.value(1);
                                    let y1Value = api.value(2) || chartYAxis.min;
                                    let y2Value = chartYAxis.max;
                                    let x0Coord = api.coord([x0Value, y2Value]);
                                    let x1Coord = api.coord([x1Value, y2Value]);
                                    let y1Coord = api.coord([x0Value + Math.abs(x1Value - x0Value) / 2, y1Value]);
                                    let y2Coord = api.coord([x0Value + Math.abs(x1Value - x0Value) / 2, y2Value]);
                                    return {
                                        type: 'ellipse',
                                        shape: {
                                            cx: x0Coord[0] + Math.abs(x1Coord[0] - x0Coord[0]) / 2,
                                            cy: x0Coord[1],
                                            rx: Math.abs(x1Coord[0] - x0Coord[0]) / 2,
                                            ry: Math.abs(y2Coord[1] - y1Coord[1])
                                        },
                                        style: dropStyle
                                    };
                                }
                                return null;
                            };
                            chartSerie.encode = {
                                x: [0, 1],
                                y: [2] || chartYAxis.min
                            };
                            // clip all the olverflowed
                            chartSerie.clip = true;
                            // update legend properties
                            chartLegend.icon = 'rect';
                            break;
                        case GraphType.Bar:
                            // set chart styles
                            chartSerie.itemStyle = { ...self.echartDefaults.serie.bar.itemStyle };
                            if (serieColor) chartSerie.itemStyle.color = serieColor;
                            if (s.style) {
                                if (s.style.hasOwnProperty("opacity")) chartSerie.itemStyle.opacity = s.style.opacity;
                                if (s.style.hasOwnProperty("border")) {
                                    if (s.style.border.hasOwnProperty("color")) chartSerie.itemStyle.borderColor = s.style.border.color;
                                    if (s.style.border.hasOwnProperty("width")) chartSerie.itemStyle.borderWidth = s.style.border.width;
                                    if (s.style.border.hasOwnProperty("dashArray")) chartSerie.itemStyle.borderType = s.style.dashArray.split(',');
                                }
                            }
                            // check custom bar chart
                            if (s.data && s.data.length && s.data[0].x1 && s.data[0].x2) {
                                if (s.fw_key != 'irrigation') {
                                    yAxisMin = 0;
                                }
                                // set item style
                                let itemStyle:any = {};
                                if (chartSerie.itemStyle.color) itemStyle["fill"] = chartSerie.itemStyle.color;
                                if (chartSerie.itemStyle.opacity) itemStyle["opacity"] = chartSerie.itemStyle.opacity;
                                if (chartSerie.itemStyle.borderColor) itemStyle["stroke"] = chartSerie.itemStyle.borderColor;
                                if (chartSerie.itemStyle.borderWidth) itemStyle["stroke-width"] = chartSerie.itemStyle.borderWidth;
                                // convert chart type to custom 
                                chartSerie.type = 'custom';
                                // render item function
                                chartSerie.renderItem = function (params:any, api:any) {
                                    if (!params.context.rendered) {
                                        let x0Value = api.value(0);
                                        let x1Value = api.value(1);

                                        let yValue = api.value(2) || chartYAxis.max;

                                        if (api.value(2) != null && api.value(2) != undefined) {
                                            if (api.value(2) == 0) {
                                                yValue = api.value(2);
                                            } else {
                                                yValue = api.value(2) || chartYAxis.max;
                                            }
                                        }
                                        let start = api.coord([x0Value, yValue]);
                                        let end = api.coord([x1Value, yValue]);
                                        let size = api.size([x1Value - x0Value, yValue - chartYAxis.min]);
                                        return {
                                            type: 'rect',
                                            shape: {
                                                x: start[0],
                                                y: start[1],
                                                width: end[0] - start[0],
                                                height: size[1]
                                            },
                                            style: itemStyle
                                        };
                                    }
                                    return null;
                                };
                                chartSerie.encode = {
                                    x: [0, 1],
                                    y: [2] || chartYAxis.max
                                };
                            }
                            else {
                                // update serie properties                           
                                if (chartSerie.data.length > 2) {
                                    chartSerie.barWidth = '100%';
                                }
                                // update x axis properties
                                xAxis.boundaryGap = ['0%', '0%'];
                            }
                            // update legend properties
                            chartLegend.icon = 'rect';
                            break;
                        case GraphType.Scatter:
                            isSingleBarChart = false;
                            // set chart styles                            
                            if (s.style) {
                                if (s.style.hasOwnProperty("symbol")) chartSerie.symbol = s.style.symbol;
                                if (s.style.hasOwnProperty("symbolSize")) chartSerie.symbolSize = s.style.symbolSize;
                            }
                            // check label
                            if (chartSerie.data && chartSerie.data.length && chartSerie.data[0].label) {
                                chartSerie.label = { ...self.echartDefaults.serie.scatter.label };
                                chartSerie.label.formatter = function (param:any) {
                                    return param.data._custom.label;
                                };
                                chartSerie.symbolSize = 0;
                            }
                            // check emphasis
                            if (chartSerie.data && chartSerie.data.length && chartSerie.data[0]._custom.emphasis) {
                                chartSerie.emphasis = self.echartDefaults.serie.scatter.emphasis || {};
                                chartSerie.emphasis.label = chartSerie.emphasis.label || {};
                                chartSerie.emphasis.label.formatter = function (param:any) {
                                    return param.data._custom.emphasis;
                                };
                                chartSerie.emphasis.label.width = this.getTextWidth("99/99/9999 99:99", { size: 10, weight: 'bold' }) + 15;
                                chartSerie.labelLayout = (params:any) => {
                                    let obj = { align: 'center' };
                                    let centerX = params.labelRect.x + (params.labelRect.width / 2);
                                    let centerEmphasis = chartSerie.emphasis.label.width / 2;
                                    if (centerX <= centerEmphasis) {
                                        obj["align"] = 'left';
                                    }
                                    else if (centerX >= dataWidth - centerEmphasis) {
                                        obj["align"] = 'right';
                                    }
                                    return obj;
                                }
                            }
                            chartSerie.zlevel = chartSerie._custom.zIndex;
                            chartSerie.legendHoverLink = false;
                            // update legend properties
                            chartLegend.icon = 'rect';
                            break;
                        default:    // line       
                            isSingleBarChart = false;
                            // check step chart
                            if (chartSerie.type == GraphType.Step) {
                                chartSerie.type = 'line';
                                chartSerie.step = 'end';
                            }
                            // set chart styles
                            chartSerie.lineStyle = { ...self.echartDefaults.serie.line.lineStyle };
                            if (serieColor) chartSerie.lineStyle.color = serieColor;
                            if (s.style) {
                                if (s.style.hasOwnProperty("width")) chartSerie.lineStyle.width = s.style.width;
                                if (s.style.hasOwnProperty("opacity")) chartSerie.lineStyle.opacity = s.style.opacity;
                                if (s.style.hasOwnProperty("dashArray")) chartSerie.lineStyle.type = s.style.dashArray.split(',');
                                if (s.style.hasOwnProperty("symbol")) {
                                    chartSerie.symbol = s.style.symbol;
                                    chartSerie.showSymbol = true;
                                    chartSerie.showAllSymbol = true;
                                }
                                if (s.style.hasOwnProperty("symbolSize")) chartSerie.symbolSize = s.style.symbolSize;
                            }
                            // set legend styles
                            chartLegend.lineStyle = {};
                            chartLegend.lineStyle.width = self.echartDefaults.legend.lineStyle.width;
                            if (s.style && s.style.dashArray) chartLegend.lineStyle.type = self.echartDefaults.legend.lineStyle.type;
                            chartLegend.itemStyle = { opacity: 0 };
                            break;
                    }

                    // add serie to chart series
                    series.push(chartSerie);

                    // add lagend to chart legends
                    if (serieShowInLegend) {
                        legends.push(chartLegend);
                        if (options.identifier) {
                            self.echartInstances[options.identifier].legends = self.echartInstances[options.identifier].legends || {};
                            self.echartInstances[options.identifier].legends[chartLegend.name] = { enabled: true };
                        }
                    }
                    else {
                        if (options.identifier) {
                            self.echartInstances[options.identifier].legends = self.echartInstances[options.identifier].legends || {};
                            self.echartInstances[options.identifier].legends[chartLegend.name] = { enabled: false };
                        }
                    }

                });

                // update y axis
                if (yAxisMin == Number.MAX_SAFE_INTEGER) yAxisMin = 0;
                if (yAxisMax == Number.MIN_SAFE_INTEGER) yAxisMax = 0;
                if (yAxisMin == yAxisMax) yAxisMax = yAxisMin + 1;
                if (!chartYAxis.hasOwnProperty("min")) chartYAxis.min = Math.floor(yAxisMin);
                if (!chartYAxis.hasOwnProperty("max")) chartYAxis.max = Math.ceil(yAxisMax);
            });

            // update x axis options
            if (xAxisMin == Number.MAX_SAFE_INTEGER) xAxisMin = 0;
            if (xAxisMax == Number.MIN_SAFE_INTEGER) xAxisMax = 0;
            if (xAxisMin != xAxisMax) {
                xAxis.min = xAxisMin;
                xAxis.max = xAxisMax;
            }

            // sort y axes
            yAxes.sort((y1, y2) => (y1._custom.uiOrder - y2._custom.uiOrder));

            // sort series
            series.sort((s1, s2) => (s1._custom.zIndex - s2._custom.zIndex));
            // set yAxisIndex of series
            series.forEach((s) => {
                s.yAxisIndex = yAxes.findIndex((y) => y._custom.dataIndex == s._custom.dataIndex);
            });

            // sort tooltips
            let tooltipIndexes: any = [];
            series.forEach((s, si) => {
                if (s._custom.tooltipIndex != null) {
                    tooltipIndexes.push(
                        {
                            serieIndex: si,
                            tooltipIndex: s._custom.tooltipIndex
                        }
                    );
                }
            });
            tooltipIndexes.sort((t1:any , t2:any ) => (t1.tooltipIndex - t2.tooltipIndex));
            tooltipIndexes = tooltipIndexes.map((t: { serieIndex: any; }) => t.serieIndex);

            // sort legends
            legends.sort((l1, l2) => {
                return l1._custom.uiOrder - l2._custom.uiOrder;
            });

            // update chart options            
            chartOptions.useUTC = true;
            chartOptions.grid = grid;
            if (title) chartOptions.title = title;

            // if data has multiple xAxis
            if (multipleXAxis.length) {
                chartOptions.xAxis = multipleXAxis.map(e => { return { ...xAxis, ...e } });
            } else {
                chartOptions.xAxis = xAxis;
            }

            chartOptions.yAxis = yAxes;
            chartOptions.series = series;
            // add tooltip
            chartOptions.tooltip = {
                trigger: 'axis',
                extraCssText: 'z-index: 15',
                formatter: function (params: any[]) {
                    let header = '';
                    let tooltip = '';
                    tooltipIndexes.forEach((ti:any) => {
                        let param = params.find((p:any) => p.seriesIndex == ti);
                        if (param) {
                            if (self.isLegendEnabled(options.identifier, param.seriesName)) {
                                if (param.data && param.data._custom.tooltip) {
                                    if (!header && param.data._custom.tooltip.header) {
                                        header = param.data._custom.tooltip.header + '<br/>';
                                    }
                                    if (tooltip) tooltip += '<br/>'
                                    tooltip += param.data._custom.tooltip.item
                                }
                            }
                        }
                        else {
                            let serie = series[ti];
                            if (self.isLegendEnabled(options.identifier, serie.name)) {
                                let axisValue = params[0].axisValue;
                                let nearestElementIndex = serie._custom.nearestXIndex[axisValue];
                                if (nearestElementIndex === undefined && serie.type != GraphType.Scatter) {
                                    if (serie._custom.dataHasX1 && serie._custom.dataHasX2) {
                                        nearestElementIndex = self.findBarElementIndex(serie._custom.dataX, axisValue, true);
                                    }
                                    else {
                                        nearestElementIndex = self.findNearestElementIndex(serie._custom.dataX, axisValue, true);
                                    }
                                }
                                if (nearestElementIndex > -1) {
                                    let nearestElement = serie.data[nearestElementIndex];
                                    if (nearestElement) {
                                        if (tooltip) tooltip += '<br/>'
                                        tooltip += nearestElement._custom.tooltip.item
                                    }
                                }
                            }
                        }
                    });
                    if (!header) {
                        return null;
                    }
                    else {
                        return header + tooltip;
                    }

                },
                axisPointer: {
                    snap: true
                },
                position: function (point: number[], params: any, dom: any, rect: any, size: { contentSize: number[]; viewSize: number[]; }) {
                    // tooltip will be fixed on the right if mouse hovering on the left,
                    // and on the left if hovering on the right.
                    const obj = {
                        top: 0,
                        left: (point[0] + size.contentSize[0] + self.echartDefaults.tooltip.margin < size.viewSize[0])
                            ? (point[0] + self.echartDefaults.tooltip.margin)
                            : (point[0] - size.contentSize[0] - self.echartDefaults.tooltip.margin)
                    };
                    if (obj.left < 0) {
                        obj.top = 0 - size.contentSize[1];
                        obj.left = point[0] - (size.contentSize[0] / 2);
                        if (obj.left < 0) obj.left = 0;
                        if (obj.left + size.contentSize[0] > size.viewSize[0]) obj.left = size.viewSize[0] - size.contentSize[0];
                    }
                    return obj;
                }
            };

            // update legends            
            if (legends.length) {
                // align legends
                let alignedLegends = self.alignLegends(legends, dataWidth, chartOptions.grid);
                chartOptions.legend = {
                    data: alignedLegends.legends,
                    bottom: self.echartDefaults.legend.bottom,
                    left: chartOptions.grid["left"],
                    width: dataWidth,
                    height: alignedLegends.height,
                    padding: 0,
                    align: 'left',
                    itemWidth: self.echartDefaults.legend.itemWidth,
                    itemHeight: self.echartDefaults.legend.itemHeight,
                    itemGap: self.echartDefaults.legend.itemGap,
                    textStyle: {
                        padding: 0
                    }
                };
                if (options.hasOwnProperty("legendSelectedMode")) {
                    chartOptions.legend.selectedMode = options.selectedMode;
                }
            }

            // add zoom
            if (options.hasZoom) {
                grid['bottom'] = grid['bottom']
                    + self.echartDefaults.zoom.top
                    + self.echartDefaults.zoom.height
                    + (legends.length ? 0 : self.echartDefaults.zoom.bottom);
                chartOptions.dataZoom = [
                    {
                        id: "zoom_inside",
                        type: "inside",
                        zoomOnMouseWheel: false,
                        moveOnMouseMove: true,
                        moveOnMouseWheel: false,
                        disabled: true
                    },
                    {
                        id: "zoom_slider",
                        type: "slider",
                        brushSelect: false,
                        backgroundColor: self.echartDefaults.zoom.colors.background,
                        borderColor: "transparent",
                        fillerColor: self.echartDefaults.zoom.colors.filler,
                        dataBackground: { lineStyle: { color: "transparent", opacity: 0 }, areaStyle: { color: "transparent", opacity: 0 } },
                        selectedDataBackground: { lineStyle: { color: "transparent", opacity: 0 }, areaStyle: { color: "transparent", opacity: 0 } },
                        handleIcon: `M ${self.echartDefaults.zoom.height / 2}, ${self.echartDefaults.zoom.height / 2} m -${self.echartDefaults.zoom.height / 2}, 0 a ${self.echartDefaults.zoom.height / 2},${self.echartDefaults.zoom.height / 2} 0 1,0 ${self.echartDefaults.zoom.height},0 a ${self.echartDefaults.zoom.height / 2},${self.echartDefaults.zoom.height / 2} 0 1,0 -${self.echartDefaults.zoom.height},0`,
                        handleStyle: {
                            color: self.echartDefaults.zoom.colors.filler,
                            borderColor: self.echartDefaults.zoom.colors.background,
                            borderWidth: 1
                        },
                        handleSize: self.echartDefaults.zoom.handleSize,
                        textStyle: {
                            color: self.echartDefaults.zoom.colors.filler,
                            position: "bottom"
                        },
                        height: self.echartDefaults.zoom.height,
                        bottom: legends.length
                            ? self.echartDefaults.legend.top
                            + self.echartDefaults.zoom.height
                            + self.echartDefaults.legend.bottom
                            : self.echartDefaults.zoom.bottom,
                        labelFormatter: function (value: number | Date | undefined, valueStr: any) {
                            try {
                                return new Intl.DateTimeFormat(language, {
                                    month: 'short',
                                    day: 'numeric',
                                    timeZone: 'UTC', hour12: false
                                }).format(value)
                                    + "\n"
                                    + new Intl.DateTimeFormat(language, {
                                        hour: '2-digit',
                                        minute: '2-digit',
                                        timeZone: 'UTC', hour12: false
                                    }).format(value);
                            }
                            catch (error) {
                                if (!environment.production) {
                                    console.log(value);
                                    console.log(valueStr);
                                }
                                return "";
                            }
                        },
                        minValueSpan: 1000 * 60 * 5,
                        show: false
                    }
                ];
            }


        }

        if (!environment.production) {
            console.log(chartOptions);
        }

        return chartOptions;
    }

    static findNearestElementIndex(arr: string | any[], target: number, fromLeft: boolean) {

        // get length of array
        let n = arr.length;

        // Corner cases
        if (target <= arr[0]) {
            return fromLeft ? -1 : 0;
        }
        if (target >= arr[n - 1]) {
            return n - 1;
        }

        // Doing binary search
        let i = 0;
        let j = n;
        let mid = 0;
        while (i < j) {
            mid = Math.floor((i + j) / 2);

            if (arr[mid] == target) {
                return mid;
            }
            // If target is less than array element, then search in left
            else if (target < arr[mid]) {
                // If target is greater than previous to mid, return closest of two
                if (mid > 0 && target > arr[mid - 1]) {
                    if (!fromLeft && target - arr[mid - 1] >= arr[mid] - target)
                        return mid;
                    else
                        return mid - 1;
                }
                // update j
                j = mid;
            }
            // If target is greater than mid, then search in right
            else {
                if (mid < n - 1 && target < arr[mid + 1]) {
                    if (!fromLeft && target - arr[mid] >= arr[mid + 1] - target)
                        return mid + 1;
                    else
                        return mid;
                }
                // update i
                i = mid + 1;
            }
        }

        // Only single element left after search        
        return mid;
    }

    static findBarElementIndex(arr: string | any[], target: number, fromLeft: boolean) {
        // get length of array
        let n = arr.length;

        // Corner cases
        if (target < arr[0][0]) {
            return -1;
        }
        if (target > arr[n - 1][1]) {
            return -1;
        }

        // Doing binary search
        let i = 0;
        let j = n;
        let mid = 0;
        while (i < j) {
            mid = Math.floor((i + j) / 2);

            if (arr[mid][0] <= target && target <= arr[mid][1]) {
                return mid;
            }
            // If target is less than array element, then search in left
            else if (target < arr[mid][0]) {
                // If target is greater than previous to mid, return closest of two
                if (mid > 0 && target >= arr[mid - 1][0] && target <= arr[mid - 1][1]) {
                    return mid - 1;
                }
                // update j
                j = mid;
            }
            // If target is greater than mid, then search in right
            else {
                if (mid < n - 1 && target >= arr[mid + 1][0] && target <= arr[mid + 1][1]) {
                    return mid + 1;
                }
                // update i
                i = mid + 1;
            }
        }

        // Only single element left after search        
        return -1;
    }

    static alignLegends(legends:any , width:any , grid:any) {

        let alignedLegends:any = [];

        // add line breaks to legends        
        let legendWidth = 0;    // width of legend
        let legendRowWidth = 0; // width of legend row
        legends?.forEach((l:any) => {
            // hack for correct legend width
            l.textStyle = l.textStyle || {};
            l.textStyle.borderWidth = 1;
            l.textStyle.borderColor = "transparent";
            l.textStyle.width = this.getTextWidth(l.name, {});
            // calculate width of legend
            // ?+5 : https://github.com/apache/echarts/blob/13c2d062e6bcd49ab6da87eb4032ac01ec9fe467/src/component/legend/LegendView.ts#L401
            legendWidth = this.echartDefaults.legend.itemWidth + 5 + l.textStyle.width + this.echartDefaults.legend.itemGap;
            // if the first legend of first row
            if (!legendRowWidth) {
                legendRowWidth = legendWidth;
                alignedLegends.push(l);
            }
            // if next legend items
            else {
                // increase width of row
                legendRowWidth += legendWidth;
                // cpmare row with by full width
                if (legendRowWidth > width) {
                    // add new line to legend
                    alignedLegends.push('\n');
                    // reset row width
                    legendRowWidth = legendWidth;
                }
                alignedLegends.push(l);
            }
        });

        // how many legend rows?
        let numberOfLegendRows = alignedLegends.filter((al: string) => al == "\n").length + 1;
        let legendsHeight = numberOfLegendRows * (Math.max(this.echartDefaults.legend.itemHeight, this.echartDefaults.legend.textStyle.fontSize))
            + (numberOfLegendRows - 1) * (this.echartDefaults.legend.itemGap);
        // update bottom property of grid
        grid['bottom'] = grid['bottom']
            + this.echartDefaults.legend.top
            + legendsHeight
            + this.echartDefaults.legend.bottom;

        return {
            legends: alignedLegends,
            height: legendsHeight
        };

    }

    static getLanguageForUser() {
        let language = 'en';
        let account: any = sessionStorage.getItem('account');
        if (account) {
            account = JSON.parse(account);
            language = account.language ? account.language.id : 'en';
        }
        return language;
    }

    static clearChart(chart: any, text: string) {
        if (chart) {
            let textSize = 16;
            let alignedTitle = this.alignTitle(chart.getDom(), text, textSize);
            // alignedTitle = 
            chart.clear();
            chart.hideLoading();
            const chartOptions: EChartsOption = {
                title: {
                    show: true,
                    textStyle: {
                        color: 'black',
                        fontSize: textSize,
                        fontWeight: 'normal',
                        overflow: 'break',
                        width: alignedTitle.width
                    },
                    text: alignedTitle.text,
                    left: 'center',
                    top: 'middle'
                },
                xAxis: {
                    show: false
                },
                yAxis: {
                    show: false
                },
                series: []
            };
            chart.setOption(chartOptions);
        }
    }

    static getDefaultChart(containerSelector: any, text: string) {
        try {
            let textSize = 16;
            let alignedTitle = this.alignTitle(containerSelector, text, textSize);
            const chartOptions: EChartsOption = {
                title: {
                    show: true,
                    textStyle: {
                        color: 'black',
                        fontSize: textSize,
                        fontWeight: 'normal',
                        overflow: 'break',
                        width: alignedTitle.width
                    },
                    text: alignedTitle.text,
                    left: 'center',
                    top: 'middle'
                },
                xAxis: {
                    show: false
                },
                yAxis: {
                    show: false
                },
                series: []
            };

            return chartOptions;
        } catch (err) {
        }
        return null;
    }

    static alignTitle(containerSelector: any, text: string, fontSize: any) {
        let container = typeof containerSelector == "string" ? document.querySelector(containerSelector) : containerSelector;
        let textWidth: any = "100%";
        let alignedText: any = text;
        if (container) {
            // Adjust the container's width by subtracting 20.5 pixels for padding/margin, then use 80% of this value for text width
            textWidth = (container.clientWidth - (typeof containerSelector == "string" ? 20 : 0)) * 0.8;
            let textRows = [];
            let textRow = "";
            let textWords = text?.split(" ");
            textWords?.forEach((tw, twi) => {
                if (this.getTextWidth(textRow + tw + " ", { size: fontSize + "px" }) > textWidth) {
                    textRows.push(textRow.trim());
                    textRow = tw + " ";
                }
                else {
                    textRow += tw + " ";
                }
            });
            if (textRow && textRow.trim().length) {
                textRows.push(textRow.trim());
            }
            alignedText = textRows.join("\n");
        }

        return { width: textWidth, text: alignedText };
    }

    static formatDateRange(x1:any , x2:any ) {

        let language = this.getLanguageForUser();
        let x1Moment = moment.utc(x1);
        let x2Moment = moment.utc(x2);
        let x1FormatOptions: any = { timeZone: 'UTC', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', hour12: false };
        let x2FormatOptions: any = { timeZone: 'UTC', hour12: false };
        let label = "";

        if (x1Moment.month() !== x2Moment.month() || x1Moment.date() !== x2Moment.date()) {
            x2FormatOptions.day = '2-digit';
            x2FormatOptions.month = '2-digit';
        }
        if (x1Moment.hour() !== x2Moment.hour() || x1Moment.minute() !== x2Moment.minute()) {
            x2FormatOptions.hour = '2-digit';
            x2FormatOptions.minute = '2-digit';
        }
        try {
            label = new Intl.DateTimeFormat(language, x1FormatOptions).format(x1) + " - " + new Intl.DateTimeFormat(language, x2FormatOptions).format(x2);
            let durationInMinutes = x2Moment.diff(x1Moment, "minutes");
            let durationHour = Math.floor(durationInMinutes / 60);
            let durationMinute = durationInMinutes % 60;
            let duration = ("00" + durationHour).slice(-2) + ":" + ("00" + durationMinute).slice(-2);
            label += " (" + duration + ")"
            if (language == "tr" || language == "az") label = label.replace(/\//g, ".");
        } catch (error) {
            if (!environment.production) {
                console.log(x1);
                console.log(x2);
                console.log(error);
            }
        }

        return label;

    }

    static showChartLoading(chart: any) {
        let currentBrand = BrandUtils.getBrand();
        if (chart) {
            chart.showLoading({
                text: '',
                spinnerRadius: 15,
                lineWidth: 3,
                color: currentBrand.loading_color
            });
        }
    }

    static hideChartLoading(chart: any) {
        chart?.hideLoading();
    }

    static enableChartZoom(chart: any, enabled: boolean) {
        if (chart != null) {
            let zoomInsideId = "zoom_inside";
            let zoomSliderId = "zoom_slider";
            chart.setOption({
                dataZoom: [
                    { id: zoomInsideId, disabled: !enabled },
                    { id: zoomSliderId, show: enabled }
                ]
            });
            // reset zoom
            if (!enabled) {
                chart.dispatchAction({
                    type: 'dataZoom',
                    dataZoomIndex: 0,
                    start: 0,
                    end: 100
                });
            }
        }
    }

    static getTextWidth(text: string, font: any) {
        let canvas = document.createElement("canvas");
        let context = canvas.getContext("2d");
        let fontFamily = font.family || window.getComputedStyle(document.body, null).getPropertyValue('font-family');
        let fontSize = font.size || window.getComputedStyle(document.body, null).getPropertyValue('font-size');
        let fontWeight = font.weight || window.getComputedStyle(document.body, null).getPropertyValue('font-weight');
        let width = 0;
        if(context){
            context.font = `${fontWeight} ${fontSize} ${fontFamily}`;
            width = Math.ceil(context.measureText(text).width);
            }
        canvas.remove();
        return width;
    }

    static flatten(data:any, delimeter:any) {
        // return value
        let result:any = {};

        // check delimeter
        delimeter = delimeter || ".";
        // create recusive function
        let recursive_flatten = function (current:any, property:any) {
            // check data is not plain object
            if (Object(current) !== current) {
                // add to result with property key
                result[property] = current;
            }
            // check data is array
            else if (Array.isArray(current)) {
                // get length of array
                let l = current.length
                // if empty
                if (l == 0) {
                    // add empty array to result
                    result[property] = [];
                }
                else {
                    // loop on items
                    for (let i = 0; i < l; i++) {
                        // call recursive function for each element of array
                        recursive_flatten(current[i], property ? property + delimeter + i : "" + i);
                    }
                }
            }
            // else (is plain object)
            else {
                let isEmpty = true;
                // loop on properties
                for (let p in current) {
                    isEmpty = false;
                    // call recursive function for each property
                    recursive_flatten(current[p], property ? property + delimeter + p : p);
                }
                if (isEmpty) {
                    // add empty object to result
                    result[property] = {};
                }
            }
        }
        // check data
        if (data !== undefined && data !== null && Object.keys(data).length > 0) {
            // call recursive function
            recursive_flatten(data, "");
        }

        return result;
    };

    // check if any legend is disabled or not by matching its name
    static isLegendEnabled(chartIdentifier:any, serieName:any): boolean {
        if (chartIdentifier) {
            if (this.echartInstances[chartIdentifier].legends[serieName]) {
                return this.echartInstances[chartIdentifier].legends[serieName].enabled;
            }
            else {
                return false;
            }
        }
        else {
            return true;
        }

    }

    // this function is called after chart initialization in e-charts.component.ts
    static setEChartEventHandlers(chart:any, identifier:any) {
        const self = this;

        chart.on('legendselectchanged', function (params:any) {
            // params.selected is an object that has all the legend titles with their status like true or false
            /*
                selected:{
                    20 cm: true,
                    40 cm: false,
                    60 cm: true,
                    Rainfall: true,
                    Irrigation effect: true,
                }
            */

            if (identifier) {
                self.echartInstances[identifier].legends[params.name].enabled = params.selected[params.name];
            }

            if (!environment.production) {
                console.log(self.echartInstances);
            }
        });

    }


    static checkFirmWareKeyExistsForDevice(fw_key: any, measurements: any) {
        let exists = false;
        for (let i = 0, L = measurements.length; i < L; i++) {
            if (measurements[i].fw_key == fw_key) {
                exists = true;
                break;
            }
        }
        return exists;
    }


    /**
     * 
     * @param timestamp 
     * @returns 
     */
    static formatTimeStampToDayMonth(translateService: any, timestamp: any) {
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const date = new Date(timestamp);
        const month = months[date.getMonth()];
        const day = date.getDate();
        let formattedDate = '';
        translateService
            .get(`global.shortMonths.${month}`)
            .subscribe((translatedString:string) => {
                formattedDate = `${translatedString} ${day}`;
            })
        return formattedDate;
    }

}
