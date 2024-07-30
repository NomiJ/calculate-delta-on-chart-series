
interface DataPoint {
  stack: number | null;
  x: number;
  x_f: string;
  y: number | null;
  y_f: string | null;
}

interface SeriesItem {
  data: DataPoint[];
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

interface SeriesData {
  axes: Axes;
  series: SeriesItem[];
}
