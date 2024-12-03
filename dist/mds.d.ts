import * as _emotion_react from "@emotion/react";
import { Theme, EmotionCache } from "@emotion/react";
import * as React$1 from "react";
import React__default, {
  SVGProps,
  ReactNode,
  FC,
  HTMLAttributes,
  MouseEventHandler,
  CSSProperties,
} from "react";
import { CSSObject } from "@emotion/serialize";
import * as _emotion_react_jsx_runtime from "@emotion/react/jsx-runtime";
import { SortDirectionType } from "react-virtualized";
import { DateTime } from "luxon";
export { default as styled } from "@emotion/styled";

interface ThemeDefinition {
  colors: ColorThemeProps;
  shadows: ShadowsThemeProps;
  paddingSizes: PaddingThemeProps;
  borderRadius: BorderRadiusThemeProps;
}
interface PaddingThemeProps {
  sizeXXXS: number;
  sizeXXS: number;
  sizeXS: number;
  sizeSM: number;
  size: number;
  sizeMD: number;
  sizeLG: number;
  sizeXL: number;
  sizeXXL: number;
}
interface BorderRadiusThemeProps {
  borderRadiusXS: number;
  borderRadiusSM: number;
  borderRadius: number;
  borderRadiusLG: number;
  borderRadiusXLG: number;
}
interface ShadowsThemeProps {
  "boxShadow-01": string;
  "boxShadow-02": string;
  "boxShadow-03": string;
  "boxShadow-04": string;
  "focusStyle-Light": string;
  "focusStyle-Dark": string;
  "contentShadow-Light": string;
  toggleShadow: string;
  "toggleShadow-Disabled": string;
}
interface ColorThemeProps {
  "Color/Base/Royal/0": string;
  "Color/Base/Royal/1": string;
  "Color/Base/Royal/2": string;
  "Color/Base/Royal/3": string;
  "Color/Base/Royal/4": string;
  "Color/Base/Royal/5": string;
  "Color/Base/Royal/6": string;
  "Color/Base/Royal/7": string;
  "Color/Base/Royal/8": string;
  "Color/Base/Royal/9": string;
  "Color/Base/Royal/10": string;
  "Color/Base/Java/0": string;
  "Color/Base/Java/1": string;
  "Color/Base/Java/2": string;
  "Color/Base/Java/3": string;
  "Color/Base/Java/4": string;
  "Color/Base/Java/5": string;
  "Color/Base/Java/6": string;
  "Color/Base/Java/7": string;
  "Color/Base/Java/8": string;
  "Color/Base/Java/9": string;
  "Color/Base/Java/10": string;
  "Color/Base/Orange/0": string;
  "Color/Base/Orange/1": string;
  "Color/Base/Orange/2": string;
  "Color/Base/Orange/3": string;
  "Color/Base/Orange/4": string;
  "Color/Base/Orange/5": string;
  "Color/Base/Orange/6": string;
  "Color/Base/Orange/7": string;
  "Color/Base/Orange/8": string;
  "Color/Base/Orange/9": string;
  "Color/Base/Orange/10": string;
  "Color/Base/Sunset/0": string;
  "Color/Base/Sunset/1": string;
  "Color/Base/Sunset/2": string;
  "Color/Base/Sunset/3": string;
  "Color/Base/Sunset/4": string;
  "Color/Base/Sunset/5": string;
  "Color/Base/Sunset/6": string;
  "Color/Base/Sunset/7": string;
  "Color/Base/Sunset/8": string;
  "Color/Base/Sunset/9": string;
  "Color/Base/Sunset/10": string;
  "Color/Neutral/Text/colorText": string;
  "Color/Base/Black": string;
  "Color/Base/White": string;
  "Color/Neutral/Text/colorTextSecondary": string;
  "Color/Neutral/Text/colorTextTertiary": string;
  "Color/Neutral/Text/colorTextQuaternary": string;
  "Color/Neutral/Text/colorTextLightSolid": string;
  "Color/Neutral/Text/colorTextHeading": string;
  "Color/Neutral/Text/colorTextLabel": string;
  "Color/Neutral/Text/colorTextDescription": string;
  "Color/Neutral/Text/colorTextDisabled": string;
  "Color/Neutral/Text/colorTextPlaceholder": string;
  "Color/Neutral/Icon/colorIcon": string;
  "Color/Neutral/Icon/colorIconHover": string;
  "Color/Neutral/colorWhite": string;
  "Color/Neutral/colorBgBase": string;
  "Color/Neutral/transparent": string;
  "Color/Neutral/Bg/colorBgContainer": string;
  "Color/Neutral/Bg/colorBgOverlay": string;
  "Color/Neutral/Bg/colorBgShell": string;
  "Color/Neutral/colorBlack": string;
  "Color/Neutral/Bg/colorBgSections": string;
  "Color/Neutral/Border/colorBorderMinimal": string;
  "Color/Neutral/Border/colorBorderSubtle": string;
  "Color/Neutral/Border/colorBorderBold": string;
  "Color/Base/Shark/0": string;
  "Color/Base/Shark/1": string;
  "Color/Base/Shark/2": string;
  "Color/Base/Shark/3": string;
  "Color/Base/Shark/4": string;
  "Color/Base/Shark/5": string;
  "Color/Base/Shark/6": string;
  "Color/Base/Shark/7": string;
  "Color/Base/Shark/8": string;
  "Color/Base/Shark/9": string;
  "Color/Base/Shark/10": string;
  "Color/Neutral/Bg/colorBgElevated": string;
  "Color/Brand/Primary/colorPrimary": string;
  "Color/Brand/Primary/colorPrimaryBg": string;
  "Color/Brand/Primary/colorPrimaryBgHover": string;
  "Color/Brand/Link/colorLink": string;
  "Color/Documentation": string;
  "Color/Brand/Link/colorLinkHover": string;
  "Color/Brand/Primary/colorPrimaryHover": string;
  "Color/Brand/Primary/colorPrimaryBorder": string;
  "Color/Brand/Primary/colorPrimaryBorderHover": string;
  "Color/Brand/Primary/colorPrimaryText": string;
  "Color/Brand/Primary/colorPrimaryTextHover": string;
  "Color/Brand/Link/colorLinkVisited": string;
  "Color/Brand/Primary/colorPrimaryActive": string;
  "Color/Brand/Warning/colorPrimary": string;
  "Color/Brand/Warning/colorPrimaryActive": string;
  "Color/Brand/Warning/colorPrimaryHover": string;
  "Color/Brand/Warning/colorPrimaryBg": string;
  "Color/Brand/Warning/colorPrimaryBgHover": string;
  "Color/Brand/Warning/colorPrimaryBorder": string;
  "Color/Brand/Warning/colorPrimaryBorderHover": string;
  "Color/Brand/Warning/colorPrimaryText": string;
  "Color/Brand/Warning/colorPrimaryTextHover": string;
  "Color/Brand/Success/colorPrimary": string;
  "Color/Brand/Success/colorPrimaryActive": string;
  "Color/Brand/Success/colorPrimaryHover": string;
  "Color/Brand/Success/colorPrimaryBg": string;
  "Color/Brand/Success/colorPrimaryBgHover": string;
  "Color/Brand/Success/colorPrimaryBorder": string;
  "Color/Brand/Success/colorPrimaryBorderHover": string;
  "Color/Brand/Success/colorPrimaryText": string;
  "Color/Brand/Success/colorPrimaryTextHover": string;
  "Color/Brand/Error/colorPrimary": string;
  "Color/Brand/Error/colorPrimaryActive": string;
  "Color/Brand/Error/colorPrimaryHover": string;
  "Color/Brand/Error/colorPrimaryBg": string;
  "Color/Brand/Error/colorPrimaryBgHover": string;
  "Color/Brand/Error/colorPrimaryBorder": string;
  "Color/Brand/Error/colorPrimaryBorderHover": string;
  "Color/Brand/Error/colorPrimaryText": string;
  "Color/Brand/Error/colorPrimaryTextHover": string;
  "Color/Brand/Control/colorBgActive": string;
  "Color/Brand/Control/colorBgHover": string;
  "Color/Brand/Info/colorPrimary": string;
  "Color/Brand/Info/colorPrimaryActive": string;
  "Color/Brand/Info/colorPrimaryHover": string;
  "Color/Brand/Info/colorPrimaryBg": string;
  "Color/Brand/Info/colorPrimaryBgHover": string;
  "Color/Brand/Info/colorPrimaryBorder": string;
  "Color/Brand/Info/colorPrimaryBorderHover": string;
  "Color/Brand/Info/colorPrimaryText": string;
  "Color/Brand/Info/colorPrimaryTextHover": string;
  "Color/Brand/Neutral/colorPrimary": string;
  "Color/Brand/Neutral/colorPrimaryActive": string;
  "Color/Brand/Neutral/colorPrimaryHover": string;
  "Color/Brand/Neutral/colorPrimaryBg": string;
  "Color/Brand/Neutral/colorPrimaryBgHover": string;
  "Color/Brand/Neutral/colorPrimaryBorder": string;
  "Color/Brand/Neutral/colorPrimaryBorderHover": string;
  "Color/Brand/Neutral/colorPrimaryText": string;
  "Color/Brand/Neutral/colorPrimaryTextHover": string;
  "Color/Neutral/Bg/colorBgDisabled": string;
  "Color/Brand/_minio/Raspberry": string;
  "Color/Brand/_minio/Midnight": string;
  "Color/Brand/_minio/Nautical": string;
  "Color/Brand/_minio/Meridian": string;
  "Color/Brand/_minio/Glaicer": string;
  "Color/Neutral/Border/colorBorderStrong": string;
  "Color/Neutral/Bg/colorBgContrast": string;
  "Color/Base/Purple/0": string;
  "Color/Base/Purple/1": string;
  "Color/Base/Purple/2": string;
  "Color/Base/Purple/3": string;
  "Color/Base/Purple/4": string;
  "Color/Base/Purple/5": string;
  "Color/Base/Purple/6": string;
  "Color/Base/Purple/7": string;
  "Color/Base/Purple/8": string;
  "Color/Base/Purple/9": string;
  "Color/Base/Purple/10": string;
  "Color/Base/Scooter/0": string;
  "Color/Base/Scooter/1": string;
  "Color/Base/Scooter/2": string;
  "Color/Base/Scooter/3": string;
  "Color/Base/Scooter/4": string;
  "Color/Base/Scooter/5": string;
  "Color/Base/Scooter/6": string;
  "Color/Base/Scooter/7": string;
  "Color/Base/Scooter/8": string;
  "Color/Base/Scooter/9": string;
  "Color/Base/Scooter/10": string;
  "Color/Base/Rose/0": string;
  "Color/Base/Rose/1": string;
  "Color/Base/Rose/2": string;
  "Color/Base/Rose/3": string;
  "Color/Base/Rose/4": string;
  "Color/Base/Rose/5": string;
  "Color/Base/Rose/6": string;
  "Color/Base/Rose/7": string;
  "Color/Base/Rose/8": string;
  "Color/Base/Rose/9": string;
  "Color/Base/Rose/10": string;
  "Color/Dataviz/1": string;
  "Color/Dataviz/2": string;
  "Color/Dataviz/3": string;
  "Color/Dataviz/4": string;
  "Color/Dataviz/5": string;
  "Color/Dataviz/6": string;
  "Color/Dataviz/7": string;
  "Color/Dataviz/8": string;
  "Color/Dataviz/9": string;
  "Color/Dataviz/10": string;
  "Color/Dataviz/11": string;
  "Color/Dataviz/12": string;
  "Color/Dataviz/13": string;
  "Color/Dataviz/14": string;
  "Color/Dataviz/15": string;
  "Color/Dataviz/none": string;
  "Color/Neutral/Icon/colorIconDisabled": string;
  "Color/Neutral/Text/colorTextContrast": string;
  "Color/Brand/Covers/colorManager": string;
  "Color/Brand/Covers/colorSourceFile": string;
  "Color/Brand/Covers/colorPayground": string;
  "Color/Brand/Covers/colorArchive": string;
  "Color/Brand/Covers/colorLibrary": string;
  "Color/Code/1": string;
  "Color/Code/2": string;
  "Color/Code/3": string;
  "Color/Code/4": string;
  "Color/Code/5": string;
  "Color/Code/6": string;
  "Color/Code/7": string;
  "Color/Code/8": string;
  "Color/Code/9": string;
  "Color/Base/Gray/1": string;
  "Color/Neutral/Bg/colorBgFields": string;
  "Color/Brand/_gradient/Primary/colorTop": string;
  "Color/Brand/_gradient/Primary/colorBottom": string;
  "Color/Brand/_gradient/Detructive/colorTop": string;
  "Color/Brand/_gradient/Detructive/colorBottom": string;
  "Color/Brand/_gradient/Primary/colorTopHover": string;
  "Color/Brand/_gradient/Primary/colorBottomHover": string;
  "Color/Brand/_gradient/Detructive/colorTopHover": string;
  "Color/Brand/_gradient/Detructive/colorBottomHover": string;
}
interface SelectOption {
  label: string;
  value: string;
  icon?: React__default.ReactNode;
  indicator?: React__default.ReactNode;
  extraValue?: any;
  disabled?: boolean;
  subLabel?: string;
  description?: string;
  danger?: boolean;
}
interface IBytesCalc {
  total: number;
  unit: string;
}
type OverrideTheme = CSSObject | ((theme: Theme) => CSSObject) | undefined;

declare const breakPoints: {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
};
declare const paddingSizeVariants: {
  sizeXXXS: number;
  sizeXXS: number;
  sizeXS: number;
  sizeSM: number;
  size: number;
  sizeMD: number;
  sizeLG: number;
  sizeXL: number;
  sizeXXL: number;
};
declare const radioVariants: {
  borderRadiusXS: number;
  borderRadiusSM: number;
  borderRadius: number;
  borderRadiusLG: number;
  borderRadiusXLG: number;
};
declare const calculateBytes: (
  x: string | number,
  showDecimals?: boolean,
  roundFloor?: boolean,
) => IBytesCalc;
declare const overridePropsParse: (
  overrideValue: OverrideTheme,
  theme: Theme,
) => _emotion_react.CSSObject | undefined;

