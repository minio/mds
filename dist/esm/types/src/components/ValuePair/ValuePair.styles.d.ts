import { Theme } from "@emotion/react";
import { ValuePairDirection } from "./ValuePair.types";
export declare const valuePairBaseStyles: (
  theme: Theme,
  direction: ValuePairDirection,
) => {
  [x: string]:
    | string
    | number
    | {
        fontWeight: number;
        fontSize: number;
        color: string;
        "& a"?: undefined;
        flexDirection?: undefined;
      }
    | {
        fontWeight: string;
        color: string;
        fontSize: number;
        "& a": {
          color: string;
        };
        flexDirection?: undefined;
      }
    | {
        flexDirection: string;
        fontWeight?: undefined;
        fontSize?: undefined;
        color?: undefined;
        "& a"?: undefined;
      };
  display: string;
  flexDirection: ValuePairDirection;
  gap: number;
  "& .label": {
    fontWeight: number;
    fontSize: number;
    color: string;
  };
  "& .value": {
    fontWeight: string;
    color: string;
    fontSize: number;
    "& a": {
      color: string;
    };
  };
};
