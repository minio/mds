import React from "react";
import { DateTime } from "luxon";
import { CommonHelpTipPlacement } from "../HelpTip/HelpTip.types";
import { OverrideTheme } from "../../global/global.types";
import { CSSObject } from "styled-components";
export interface DateTimeInputMain {
  pickerStartComponent?: React.ReactNode;
  className?: string;
  label?: string;
  required?: boolean;
  tooltip?: string;
  disabled?: boolean;
  openPickerIcon?: "arrow" | React.ReactNode;
  displayFormat?: string;
  helpTip?: React.ReactNode;
  helpTipPlacement?: CommonHelpTipPlacement;
  noLabelMinWidth?: boolean;
  pickerSx?: OverrideTheme;
}
export interface DateTimeConstruct {
  id: string;
  sx?: OverrideTheme;
  mode?: "all" | "date";
  value: DateTime | null;
  onChange: (value: DateTime | null) => void;
  minDate?: DateTime;
  maxDate?: DateTime;
  usePortal?: boolean;
}
export interface DateTimeSelectorMain {
  open?: boolean;
  anchorEl?: (EventTarget & HTMLElement) | null;
  onClose?: () => void;
}
export interface TimeSelectorProps {
  value: DateTime | null;
  onChange: (value: DateTime | null) => void;
  completeCallback?: () => void;
  timeFormat?: "12h" | "24h";
  secondsSelector: boolean;
}
export interface DateSelectorProps {
  minDate?: DateTime;
  maxDate?: DateTime;
  value: DateTime | null;
  onChange: (value: DateTime | null) => void;
}
export interface StylesOverrideProps {
  isPortal: boolean;
  mode: "all" | "date";
  coords: CSSObject;
  sx?: OverrideTheme;
}
export type DateTimeInputProps = DateTimeInputMain &
  DateTimeConstruct &
  TimeSelectorProps;
export type DateTimeSelectorProps = DateTimeSelectorMain &
  DateTimeConstruct &
  TimeSelectorProps;
