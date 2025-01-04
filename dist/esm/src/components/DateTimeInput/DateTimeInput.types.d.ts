import React from "react";
import { DateTime } from "luxon";
import { OverrideTheme } from "../../global/global.types";
export type DateTimeMode = "all" | "date";
export interface DateTimeInputMain {
  className?: string;
  label?: string;
  required?: boolean;
  tooltip?: string;
  disabled?: boolean;
  openPickerIcon?: "arrow" | React.ReactNode;
  displayFormat?: string;
  noLabelMinWidth?: boolean;
  pickerSx?: OverrideTheme;
  sizeMode?: "small" | "large";
  orientation?: "horizontal" | "vertical";
  state?: "normal" | "error" | "success" | "warning";
  readOnly?: boolean;
  helper?: string;
  saveLabel?: string;
  onAcceptDate?: () => void;
}
export interface DateTimeConstruct {
  id: string;
  sx?: OverrideTheme;
  mode?: DateTimeMode;
  value: DateTime | null;
  onChange: (value: DateTime | null) => void;
  minDate?: DateTime;
  maxDate?: DateTime;
  usePortal?: boolean;
}
export interface DateTimeSelectorMain {
  open?: boolean;
  saveLabel?: string;
  anchorEl?: (EventTarget & HTMLElement) | null;
  onClose?: () => void;
  onAcceptDate?: () => void;
}
export interface TimeSelectorProps {
  value: DateTime | null;
  onChange: (value: DateTime | null) => void;
  validitySignal?: (valid: boolean) => void;
  timeFormat?: "12h" | "24h";
  secondsSelector: boolean;
}
export interface DateSelectorProps {
  minDate?: DateTime;
  maxDate?: DateTime;
  value: DateTime | null;
  onChange: (value: DateTime | null) => void;
}
export type DateTimeInputProps = DateTimeInputMain &
  DateTimeConstruct &
  TimeSelectorProps;
export type DateTimeSelectorProps = DateTimeSelectorMain &
  DateTimeConstruct &
  TimeSelectorProps;