declare const AArrowDownIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const AArrowUpIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const AccessibilityIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ActivityIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const AirplayIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const AirVentIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ALargeSmallIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const AlarmClockCheckIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const AlarmClockIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const AlarmClockMinusIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const AlarmClockOffIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const AlarmClockPlusIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const AlarmSmokeIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const AlbumIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const AlignCenterHorizontalIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const AlignCenterIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const AlignCenterVerticalIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const AlignEndHorizontalIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const AlignEndVerticalIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const AlignHorizontalDistributeCenterIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const AlignHorizontalDistributeEndIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const AlignHorizontalDistributeStartIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const AlignHorizontalJustifyCenterIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const AlignHorizontalJustifyEndIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const AlignHorizontalJustifyStartIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const AlignHorizontalSpaceAroundIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const AlignHorizontalSpaceBetweenIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const AlignJustifyIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const AlignLeftIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const AlignRightIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const AlignStartHorizontalIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const AlignStartVerticalIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const AlignVerticalDistributeCenterIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const AlignVerticalDistributeEndIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const AlignVerticalDistributeStartIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const AlignVerticalJustifyCenterIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const AlignVerticalJustifyEndIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const AlignVerticalJustifyStartIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const AlignVerticalSpaceAroundIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const AlignVerticalSpaceBetweenIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const AmazonEksSiteIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const AmbulanceIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const AmpersandIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const AmpersandsIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const AnchorIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const AngryIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const AnnoyedIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const AntennaIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const AnvilIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ApertureIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const AppleIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const AppWindowIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const AppWindowMacIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ArchiveIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ArchiveRestoreIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ArchiveXIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const AreaChartIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ArmchairIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ArrowBigDownDashIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ArrowBigDownIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ArrowBigLeftDashIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ArrowBigLeftIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ArrowBigRightDashIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ArrowBigRightIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ArrowBigUpDashIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ArrowBigUpIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ArrowDown01Icon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ArrowDown10Icon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ArrowDownAZIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ArrowDownFromLineIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ArrowDownIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ArrowDownLeftIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ArrowDownNarrowWideIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ArrowDownRightIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ArrowDownToDotIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ArrowDownToLineIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ArrowDownUpIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ArrowDownWideNarrowIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ArrowDownZAIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ArrowLeftFromLineIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ArrowLeftIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ArrowLeftRightIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ArrowLeftToLineIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ArrowRightFromLineIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ArrowRightIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ArrowRightLeftIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ArrowRightToLineIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ArrowsUpFromLineIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ArrowUp01Icon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ArrowUp10Icon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ArrowUpAZIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ArrowUpDownIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ArrowUpFromDotIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ArrowUpFromLineIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ArrowUpIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ArrowUpLeftIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ArrowUpNarrowWideIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ArrowUpRightIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ArrowUpToLineIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ArrowUpWideNarrowIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ArrowUpZAIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const AsteriskIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const AtomIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const AtSignIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const AudioLinesIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const AudioWaveformIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const AwardIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const AxeIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const Axis3dIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const AzureAksSiteIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const BabyIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const BackpackIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const BadgeAlertIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const BadgeCentIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const BadgeCheckIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const BadgeDollarSignIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const BadgeEuroIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const BadgeHelpIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const BadgeIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const BadgeIndianRupeeIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const BadgeInfoIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const BadgeJapaneseYenIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const BadgeMinusIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const BadgePercentIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const BadgePlusIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const BadgePoundSterlingIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const BadgeRussianRubleIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const BadgeSwissFrancIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const BadgeXIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const BaggageClaimIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const BalancerIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const BananaIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const BanIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const BanknoteIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const BarChart2Icon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const BarChart3Icon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const BarChart4Icon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const BarChartBigIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const BarChartHorizontalBigIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const BarChartHorizontalIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const BarChartIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const BarcodeIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const BareMetalLinuxSiteIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const BaselineIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const BatchJobsIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const BathIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const BatteryChargingIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const BatteryFullIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const BatteryIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const BatteryLowIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const BatteryMediumIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const BatteryWarningIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const BeakerIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const BeanIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const BeanOffIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const BedDoubleIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const BedIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const BedSingleIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const BeefIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const BeerIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const BeerOffIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const BellArrowIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const BellDotIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const BellElectricIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const BellIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const BellMinusIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const BellOffIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const BellPlusIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const BellRingIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const BetweenHorizontalEndIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const BetweenHorizontalStartIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const BetweenVerticalEndIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const BetweenVerticalStartIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const BikeIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const BinaryIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const BiohazardIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const BirdIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const BitcoinIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const BlendIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const BlindsIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const BlocksIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const BluetoothConnectedIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const BluetoothIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const BluetoothOffIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const BluetoothSearchingIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const BoldIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const BoltIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const BombIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const BoneIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const BookAIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const BookAudioIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const BookCheckIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const BookCopyIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const BookDashedIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const BookDownIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const BookHeadphonesIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const BookHeartIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const BookIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const BookImageIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const BookKeyIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const BookLockIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const BookmarkCheckIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const BookMarkedIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const BookmarkIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const BookmarkMinusIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const BookmarkPlusIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const BookmarkXIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const BookMinusIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const BookOpenCheckIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const BookOpenIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const BookOpenTextIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const BookPlusIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const BookTextIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const BookTypeIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const BookUp2Icon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const BookUpIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const BookUserIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const BookXIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const BoomBoxIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const BotIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const BotMessageSquareIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const BoxesIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const BoxIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const BoxOutlineIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const BoxSelectIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const BracesIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const BracketsIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const BrainCircuitIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const BrainCogIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const BrainIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const BrickWallIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const BriefcaseBusinessIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const BriefcaseIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const BriefcaseMedicalIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const BringToFrontIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const BrushIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const BucketCopyIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const BucketIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const BucketQuotaIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const BugIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const BugOffIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const BugPlayIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const Building2Icon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const BuildingIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const BusFrontIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const BusIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const CableCarIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const CableIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const CakeIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const CakeSliceIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const CalculatorIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const CalendarCheck2Icon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const CalendarCheckIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const CalendarClockIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const CalendarDaysIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const CalendarFoldIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const CalendarHeartIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const CalendarIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const CalendarMinus2Icon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const CalendarMinusIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const CalendarOffIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const CalendarPlus2Icon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const CalendarPlusIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const CalendarRangeIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const CalendarSearchIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const CalendarX2Icon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const CalendarXIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const CameraIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const CameraOffIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const CandlestickChartIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const CandyCaneIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const CandyIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const CandyOffIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const CannabisIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const CaptionsIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const CaptionsOffIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const CaravanIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const CaretFilledIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const CaretIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const CarFrontIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const CarIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const CarTaxiFrontIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const CaseLowerIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const CaseSensitiveIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const CaseUpperIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const CassetteTapeIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const CastIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const CastleIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const CatIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const CctvIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const CheckCheckIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const CheckIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ChefHatIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const CherryIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ChevronDownIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ChevronFirstIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ChevronLastIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ChevronLeftIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ChevronRightIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ChevronsDownIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ChevronsDownUpIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ChevronsLeftIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ChevronsLeftRightIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ChevronsRightIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ChevronsRightLeftIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ChevronsUpDownIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ChevronsUpIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ChevronUpIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ChromeIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ChurchIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const CigaretteIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const CigaretteOffIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const CircleAlertIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const CircleArrowDownIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const CircleArrowLeftIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const CircleArrowOutDownLeftIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const CircleArrowOutDownRightIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const CircleArrowOutUpLeftIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const CircleArrowOutUpRightIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const CircleArrowRightIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const CircleArrowUpIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const CircleCheckBigIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const CircleCheckIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const CircleChevronDownIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const CircleChevronLeftIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const CircleChevronRightIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const CircleChevronUpIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const CircleDashedIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const CircleDivideIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const CircleDollarSignIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const CircleDotDashedIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const CircleDotIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const CircleEllipsisIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const CircleEqualIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const CircleFadingPlusIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const CircleFillIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const CircleGaugeIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const CircleHelpIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const CircleIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const CircleMinusIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const CircleOffIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const CircleParkingIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const CircleParkingOffIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const CirclePauseIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const CirclePercentIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const CirclePlayIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const CirclePlusIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const CirclePowerIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const CircleSlash2Icon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const CircleSlashIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const CircleStopIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const CircleUserIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const CircleUserRoundIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const CircleXIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const CircuitBoardIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const CitrusIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ClapperboardIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ClipboardCheckIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ClipboardCopyIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ClipboardIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ClipboardListIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ClipboardMinusIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ClipboardPasteIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ClipboardPenIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ClipboardPenLineIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ClipboardPlusIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ClipboardTypeIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ClipboardXIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const Clock1Icon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const Clock2Icon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const Clock3Icon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const Clock4Icon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const Clock5Icon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const Clock6Icon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const Clock7Icon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const Clock8Icon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const Clock9Icon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const Clock10Icon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const Clock11Icon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const Clock12Icon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ClockIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const CloudCogIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const CloudDownloadIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const CloudDrizzleIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const CloudFogIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const CloudHailIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const CloudIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const CloudLightningIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const CloudMoonIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const CloudMoonRainIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const CloudOffIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const CloudRainIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const CloudRainWindIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const CloudSnowIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const CloudSunIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const CloudSunRainIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const CloudUploadIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const CloudyIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const CloverIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ClubIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ClusterHealthIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ClusterIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ClusterIngressIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ClusterNodeIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ClusterReplicationIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ClustersIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const CodeIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const CodepenIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const CodesandboxIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const CodeXmlIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const CoffeeIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const CogIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const CoinsIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const CollapseIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const Columns2Icon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const Columns3Icon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const Columns4Icon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const CombineIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const CommandIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const CompassIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ComponentIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ComputerIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ConciergeBellIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ConeIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ConstructionIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ContactIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ContactRoundIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ContainerIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ContainerImagesIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ContrastIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const CookieIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const CookingPotIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const CopyCheckIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const CopyIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const CopyleftIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const CopyMinusIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const CopyPlusIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const CopyrightIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const CopySlashIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const CopyXIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const CornerDownLeftIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const CornerDownRightIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const CornerLeftDownIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const CornerLeftUpIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const CornerRightDownIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const CornerRightUpIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const CornerUpLeftIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const CornerUpRightIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const CpuIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const CreativeCommonsIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const CreditCardIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const CroissantIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const CropIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const CrosshairIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const CrossIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const CrownIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const CuboidIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const CupSodaIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const CurrencyIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const CylinderIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const DatabaseApiIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const DatabaseBackupIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const DatabaseIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const DatabaseZapIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const DataIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const DeleteIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const DessertIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const DiameterIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const DiamondIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const DiamondPercentIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const Dice1Icon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const Dice2Icon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const Dice3Icon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const Dice4Icon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const Dice5Icon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const Dice6Icon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const DicesIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const DiffIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const Disc2Icon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const Disc3Icon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const DiscAlbumIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const DiscIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const DivideIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const DnaIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const DnaOffIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const DockIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const DogIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const DollarSignIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const DonutIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const DoorClosedIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const DoorOpenIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const DotIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const DownloadIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const DraftingCompassIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const DramaIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const DribbbleIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const DrillIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const DropletIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const DropletsIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const DrumIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const DrumstickIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const DumbbellIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const EarIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const EarOffIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const EarthIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const EarthLockIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const EclipseIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const EggFriedIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const EggIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const EggOffIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const EllipsisIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const EllipsisVerticalIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const EqualIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const EqualNotIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const EraserIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const EuroIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ExpandIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ExternalLinkIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const EyeIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const EyeOffIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const FacebookIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const FactoryIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const FanIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const FastForwardIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const FeatherIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const FenceIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const FerrisWheelIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const FigmaIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const FileArchiveIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const FileAudio2Icon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const FileAudioIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const FileAxis3dIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const FileBadge2Icon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const FileBadgeIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const FileBarChart2Icon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const FileBarChartIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const FileBoxIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const FileCheck2Icon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const FileCheckIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const FileClockIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const FileCode2Icon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const FileCodeIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const FileCogIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const FileDiffIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const FileDigitIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const FileDownIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const FileHeartIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const FileIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const FileImageIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const FileInputIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const FileJson2Icon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const FileJsonIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const FileKey2Icon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const FileKeyIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const FileLineChartIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const FileLock2Icon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const FileLockIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const FileMinus2Icon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const FileMinusIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const FileMusicIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const FileOutputIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const FilePenIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const FilePenLineIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const FilePieChartIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const FilePlus2Icon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const FilePlusIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const FileQuestionIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const FileScanIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const FileSearch2Icon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const FileSearchIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const FilesIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const FileSlidersIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const FileSpreadsheetIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const FileStackIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const FileSymlinkIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const FileTerminalIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const FileTextIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const FileType2Icon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const FileTypeIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const FileUpIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const FileVideo2Icon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const FileVideoIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const FileVolume2Icon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const FileVolumeIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const FileWarningIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const FileX2Icon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const FileXIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const FilmIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const FilterIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const FilterXIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const FingerprintIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const FireExtinguisherIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const FishIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const FishSymbolIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const FlagIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const FlagOffIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const FlagTriangleLeftIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const FlagTriangleRightIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const FlameIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const FlameKindlingIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const FlashlightIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const FlashlightOffIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const FlaskConicalIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const FlaskConicalOffIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const FlaskRoundIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const FlipHorizontal2Icon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const FlipHorizontalIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const FlipVertical2Icon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const FlipVerticalIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const Flower2Icon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const FlowerIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const FocusIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const FolderArchiveIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const FolderCheckIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const FolderClockIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const FolderClosedIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const FolderCogIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const FolderDotIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const FolderDownIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const FolderGit2Icon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const FolderGitIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const FolderHeartIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const FolderIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const FolderInputIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const FolderKanbanIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const FolderKey2Icon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const FolderKeyIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const FolderLockIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const FolderMinusIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const FolderOpenDotIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const FolderOpenIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const FolderOutputIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const FolderPenIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const FolderPlusIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const FolderRootIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const FolderSearch2Icon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const FolderSearchIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const FoldersIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const FolderSymlinkIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const FolderSyncIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const FolderTreeIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const FolderUpIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const FolderXIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const FoldHorizontalIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const FoldVerticalIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const FootprintsIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ForkliftIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ForwardIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const FrameIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const FramerIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const FrownIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const FuelIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const FullscreenIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const GalleryHorizontalEndIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const GalleryHorizontalIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const GalleryThumbnailsIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const GalleryVerticalEndIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const GalleryVerticalIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const Gamepad2Icon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const GamepadIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const GanttChartIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const GaugeIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const GavelIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const GemIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const GhostIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const GiftIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const GitBranchIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const GitBranchPlusIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const GitCommitHorizontalIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const GitCommitVerticalIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const GitCompareArrowsIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const GitCompareIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const GitForkIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const GitGraphIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const GithubIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const GitlabIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const GitMergeIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const GitPullRequestArrowIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const GitPullRequestClosedIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const GitPullRequestCreateArrowIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const GitPullRequestCreateIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const GitPullRequestDraftIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const GitPullRequestIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const GlassesIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const GlassWaterIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const GlobeIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const GlobeLockIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const GoalIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const GoogleGkeSiteIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const GrabIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const GraduationCapIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const GrapeIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const Grid2x2Icon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const Grid3x3Icon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const GripHorizontalIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const GripIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const GripVerticalIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const GroupIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const GuitarIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const HamIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const HammerIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const HandCoinsIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const HandHeartIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const HandHelpingIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const HandIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const HandMetalIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const HandPlatterIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const HandshakeIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const HardDriveDownloadIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const HardDriveIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const HardDriveSearchIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const HardDriveUploadIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const HardHatIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const HashIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const HazeIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const HdmiPortIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const Heading1Icon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const Heading2Icon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const Heading3Icon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const Heading4Icon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const Heading5Icon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const Heading6Icon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const HeadingIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const HeadphonesIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const HeadsetIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const HeartCrackIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const HeartHandshakeIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const HeartIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const HeartOffIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const HeartPulseIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const HeaterIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const HexagonIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const HighlighterIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const HistoryIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const HomeIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const HopIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const HopOffIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const HospitalIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const HotelIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const HourglassIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const IceCreamBowlIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const IceCreamConeIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ImageDownIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ImageIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ImageMinusIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ImageOffIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ImagePlusIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ImagesIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ImageUpIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ImportIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const InboxIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const IndentDecreaseIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const IndentIncreaseIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const IndianRupeeIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const InfinityIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const InfoIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const InspectionPanelIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const InstagramIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ItalicIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const IterationCCWIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const IterationCWIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const JapaneseYenIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const JoystickIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const KanbanIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const KeyboardIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const KeyboardMusicIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const KeyIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const KeyRoundIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const KeySquareIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const KubernetesSiteIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const LambdaIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const LampCeilingIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const LampDeskIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const LampFloorIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const LampIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const LampWallDownIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const LampWallUpIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const LandmarkIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const LandPlotIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const LanguagesIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const LaptopIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const LaptopMinimalIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const LassoIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const LassoSelectIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const LaughIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const Layers2Icon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const Layers3Icon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const LayersIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const LayoutDashboardIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const LayoutGridIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const LayoutListIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const LayoutPanelLeftIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const LayoutPanelTopIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const LayoutTemplateIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const LDAPIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const LeafIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const LeafyGreenIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const LibraryBigIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const LibraryIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const LifeBuoyIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const LigatureIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const LightbulbIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const LightbulbOffIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const LineChartIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const Link2Icon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const Link2OffIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const LinkedinIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const LinkIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ListChecksIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ListCollapseIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ListEndIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ListFilterIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ListIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ListMinusIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ListMusicIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ListOrderedIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ListPlusIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ListRestartIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ListStartIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ListTodoIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ListTreeIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ListVideoIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ListXIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const LoaderCircleIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const LoaderIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const LocateFixedIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const LocateIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const LocateOffIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const LockIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const LockKeyholeIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const LockKeyholeOpenIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const LockOpenIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const LogInIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const LogOutIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const LollipopIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const LuggageIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const MagnetIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const MailboxIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const MailCheckIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const MailIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const MailMinusIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const MailOpenIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const MailPlusIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const MailQuestionIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const MailSearchIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const MailsIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const MailWarningIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const MailXIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const MapIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const MapPinIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const MapPinnedIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const MapPinOffIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const MartiniIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const Maximize2Icon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const MaximizeIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const MedalIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const MegaphoneIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const MegaphoneOffIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const MehIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const MemoryStickIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const MenuIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const MergeIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const MessageCircleCodeIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const MessageCircleDashedIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const MessageCircleHeartIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const MessageCircleIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const MessageCircleMoreIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const MessageCircleOffIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const MessageCirclePlusIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const MessageCircleQuestionIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const MessageCircleReplyIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const MessageCircleWarningIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const MessageCircleXIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const MessageSquareCodeIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const MessageSquareDashedIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const MessageSquareDiffIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const MessageSquareDotIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const MessageSquareHeartIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const MessageSquareIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const MessageSquareMoreIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const MessageSquareOffIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const MessageSquarePlusIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const MessageSquareQuoteIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const MessageSquareReplyIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const MessageSquareShareIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const MessageSquareTextIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const MessageSquareWarningIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const MessageSquareXIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const MessagesSquareIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const MicIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const MicOffIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const MicroscopeIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const MicrowaveIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const MicVocalIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const MilestoneIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const MilkIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const MilkOffIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const Minimize2Icon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const MinimizeIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const MinIOIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const MinusIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const MonitorCheckIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const MonitorDotIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const MonitorDownIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const MonitorIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const MonitorOffIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const MonitorPauseIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const MonitorPlayIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const MonitorSmartphoneIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const MonitorSpeakerIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const MonitorStopIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const MonitorUpIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const MonitorXIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const MoonIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const MoonStarIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const MountainIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const MountainSnowIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const MouseIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const MousePointer2Icon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const MousePointerClickIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const MousePointerIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const Move3dIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const MoveDiagonal2Icon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const MoveDiagonalIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const MoveDownIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const MoveDownLeftIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const MoveDownRightIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const MoveHorizontalIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const MoveIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const MoveLeftIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const MoveRightIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const MoveUpIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const MoveUpLeftIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const MoveUpRightIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const MoveVerticalIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const Music2Icon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const Music3Icon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const Music4Icon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const MusicIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const Navigation2Icon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const Navigation2OffIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const NavigationIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const NavigationOffIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const NetworkIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const NewspaperIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const NfcIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const NotebookIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const NotebookPenIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const NotebookTabsIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const NotebookTextIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const NotepadTextDashedIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const NotepadTextIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const NutIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const NutOffIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const OctagonAlertIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const OctagonIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const OctagonPauseIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const OctagonXIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const OidcIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const OptionIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const OrbitIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const Package2Icon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const PackageCheckIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const PackageIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const PackageMinusIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const PackageOpenIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const PackagePlusIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const PackageSearchIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const PackageXIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const Paintbrush2Icon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const PaintbrushIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const PaintBucketIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const PaintRollerIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const PaletteIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const PanelBottomCloseIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const PanelBottomDashedIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const PanelBottomIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const PanelBottomOpenIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const PanelLeftCloseIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const PanelLeftDashedIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const PanelLeftIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const PanelLeftOpenIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const PanelRightCloseIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const PanelRightDashedIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const PanelRightIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const PanelRightOpenIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const PanelsLeftBottomIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const PanelsRightBottomIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const PanelsTopLeftIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const PanelTopCloseIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const PanelTopDashedIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const PanelTopIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const PanelTopOpenIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const PaperclipIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ParenthesesIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ParkingMeterIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const PartyPopperIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const PasscodeLockIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const PauseIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const PawPrintIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const PcCaseIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const PencilIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const PencilLineIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const PencilRulerIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const PenIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const PenLineIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const PentagonIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const PenToolIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const PercentIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const PersonStandingIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const PhoneCallIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const PhoneForwardedIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const PhoneIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const PhoneIncomingIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const PhoneMissedIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const PhoneOffIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const PhoneOutgoingIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const PianoIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const PickaxeIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const PictureInPicture2Icon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const PictureInPictureIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const PieChartIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const PieUsageIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const PiggyBankIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const PiIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const PilcrowIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const PillIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const PinIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const PinOffIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const PipetteIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const PizzaIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const PlaneIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const PlaneLandingIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const PlaneTakeoffIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const PlayIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const PlotSeriesIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const Plug2Icon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const PlugIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const PlugZap2Icon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const PlugZapIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const PlusIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const PocketIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const PocketKnifeIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const PodcastIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const PointerIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const PointerOffIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const PopcornIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const PopsicleIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const PoundSterlingIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const PowerIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const PowerOffIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const PresentationIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const PrinterIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ProjectorIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ProportionsIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const PuzzleIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const PyramidIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const QrCodeIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const QuoteIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const RabbitIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const RadarIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const RadiationIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const RadicalIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const RadioIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const RadioReceiverIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const RadioTowerIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const RadiusIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const RailSymbolIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const RainbowIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const RatIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const RatioIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ReceiptCentIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ReceiptEuroIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ReceiptIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ReceiptIndianRupeeIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ReceiptJapaneseYenIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ReceiptPoundSterlingIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ReceiptRussianRubleIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ReceiptSwissFrancIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ReceiptTextIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const RectangleEllipsisIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const RectangleHorizontalIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const RectangleVerticalIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const RecycleIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const RedhatOpenshiftSiteIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const Redo2Icon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const RedoDotIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const RedoIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const RefreshCcwDotIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const RefreshCCWIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const RefreshCwIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const RefreshCWOffIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const RefreshCwSettingsIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const RefrigeratorIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const RegexIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const RemoveFormattingIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const Repeat1Icon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const Repeat2Icon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const RepeatIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ReplaceAllIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ReplaceIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ReplyAllIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ReplyIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const RewindIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const RibbonIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const RocketIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const RockingChairIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const RollerCoasterIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const Rotate3dIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const RotateCCWIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const RotateCCWSquareIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const RotateCWIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const RotateCWSquareIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const RouteIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const RouteOffIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const RouterIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const Rows2Icon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const Rows3Icon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const Rows4Icon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const RssIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const RulerIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const RussianRubleIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const SailboatIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const SaladIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const SandwichIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const SatelliteDishIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const SatelliteIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const SaveAllIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const SaveIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const Scale3dIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ScaleIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ScalingIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ScanBarcodeIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ScanEyeIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ScanFaceIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ScanIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ScanLineIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ScanSearchIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ScanTextIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ScatterChartIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const SchoolIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ScissorsIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ScissorsLineDashedIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ScreenShareIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ScreenShareOffIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ScrollIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ScrollTextIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const SearchCheckIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const SearchCodeIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const SearchIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const SearchSlashIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const SearchXIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const SendHorizontalIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const SendIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const SendToBackIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const SeparatorHorizontalIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const SeparatorVerticalIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ServerCogIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ServerCrashIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ServerIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ServerOffIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const Settings2Icon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const SettingsIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ShapesIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const Share2Icon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ShareIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const SheetIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ShellIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ShieldAlertIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ShieldBanIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ShieldCheckIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ShieldEllipsisIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ShieldHalfIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ShieldIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ShieldMinusIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ShieldOffIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ShieldPlusIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ShieldQuestionIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ShieldXIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ShipIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ShipWheelIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ShirtIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ShoppingBagIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ShoppingBasketIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ShoppingCartIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ShovelIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ShowerHeadIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ShrinkIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ShrubIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ShuffleIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const SigmaIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const SignalHighIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const SignalIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const SignalLowIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const SignalMediumIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const SignalZeroIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const SignpostBigIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const SignpostIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const SirenIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const SitesIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const SkipBackIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const SkipForwardIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const SkullIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const SlackIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const SlashIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const SliceIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const SlidersHorizontalIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const SlidersVerticalIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const SmartphoneChargingIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const SmartphoneIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const SmartphoneNfcIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const SmileIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const SmilePlusIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const SnailIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const SnowflakeIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const SofaIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const SoupIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const SpaceIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const SpadeIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const SparkleIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const SparklesIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const SpeakerIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const SpeechIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const SpellCheck2Icon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const SpellCheckIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const SplineIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const SplitIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const SprayCanIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const SproutIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const SquareActivityIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const SquareArrowDownIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const SquareArrowDownLeftIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const SquareArrowDownRightIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const SquareArrowLeftIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const SquareArrowOutDownLeftIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const SquareArrowOutDownRightIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const SquareArrowOutUpLeftIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const SquareArrowOutUpRightIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const SquareArrowRightIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const SquareArrowUpIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const SquareArrowUpLeftIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const SquareArrowUpRightIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const SquareAsteriskIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const SquareBottomDashedScissorsIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const SquareCheckBigIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const SquareCheckIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const SquareChevronDownIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const SquareChevronLeftIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const SquareChevronRightIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const SquareChevronUpIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const SquareCodeIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const SquareDashedBottomCodeIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const SquareDashedBottomIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const SquareDashedKanbanIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const SquareDashedMousePointerIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const SquareDivideIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const SquareDotIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const SquareEqualIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const SquareFunctionIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const SquareGanttChartIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const SquareIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const SquareKanbanIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const SquareLibraryIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const SquareMenuIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const SquareMIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const SquareMinusIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const SquareMousePointerIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const SquareParkingIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const SquareParkingOffIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const SquarePenIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const SquarePercentIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const SquarePiIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const SquarePilcrowIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const SquarePlayIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const SquarePlusIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const SquarePowerIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const SquareRadicalIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const SquareScissorsIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const SquareSigmaIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const SquareSlashIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const SquareSplitHorizontalIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const SquareSplitVerticalIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const SquareStackIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const SquareTerminalIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const SquareUserIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const SquareUserRoundIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const SquareXIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const SquircleIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const SquirrelIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const StampIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const StarHalfIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const StarIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const StarOffIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const StepBackIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const StepForwardIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const StethoscopeIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const StickerIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const StickyNoteIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const StoreIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const StretchHorizontalIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const StretchVerticalIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const StrikethroughIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const SubscriptIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const SummaryIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const SunDimIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const SunIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const SunMediumIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const SunMoonIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const SunriseIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const SunsetIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const SunSnowIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const SuperscriptIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const SwatchBookIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const SwissFrancIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const SwitchCameraIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const SwordIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const SwordsIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const SyringeIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const Table2Icon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const TableCellsMergeIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const TableCellsSplitIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const TableColumnsSplitIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const TableIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const TablePropertiesIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const TableRowsSplitIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const TabletIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const TabletsIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const TabletSmartphoneIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const TagIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const TagsIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const Tally1Icon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const Tally2Icon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const Tally3Icon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const Tally4Icon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const Tally5Icon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const TangentIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const TargetIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const TelescopeIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const TenantIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const TentIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const TentTreeIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const TerminalIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const TestTubeDiagonalIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const TestTubeIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const TestTubesIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const TextCursorIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const TextCursorInputIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const TextIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const TextQuoteIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const TextSearchIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const TextSelectIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const TheaterIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ThermometerIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ThermometerSnowflakeIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ThermometerSunIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ThumbsDownIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ThumbsUpIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const TicketCheckIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const TicketIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const TicketMinusIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const TicketPercentIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const TicketPlusIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const TicketSlashIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const TicketXIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const TimerIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const TimerOffIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const TimerResetIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ToggleLeftIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ToggleRightIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const TornadoIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const TorusIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const TouchpadIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const TouchpadOffIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const TowerControlIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ToyBrickIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const TraceIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const TractorIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const TrafficConeIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const TrainFrontIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const TrainFrontTunnelIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const TrainTrackIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const TramFrontIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const Trash2Icon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const TrashIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const TreeDeciduousIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const TreePalmIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const TreePineIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const TreesIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const TrelloIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const TrendingDownIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const TrendingUpIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const TriangleAlertIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const TriangleIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const TriangleRightIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const TrophyIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const TruckIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const TurtleIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const Tv2Icon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const TvIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const TwitchIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const TwitterIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const TypeIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const UmbrellaIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const UmbrellaOffIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const UnderlineIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const Undo2Icon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const UndoDotIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const UndoIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const UnfoldHorizontalIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const UnfoldVerticalIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const UngroupIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const UniversityIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const Unlink2Icon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const UnlinkIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const UnplugIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const UploadIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const UsbIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const UserCheckIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const UserCogIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const UserIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const UserMinusIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const UserPlusIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const UserRoundCheckIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const UserRoundCogIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const UserRoundIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const UserRoundMinusIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const UserRoundPlusIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const UserRoundSearchIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const UserRoundXIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const UserSearchIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const UsersIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const UsersRoundIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const UserXIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const UtensilsCrossedIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const UtensilsIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const UtilityPoleIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const VariableIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const VaultIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const VeganIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const VenetianMaskIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const VibrateIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const VibrateOffIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const VideoIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const VideoOffIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const VideotapeIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ViewIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const VmwareTanzuSiteIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const VoicemailIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const Volume1Icon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const Volume2Icon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const VolumeIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const VolumeXIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const VoteIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const WalletCardsIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const WalletIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const WalletMinimalIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const WallpaperIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const WandIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const WandSparklesIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const WarehouseIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const WarpIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const WashingMachineIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const WatchIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const WavesIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const WaypointsIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const WebcamIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const WebhookIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const WebhookOffIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const WeightIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const WheatIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const WheatOffIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const WholeWordIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const WifiIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const WifiOffIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const WindIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const WineIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const WineOffIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const WorkflowIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const WormIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const WrapTextIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const WrenchIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const XIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const YoutubeIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ZapIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ZapOffIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ZoomInIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

