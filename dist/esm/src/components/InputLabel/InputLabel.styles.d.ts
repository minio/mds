import { Theme } from "@emotion/react";
import { InputLabelOrientation, InputLabelSizeMode } from "./InputLabel.types";
export declare const customLabelStyles: (
  theme: Theme,
  inputSizeMode: InputLabelSizeMode,
  orientation: InputLabelOrientation,
) => {
  fontFamily: string;
  color: string;
  textAlign: "left";
  alignItems: "flex-start";
  display: string;
  userSelect: string;
  whiteSpace: string;
  "& > span": {
    display: string;
    alignItems: string;
    lineHeight: string | number | (string & {});
    width: number;
    paddingRight: number;
    textWrap: string;
    "&.noMinWidthLabel": {
      minWidth: string;
    };
  };
};
