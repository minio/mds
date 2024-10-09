import { OverrideTheme } from "../../global/global.types";
export type ProgressState = "progress" | "success" | "error" | "paused";
export interface ProgressBarProps {
  variant?: "determinate" | "indeterminate";
  notificationLabel?: string;
  value?: number;
  maxValue?: number;
  progressLabel?: boolean;
  sx?: OverrideTheme;
  state?: ProgressState;
  barHeight?: number;
  transparentBG?: boolean;
}
