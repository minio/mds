import { CSSObject } from "styled-components";
export interface MainProgressProps {
  variant?: "determinate" | "indeterminate";
  notificationLabel?: string;
  value?: number;
  maxValue?: number;
  progressLabel?: boolean;
}
export interface CommonProgressBar {
  sx?: CSSObject;
  color?: "blue" | "red" | "green" | "orange" | "grey";
  barHeight?: number;
  transparentBG?: boolean;
}
export type ProgressBarProps = MainProgressProps & CommonProgressBar;
