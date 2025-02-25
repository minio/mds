import { CSSObject } from "styled-components";
export interface SizeChartMain {
  label: boolean;
  width?: string;
  height?: string;
}
export interface SizeChartConstructProps {
  usedBytes: number;
  totalBytes: number;
  chartLabel?: string;
  sx?: CSSObject;
}
export type SizeChartProps = SizeChartMain & SizeChartConstructProps;