declare const ZoomOutIcon: (
  props: SVGProps<SVGSVGElement>,
) => _emotion_react_jsx_runtime.JSX.Element;

type AlertDesignMode = "banner" | "card";
type NotificationEmphasis = "subtle" | "minimal";
type NotificationVariant =
  | "neutral"
  | "information"
  | "success"
  | "warning"
  | "danger";
interface NotificationAlertBase {
  title?: string;
  children?: ReactNode;
  action?: ReactNode;
  isLoading?: boolean;
  onClose?: () => void;
}
interface NotificationAlertConstruct {
  emphasisMode?: NotificationEmphasis;
  variant?: NotificationVariant;
  shadow?: boolean;
  designMode?: AlertDesignMode;
  wrapText?: boolean;
  sx?: OverrideTheme;
}
interface NotificationAlertThemeProps {
  highContrastBG: string;
  highContrastBorder: string;
  minimalContrastBG: string;
  minimalContrastBorder: string;
  iconColor: string;
  titleColor: string;
  contentColor: string;
  actionColor: string;
}
type NotificationAlertProps = Record<
  NotificationVariant,
  NotificationAlertThemeProps
>;
type NotificationAlertPrp = NotificationAlertBase & NotificationAlertConstruct;

type NotificationPosition =
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right"
  | "top-center"
  | "bottom-center";
type NotificationDuration = 0 | 3000 | 5000 | 10000;
interface NotificationOptions
  extends Omit<
    NotificationAlertPrp,
    "children" | "title" | "variant" | "onClose"
  > {
  children?: React.ReactNode;
  position?: NotificationPosition;
  duration?: NotificationDuration;
}
interface Notification {
  id: string;
  variant: NotificationVariant;
  message: string;
  options: NotificationOptions;
  isExiting: boolean;
}
interface NotificationsProps {
  maxNotifications?: number;
}

declare const useNotification: () => {
  success: (message: string, options?: NotificationOptions) => void;
  danger: (message: string, options?: NotificationOptions) => void;
  warning: (message: string, options?: NotificationOptions) => void;
  information: (message: string, options?: NotificationOptions) => void;
  neutral: (message: string, options?: NotificationOptions) => void;
  clear: () => void;
};

declare const useEscapeKey: (handleAction: () => void) => void;
declare const useEnterKey: (handleAction: () => void) => void;
declare const useArrowKeys: (
  handleAction: (arrowDirection: string) => void,
) => void;
declare const useMDSTheme: () => _emotion_react.Theme;

declare const GlobalStyles: () => _emotion_react_jsx_runtime.JSX.Element;

interface AccordionProps {
  expanded: boolean;
  onTitleClick: () => void;
  id: string;
  title: ReactNode;
  children: ReactNode;
  disabled?: boolean;
  contentBackgroundColor?: boolean;
  sx?: OverrideTheme;
}

declare const Accordion: FC<AccordionProps>;

interface ApplicationLogoProps {
  applicationName:
    | "console"
    | "operator"
    | "directpv"
    | "kes"
    | "subnet"
    | "subnetops"
    | "cloud"
    | "releases"
    | "vmbroker"
    | "eureka"
    | "kms"
    | "loadbalancer"
    | "index"
    | "cache"
    | "monitor"
    | "observe"
    | "missioncontrol"
    | "globalconsole"
    | "minio"
    | "enterprise"
    | "aistor";
  subVariant?:
    | "simple"
    | "AGPL"
    | "standard"
    | "enterprise"
    | "new"
    | "enterpriseos"
    | "enterpriseosvertical"
    | "horizontal";
  inverse?: boolean;
  onClick?: React__default.MouseEventHandler<any> | undefined;
}

declare const ApplicationLogo: FC<ApplicationLogoProps>;

interface AutocompleteProps {
  options: SelectOption[];
  value?: string;
  id: string;
  name?: string;
  required?: boolean;
  className?: string;
  disabled?: boolean;
  label?: string;
  tooltip?: string;
  noLabelMinWidth?: boolean;
  placeholder?: string;
  onChange: (newValue: string, extraValue?: any) => void;
  sx?: OverrideTheme;
  sizeMode?: "small" | "large";
  orientation?: "horizontal" | "vertical";
  state?: "normal" | "error" | "success" | "warning";
  readOnly?: boolean;
  helper?: string;
}

declare const Autocomplete: FC<AutocompleteProps>;

interface BackLinkProps
  extends React__default.ButtonHTMLAttributes<HTMLButtonElement> {
  sx?: OverrideTheme;
  label?: string;
}

declare const BackLink: FC<BackLinkProps>;

type BadgeColors =
  | "none"
  | "info"
  | "success"
  | "warning"
  | "danger"
  | "purple"
  | "rose"
  | "scooter"
  | "disabled";
type BadgeStyles = "minimal" | "subtle" | "bold";
type BadgeIcons = boolean | "dot" | ReactNode;
type BadgeSizes = "normal" | "small";
interface BadgeMainProps {
  label: string;
  id: string;
}
interface BadgeConstructProps {
  color?: BadgeColors;
  badgeStyle?: BadgeStyles;
  icon?: BadgeIcons;
  size?: BadgeSizes;
  isNumber?: boolean;
  sx?: OverrideTheme;
}
interface BadgeElementThemeProps {
  minimalColor: string;
  subtleBG: string;
  subtleLabel: string;
  boldBG: string;
  boldLabel: string;
}
type BadgeThemeProps = Record<BadgeColors, BadgeElementThemeProps>;
type BadgeProps = BadgeMainProps & BadgeConstructProps;

declare const Badge: FC<
  BadgeProps & React__default.HTMLAttributes<HTMLSpanElement>
>;

interface BoxProps extends React__default.HTMLAttributes<HTMLDivElement> {
  sx?: OverrideTheme;
  children?: React__default.ReactNode;
  withBorders?: boolean;
  customBorderPadding?: number | string;
  customBorderRadius?: number | string;
}

declare const Box: React$1.ForwardRefExoticComponent<
  BoxProps & React$1.RefAttributes<HTMLAttributes<HTMLDivElement>>
>;

interface IBoxedIconProps {
  children: React__default.ReactNode;
  sx?: OverrideTheme;
}

declare const BoxedIcon: FC<IBoxedIconProps>;

interface BreadcrumbsProps {
  sx?: OverrideTheme;
  options: BreadcrumbsOption[];
  goBackFunction?: () => void;
  displayLastItems?: false | number;
  onClickOption?: (to?: string) => void;
  children?: React__default.ReactNode;
  markCurrentItem?: boolean;
}
interface BreadcrumbsOption {
  label?: string;
  to?: string;
  onClick?: (to?: string) => void;
  icon?: ReactNode;
  subOptions?: BreadcrumbsOption[];
  disabled?: boolean;
}
interface BreadcrumbsContainerProps {
  sx?: OverrideTheme;
}
interface BreadcrumbsOptionProps {
  id: string;
  name?: string;
  label?: string;
  icon?: ReactNode;
  iconLocation?: "start" | "end";
  disabled?: boolean;
  current?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  onClickOption?: (to?: string) => void;
  children?: ReactNode | string;
  sx?: OverrideTheme;
  subOptions?: BreadcrumbsOption[];
}

declare const Breadcrumbs: FC<BreadcrumbsProps>;

type ButtonVariant =
  | "primary"
  | "secondary"
  | "destructive"
  | "primary-lighter"
  | "secondary-lighter"
  | "destructive-lighter"
  | "primary-ghost"
  | "secondary-ghost"
  | "destructive-ghost";
interface ButtonProps {
  id: string;
  name?: string;
  label?: string;
  variant?: ButtonVariant;
  icon?: ReactNode;
  iconLocation?: "start" | "end";
  secondaryIcon?: ReactNode;
  fullWidth?: boolean;
  collapseOnSmall?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children?: ReactNode | string;
  compact?: boolean;
  inButtonGroup?: boolean;
  sx?: OverrideTheme;
  isLoading?: boolean;
}
interface ButtonStatesProps {
  enabled: ButtonStyleProps;
  disabled: ButtonStyleProps;
  hover: ButtonStyleProps;
  pressed: ButtonStyleProps;
}
interface ButtonStyleProps {
  border: string;
  text: string;
  background: string;
  iconColor: string;
  shadow?: string;
}
interface ConstructProps {
  parentChildren: ReactNode | string | undefined;
}
type ButtonThemeProps = Record<ButtonVariant, ButtonStatesProps>;

declare const Button: FC<
  ButtonProps & React__default.ButtonHTMLAttributes<HTMLButtonElement>
>;

interface ButtonGroupProps
  extends React__default.HTMLAttributes<HTMLDivElement> {
  children: React__default.ReactNode;
  isLoading?: boolean;
  sx?: OverrideTheme;
}

declare const ButtonGroup: FC<ButtonGroupProps>;

interface CheckboxProps extends HTMLAttributes<HTMLInputElement> {
  label?: string;
  tooltip?: string;
  overrideLabelClasses?: string;
  noLabelMinWidth?: boolean;
  sx?: OverrideTheme;
  helper?: string;
}

declare const Checkbox: FC<
  CheckboxProps & React__default.InputHTMLAttributes<HTMLInputElement>
>;

interface CodeEditorProps {
  value: string;
  label?: string;
  mode?: string;
  tooltip?: string;
  editorHeight?: string | number;
  onChange: (value: string) => any;
  className?: string;
  helpTools?: React__default.ReactNode;
  sx?: OverrideTheme;
  horizontal?: boolean;
  helper?: string;
}

declare const CodeMirrorWrapper: FC<CodeEditorProps>;

type CodeSnippetMode = "inline" | "single" | "multi";
interface CodeSnippetProps {
  label?: string;
  children: React__default.ReactNode;
  mode?: CodeSnippetMode;
  actionButton?: React__default.ReactNode;
  sx?: OverrideTheme;
}

declare const CodeSnippet: FC<CodeSnippetProps>;

declare const actionsTypes: readonly [
  "view",
  "edit",
  "delete",
  "description",
  "share",
  "cloud",
  "console",
  "download",
  "disable",
  "format",
  "preview",
];
type PredefinedActionTypes = (typeof actionsTypes)[number];
interface ItemActions<T> {
  tooltip?: string | ((itemValue: T) => string);
  type: PredefinedActionTypes | React__default.ReactNode;
  isDisabled?: boolean | ((itemValue: T) => boolean);
  showLoader?: boolean | ((itemValue: T) => boolean);
  onClick?(valueToSend: T, index?: number): any;
}
type Column<T, K extends keyof T> = {
  label: string;
  elementKey?: K;
  globalClass?: any;
  rowClass?: any;
  width?: number;
  headerTextAlign?: string;
  contentTextAlign?: string;
  enableSort?: boolean;
  renderFunction?: (input: T[K]) => React__default.ReactNode | string;
  renderFullObjectFunction?: (input: T) => React__default.ReactNode | string;
};
type IColumns<T> = {
  [K in keyof T]: Column<T, K>;
}[keyof T];
interface IInfiniteScrollConfig {
  loadMoreRecords: (indexElements: {
    startIndex: number;
    stopIndex: number;
  }) => Promise<any>;
  recordsCount: number;
}
interface ITableSortInfo {
  sortBy: string;
  sortDirection: SortDirectionType;
}
interface ISortConfig {
  onSortClick: (val: ITableSortInfo) => any;
  currentSort: string;
  currentDirection: "ASC" | "DESC" | undefined;
}
interface DataTableProps<T, K extends keyof T = keyof T> {
  itemActions?: ItemActions<T>[];
  columns: IColumns<T>[];
  onSelect?: (e: React__default.ChangeEvent<HTMLInputElement>) => void;
  idField?: K;
  isLoading?: boolean;
  loadingMessage?: React__default.ReactNode;
  records: T[];
  entityName?: string;
  selectedItems?: Array<K> | string[];
  customEmptyMessage?: string;
  customPaperHeight?: CSSProperties["height"];
  noBackground?: boolean;
  columnsSelector?: boolean;
  textSelectable?: boolean;
  columnsShown?: Array<K>;
  onColumnChange?: (column: K) => void;
  autoScrollToBottom?: boolean;
  infiniteScrollConfig?: IInfiniteScrollConfig;
  disabled?: boolean;
  onSelectAll?: () => void;
  rowStyle?: ({
    index,
  }: {
    index: number;
  }) => "deleted" | "" | React__default.CSSProperties;
  parentClassName?: string;
  sx?: OverrideTheme;
  rowHeight?: number;
  sortEnabled?: boolean | Array<K> | ISortConfig;
  sortCallBack?: (info: ITableSortInfo) => void;
}
interface IActionButton<T> {
  tooltip?: string;
  type: PredefinedActionTypes | React__default.ReactNode;
  onClick?: (valueToSend: T, index?: number) => any;
  valueToSend: T;
  selected: boolean;
  disabled: boolean;
}
interface ColumnSelectorProps<T, K extends keyof T = keyof T> {
  open: boolean;
  closeTriggerAction: () => void;
  onSelect: (column: K) => void;
  columns: IColumns<T>[];
  selectedOptionIDs: Array<K>;
  sx?: OverrideTheme;
  anchorEl?: (EventTarget & HTMLElement) | null;
}
interface ColumnSelectorConstructProps {
  sx?: OverrideTheme;
}

