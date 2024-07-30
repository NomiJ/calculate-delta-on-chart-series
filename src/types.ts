interface DataPoint {
  stack: number | null;
  x: number;
  x_f: string;
  y: number | null;
  y_f: string | null;
}

interface SeriesItem {
  data: DataPoint[]; // Optional to accommodate both structures
  fw_key: string;
  style: {
    color: string;
  };
  title: string;
  max_yf?: number;
}

interface Axes {
  y: {
    style: {
      color: string;
    };
    title: string;
    unit: string;
  };
}

interface TimestampSeriesItem {
  x: number;
  x_f: string;
  y: {
    [key: string]: number | null;
  };
}

interface SeriesData {
  axes: Axes;
  series: SeriesItem[];
  timestamp_series?: TimestampSeriesItem[]; // Optional to accommodate both structures
}