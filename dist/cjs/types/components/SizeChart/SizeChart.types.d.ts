import { OverrideTheme } from "../../global/global.types";
export interface SizeChartMain {
  label: boolean;
  width?: string;
  height?: string;
}
export interface SizeChartConstructProps {
  usedBytes: number;
  totalBytes: number;
  chartLabel?: string;
  sx?: OverrideTheme;
}
export type SizeChartProps = SizeChartMain & SizeChartConstructProps;