declare const DataTable: <T>({
  itemActions,
  columns,
  onSelect,
  records,
  isLoading,
  loadingMessage,
  entityName,
  selectedItems,
  idField,
  customEmptyMessage,
  customPaperHeight,
  columnsSelector,
  textSelectable,
  columnsShown,
  onColumnChange,
  infiniteScrollConfig,
  autoScrollToBottom,
  onSelectAll,
  rowStyle,
  parentClassName,
  disabled,
  sx,
  rowHeight,
  sortEnabled,
  sortCallBack,
}: DataTableProps<T>) => _emotion_react_jsx_runtime.JSX.Element;

type DateTimeMode = "all" | "date";
interface DateTimeInputMain {
  className?: string;
  label?: string;
  required?: boolean;
  tooltip?: string;
  disabled?: boolean;
  openPickerIcon?: "arrow" | React__default.ReactNode;
  displayFormat?: string;
  noLabelMinWidth?: boolean;
  pickerSx?: OverrideTheme;
  sizeMode?: "small" | "large";
  orientation?: "horizontal" | "vertical";
  state?: "normal" | "error" | "success" | "warning";
  readOnly?: boolean;
  helper?: string;
}
interface DateTimeConstruct {
  id: string;
  sx?: OverrideTheme;
  mode?: DateTimeMode;
  value: DateTime | null;
  onChange: (value: DateTime | null) => void;
  minDate?: DateTime;
  maxDate?: DateTime;
  usePortal?: boolean;
}
interface DateTimeSelectorMain {
  open?: boolean;
  anchorEl?: (EventTarget & HTMLElement) | null;
  onClose?: () => void;
}
interface TimeSelectorProps {
  value: DateTime | null;
  onChange: (value: DateTime | null) => void;
  completeCallback?: () => void;
  timeFormat?: "12h" | "24h";
  secondsSelector: boolean;
}
interface DateSelectorProps {
  minDate?: DateTime;
  maxDate?: DateTime;
  value: DateTime | null;
  onChange: (value: DateTime | null) => void;
}
interface StylesOverrideProps {
  isPortal: boolean;
  mode: DateTimeMode;
  coords: CSSProperties;
  sx?: OverrideTheme;
}
type DateTimeInputProps = DateTimeInputMain &
  DateTimeConstruct &
  TimeSelectorProps;
type DateTimeSelectorProps = DateTimeSelectorMain &
  DateTimeConstruct &
  TimeSelectorProps;

declare const DateTimeInput: FC<DateTimeInputProps>;

declare const DateTimeSelector: FC<DateTimeSelectorProps>;

interface DropdownSelectorProps {
  id: string;
  options: SelectOption[];
  selectedOption?: string;
  onSelect: (
    value: string,
    extraValue?: any,
    label?: string,
    selectedIndex?: number,
  ) => void;
  hideTriggerAction: () => void;
  open: boolean;
  anchorEl?: (EventTarget & HTMLElement) | null;
  anchorOrigin?: "start" | "end";
  useAnchorWidth?: boolean;
  forSelectInput?: boolean;
}

declare const DropdownSelector: FC<DropdownSelectorProps>;

interface ExpandMenuProps {
  id: string;
  name?: string;
  label?: string;
  variant?: ButtonVariant;
  icon?: ReactNode;
  iconLocation?: "start" | "end";
  children?: ReactNode | string;
  dropMenuPosition?: "start" | "end" | "middle";
  compact?: boolean;
  dropArrow?: boolean;
  inButtonGroup?: boolean;
  forInputOptions?: boolean;
  sx?: OverrideTheme;
}
interface ExpandMenuOptionProps {
  id: string;
  variant?: "regular" | "secondary";
  icon?: ReactNode;
  sx?: OverrideTheme;
  inButtonGroup?: boolean;
  children: ReactNode;
}
interface ExpandDropBaseProps {
  selectedOption?: string;
  hideTriggerAction: () => void;
  open: boolean;
  anchorEl?: (EventTarget & HTMLElement) | null;
  anchorOrigin?: "start" | "end" | "middle";
  dropMinWidth?: boolean;
  children: React__default.ReactNode;
}
interface DropdownMainProps {
  forInputOptions?: boolean;
  sx?: OverrideTheme;
}
interface ExpandMenuDescriptionProps {
  icon?: ReactNode;
  title?: string;
  subTitle?: string;
  extras?: ReactNode;
}
type ExpandDropdownProps = DropdownMainProps & ExpandDropBaseProps;

declare const ExpandMenu: FC<
  ExpandMenuProps & React__default.ButtonHTMLAttributes<HTMLButtonElement>
>;

declare const ExpandMenuDescription: FC<ExpandMenuDescriptionProps>;

declare const ExpandMenuDivider: FC;

declare const ExpandMenuOption: FC<
  ExpandMenuOptionProps & React__default.ButtonHTMLAttributes<HTMLButtonElement>
>;

interface ExpandOptionsButtonProps {
  label: string;
  open: boolean;
  sx?: OverrideTheme;
}
interface ConstructExpandOptionsProps {
  sx?: OverrideTheme;
}

declare const ExpandOptionsButton: FC<
  ExpandOptionsButtonProps &
    React__default.ButtonHTMLAttributes<HTMLButtonElement>
>;

type InputBoxState = "normal" | "error" | "success" | "warning";
type InputBoxSize = "small" | "large";
type InputBoxOrientation = "horizontal" | "vertical";
interface InputBoxProps
  extends React__default.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  fullWidth?: boolean;
  label?: string;
  tooltip?: string;
  sx?: OverrideTheme;
  index?: number;
  overlayId?: "index";
  overlayIcon?: React__default.ReactNode;
  overlayAction?: (
    e: React__default.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => void;
  overlayObject?: React__default.ReactNode;
  noLabelMinWidth?: boolean;
  startIcon?: React__default.ReactNode;
  required?: boolean;
  className?: string;
  helper?: string;
  state?: InputBoxState;
  sizeMode?: InputBoxSize;
  orientation?: InputBoxOrientation;
  disableErrorUntilFocus?: boolean;
  passwordRevealEnabled?: boolean;
}

interface FileSelectorProps {
  label: string;
  onChange: (
    event: React__default.ChangeEvent<HTMLInputElement>,
    fileName: string,
    data?: string,
  ) => void;
  returnEncodedData?: boolean;
  id: string;
  name: string;
  disabled?: boolean;
  tooltip?: string;
  required?: boolean;
  helper?: string;
  accept?: string;
  value: string;
  className?: string;
  state?: InputBoxState;
  noLabelMinWidth?: boolean;
  sx?: OverrideTheme;
}
interface FileSelectorConstructorProps {
  children?: React__default.ReactNode;
  sx?: OverrideTheme;
  error?: boolean;
  startIcon?: React__default.ReactNode;
  className?: string;
}

declare const FileSelector: FC<FileSelectorProps>;

interface FormActionsTrayProps
  extends React__default.HTMLAttributes<HTMLDivElement> {
  marginTop?: number;
  separator?: boolean;
  sx?: OverrideTheme;
}

declare const FormActionsTray: FC<FormActionsTrayProps>;

interface FormLayoutProps {
  sx?: OverrideTheme;
  children?: React__default.ReactNode;
  title?: string;
  icon?: React__default.ReactNode;
  helpBox?: React__default.ReactNode;
  withBorders?: boolean;
  containerPadding?: boolean;
}

declare const FormLayout: FC<FormLayoutProps>;

interface GridCommonProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  sx?: OverrideTheme;
}
type ConditionalProps =
  | {
      container?: boolean;
      item?: never;
      wrap?: "nowrap" | "wrap-reverse" | "wrap";
      direction?: "column-reverse" | "column" | "row-reverse" | "row";
      columnSpacing?: number;
      rowSpacing?: number;
      xs?: never;
      sm?: never;
      md?: never;
      lg?: never;
      xl?: never;
    }
  | {
      container?: never;
      item?: boolean;
      wrap?: never;
      direction?: never;
      columnSpacing?: never;
      rowSpacing?: never;
      xs?: "auto" | "hidden" | number | boolean;
      sm?: "auto" | "hidden" | number | boolean;
      md?: "auto" | "hidden" | number | boolean;
      lg?: "auto" | "hidden" | number | boolean;
      xl?: "auto" | "hidden" | number | boolean;
    };
type GridProps = GridCommonProps & ConditionalProps;

declare const Grid: FC<GridProps>;

interface HelpBoxProps {
  icon?: React__default.ReactNode;
  title: string;
  help: string | React__default.ReactNode | React__default.ReactNode[];
}

declare const HelpBox: FC<HelpBoxProps & HTMLAttributes<HTMLDivElement>>;

interface IconBase {
  id: string;
  size?: "small" | "large";
  sx?: OverrideTheme;
  variant?: ButtonVariant;
  isLoading?: boolean;
  children: React__default.ReactNode;
}
type IconButtonProps = IconBase &
  React__default.ButtonHTMLAttributes<HTMLButtonElement>;

declare const IconButton: FC<IconButtonProps>;

declare const Inputdiv: React__default.ForwardRefExoticComponent<
  InputBoxProps &
    React__default.RefAttributes<
      React__default.HTMLAttributes<HTMLInputElement>
    >
>;

type InputLabelOrientation = "horizontal" | "vertical";
type InputLabelSizeMode = "small" | "large";
interface InputLabelProps extends HTMLAttributes<HTMLLabelElement> {
  children?: ReactNode;
  sx?: OverrideTheme;
  noMinWidth?: boolean;
  htmlFor?: string;
  orientation?: InputLabelOrientation;
  inputSizeMode?: InputLabelSizeMode;
}

declare const Index$2: FC<InputLabelProps>;

type LinkButtonVariant = "primary" | "neutral" | "destructive";
interface LinkButtonStyle {
  default: string;
  hover: string;
  active: string;
  disabled: string;
}
interface LinkButtonProps
  extends React__default.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  label?: any;
  variant?: LinkButtonVariant;
  sx?: OverrideTheme;
}
type LinkButtonThemeVariant = Record<LinkButtonVariant, LinkButtonStyle>;

interface LinkProps {
  variant?: LinkButtonVariant;
  sx?: OverrideTheme;
}

declare const Link: FC<
  LinkProps & React__default.AnchorHTMLAttributes<HTMLAnchorElement>
>;

declare const LinkButton: FC<LinkButtonProps>;

declare const Loader: FC<SVGProps<any>>;

interface LoginWrapperProps {
  logoProps: ApplicationLogoProps;
  form: ReactNode;
  formFooter?: ReactNode;
  promoHeader?: ReactNode;
  promoInfo?: ReactNode;
  backgroundAnimation?: boolean;
}

declare const LoginWrapper: FC<LoginWrapperProps>;

interface MDSCacheProviderTypes {
  cache: EmotionCache;
  children: React__default.ReactNode;
}

declare const Index$1: FC<MDSCacheProviderTypes>;

interface ModalBoxProps {
  onClose: () => void;
  open: boolean;
  title: React__default.ReactNode;
  children: React__default.ReactNode;
  widthLimit?: boolean;
  titleIcon?: React__default.ReactNode;
  backgroundOverlay?: boolean;
  customMaxWidth?: number | string;
  sx?: OverrideTheme;
}

declare const ModalBox: FC<ModalBoxProps>;

interface OverlayProps {
  onClose: () => void;
  open: boolean;
  children: React__default.ReactNode;
  backgroundOverlay?: boolean;
  sx?: OverrideTheme;
}

declare const Overlay: FC<OverlayProps>;

declare const Index: FC<NotificationAlertPrp & HTMLAttributes<HTMLDivElement>>;

type NotificationBadgeTypes =
  | "none"
  | "info"
  | "success"
  | "warning"
  | "danger";
type NotificationCountHorizontal = "left" | "right";
type NotificationCountVertical = "bottom" | "top";
type NotificationCountShape = "circular" | "rectangular";
interface NotificationCountMain {
  invisible?: boolean;
  max?: number;
  showZero?: boolean;
  count?: number;
}
interface NotificationCountConstruct {
  horizontalPosition?: NotificationCountHorizontal;
  verticalPosition?: NotificationCountVertical;
  sx?: OverrideTheme;
  color?: NotificationBadgeTypes;
  shape?: NotificationCountShape;
  dotOnly?: boolean;
}
type NotificationCountProps = NotificationCountMain &
  NotificationCountConstruct;

declare const NotificationCount: FC<
  HTMLAttributes<HTMLSpanElement> & NotificationCountProps
>;

declare const Notifications: React__default.FC<NotificationsProps>;

interface PageHeaderMainProps {
  label: React__default.ReactNode;
  middleComponent?: React__default.ReactNode;
  actions?: React__default.ReactNode;
}
interface PageHeaderConstruct {
  sx?: OverrideTheme;
}
type PageHeaderProps = PageHeaderMainProps & PageHeaderConstruct;

declare const PageHeader: FC<PageHeaderProps & HTMLAttributes<HTMLDivElement>>;

interface PageLayoutProps {
  variant?: "constrained" | "full";
  children: React__default.ReactNode;
  className?: string;
  sx?: OverrideTheme;
}

declare const PageLayout: FC<PageLayoutProps & HTMLAttributes<HTMLDivElement>>;

