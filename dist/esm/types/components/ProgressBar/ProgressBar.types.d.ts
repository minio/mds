import { OverrideTheme } from "../../global/global.types";
export interface MainProgressProps {
  variant?: "determinate" | "indeterminate";
  notificationLabel?: string;
  value?: number;
  maxValue?: number;
  progressLabel?: boolean;
}
export interface CommonProgressBar {
  sx?: OverrideTheme;
  color?: "blue" | "red" | "green" | "orange" | "grey";
  barHeight?: number;
  transparentBG?: boolean;
}
export type ProgressBarProps = MainProgressProps & CommonProgressBar;
