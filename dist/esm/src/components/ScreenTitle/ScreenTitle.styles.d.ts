import { Theme } from "@emotion/react";
export declare const screenTitleContainerStyles: (
  theme: Theme,
  subTitle: boolean,
  titleOptions: boolean,
) => {
  [x: string]:
    | string
    | {
        display: string;
        alignItems: string;
        gap: number;
        justifyContent: string;
        width: string;
        height?: undefined;
        flexFlow?: undefined;
        "& .titleElement"?: undefined;
        "& .subTitle, .superTitle"?: undefined;
        "& .superTitle"?: undefined;
        flexGrow?: undefined;
        "& .titleColumn"?: undefined;
        "& .badges"?: undefined;
        "& .options"?: undefined;
        "& .stContainer"?: undefined;
        "& .headerBarIcon"?: undefined;
        "& .headerBarSubheader"?: undefined;
        "& .rightItems"?: undefined;
      }
    | {
        height: string;
        justifyContent: string;
        display: string;
        flexFlow: string;
        alignItems: string;
        gap: number;
        "& .titleElement": {
          color: string;
        };
        "& .subTitle, .superTitle": {
          color: string;
        };
        "& .superTitle": {
          position: string;
          marginTop: number;
        };
        width?: undefined;
        flexGrow?: undefined;
        "& .titleColumn"?: undefined;
        "& .badges"?: undefined;
        "& .options"?: undefined;
        "& .stContainer"?: undefined;
        "& .headerBarIcon"?: undefined;
        "& .headerBarSubheader"?: undefined;
        "& .rightItems"?: undefined;
      }
    | {
        flexGrow: number;
        display: string;
        justifyContent: string;
        gap: number;
        "& .titleColumn": {
          flexGrow: string;
          "& .options"?: undefined;
        };
        "& .badges": {
          display: string;
          alignItems: string;
          gap: number;
        };
        "& .options": {
          display: string;
          alignItems: string;
          color: string;
          gap: number;
        };
        alignItems?: undefined;
        width?: undefined;
        height?: undefined;
        flexFlow?: undefined;
        "& .titleElement"?: undefined;
        "& .subTitle, .superTitle"?: undefined;
        "& .superTitle"?: undefined;
        "& .stContainer"?: undefined;
        "& .headerBarIcon"?: undefined;
        "& .headerBarSubheader"?: undefined;
        "& .rightItems"?: undefined;
      }
    | {
        display: string;
        alignItems: string;
        gap: number;
        height: string;
        justifyContent?: undefined;
        width?: undefined;
        flexFlow?: undefined;
        "& .titleElement"?: undefined;
        "& .subTitle, .superTitle"?: undefined;
        "& .superTitle"?: undefined;
        flexGrow?: undefined;
        "& .titleColumn"?: undefined;
        "& .badges"?: undefined;
        "& .options"?: undefined;
        "& .stContainer"?: undefined;
        "& .headerBarIcon"?: undefined;
        "& .headerBarSubheader"?: undefined;
        "& .rightItems"?: undefined;
      }
    | {
        display: string;
        gap: number;
        alignItems?: undefined;
        justifyContent?: undefined;
        width?: undefined;
        height?: undefined;
        flexFlow?: undefined;
        "& .titleElement"?: undefined;
        "& .subTitle, .superTitle"?: undefined;
        "& .superTitle"?: undefined;
        flexGrow?: undefined;
        "& .titleColumn"?: undefined;
        "& .badges"?: undefined;
        "& .options"?: undefined;
        "& .stContainer"?: undefined;
        "& .headerBarIcon"?: undefined;
        "& .headerBarSubheader"?: undefined;
        "& .rightItems"?: undefined;
      }
    | {
        "& .stContainer": {
          flexDirection: string;
          gap: number;
          flexFlow: string;
          alignItems: string;
        };
        "& .headerBarIcon": {
          display: string;
        };
        "& .headerBarSubheader": {
          display: string;
          flexDirection: string;
        };
        "& .rightItems": {
          width: string;
          justifyContent: string;
        };
        "& .titleColumn": {
          "& .options": {
            flexDirection: string;
            gap: number;
          };
          flexGrow?: undefined;
        };
        display?: undefined;
        alignItems?: undefined;
        gap?: undefined;
        justifyContent?: undefined;
        width?: undefined;
        height?: undefined;
        flexFlow?: undefined;
        "& .titleElement"?: undefined;
        "& .subTitle, .superTitle"?: undefined;
        "& .superTitle"?: undefined;
        flexGrow?: undefined;
        "& .badges"?: undefined;
        "& .options"?: undefined;
      };
  boxSizing: "border-box";
  display: string;
  flexDirection: string;
  flexWrap: string;
  width: string;
  "& .stContainer": {
    display: string;
    alignItems: string;
    gap: number;
    justifyContent: string;
    width: string;
  };
  "& .titleColumn": {
    height: string;
    justifyContent: string;
    display: string;
    flexFlow: string;
    alignItems: string;
    gap: number;
    "& .titleElement": {
      color: string;
    };
    "& .subTitle, .superTitle": {
      color: string;
    };
    "& .superTitle": {
      position: string;
      marginTop: number;
    };
  };
  "& .leftItems": {
    flexGrow: number;
    display: string;
    justifyContent: string;
    gap: number;
    "& .titleColumn": {
      flexGrow: string;
    };
    "& .badges": {
      display: string;
      alignItems: string;
      gap: number;
    };
    "& .options": {
      display: string;
      alignItems: string;
      color: string;
      gap: number;
    };
  };
  "& .rightItems": {
    display: string;
    alignItems: string;
    gap: number;
    height: string;
  };
  "& .optionElement": {
    display: string;
    gap: number;
  };
};