type ProgressState = "progress" | "success" | "error" | "paused";
interface ProgressBarProps {
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

declare const ProgressBar: FC<ProgressBarProps>;

interface RadioGroupProps {
  label?: string;
  tooltip?: string;
  selectorOptions: SelectOption[];
  currentValue: string;
  id: string;
  name: string;
  disableOptions?: boolean;
  displayInColumn?: boolean;
  className?: string;
  onChange: (
    event: React__default.ChangeEvent<HTMLInputElement>,
    extraValue?: any,
  ) => void;
  sx?: OverrideTheme;
}

declare const RadioGroup: FC<RadioGroupProps>;

interface ScreenTitleProps {
  icon: React__default.ReactNode;
  superTitle?: React__default.ReactNode;
  subTitle?: React__default.ReactNode;
  title: string;
  actions?: React__default.ReactNode;
  titleBadges?: React__default.ReactNode[];
  titleOptions?: ScreenTitleOptions[];
  sx?: OverrideTheme;
}
interface ScreenTitleContainerProps {
  superTitle?: React__default.ReactNode;
  subTitle?: React__default.ReactNode;
  titleOptions?: ScreenTitleOptions[];
  sx?: OverrideTheme;
  bottomBorder?: boolean;
}
interface ScreenTitleOptions {
  title?: string;
  value?: string;
}

declare const ScreenTitle: FC<
  ScreenTitleProps & HTMLAttributes<HTMLDivElement>
>;

interface SearchBoxProps {
  id: string;
  placeholder?: string;
  sx?: OverrideTheme;
  icon?: React__default.ReactNode;
}

declare const SearchBox: FC<
  SearchBoxProps & React__default.InputHTMLAttributes<HTMLInputElement>
>;

interface SectionTitleProps {
  separator?: boolean;
  actions?: React__default.ReactNode;
  icon?: React__default.ReactNode;
  children: React__default.ReactNode;
  sx?: OverrideTheme;
}

declare const SectionTitle: FC<
  SectionTitleProps & HTMLAttributes<HTMLDivElement>
>;

type SelectSizeMode = "small" | "large";
type SelectOrientation = "horizontal" | "vertical";
type SelectState = "normal" | "error" | "success" | "warning";
interface SelectProps {
  options: SelectOption[];
  value?: string;
  id: string;
  name?: string;
  required?: boolean;
  className?: string;
  disabled?: boolean;
  label?: string;
  tooltip?: string;
  noLabelMinWidth?: boolean;
  placeholder?: string;
  onChange: (newValue: string, extraValue?: any) => void;
  sx?: OverrideTheme;
  sizeMode?: SelectSizeMode;
  orientation?: SelectOrientation;
  state?: SelectState;
  readOnly?: boolean;
  helper?: string;
}

declare const Select: FC<SelectProps>;

interface SizeChartMain {
  label: boolean;
  width?: string;
  height?: string;
}
interface SizeChartConstructProps {
  usedBytes: number;
  totalBytes: number;
  chartLabel?: string;
  sx?: OverrideTheme;
}
type SizeChartProps = SizeChartMain & SizeChartConstructProps;

declare const SizeChart: FC<SizeChartProps>;

interface SliderProps {
  id: string;
  label?: string;
  noLabelMinWidth?: boolean;
  error?: string;
  tooltip?: string;
  sx?: OverrideTheme;
  displayValue?: boolean;
  displayValueFunction?: (value: any) => React__default.ReactNode;
}

declare const Slider: FC<
  SliderProps & React__default.InputHTMLAttributes<HTMLInputElement>
>;

interface TabProps {
  label: React__default.ReactNode;
  icon?: React__default.ReactNode;
  disabled?: boolean;
  to?: string;
  id: string;
}
type TabItemProps =
  | {
      tabConfig?: never;
      content?: never;
      separator: true;
    }
  | {
      tabConfig: TabProps;
      content?: React__default.ReactNode;
      separator?: never;
    };
interface TabsProps {
  horizontal?: boolean;
  options: TabItemProps[];
  currentTabOrPath: string;
  useRouteTabs?: boolean;
  routes?: React__default.ReactElement | null;
  onTabClick: (selectedItem: string) => void;
  optionsInitialComponent?: React__default.ReactNode;
  optionsEndComponent?: React__default.ReactNode;
  sx?: OverrideTheme;
}
interface TabButtonProps {
  id: string;
  horizontal?: boolean;
  label: React__default.ReactNode;
  onClick: () => void;
  disabled: boolean;
  icon?: React__default.ReactNode;
  selected?: boolean;
}
interface TabPanelProps {
  id: string;
  selectedTab?: string;
  useRouteTabs: boolean;
  children: React__default.ReactNode;
}

declare const Tabs: FC<TabsProps & HTMLAttributes<HTMLDivElement>>;

type TagColors = "primary" | "secondary" | "destructive";
type TagSizes = "large" | "small";
interface TagVariantProps {
  background: string;
  label: string;
  deleteColor: string;
}
interface TagProps {
  label: string;
  onDelete?: (item: string) => void;
  id: string;
  icon?: React__default.ReactNode;
  color?: TagColors;
  size?: TagSizes;
  sx?: OverrideTheme;
}
type TagThemeVariants = Record<TagColors, TagVariantProps>;

declare const Tag: FC<
  TagProps & React__default.HTMLAttributes<HTMLSpanElement>
>;

interface TextAreaProps
  extends React__default.TextareaHTMLAttributes<HTMLTextAreaElement> {
  id: string;
  fullWidth?: boolean;
  label?: string;
  tooltip?: string;
  sx?: OverrideTheme;
  index?: number;
  noLabelMinWidth?: boolean;
  required?: boolean;
  className?: string;
  helper?: string;
  state?: InputBoxState;
  orientation?: InputBoxOrientation;
}

declare const TextArea: FC<TextAreaProps>;

declare const ThemedLogo: FC<SVGProps<any>>;

interface ThemeHandlerProps {
  darkMode?: boolean;
  customTheme?: Theme;
  children: any;
}

declare const ThemeHandler: FC<ThemeHandlerProps>;

interface MainToggleProps {
  id: string;
  label?: string;
  tooltip?: string;
  sx?: OverrideTheme;
  className?: string;
  toggleOnly?: boolean;
  indicatorLabels?: string[];
  helper?: string;
  labelsOn?: boolean;
  inverse?: boolean;
}
type ToggleProps = MainToggleProps &
  React__default.InputHTMLAttributes<HTMLInputElement>;

declare const Toggle: FC<
  ToggleProps & React__default.InputHTMLAttributes<HTMLInputElement>
>;

type TooltipPlacement = "bottom" | "left" | "right" | "top";
interface TooltipProps {
  children: React__default.ReactElement;
  title?: React__default.ReactNode;
  tooltip: React__default.ReactNode;
  errorProps?: any;
  placement?: TooltipPlacement;
}
interface TooltipBuild {
  placement: TooltipPlacement;
}
interface TooltipConstructProps {
  placement: TooltipPlacement;
  title?: React__default.ReactNode;
  content: React__default.ReactNode;
  anchorEl: (EventTarget & HTMLSpanElement) | null;
}

declare const Tooltip: FC<TooltipProps>;

type ValuePairDirection = "column" | "row";
interface ValuePairMain {
  label?: ReactNode;
  value?: ReactNode;
}
interface ValuePairCommon {
  direction?: ValuePairDirection;
  sx?: OverrideTheme;
}
type ValuePairProps = ValuePairMain & ValuePairCommon;

declare const ValuePair: FC<ValuePairProps>;

interface WizardButton {
  label?: string;
  type?: "next" | "back" | "to" | "custom";
  action?: (nextFunction: (to: string | number) => void) => void;
  enabled?: boolean;
  toPage?: number;
  componentRender?: React__default.ReactNode;
}
interface WizardElement {
  label: string;
  componentRender: any;
  buttons: WizardButton[];
  advancedOnly?: boolean;
  loadingStep?: boolean;
}
interface WizardPage$1 {
  page: WizardElement;
  pageChange: (to: string | number) => void;
  loadingStep?: boolean;
}
interface WizardMain {
  loadingStep?: boolean;
  wizardSteps: WizardElement[];
  linearMode?: boolean;
}
interface WizardConstruct {
  sx?: OverrideTheme;
  forModal?: boolean;
  actionButtonsPortalID?: HTMLElement;
}
type WizardProps = WizardMain & WizardConstruct;
type WizardPageProps = WizardPage$1 & WizardConstruct;

declare const GenericWizard: ({
  wizardSteps,
  loadingStep,
  forModal,
  linearMode,
  actionButtonsPortalID,
  sx,
}: WizardProps) => _emotion_react_jsx_runtime.JSX.Element | null;

declare const WizardPage: ({
  page,
  pageChange,
  loadingStep,
  forModal,
  actionButtonsPortalID,
}: WizardPageProps) => _emotion_react_jsx_runtime.JSX.Element;

interface TableComponentsExtraProps {
  sx?: OverrideTheme;
}

declare const Table: FC<
  TableComponentsExtraProps &
    React__default.TableHTMLAttributes<HTMLTableElement>
>;

declare const TableBody: FC<
  TableComponentsExtraProps &
    React__default.HTMLAttributes<HTMLTableSectionElement>
>;

declare const TableCell: FC<
  TableComponentsExtraProps &
    React__default.TdHTMLAttributes<HTMLTableDataCellElement>
>;

declare const TableHead: FC<
  TableComponentsExtraProps &
    React__default.HTMLAttributes<HTMLTableSectionElement>
>;

declare const TableHeadCell: FC<
  TableComponentsExtraProps &
    React__default.ThHTMLAttributes<HTMLTableHeaderCellElement>
>;

declare const TableRow: FC<
  TableComponentsExtraProps & React__default.HTMLAttributes<HTMLTableRowElement>
>;

declare const lightModeColors: {
  "Color/Base/Royal/0": string;
  "Color/Base/Royal/1": string;
  "Color/Base/Royal/2": string;
  "Color/Base/Royal/3": string;
  "Color/Base/Royal/4": string;
  "Color/Base/Royal/5": string;
  "Color/Base/Royal/6": string;
  "Color/Base/Royal/7": string;
  "Color/Base/Royal/8": string;
  "Color/Base/Royal/9": string;
  "Color/Base/Royal/10": string;
  "Color/Base/Java/0": string;
  "Color/Base/Java/1": string;
  "Color/Base/Java/2": string;
  "Color/Base/Java/3": string;
  "Color/Base/Java/4": string;
  "Color/Base/Java/5": string;
  "Color/Base/Java/6": string;
  "Color/Base/Java/7": string;
  "Color/Base/Java/8": string;
  "Color/Base/Java/9": string;
  "Color/Base/Java/10": string;
  "Color/Base/Orange/0": string;
  "Color/Base/Orange/1": string;
  "Color/Base/Orange/2": string;
  "Color/Base/Orange/3": string;
  "Color/Base/Orange/4": string;
  "Color/Base/Orange/5": string;
  "Color/Base/Orange/6": string;
  "Color/Base/Orange/7": string;
  "Color/Base/Orange/8": string;
  "Color/Base/Orange/9": string;
  "Color/Base/Orange/10": string;
  "Color/Base/Sunset/0": string;
  "Color/Base/Sunset/1": string;
  "Color/Base/Sunset/2": string;
  "Color/Base/Sunset/3": string;
  "Color/Base/Sunset/4": string;
  "Color/Base/Sunset/5": string;
  "Color/Base/Sunset/6": string;
  "Color/Base/Sunset/7": string;
  "Color/Base/Sunset/8": string;
  "Color/Base/Sunset/9": string;
  "Color/Base/Sunset/10": string;
  "Color/Neutral/Text/colorText": string;
  "Color/Base/Black": string;
  "Color/Base/White": string;
  "Color/Neutral/Text/colorTextSecondary": string;
  "Color/Neutral/Text/colorTextTertiary": string;
  "Color/Neutral/Text/colorTextQuaternary": string;
  "Color/Neutral/Text/colorTextLightSolid": string;
  "Color/Neutral/Text/colorTextHeading": string;
  "Color/Neutral/Text/colorTextLabel": string;
  "Color/Neutral/Text/colorTextDescription": string;
  "Color/Neutral/Text/colorTextDisabled": string;
  "Color/Neutral/Text/colorTextPlaceholder": string;
  "Color/Neutral/Icon/colorIcon": string;
  "Color/Neutral/Icon/colorIconHover": string;
  "Color/Neutral/colorWhite": string;
  "Color/Neutral/colorBgBase": string;
  "Color/Neutral/transparent": string;
  "Color/Neutral/Bg/colorBgContainer": string;
  "Color/Neutral/Bg/colorBgOverlay": string;
  "Color/Neutral/Bg/colorBgShell": string;
  "Color/Neutral/colorBlack": string;
  "Color/Neutral/Bg/colorBgSections": string;
  "Color/Neutral/Border/colorBorderMinimal": string;
  "Color/Neutral/Border/colorBorderSubtle": string;
  "Color/Neutral/Border/colorBorderBold": string;
  "Color/Base/Shark/0": string;
  "Color/Base/Shark/1": string;
  "Color/Base/Shark/2": string;
  "Color/Base/Shark/3": string;
  "Color/Base/Shark/4": string;
  "Color/Base/Shark/5": string;
  "Color/Base/Shark/6": string;
  "Color/Base/Shark/7": string;
  "Color/Base/Shark/8": string;
  "Color/Base/Shark/9": string;
  "Color/Base/Shark/10": string;
  "Color/Neutral/Bg/colorBgElevated": string;
  "Color/Brand/Primary/colorPrimary": string;
  "Color/Brand/Primary/colorPrimaryBg": string;
  "Color/Brand/Primary/colorPrimaryBgHover": string;
  "Color/Brand/Link/colorLink": string;
  "Color/Documentation": string;
  "Color/Brand/Link/colorLinkHover": string;
  "Color/Brand/Primary/colorPrimaryHover": string;
  "Color/Brand/Primary/colorPrimaryBorder": string;
  "Color/Brand/Primary/colorPrimaryBorderHover": string;
  "Color/Brand/Primary/colorPrimaryText": string;
  "Color/Brand/Primary/colorPrimaryTextHover": string;
  "Color/Brand/Link/colorLinkVisited": string;
  "Color/Brand/Primary/colorPrimaryActive": string;
  "Color/Brand/Warning/colorPrimary": string;
  "Color/Brand/Warning/colorPrimaryActive": string;
  "Color/Brand/Warning/colorPrimaryHover": string;
  "Color/Brand/Warning/colorPrimaryBg": string;
  "Color/Brand/Warning/colorPrimaryBgHover": string;
  "Color/Brand/Warning/colorPrimaryBorder": string;
  "Color/Brand/Warning/colorPrimaryBorderHover": string;
  "Color/Brand/Warning/colorPrimaryText": string;
  "Color/Brand/Warning/colorPrimaryTextHover": string;
  "Color/Brand/Success/colorPrimary": string;
  "Color/Brand/Success/colorPrimaryActive": string;
  "Color/Brand/Success/colorPrimaryHover": string;
  "Color/Brand/Success/colorPrimaryBg": string;
  "Color/Brand/Success/colorPrimaryBgHover": string;
  "Color/Brand/Success/colorPrimaryBorder": string;
  "Color/Brand/Success/colorPrimaryBorderHover": string;
  "Color/Brand/Success/colorPrimaryText": string;
  "Color/Brand/Success/colorPrimaryTextHover": string;
  "Color/Brand/Error/colorPrimary": string;
  "Color/Brand/Error/colorPrimaryActive": string;
  "Color/Brand/Error/colorPrimaryHover": string;
  "Color/Brand/Error/colorPrimaryBg": string;
  "Color/Brand/Error/colorPrimaryBgHover": string;
  "Color/Brand/Error/colorPrimaryBorder": string;
  "Color/Brand/Error/colorPrimaryBorderHover": string;
  "Color/Brand/Error/colorPrimaryText": string;
  "Color/Brand/Error/colorPrimaryTextHover": string;
  "Color/Brand/Control/colorBgActive": string;
  "Color/Brand/Control/colorBgHover": string;
  "Color/Brand/Info/colorPrimary": string;
  "Color/Brand/Info/colorPrimaryActive": string;
  "Color/Brand/Info/colorPrimaryHover": string;
  "Color/Brand/Info/colorPrimaryBg": string;
  "Color/Brand/Info/colorPrimaryBgHover": string;
  "Color/Brand/Info/colorPrimaryBorder": string;
  "Color/Brand/Info/colorPrimaryBorderHover": string;
  "Color/Brand/Info/colorPrimaryText": string;
  "Color/Brand/Info/colorPrimaryTextHover": string;
  "Color/Brand/Neutral/colorPrimary": string;
  "Color/Brand/Neutral/colorPrimaryActive": string;
  "Color/Brand/Neutral/colorPrimaryHover": string;
  "Color/Brand/Neutral/colorPrimaryBg": string;
  "Color/Brand/Neutral/colorPrimaryBgHover": string;
  "Color/Brand/Neutral/colorPrimaryBorder": string;
  "Color/Brand/Neutral/colorPrimaryBorderHover": string;
  "Color/Brand/Neutral/colorPrimaryText": string;
  "Color/Brand/Neutral/colorPrimaryTextHover": string;
  "Color/Neutral/Bg/colorBgDisabled": string;
  "Color/Brand/_minio/Raspberry": string;
  "Color/Brand/_minio/Midnight": string;
  "Color/Brand/_minio/Nautical": string;
  "Color/Brand/_minio/Meridian": string;
  "Color/Brand/_minio/Glaicer": string;
  "Color/Neutral/Border/colorBorderStrong": string;
  "Color/Neutral/Bg/colorBgContrast": string;
  "Color/Base/Purple/0": string;
  "Color/Base/Purple/1": string;
  "Color/Base/Purple/2": string;
  "Color/Base/Purple/3": string;
  "Color/Base/Purple/4": string;
  "Color/Base/Purple/5": string;
  "Color/Base/Purple/6": string;
  "Color/Base/Purple/7": string;
  "Color/Base/Purple/8": string;
  "Color/Base/Purple/9": string;
  "Color/Base/Purple/10": string;
  "Color/Base/Scooter/0": string;
  "Color/Base/Scooter/1": string;
  "Color/Base/Scooter/2": string;
  "Color/Base/Scooter/3": string;
  "Color/Base/Scooter/4": string;
  "Color/Base/Scooter/5": string;
  "Color/Base/Scooter/6": string;
  "Color/Base/Scooter/7": string;
  "Color/Base/Scooter/8": string;
  "Color/Base/Scooter/9": string;
  "Color/Base/Scooter/10": string;
  "Color/Base/Rose/0": string;
  "Color/Base/Rose/1": string;
  "Color/Base/Rose/2": string;
  "Color/Base/Rose/3": string;
  "Color/Base/Rose/4": string;
  "Color/Base/Rose/5": string;
  "Color/Base/Rose/6": string;
  "Color/Base/Rose/7": string;
  "Color/Base/Rose/8": string;
  "Color/Base/Rose/9": string;
  "Color/Base/Rose/10": string;
  "Color/Dataviz/1": string;
  "Color/Dataviz/2": string;
  "Color/Dataviz/3": string;
  "Color/Dataviz/4": string;
  "Color/Dataviz/5": string;
  "Color/Dataviz/6": string;
  "Color/Dataviz/7": string;
  "Color/Dataviz/8": string;
  "Color/Dataviz/9": string;
  "Color/Dataviz/10": string;
  "Color/Dataviz/11": string;
  "Color/Dataviz/12": string;
  "Color/Dataviz/13": string;
  "Color/Dataviz/14": string;
  "Color/Dataviz/15": string;
  "Color/Dataviz/none": string;
  "Color/Neutral/Icon/colorIconDisabled": string;
  "Color/Neutral/Text/colorTextContrast": string;
  "Color/Brand/Covers/colorManager": string;
  "Color/Brand/Covers/colorSourceFile": string;
  "Color/Brand/Covers/colorPayground": string;
  "Color/Brand/Covers/colorArchive": string;
  "Color/Brand/Covers/colorLibrary": string;
  "Color/Code/1": string;
  "Color/Code/2": string;
  "Color/Code/3": string;
  "Color/Code/4": string;
  "Color/Code/5": string;
  "Color/Code/6": string;
  "Color/Code/7": string;
  "Color/Code/8": string;
  "Color/Code/9": string;
  "Color/Base/Gray/1": string;
  "Color/Neutral/Bg/colorBgFields": string;
  "Color/Brand/_gradient/Primary/colorTop": string;
  "Color/Brand/_gradient/Primary/colorBottom": string;
  "Color/Brand/_gradient/Detructive/colorTop": string;
  "Color/Brand/_gradient/Detructive/colorBottom": string;
  "Color/Brand/_gradient/Primary/colorTopHover": string;
  "Color/Brand/_gradient/Primary/colorBottomHover": string;
  "Color/Brand/_gradient/Detructive/colorTopHover": string;
  "Color/Brand/_gradient/Detructive/colorBottomHover": string;
};
declare const darkModeColors: {
  "Color/Base/Royal/0": string;
  "Color/Base/Royal/1": string;
  "Color/Base/Royal/2": string;
  "Color/Base/Royal/3": string;
  "Color/Base/Royal/4": string;
  "Color/Base/Royal/5": string;
  "Color/Base/Royal/6": string;
  "Color/Base/Royal/7": string;
  "Color/Base/Royal/8": string;
  "Color/Base/Royal/9": string;
  "Color/Base/Royal/10": string;
  "Color/Base/Java/0": string;
  "Color/Base/Java/1": string;
  "Color/Base/Java/2": string;
  "Color/Base/Java/3": string;
  "Color/Base/Java/4": string;
  "Color/Base/Java/5": string;
  "Color/Base/Java/6": string;
  "Color/Base/Java/7": string;
  "Color/Base/Java/8": string;
  "Color/Base/Java/9": string;
  "Color/Base/Java/10": string;
  "Color/Base/Orange/0": string;
  "Color/Base/Orange/1": string;
  "Color/Base/Orange/2": string;
  "Color/Base/Orange/3": string;
  "Color/Base/Orange/4": string;
  "Color/Base/Orange/5": string;
  "Color/Base/Orange/6": string;
  "Color/Base/Orange/7": string;
  "Color/Base/Orange/8": string;
  "Color/Base/Orange/9": string;
  "Color/Base/Orange/10": string;
  "Color/Base/Sunset/0": string;
  "Color/Base/Sunset/1": string;
  "Color/Base/Sunset/2": string;
  "Color/Base/Sunset/3": string;
  "Color/Base/Sunset/4": string;
  "Color/Base/Sunset/5": string;
  "Color/Base/Sunset/6": string;
  "Color/Base/Sunset/7": string;
  "Color/Base/Sunset/8": string;
  "Color/Base/Sunset/9": string;
  "Color/Base/Sunset/10": string;
  "Color/Neutral/Text/colorText": string;
  "Color/Base/Black": string;
  "Color/Base/White": string;
  "Color/Neutral/Text/colorTextSecondary": string;
  "Color/Neutral/Text/colorTextTertiary": string;
  "Color/Neutral/Text/colorTextQuaternary": string;
  "Color/Neutral/Text/colorTextLightSolid": string;
  "Color/Neutral/Text/colorTextHeading": string;
  "Color/Neutral/Text/colorTextLabel": string;
  "Color/Neutral/Text/colorTextDescription": string;
  "Color/Neutral/Text/colorTextDisabled": string;
  "Color/Neutral/Text/colorTextPlaceholder": string;
  "Color/Neutral/Icon/colorIcon": string;
  "Color/Neutral/Icon/colorIconHover": string;
  "Color/Neutral/colorWhite": string;
  "Color/Neutral/colorBgBase": string;
  "Color/Neutral/transparent": string;
  "Color/Neutral/Bg/colorBgContainer": string;
  "Color/Neutral/Bg/colorBgOverlay": string;
  "Color/Neutral/Bg/colorBgShell": string;
  "Color/Neutral/colorBlack": string;
  "Color/Neutral/Bg/colorBgSections": string;
  "Color/Neutral/Border/colorBorderMinimal": string;
  "Color/Neutral/Border/colorBorderSubtle": string;
  "Color/Neutral/Border/colorBorderBold": string;
  "Color/Base/Shark/0": string;
  "Color/Base/Shark/1": string;
  "Color/Base/Shark/2": string;
  "Color/Base/Shark/3": string;
  "Color/Base/Shark/4": string;
  "Color/Base/Shark/5": string;
  "Color/Base/Shark/6": string;
  "Color/Base/Shark/7": string;
  "Color/Base/Shark/8": string;
  "Color/Base/Shark/9": string;
  "Color/Base/Shark/10": string;
  "Color/Neutral/Bg/colorBgElevated": string;
  "Color/Brand/Primary/colorPrimary": string;
  "Color/Brand/Primary/colorPrimaryBg": string;
  "Color/Brand/Primary/colorPrimaryBgHover": string;
  "Color/Brand/Link/colorLink": string;
  "Color/Documentation": string;
  "Color/Brand/Link/colorLinkHover": string;
  "Color/Brand/Primary/colorPrimaryHover": string;
  "Color/Brand/Primary/colorPrimaryBorder": string;
  "Color/Brand/Primary/colorPrimaryBorderHover": string;
  "Color/Brand/Primary/colorPrimaryText": string;
  "Color/Brand/Primary/colorPrimaryTextHover": string;
  "Color/Brand/Link/colorLinkVisited": string;
  "Color/Brand/Primary/colorPrimaryActive": string;
  "Color/Brand/Warning/colorPrimary": string;
  "Color/Brand/Warning/colorPrimaryActive": string;
  "Color/Brand/Warning/colorPrimaryHover": string;
  "Color/Brand/Warning/colorPrimaryBg": string;
  "Color/Brand/Warning/colorPrimaryBgHover": string;
  "Color/Brand/Warning/colorPrimaryBorder": string;
  "Color/Brand/Warning/colorPrimaryBorderHover": string;
  "Color/Brand/Warning/colorPrimaryText": string;
  "Color/Brand/Warning/colorPrimaryTextHover": string;
  "Color/Brand/Success/colorPrimary": string;
  "Color/Brand/Success/colorPrimaryActive": string;
  "Color/Brand/Success/colorPrimaryHover": string;
  "Color/Brand/Success/colorPrimaryBg": string;
  "Color/Brand/Success/colorPrimaryBgHover": string;
  "Color/Brand/Success/colorPrimaryBorder": string;
  "Color/Brand/Success/colorPrimaryBorderHover": string;
  "Color/Brand/Success/colorPrimaryText": string;
  "Color/Brand/Success/colorPrimaryTextHover": string;
  "Color/Brand/Error/colorPrimary": string;
  "Color/Brand/Error/colorPrimaryActive": string;
  "Color/Brand/Error/colorPrimaryHover": string;
  "Color/Brand/Error/colorPrimaryBg": string;
  "Color/Brand/Error/colorPrimaryBgHover": string;
  "Color/Brand/Error/colorPrimaryBorder": string;
  "Color/Brand/Error/colorPrimaryBorderHover": string;
  "Color/Brand/Error/colorPrimaryText": string;
  "Color/Brand/Error/colorPrimaryTextHover": string;
  "Color/Brand/Control/colorBgActive": string;
  "Color/Brand/Control/colorBgHover": string;
  "Color/Brand/Info/colorPrimary": string;
  "Color/Brand/Info/colorPrimaryActive": string;
  "Color/Brand/Info/colorPrimaryHover": string;
  "Color/Brand/Info/colorPrimaryBg": string;
  "Color/Brand/Info/colorPrimaryBgHover": string;
  "Color/Brand/Info/colorPrimaryBorder": string;
  "Color/Brand/Info/colorPrimaryBorderHover": string;
  "Color/Brand/Info/colorPrimaryText": string;
  "Color/Brand/Info/colorPrimaryTextHover": string;
  "Color/Brand/Neutral/colorPrimary": string;
  "Color/Brand/Neutral/colorPrimaryActive": string;
  "Color/Brand/Neutral/colorPrimaryHover": string;
  "Color/Brand/Neutral/colorPrimaryBg": string;
  "Color/Brand/Neutral/colorPrimaryBgHover": string;
  "Color/Brand/Neutral/colorPrimaryBorder": string;
  "Color/Brand/Neutral/colorPrimaryBorderHover": string;
  "Color/Brand/Neutral/colorPrimaryText": string;
  "Color/Brand/Neutral/colorPrimaryTextHover": string;
  "Color/Neutral/Bg/colorBgDisabled": string;
  "Color/Brand/_minio/Raspberry": string;
  "Color/Brand/_minio/Midnight": string;
  "Color/Brand/_minio/Nautical": string;
  "Color/Brand/_minio/Meridian": string;
  "Color/Brand/_minio/Glaicer": string;
  "Color/Neutral/Border/colorBorderStrong": string;
  "Color/Neutral/Bg/colorBgContrast": string;
  "Color/Base/Purple/0": string;
  "Color/Base/Purple/1": string;
  "Color/Base/Purple/2": string;
  "Color/Base/Purple/3": string;
  "Color/Base/Purple/4": string;
  "Color/Base/Purple/5": string;
  "Color/Base/Purple/6": string;
  "Color/Base/Purple/7": string;
  "Color/Base/Purple/8": string;
  "Color/Base/Purple/9": string;
  "Color/Base/Purple/10": string;
  "Color/Base/Scooter/0": string;
  "Color/Base/Scooter/1": string;
  "Color/Base/Scooter/2": string;
  "Color/Base/Scooter/3": string;
  "Color/Base/Scooter/4": string;
  "Color/Base/Scooter/5": string;
  "Color/Base/Scooter/6": string;
  "Color/Base/Scooter/7": string;
  "Color/Base/Scooter/8": string;
  "Color/Base/Scooter/9": string;
  "Color/Base/Scooter/10": string;
  "Color/Base/Rose/0": string;
  "Color/Base/Rose/1": string;
  "Color/Base/Rose/2": string;
  "Color/Base/Rose/3": string;
  "Color/Base/Rose/4": string;
  "Color/Base/Rose/5": string;
  "Color/Base/Rose/6": string;
  "Color/Base/Rose/7": string;
  "Color/Base/Rose/8": string;
  "Color/Base/Rose/9": string;
  "Color/Base/Rose/10": string;
  "Color/Dataviz/1": string;
  "Color/Dataviz/2": string;
  "Color/Dataviz/3": string;
  "Color/Dataviz/4": string;
  "Color/Dataviz/5": string;
  "Color/Dataviz/6": string;
  "Color/Dataviz/7": string;
  "Color/Dataviz/8": string;
  "Color/Dataviz/9": string;
  "Color/Dataviz/10": string;
  "Color/Dataviz/11": string;
  "Color/Dataviz/12": string;
  "Color/Dataviz/13": string;
  "Color/Dataviz/14": string;
  "Color/Dataviz/15": string;
  "Color/Dataviz/none": string;
  "Color/Neutral/Icon/colorIconDisabled": string;
  "Color/Neutral/Text/colorTextContrast": string;
  "Color/Brand/Covers/colorManager": string;
  "Color/Brand/Covers/colorSourceFile": string;
  "Color/Brand/Covers/colorPayground": string;
  "Color/Brand/Covers/colorArchive": string;
  "Color/Brand/Covers/colorLibrary": string;
  "Color/Code/1": string;
  "Color/Code/2": string;
  "Color/Code/3": string;
  "Color/Code/4": string;
  "Color/Code/5": string;
  "Color/Code/6": string;
  "Color/Code/7": string;
  "Color/Code/8": string;
  "Color/Code/9": string;
  "Color/Base/Gray/1": string;
  "Color/Neutral/Bg/colorBgFields": string;
  "Color/Brand/_gradient/Primary/colorTop": string;
  "Color/Brand/_gradient/Primary/colorBottom": string;
  "Color/Brand/_gradient/Detructive/colorTop": string;
  "Color/Brand/_gradient/Detructive/colorBottom": string;
  "Color/Brand/_gradient/Primary/colorTopHover": string;
  "Color/Brand/_gradient/Primary/colorBottomHover": string;
  "Color/Brand/_gradient/Detructive/colorTopHover": string;
  "Color/Brand/_gradient/Detructive/colorBottomHover": string;
};
declare const themeShadows: {
  "boxShadow-01": string;
  "boxShadow-02": string;
  "boxShadow-03": string;
  "boxShadow-04": string;
  "focusStyle-Light": string;
  "focusStyle-Dark": string;
  "contentShadow-Light": string;
  toggleShadow: string;
  "toggleShadow-Disabled": string;
};

declare const lightTheme: ThemeDefinition;
declare const darkTheme: ThemeDefinition;

export {
  AArrowDownIcon,
  AArrowUpIcon,
  ALargeSmallIcon,
  AccessibilityIcon,
  Accordion,
  type AccordionProps,
  ActivityIcon,
  AirVentIcon,
  AirplayIcon,
  AlarmClockCheckIcon,
  AlarmClockIcon,
  AlarmClockMinusIcon,
  AlarmClockOffIcon,
  AlarmClockPlusIcon,
  AlarmSmokeIcon,
  AlbumIcon,
  type AlertDesignMode,
  AlignCenterHorizontalIcon,
  AlignCenterIcon,
  AlignCenterVerticalIcon,
  AlignEndHorizontalIcon,
  AlignEndVerticalIcon,
  AlignHorizontalDistributeCenterIcon,
  AlignHorizontalDistributeEndIcon,
  AlignHorizontalDistributeStartIcon,
  AlignHorizontalJustifyCenterIcon,
  AlignHorizontalJustifyEndIcon,
  AlignHorizontalJustifyStartIcon,
  AlignHorizontalSpaceAroundIcon,
  AlignHorizontalSpaceBetweenIcon,
  AlignJustifyIcon,
  AlignLeftIcon,
  AlignRightIcon,
  AlignStartHorizontalIcon,
  AlignStartVerticalIcon,
  AlignVerticalDistributeCenterIcon,
  AlignVerticalDistributeEndIcon,
  AlignVerticalDistributeStartIcon,
  AlignVerticalJustifyCenterIcon,
  AlignVerticalJustifyEndIcon,
  AlignVerticalJustifyStartIcon,
  AlignVerticalSpaceAroundIcon,
  AlignVerticalSpaceBetweenIcon,
  AmazonEksSiteIcon,
  AmbulanceIcon,
  AmpersandIcon,
  AmpersandsIcon,
  AnchorIcon,
  AngryIcon,
  AnnoyedIcon,
  AntennaIcon,
  AnvilIcon,
  ApertureIcon,
  AppWindowIcon,
  AppWindowMacIcon,
  AppleIcon,
  ApplicationLogo,
  type ApplicationLogoProps,
  ArchiveIcon,
  ArchiveRestoreIcon,
  ArchiveXIcon,
  AreaChartIcon,
  ArmchairIcon,
  ArrowBigDownDashIcon,
  ArrowBigDownIcon,
  ArrowBigLeftDashIcon,
  ArrowBigLeftIcon,
  ArrowBigRightDashIcon,
  ArrowBigRightIcon,
  ArrowBigUpDashIcon,
  ArrowBigUpIcon,
  ArrowDown01Icon,
  ArrowDown10Icon,
  ArrowDownAZIcon,
  ArrowDownFromLineIcon,
  ArrowDownIcon,
  ArrowDownLeftIcon,
  ArrowDownNarrowWideIcon,
  ArrowDownRightIcon,
  ArrowDownToDotIcon,
  ArrowDownToLineIcon,
  ArrowDownUpIcon,
  ArrowDownWideNarrowIcon,
  ArrowDownZAIcon,
  ArrowLeftFromLineIcon,
  ArrowLeftIcon,
  ArrowLeftRightIcon,
  ArrowLeftToLineIcon,
  ArrowRightFromLineIcon,
  ArrowRightIcon,
  ArrowRightLeftIcon,
  ArrowRightToLineIcon,
  ArrowUp01Icon,
  ArrowUp10Icon,
  ArrowUpAZIcon,
  ArrowUpDownIcon,
  ArrowUpFromDotIcon,
  ArrowUpFromLineIcon,
  ArrowUpIcon,
  ArrowUpLeftIcon,
  ArrowUpNarrowWideIcon,
  ArrowUpRightIcon,
  ArrowUpToLineIcon,
  ArrowUpWideNarrowIcon,
  ArrowUpZAIcon,
  ArrowsUpFromLineIcon,
  AsteriskIcon,
  AtSignIcon,
  AtomIcon,
  AudioLinesIcon,
  AudioWaveformIcon,
  Autocomplete,
  type AutocompleteProps,
  AwardIcon,
  AxeIcon,
  Axis3dIcon,
  AzureAksSiteIcon,
  BabyIcon,
  BackLink,
  type BackLinkProps,
  BackpackIcon,
  Badge,
  BadgeAlertIcon,
  BadgeCentIcon,
  BadgeCheckIcon,
  type BadgeColors,
  type BadgeConstructProps,
  BadgeDollarSignIcon,
  type BadgeElementThemeProps,
  BadgeEuroIcon,
  BadgeHelpIcon,
  BadgeIcon,
  type BadgeIcons,
  BadgeIndianRupeeIcon,
  BadgeInfoIcon,
  BadgeJapaneseYenIcon,
  type BadgeMainProps,
  BadgeMinusIcon,
  BadgePercentIcon,
  BadgePlusIcon,
  BadgePoundSterlingIcon,
  type BadgeProps,
  BadgeRussianRubleIcon,
  type BadgeSizes,
  type BadgeStyles,
  BadgeSwissFrancIcon,
  type BadgeThemeProps,
  BadgeXIcon,
  BaggageClaimIcon,
  BalancerIcon,
  BanIcon,
  BananaIcon,
  BanknoteIcon,
  BarChart2Icon,
  BarChart3Icon,
  BarChart4Icon,
  BarChartBigIcon,
  BarChartHorizontalBigIcon,
  BarChartHorizontalIcon,
  BarChartIcon,
  BarcodeIcon,
  BareMetalLinuxSiteIcon,
  BaselineIcon,
  BatchJobsIcon,
  BathIcon,
  BatteryChargingIcon,
  BatteryFullIcon,
  BatteryIcon,
  BatteryLowIcon,
  BatteryMediumIcon,
  BatteryWarningIcon,
  BeakerIcon,
  BeanIcon,
  BeanOffIcon,
  BedDoubleIcon,
  BedIcon,
  BedSingleIcon,
  BeefIcon,
  BeerIcon,
  BeerOffIcon,
  BellArrowIcon,
  BellDotIcon,
  BellElectricIcon,
  BellIcon,
  BellMinusIcon,
  BellOffIcon,
  BellPlusIcon,
  BellRingIcon,
  BetweenHorizontalEndIcon,
  BetweenHorizontalStartIcon,
  BetweenVerticalEndIcon,
  BetweenVerticalStartIcon,
  BikeIcon,
  BinaryIcon,
  BiohazardIcon,
  BirdIcon,
  BitcoinIcon,
  BlendIcon,
  BlindsIcon,
  BlocksIcon,
  BluetoothConnectedIcon,
  BluetoothIcon,
  BluetoothOffIcon,
  BluetoothSearchingIcon,
  BoldIcon,
  BoltIcon,
  BombIcon,
  BoneIcon,
  BookAIcon,
  BookAudioIcon,
  BookCheckIcon,
  BookCopyIcon,
  BookDashedIcon,
  BookDownIcon,
  BookHeadphonesIcon,
  BookHeartIcon,
  BookIcon,
  BookImageIcon,
  BookKeyIcon,
  BookLockIcon,
  BookMarkedIcon,
  BookMinusIcon,
  BookOpenCheckIcon,
  BookOpenIcon,
  BookOpenTextIcon,
  BookPlusIcon,
  BookTextIcon,
  BookTypeIcon,
  BookUp2Icon,
  BookUpIcon,
  BookUserIcon,
  BookXIcon,
  BookmarkCheckIcon,
  BookmarkIcon,
  BookmarkMinusIcon,
  BookmarkPlusIcon,
  BookmarkXIcon,
  BoomBoxIcon,
  type BorderRadiusThemeProps,
  BotIcon,
  BotMessageSquareIcon,
  Box,
  BoxIcon,
  BoxOutlineIcon,
  type BoxProps,
  BoxSelectIcon,
  BoxedIcon,
  BoxesIcon,
  BracesIcon,
  BracketsIcon,
  BrainCircuitIcon,
  BrainCogIcon,
  BrainIcon,
  Breadcrumbs,
  type BreadcrumbsContainerProps,
  type BreadcrumbsOption,
  type BreadcrumbsOptionProps,
  type BreadcrumbsProps,
  BrickWallIcon,
  BriefcaseBusinessIcon,
  BriefcaseIcon,
  BriefcaseMedicalIcon,
  BringToFrontIcon,
  BrushIcon,
  BucketCopyIcon,
  BucketIcon,
  BucketQuotaIcon,
  BugIcon,
  BugOffIcon,
  BugPlayIcon,
  Building2Icon,
  BuildingIcon,
  BusFrontIcon,
  BusIcon,
  Button,
  ButtonGroup,
  type ButtonGroupProps,
  type ButtonProps,
  type ButtonStatesProps,
  type ButtonStyleProps,
  type ButtonThemeProps,
  type ButtonVariant,
  CableCarIcon,
  CableIcon,
  CakeIcon,
  CakeSliceIcon,
  CalculatorIcon,
  CalendarCheck2Icon,
  CalendarCheckIcon,
  CalendarClockIcon,
  CalendarDaysIcon,
  CalendarFoldIcon,
  CalendarHeartIcon,
  CalendarIcon,
  CalendarMinus2Icon,
  CalendarMinusIcon,
  CalendarOffIcon,
  CalendarPlus2Icon,
  CalendarPlusIcon,
  CalendarRangeIcon,
  CalendarSearchIcon,
  CalendarX2Icon,
  CalendarXIcon,
  CameraIcon,
  CameraOffIcon,
  CandlestickChartIcon,
  CandyCaneIcon,
  CandyIcon,
  CandyOffIcon,
  CannabisIcon,
  CaptionsIcon,
  CaptionsOffIcon,
  CarFrontIcon,
  CarIcon,
  CarTaxiFrontIcon,
  CaravanIcon,
  CaretFilledIcon,
  CaretIcon,
  CaseLowerIcon,
  CaseSensitiveIcon,
  CaseUpperIcon,
  CassetteTapeIcon,
  CastIcon,
  CastleIcon,
  CatIcon,
  CctvIcon,
  CheckCheckIcon,
  CheckIcon,
  Checkbox,
  ChefHatIcon,
  CherryIcon,
  ChevronDownIcon,
  ChevronFirstIcon,
  ChevronLastIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpIcon,
  ChevronsDownIcon,
  ChevronsDownUpIcon,
  ChevronsLeftIcon,
  ChevronsLeftRightIcon,
  ChevronsRightIcon,
  ChevronsRightLeftIcon,
  ChevronsUpDownIcon,
  ChevronsUpIcon,
  ChromeIcon,
  ChurchIcon,
  CigaretteIcon,
  CigaretteOffIcon,
  CircleAlertIcon,
  CircleArrowDownIcon,
  CircleArrowLeftIcon,
  CircleArrowOutDownLeftIcon,
  CircleArrowOutDownRightIcon,
  CircleArrowOutUpLeftIcon,
  CircleArrowOutUpRightIcon,
  CircleArrowRightIcon,
  CircleArrowUpIcon,
  CircleCheckBigIcon,
  CircleCheckIcon,
  CircleChevronDownIcon,
  CircleChevronLeftIcon,
  CircleChevronRightIcon,
  CircleChevronUpIcon,
  CircleDashedIcon,
  CircleDivideIcon,
  CircleDollarSignIcon,
  CircleDotDashedIcon,
  CircleDotIcon,
  CircleEllipsisIcon,
  CircleEqualIcon,
  CircleFadingPlusIcon,
  CircleFillIcon,
  CircleGaugeIcon,
  CircleHelpIcon,
  CircleIcon,
  CircleMinusIcon,
  CircleOffIcon,
  CircleParkingIcon,
  CircleParkingOffIcon,
  CirclePauseIcon,
  CirclePercentIcon,
  CirclePlayIcon,
  CirclePlusIcon,
  CirclePowerIcon,
  CircleSlash2Icon,
  CircleSlashIcon,
  CircleStopIcon,
  CircleUserIcon,
  CircleUserRoundIcon,
  CircleXIcon,
  CircuitBoardIcon,
  CitrusIcon,
  ClapperboardIcon,
  ClipboardCheckIcon,
  ClipboardCopyIcon,
  ClipboardIcon,
  ClipboardListIcon,
  ClipboardMinusIcon,
  ClipboardPasteIcon,
  ClipboardPenIcon,
  ClipboardPenLineIcon,
  ClipboardPlusIcon,
  ClipboardTypeIcon,
  ClipboardXIcon,
  Clock10Icon,
  Clock11Icon,
  Clock12Icon,
  Clock1Icon,
  Clock2Icon,
  Clock3Icon,
  Clock4Icon,
  Clock5Icon,
  Clock6Icon,
  Clock7Icon,
  Clock8Icon,
  Clock9Icon,
  ClockIcon,
  CloudCogIcon,
  CloudDownloadIcon,
  CloudDrizzleIcon,
  CloudFogIcon,
  CloudHailIcon,
  CloudIcon,
  CloudLightningIcon,
  CloudMoonIcon,
  CloudMoonRainIcon,
  CloudOffIcon,
  CloudRainIcon,
  CloudRainWindIcon,
  CloudSnowIcon,
  CloudSunIcon,
  CloudSunRainIcon,
  CloudUploadIcon,
  CloudyIcon,
  CloverIcon,
  ClubIcon,
  ClusterHealthIcon,
  ClusterIcon,
  ClusterIngressIcon,
  ClusterNodeIcon,
  ClusterReplicationIcon,
  ClustersIcon,
  CodeMirrorWrapper as CodeEditor,
  type CodeEditorProps,
  CodeIcon,
  CodeSnippet,
  CodeXmlIcon,
  CodepenIcon,
  CodesandboxIcon,
  CoffeeIcon,
  CogIcon,
  CoinsIcon,
  CollapseIcon,
  type ColorThemeProps,
  type ColumnSelectorConstructProps,
  type ColumnSelectorProps,
  Columns2Icon,
  Columns3Icon,
  Columns4Icon,
  CombineIcon,
  CommandIcon,
  CompassIcon,
  ComponentIcon,
  ComputerIcon,
  ConciergeBellIcon,
  type ConditionalProps,
  ConeIcon,
  type ConstructExpandOptionsProps,
  type ConstructProps,
  ConstructionIcon,
  ContactIcon,
  ContactRoundIcon,
  ContainerIcon,
  ContainerImagesIcon,
  ContrastIcon,
  CookieIcon,
  CookingPotIcon,
  CopyCheckIcon,
  CopyIcon,
  CopyMinusIcon,
  CopyPlusIcon,
  CopySlashIcon,
  CopyXIcon,
  CopyleftIcon,
  CopyrightIcon,
  CornerDownLeftIcon,
  CornerDownRightIcon,
  CornerLeftDownIcon,
  CornerLeftUpIcon,
  CornerRightDownIcon,
  CornerRightUpIcon,
  CornerUpLeftIcon,
  CornerUpRightIcon,
  CpuIcon,
  CreativeCommonsIcon,
  CreditCardIcon,
  CroissantIcon,
  CropIcon,
  CrossIcon,
  CrosshairIcon,
  CrownIcon,
  CuboidIcon,
  CupSodaIcon,
  CurrencyIcon,
  CylinderIcon,
  DataIcon,
  DataTable,
  type DataTableProps,
  DatabaseApiIcon,
  DatabaseBackupIcon,
  DatabaseIcon,
  DatabaseZapIcon,
  type DateSelectorProps,
  type DateTimeConstruct,
  DateTimeInput,
  type DateTimeInputMain,
  type DateTimeInputProps,
  type DateTimeMode,
  DateTimeSelector,
  type DateTimeSelectorMain,
  type DateTimeSelectorProps,
  DeleteIcon,
  DessertIcon,
  DiameterIcon,
  DiamondIcon,
  DiamondPercentIcon,
  Dice1Icon,
  Dice2Icon,
  Dice3Icon,
  Dice4Icon,
  Dice5Icon,
  Dice6Icon,
  DicesIcon,
  DiffIcon,
  Disc2Icon,
  Disc3Icon,
  DiscAlbumIcon,
  DiscIcon,
  DivideIcon,
  DnaIcon,
  DnaOffIcon,
  DockIcon,
  DogIcon,
  DollarSignIcon,
  DonutIcon,
  DoorClosedIcon,
  DoorOpenIcon,
  DotIcon,
  DownloadIcon,
  DraftingCompassIcon,
  DramaIcon,
  DribbbleIcon,
  DrillIcon,
  type DropdownMainProps,
  DropdownSelector,
  type DropdownSelectorProps,
  DropletIcon,
  DropletsIcon,
  DrumIcon,
  DrumstickIcon,
  DumbbellIcon,
  EarIcon,
  EarOffIcon,
  EarthIcon,
  EarthLockIcon,
  EclipseIcon,
  EggFriedIcon,
  EggIcon,
  EggOffIcon,
  EllipsisIcon,
  EllipsisVerticalIcon,
  EqualIcon,
  EqualNotIcon,
  EraserIcon,
  EuroIcon,
  type ExpandDropBaseProps,
  type ExpandDropdownProps,
  ExpandIcon,
  ExpandMenu,
  ExpandMenuDescription,
  type ExpandMenuDescriptionProps,
  ExpandMenuDivider,
  ExpandMenuOption,
  type ExpandMenuOptionProps,
  type ExpandMenuProps,
  ExpandOptionsButton,
  type ExpandOptionsButtonProps,
  ExternalLinkIcon,
  EyeIcon,
  EyeOffIcon,
  FacebookIcon,
  FactoryIcon,
  FanIcon,
  FastForwardIcon,
  FeatherIcon,
  FenceIcon,
  FerrisWheelIcon,
  FigmaIcon,
  FileArchiveIcon,
  FileAudio2Icon,
  FileAudioIcon,
  FileAxis3dIcon,
  FileBadge2Icon,
  FileBadgeIcon,
  FileBarChart2Icon,
  FileBarChartIcon,
  FileBoxIcon,
  FileCheck2Icon,
  FileCheckIcon,
  FileClockIcon,
  FileCode2Icon,
  FileCodeIcon,
  FileCogIcon,
  FileDiffIcon,
  FileDigitIcon,
  FileDownIcon,
  FileHeartIcon,
  FileIcon,
  FileImageIcon,
  FileInputIcon,
  FileJson2Icon,
  FileJsonIcon,
  FileKey2Icon,
  FileKeyIcon,
  FileLineChartIcon,
  FileLock2Icon,
  FileLockIcon,
  FileMinus2Icon,
  FileMinusIcon,
  FileMusicIcon,
  FileOutputIcon,
  FilePenIcon,
  FilePenLineIcon,
  FilePieChartIcon,
  FilePlus2Icon,
  FilePlusIcon,
  FileQuestionIcon,
  FileScanIcon,
  FileSearch2Icon,
  FileSearchIcon,
  FileSelector,
  type FileSelectorConstructorProps,
  type FileSelectorProps,
  FileSlidersIcon,
  FileSpreadsheetIcon,
  FileStackIcon,
  FileSymlinkIcon,
  FileTerminalIcon,
  FileTextIcon,
  FileType2Icon,
  FileTypeIcon,
  FileUpIcon,
  FileVideo2Icon,
  FileVideoIcon,
  FileVolume2Icon,
  FileVolumeIcon,
  FileWarningIcon,
  FileX2Icon,
  FileXIcon,
  FilesIcon,
  FilmIcon,
  FilterIcon,
  FilterXIcon,
  FingerprintIcon,
  FireExtinguisherIcon,
  FishIcon,
  FishSymbolIcon,
  FlagIcon,
  FlagOffIcon,
  FlagTriangleLeftIcon,
  FlagTriangleRightIcon,
  FlameIcon,
  FlameKindlingIcon,
  FlashlightIcon,
  FlashlightOffIcon,
  FlaskConicalIcon,
  FlaskConicalOffIcon,
  FlaskRoundIcon,
  FlipHorizontal2Icon,
  FlipHorizontalIcon,
  FlipVertical2Icon,
  FlipVerticalIcon,
  Flower2Icon,
  FlowerIcon,
  FocusIcon,
  FoldHorizontalIcon,
  FoldVerticalIcon,
  FolderArchiveIcon,
  FolderCheckIcon,
  FolderClockIcon,
  FolderClosedIcon,
  FolderCogIcon,
  FolderDotIcon,
  FolderDownIcon,
  FolderGit2Icon,
  FolderGitIcon,
  FolderHeartIcon,
  FolderIcon,
  FolderInputIcon,
  FolderKanbanIcon,
  FolderKey2Icon,
  FolderKeyIcon,
  FolderLockIcon,
  FolderMinusIcon,
  FolderOpenDotIcon,
  FolderOpenIcon,
  FolderOutputIcon,
  FolderPenIcon,
  FolderPlusIcon,
  FolderRootIcon,
  FolderSearch2Icon,
  FolderSearchIcon,
  FolderSymlinkIcon,
  FolderSyncIcon,
  FolderTreeIcon,
  FolderUpIcon,
  FolderXIcon,
  FoldersIcon,
  FootprintsIcon,
  ForkliftIcon,
  FormActionsTray,
  type FormActionsTrayProps,
  FormLayout,
  type FormLayoutProps,
  ForwardIcon,
  FrameIcon,
  FramerIcon,
  FrownIcon,
  FuelIcon,
  FullscreenIcon,
  GalleryHorizontalEndIcon,
  GalleryHorizontalIcon,
  GalleryThumbnailsIcon,
  GalleryVerticalEndIcon,
  GalleryVerticalIcon,
  Gamepad2Icon,
  GamepadIcon,
  GanttChartIcon,
  GaugeIcon,
  GavelIcon,
  GemIcon,
  GhostIcon,
  GiftIcon,
  GitBranchIcon,
  GitBranchPlusIcon,
  GitCommitHorizontalIcon,
  GitCommitVerticalIcon,
  GitCompareArrowsIcon,
  GitCompareIcon,
  GitForkIcon,
  GitGraphIcon,
  GitMergeIcon,
  GitPullRequestArrowIcon,
  GitPullRequestClosedIcon,
  GitPullRequestCreateArrowIcon,
  GitPullRequestCreateIcon,
  GitPullRequestDraftIcon,
  GitPullRequestIcon,
  GithubIcon,
  GitlabIcon,
  GlassWaterIcon,
  GlassesIcon,
  GlobalStyles,
  GlobeIcon,
  GlobeLockIcon,
  GoalIcon,
  GoogleGkeSiteIcon,
  GrabIcon,
  GraduationCapIcon,
  GrapeIcon,
  Grid,
  Grid2x2Icon,
  Grid3x3Icon,
  type GridProps,
  GripHorizontalIcon,
  GripIcon,
  GripVerticalIcon,
  GroupIcon,
  GuitarIcon,
  HamIcon,
  HammerIcon,
  HandCoinsIcon,
  HandHeartIcon,
  HandHelpingIcon,
  HandIcon,
  HandMetalIcon,
  HandPlatterIcon,
  HandshakeIcon,
  HardDriveDownloadIcon,
  HardDriveIcon,
  HardDriveSearchIcon,
  HardDriveUploadIcon,
  HardHatIcon,
  HashIcon,
  HazeIcon,
  HdmiPortIcon,
  Heading1Icon,
  Heading2Icon,
  Heading3Icon,
  Heading4Icon,
  Heading5Icon,
  Heading6Icon,
  HeadingIcon,
  HeadphonesIcon,
  HeadsetIcon,
  HeartCrackIcon,
  HeartHandshakeIcon,
  HeartIcon,
  HeartOffIcon,
  HeartPulseIcon,
  HeaterIcon,
  HelpBox,
  type HelpBoxProps,
  HexagonIcon,
  HighlighterIcon,
  HistoryIcon,
  HomeIcon,
  HopIcon,
  HopOffIcon,
  HospitalIcon,
  HotelIcon,
  HourglassIcon,
  type IActionButton,
  type IBoxedIconProps,
  type IBytesCalc,
  type IColumns,
  type IInfiniteScrollConfig,
  type ISortConfig,
  type ITableSortInfo,
  IceCreamBowlIcon,
  IceCreamConeIcon,
  type IconBase,
  IconButton,
  type IconButtonProps,
  ImageDownIcon,
  ImageIcon,
  ImageMinusIcon,
  ImageOffIcon,
  ImagePlusIcon,
  ImageUpIcon,
  ImagesIcon,
  ImportIcon,
  InboxIcon,
  IndentDecreaseIcon,
  IndentIncreaseIcon,
  IndianRupeeIcon,
  InfinityIcon,
  InfoIcon,
  Inputdiv as InputBox,
  type InputBoxOrientation,
  type InputBoxProps,
  type InputBoxSize,
  type InputBoxState,
  Index$2 as InputLabel,
  type InputLabelOrientation,
  type InputLabelProps,
  type InputLabelSizeMode,
  InspectionPanelIcon,
  InstagramIcon,
  ItalicIcon,
  type ItemActions,
  IterationCCWIcon,
  IterationCWIcon,
  JapaneseYenIcon,
  JoystickIcon,
  KanbanIcon,
  KeyIcon,
  KeyRoundIcon,
  KeySquareIcon,
  KeyboardIcon,
  KeyboardMusicIcon,
  KubernetesSiteIcon,
  LDAPIcon,
  LambdaIcon,
  LampCeilingIcon,
  LampDeskIcon,
  LampFloorIcon,
  LampIcon,
  LampWallDownIcon,
  LampWallUpIcon,
  LandPlotIcon,
  LandmarkIcon,
  LanguagesIcon,
  LaptopIcon,
  LaptopMinimalIcon,
  LassoIcon,
  LassoSelectIcon,
  LaughIcon,
  Layers2Icon,
  Layers3Icon,
  LayersIcon,
  LayoutDashboardIcon,
  LayoutGridIcon,
  LayoutListIcon,
  LayoutPanelLeftIcon,
  LayoutPanelTopIcon,
  LayoutTemplateIcon,
  LeafIcon,
  LeafyGreenIcon,
  LibraryBigIcon,
  LibraryIcon,
  LifeBuoyIcon,
  LigatureIcon,
  LightbulbIcon,
  LightbulbOffIcon,
  LineChartIcon,
  Link,
  Link2Icon,
  Link2OffIcon,
  LinkButton,
  type LinkButtonProps,
  type LinkButtonStyle,
  type LinkButtonThemeVariant,
  type LinkButtonVariant,
  LinkIcon,
  type LinkProps,
  LinkedinIcon,
  ListChecksIcon,
  ListCollapseIcon,
  ListEndIcon,
  ListFilterIcon,
  ListIcon,
  ListMinusIcon,
  ListMusicIcon,
  ListOrderedIcon,
  ListPlusIcon,
  ListRestartIcon,
  ListStartIcon,
  ListTodoIcon,
  ListTreeIcon,
  ListVideoIcon,
  ListXIcon,
  Loader,
  LoaderCircleIcon,
  LoaderIcon,
  LocateFixedIcon,
  LocateIcon,
  LocateOffIcon,
  LockIcon,
  LockKeyholeIcon,
  LockKeyholeOpenIcon,
  LockOpenIcon,
  LogInIcon,
  LogOutIcon,
  LoginWrapper,
  LollipopIcon,
  LuggageIcon,
  Index$1 as MDSCacheProvider,
  MagnetIcon,
  MailCheckIcon,
  MailIcon,
  MailMinusIcon,
  MailOpenIcon,
  MailPlusIcon,
  MailQuestionIcon,
  MailSearchIcon,
  MailWarningIcon,
  MailXIcon,
  MailboxIcon,
  MailsIcon,
  MapIcon,
  MapPinIcon,
  MapPinOffIcon,
  MapPinnedIcon,
  MartiniIcon,
  Maximize2Icon,
  MaximizeIcon,
  MedalIcon,
  MegaphoneIcon,
  MegaphoneOffIcon,
  MehIcon,
  MemoryStickIcon,
  MenuIcon,
  MergeIcon,
  MessageCircleCodeIcon,
  MessageCircleDashedIcon,
  MessageCircleHeartIcon,
  MessageCircleIcon,
  MessageCircleMoreIcon,
  MessageCircleOffIcon,
  MessageCirclePlusIcon,
  MessageCircleQuestionIcon,
  MessageCircleReplyIcon,
  MessageCircleWarningIcon,
  MessageCircleXIcon,
  MessageSquareCodeIcon,
  MessageSquareDashedIcon,
  MessageSquareDiffIcon,
  MessageSquareDotIcon,
  MessageSquareHeartIcon,
  MessageSquareIcon,
  MessageSquareMoreIcon,
  MessageSquareOffIcon,
  MessageSquarePlusIcon,
  MessageSquareQuoteIcon,
  MessageSquareReplyIcon,
  MessageSquareShareIcon,
  MessageSquareTextIcon,
  MessageSquareWarningIcon,
  MessageSquareXIcon,
  MessagesSquareIcon,
  MicIcon,
  MicOffIcon,
  MicVocalIcon,
  MicroscopeIcon,
  MicrowaveIcon,
  MilestoneIcon,
  MilkIcon,
  MilkOffIcon,
  MinIOIcon,
  Minimize2Icon,
  MinimizeIcon,
  MinusIcon,
  ModalBox,
  type ModalBoxProps,
  MonitorCheckIcon,
  MonitorDotIcon,
  MonitorDownIcon,
  MonitorIcon,
  MonitorOffIcon,
  MonitorPauseIcon,
  MonitorPlayIcon,
  MonitorSmartphoneIcon,
  MonitorSpeakerIcon,
  MonitorStopIcon,
  MonitorUpIcon,
  MonitorXIcon,
  MoonIcon,
  MoonStarIcon,
  MountainIcon,
  MountainSnowIcon,
  MouseIcon,
  MousePointer2Icon,
  MousePointerClickIcon,
  MousePointerIcon,
  Move3dIcon,
  MoveDiagonal2Icon,
  MoveDiagonalIcon,
  MoveDownIcon,
  MoveDownLeftIcon,
  MoveDownRightIcon,
  MoveHorizontalIcon,
  MoveIcon,
  MoveLeftIcon,
  MoveRightIcon,
  MoveUpIcon,
  MoveUpLeftIcon,
  MoveUpRightIcon,
  MoveVerticalIcon,
  Music2Icon,
  Music3Icon,
  Music4Icon,
  MusicIcon,
  Navigation2Icon,
  Navigation2OffIcon,
  NavigationIcon,
  NavigationOffIcon,
  NetworkIcon,
  NewspaperIcon,
  NfcIcon,
  NotebookIcon,
  NotebookPenIcon,
  NotebookTabsIcon,
  NotebookTextIcon,
  NotepadTextDashedIcon,
  NotepadTextIcon,
  type Notification,
  Index as NotificationAlert,
  type NotificationAlertBase,
  type NotificationAlertConstruct,
  type NotificationAlertProps,
  type NotificationAlertPrp,
  type NotificationAlertThemeProps,
  NotificationCount,
  type NotificationDuration,
  type NotificationEmphasis,
  type NotificationOptions,
  type NotificationPosition,
  type NotificationVariant,
  Notifications,
  type NotificationsProps,
  NutIcon,
  NutOffIcon,
  OctagonAlertIcon,
  OctagonIcon,
  OctagonPauseIcon,
  OctagonXIcon,
  OidcIcon,
  OptionIcon,
  OrbitIcon,
  Overlay,
  type OverlayProps,
  type OverrideTheme,
  Package2Icon,
  PackageCheckIcon,
  PackageIcon,
  PackageMinusIcon,
  PackageOpenIcon,
  PackagePlusIcon,
  PackageSearchIcon,
  PackageXIcon,
  type PaddingThemeProps,
  PageHeader,
  type PageHeaderConstruct,
  type PageHeaderMainProps,
  type PageHeaderProps,
  PageLayout,
  type PageLayoutProps,
  PaintBucketIcon,
  PaintRollerIcon,
  Paintbrush2Icon,
  PaintbrushIcon,
  PaletteIcon,
  PanelBottomCloseIcon,
  PanelBottomDashedIcon,
  PanelBottomIcon,
  PanelBottomOpenIcon,
  PanelLeftCloseIcon,
  PanelLeftDashedIcon,
  PanelLeftIcon,
  PanelLeftOpenIcon,
  PanelRightCloseIcon,
  PanelRightDashedIcon,
  PanelRightIcon,
  PanelRightOpenIcon,
  PanelTopCloseIcon,
  PanelTopDashedIcon,
  PanelTopIcon,
  PanelTopOpenIcon,
  PanelsLeftBottomIcon,
  PanelsRightBottomIcon,
  PanelsTopLeftIcon,
  PaperclipIcon,
  ParenthesesIcon,
  ParkingMeterIcon,
  PartyPopperIcon,
  PasscodeLockIcon,
  PauseIcon,
  PawPrintIcon,
  PcCaseIcon,
  PenIcon,
  PenLineIcon,
  PenToolIcon,
  PencilIcon,
  PencilLineIcon,
  PencilRulerIcon,
  PentagonIcon,
  PercentIcon,
  PersonStandingIcon,
  PhoneCallIcon,
  PhoneForwardedIcon,
  PhoneIcon,
  PhoneIncomingIcon,
  PhoneMissedIcon,
  PhoneOffIcon,
  PhoneOutgoingIcon,
  PiIcon,
  PianoIcon,
  PickaxeIcon,
  PictureInPicture2Icon,
  PictureInPictureIcon,
  PieChartIcon,
  PieUsageIcon,
  PiggyBankIcon,
  PilcrowIcon,
  PillIcon,
  PinIcon,
  PinOffIcon,
  PipetteIcon,
  PizzaIcon,
  PlaneIcon,
  PlaneLandingIcon,
  PlaneTakeoffIcon,
  PlayIcon,
  PlotSeriesIcon,
  Plug2Icon,
  PlugIcon,
  PlugZap2Icon,
  PlugZapIcon,
  PlusIcon,
  PocketIcon,
  PocketKnifeIcon,
  PodcastIcon,
  PointerIcon,
  PointerOffIcon,
  PopcornIcon,
  PopsicleIcon,
  PoundSterlingIcon,
  PowerIcon,
  PowerOffIcon,
  type PredefinedActionTypes,
  PresentationIcon,
  PrinterIcon,
  ProgressBar,
  type ProgressBarProps,
  type ProgressState,
  ProjectorIcon,
  ProportionsIcon,
  PuzzleIcon,
  PyramidIcon,
  QrCodeIcon,
  QuoteIcon,
  RabbitIcon,
  RadarIcon,
  RadiationIcon,
  RadicalIcon,
  RadioGroup,
  type RadioGroupProps,
  RadioIcon,
  RadioReceiverIcon,
  RadioTowerIcon,
  RadiusIcon,
  RailSymbolIcon,
  RainbowIcon,
  RatIcon,
  RatioIcon,
  ReceiptCentIcon,
  ReceiptEuroIcon,
  ReceiptIcon,
  ReceiptIndianRupeeIcon,
  ReceiptJapaneseYenIcon,
  ReceiptPoundSterlingIcon,
  ReceiptRussianRubleIcon,
  ReceiptSwissFrancIcon,
  ReceiptTextIcon,
  RectangleEllipsisIcon,
  RectangleHorizontalIcon,
  RectangleVerticalIcon,
  RecycleIcon,
  RedhatOpenshiftSiteIcon,
  Redo2Icon,
  RedoDotIcon,
  RedoIcon,
  RefreshCcwDotIcon as RefreshCCWDotIcon,
  RefreshCCWIcon,
  RefreshCwIcon as RefreshCWIcon,
  RefreshCWOffIcon,
  RefreshCwSettingsIcon,
  RefrigeratorIcon,
  RegexIcon,
  RemoveFormattingIcon,
  Repeat1Icon,
  Repeat2Icon,
  RepeatIcon,
  ReplaceAllIcon,
  ReplaceIcon,
  ReplyAllIcon,
  ReplyIcon,
  RewindIcon,
  RibbonIcon,
  RocketIcon,
  RockingChairIcon,
  RollerCoasterIcon,
  Rotate3dIcon,
  RotateCCWIcon,
  RotateCCWSquareIcon,
  RotateCWIcon,
  RotateCWSquareIcon,
  RouteIcon,
  RouteOffIcon,
  RouterIcon,
  Rows2Icon,
  Rows3Icon,
  Rows4Icon,
  RssIcon,
  RulerIcon,
  RussianRubleIcon,
  SailboatIcon,
  SaladIcon,
  SandwichIcon,
  SatelliteDishIcon,
  SatelliteIcon,
  SaveAllIcon,
  SaveIcon,
  Scale3dIcon,
  ScaleIcon,
  ScalingIcon,
  ScanBarcodeIcon,
  ScanEyeIcon,
  ScanFaceIcon,
  ScanIcon,
  ScanLineIcon,
  ScanSearchIcon,
  ScanTextIcon,
  ScatterChartIcon,
  SchoolIcon,
  ScissorsIcon,
  ScissorsLineDashedIcon,
  ScreenShareIcon,
  ScreenShareOffIcon,
  ScreenTitle,
  type ScreenTitleContainerProps,
  type ScreenTitleOptions,
  type ScreenTitleProps,
  ScrollIcon,
  ScrollTextIcon,
  SearchBox,
  type SearchBoxProps,
  SearchCheckIcon,
  SearchCodeIcon,
  SearchIcon,
  SearchSlashIcon,
  SearchXIcon,
  SectionTitle,
  type SectionTitleProps,
  Select,
  type SelectOption,
  type SelectOrientation,
  type SelectProps,
  type SelectSizeMode,
  type SelectState,
  SendHorizontalIcon,
  SendIcon,
  SendToBackIcon,
  SeparatorHorizontalIcon,
  SeparatorVerticalIcon,
  ServerCogIcon,
  ServerCrashIcon,
  ServerIcon,
  ServerOffIcon,
  Settings2Icon,
  SettingsIcon,
  type ShadowsThemeProps,
  ShapesIcon,
  Share2Icon,
  ShareIcon,
  SheetIcon,
  ShellIcon,
  ShieldAlertIcon,
  ShieldBanIcon,
  ShieldCheckIcon,
  ShieldEllipsisIcon,
  ShieldHalfIcon,
  ShieldIcon,
  ShieldMinusIcon,
  ShieldOffIcon,
  ShieldPlusIcon,
  ShieldQuestionIcon,
  ShieldXIcon,
  ShipIcon,
  ShipWheelIcon,
  ShirtIcon,
  ShoppingBagIcon,
  ShoppingBasketIcon,
  ShoppingCartIcon,
  ShovelIcon,
  ShowerHeadIcon,
  ShrinkIcon,
  ShrubIcon,
  ShuffleIcon,
  SigmaIcon,
  SignalHighIcon,
  SignalIcon,
  SignalLowIcon,
  SignalMediumIcon,
  SignalZeroIcon,
  SignpostBigIcon,
  SignpostIcon,
  SirenIcon,
  SitesIcon,
  SizeChart,
  SkipBackIcon,
  SkipForwardIcon,
  SkullIcon,
  SlackIcon,
  SlashIcon,
  SliceIcon,
  Slider,
  type SliderProps,
  SlidersHorizontalIcon,
  SlidersVerticalIcon,
  SmartphoneChargingIcon,
  SmartphoneIcon,
  SmartphoneNfcIcon,
  SmileIcon,
  SmilePlusIcon,
  SnailIcon,
  SnowflakeIcon,
  SofaIcon,
  SoupIcon,
  SpaceIcon,
  SpadeIcon,
  SparkleIcon,
  SparklesIcon,
  SpeakerIcon,
  SpeechIcon,
  SpellCheck2Icon,
  SpellCheckIcon,
  SplineIcon,
  SplitIcon,
  SprayCanIcon,
  SproutIcon,
  SquareActivityIcon,
  SquareArrowDownIcon,
  SquareArrowDownLeftIcon,
  SquareArrowDownRightIcon,
  SquareArrowLeftIcon,
  SquareArrowOutDownLeftIcon,
  SquareArrowOutDownRightIcon,
  SquareArrowOutUpLeftIcon,
  SquareArrowOutUpRightIcon,
  SquareArrowRightIcon,
  SquareArrowUpIcon,
  SquareArrowUpLeftIcon,
  SquareArrowUpRightIcon,
  SquareAsteriskIcon,
  SquareBottomDashedScissorsIcon,
  SquareCheckBigIcon,
  SquareCheckIcon,
  SquareChevronDownIcon,
  SquareChevronLeftIcon,
  SquareChevronRightIcon,
  SquareChevronUpIcon,
  SquareCodeIcon,
  SquareDashedBottomCodeIcon,
  SquareDashedBottomIcon,
  SquareDashedKanbanIcon,
  SquareDashedMousePointerIcon,
  SquareDivideIcon,
  SquareDotIcon,
  SquareEqualIcon,
  SquareFunctionIcon,
  SquareGanttChartIcon,
  SquareIcon,
  SquareKanbanIcon,
  SquareLibraryIcon,
  SquareMIcon,
  SquareMenuIcon,
  SquareMinusIcon,
  SquareMousePointerIcon,
  SquareParkingIcon,
  SquareParkingOffIcon,
  SquarePenIcon,
  SquarePercentIcon,
  SquarePiIcon,
  SquarePilcrowIcon,
  SquarePlayIcon,
  SquarePlusIcon,
  SquarePowerIcon,
  SquareRadicalIcon,
  SquareScissorsIcon,
  SquareSigmaIcon,
  SquareSlashIcon,
  SquareSplitHorizontalIcon,
  SquareSplitVerticalIcon,
  SquareStackIcon,
  SquareTerminalIcon,
  SquareUserIcon,
  SquareUserRoundIcon,
  SquareXIcon,
  SquircleIcon,
  SquirrelIcon,
  StampIcon,
  StarHalfIcon,
  StarIcon,
  StarOffIcon,
  StepBackIcon,
  StepForwardIcon,
  StethoscopeIcon,
  StickerIcon,
  StickyNoteIcon,
  StoreIcon,
  StretchHorizontalIcon,
  StretchVerticalIcon,
  StrikethroughIcon,
  type StylesOverrideProps,
  SubscriptIcon,
  SummaryIcon,
  SunDimIcon,
  SunIcon,
  SunMediumIcon,
  SunMoonIcon,
  SunSnowIcon,
  SunriseIcon,
  SunsetIcon,
  SuperscriptIcon,
  SwatchBookIcon,
  SwissFrancIcon,
  SwitchCameraIcon,
  SwordIcon,
  SwordsIcon,
  SyringeIcon,
  type TabButtonProps,
  type TabItemProps,
  type TabPanelProps,
  type TabProps,
  Table,
  Table2Icon,
  TableBody,
  TableCell,
  TableCellsMergeIcon,
  TableCellsSplitIcon,
  TableColumnsSplitIcon,
  TableHead,
  TableHeadCell,
  TableIcon,
  TablePropertiesIcon,
  TableRow,
  TableRowsSplitIcon,
  TabletIcon,
  TabletSmartphoneIcon,
  TabletsIcon,
  Tabs,
  type TabsProps,
  Tag,
  type TagColors,
  TagIcon,
  type TagProps,
  type TagSizes,
  type TagThemeVariants,
  type TagVariantProps,
  TagsIcon,
  Tally1Icon,
  Tally2Icon,
  Tally3Icon,
  Tally4Icon,
  Tally5Icon,
  TangentIcon,
  TargetIcon,
  TelescopeIcon,
  TenantIcon,
  TentIcon,
  TentTreeIcon,
  TerminalIcon,
  TestTubeDiagonalIcon,
  TestTubeIcon,
  TestTubesIcon,
  TextArea,
  TextCursorIcon,
  TextCursorInputIcon,
  TextIcon,
  TextQuoteIcon,
  TextSearchIcon,
  TextSelectIcon,
  TheaterIcon,
  type ThemeDefinition,
  ThemeHandler,
  ThemedLogo,
  ThermometerIcon,
  ThermometerSnowflakeIcon,
  ThermometerSunIcon,
  ThumbsDownIcon,
  ThumbsUpIcon,
  TicketCheckIcon,
  TicketIcon,
  TicketMinusIcon,
  TicketPercentIcon,
  TicketPlusIcon,
  TicketSlashIcon,
  TicketXIcon,
  type TimeSelectorProps,
  TimerIcon,
  TimerOffIcon,
  TimerResetIcon,
  Toggle,
  ToggleLeftIcon,
  ToggleRightIcon,
  Tooltip,
  type TooltipBuild,
  type TooltipConstructProps,
  type TooltipPlacement,
  type TooltipProps,
  TornadoIcon,
  TorusIcon,
  TouchpadIcon,
  TouchpadOffIcon,
  TowerControlIcon,
  ToyBrickIcon,
  TraceIcon,
  TractorIcon,
  TrafficConeIcon,
  TrainFrontIcon,
  TrainFrontTunnelIcon,
  TrainTrackIcon,
  TramFrontIcon,
  Trash2Icon,
  TrashIcon,
  TreeDeciduousIcon,
  TreePalmIcon,
  TreePineIcon,
  TreesIcon,
  TrelloIcon,
  TrendingDownIcon,
  TrendingUpIcon,
  TriangleAlertIcon,
  TriangleIcon,
  TriangleRightIcon,
  TrophyIcon,
  TruckIcon,
  TurtleIcon,
  Tv2Icon,
  TvIcon,
  TwitchIcon,
  TwitterIcon,
  TypeIcon,
  UmbrellaIcon,
  UmbrellaOffIcon,
  UnderlineIcon,
  Undo2Icon,
  UndoDotIcon,
  UndoIcon,
  UnfoldHorizontalIcon,
  UnfoldVerticalIcon,
  UngroupIcon,
  UniversityIcon,
  Unlink2Icon,
  UnlinkIcon,
  UnplugIcon,
  UploadIcon,
  UsbIcon,
  UserCheckIcon,
  UserCogIcon,
  UserIcon,
  UserMinusIcon,
  UserPlusIcon,
  UserRoundCheckIcon,
  UserRoundCogIcon,
  UserRoundIcon,
  UserRoundMinusIcon,
  UserRoundPlusIcon,
  UserRoundSearchIcon,
  UserRoundXIcon,
  UserSearchIcon,
  UserXIcon,
  UsersIcon,
  UsersRoundIcon,
  UtensilsCrossedIcon,
  UtensilsIcon,
  UtilityPoleIcon,
  ValuePair,
  type ValuePairCommon,
  type ValuePairDirection,
  type ValuePairMain,
  type ValuePairProps,
  VariableIcon,
  VaultIcon,
  VeganIcon,
  VenetianMaskIcon,
  VibrateIcon,
  VibrateOffIcon,
  VideoIcon,
  VideoOffIcon,
  VideotapeIcon,
  ViewIcon,
  VmwareTanzuSiteIcon,
  VoicemailIcon,
  Volume1Icon,
  Volume2Icon,
  VolumeIcon,
  VolumeXIcon,
  VoteIcon,
  WalletCardsIcon,
  WalletIcon,
  WalletMinimalIcon,
  WallpaperIcon,
  WandIcon,
  WandSparklesIcon,
  WarehouseIcon,
  WarpIcon,
  WashingMachineIcon,
  WatchIcon,
  WavesIcon,
  WaypointsIcon,
  WebcamIcon,
  WebhookIcon,
  WebhookOffIcon,
  WeightIcon,
  WheatIcon,
  WheatOffIcon,
  WholeWordIcon,
  WifiIcon,
  WifiOffIcon,
  WindIcon,
  WineIcon,
  WineOffIcon,
  GenericWizard as Wizard,
  type WizardButton,
  type WizardConstruct,
  type WizardElement,
  type WizardMain,
  WizardPage,
  type WizardPageProps,
  type WizardProps,
  WorkflowIcon,
  WormIcon,
  WrapTextIcon,
  WrenchIcon,
  XIcon,
  YoutubeIcon,
  ZapIcon,
  ZapOffIcon,
  ZoomInIcon,
  ZoomOutIcon,
  actionsTypes,
  breakPoints,
  calculateBytes,
  darkModeColors,
  darkTheme,
  lightModeColors,
  lightTheme,
  overridePropsParse,
  paddingSizeVariants,
  radioVariants,
  themeShadows,
  useArrowKeys,
  useEnterKey,
  useEscapeKey,
  useMDSTheme,
  useNotification,
};
