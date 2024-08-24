// This file is part of MinIO Design System
// Copyright (c) 2022 MinIO, Inc.
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.

import { ThemeDefinitionProps } from "./global.types";
import { themeColors, themeShadows } from "./themeColors";
import { getThemeColors, paddingSizeVariants, radioVariants } from "./utils";

export const lightColors = {
  white: "#fff",
  sectionOneBG: "#fff",
  defaultFontColor: "#000",
  bulletColor: "#2781B0",
  borderColor: "#E2E2E2",
  boxBackground: "#FBFAFA",
  mainGrey: "#5B5C5C",
  disabledGrey: "#E6EBEB",
  hoverGrey: "#E6EAEB",
  pressedGrey: "#D5D7D8",
  actionDisabledGrey: "#E7EAEB",
  mainBlue: "#07193E",
  hoverBlue: "#0D2453",
  pressedBlue: "#05132F",
  mainRed: "#C51B3F",
  hoverRed: "#FCF2F4",
  lightRed: "#C83B51",
  divisorColor: "#E3E3E3",
  disabledBGGrey: "#D5D7D7",
  disabledInnerGrey: "#B4B4B4",
  logoLabel: "#000000",
  logoLabelInverse: "#fff",
  promoBlue: "#A6DFEF",
  footerDivider: "#F2F2F2",
  promoBG: "#000110",
  loaderColor: "#113053",
  headerBG: "#FFFFFF",
  headerBorder: "#E5E5E5",
  headerColor: "#000000",
  tooltipBG: "#737373",
  tooltipColor: "#FFFFFF",
  labelColor: "#07193E",
  mainGreen: "#4CCB92",
  checkBoxBorder: "#c3c3c3",
  iconButtonBG: "#F8F8F8",
  iconButtonActive: "#5B5C5C80",
  iconButtonHover: "#EFEFEF",
  iconButtonDisabled: "#E6EBEB",
  iconButtonColor: "#7C7C7C",
  backLinkColor: "#073052",
  backLinkArrow: "#081C42",
  backLinkHover: "#eaedee",
  commonLinkColor: "#969FA8",
  breadcrumbsBackground: "#FCFCFD",
  breadcrumbsBackBorder: "#EAEDEE",
  breadcrumbsText: "#969FA8",
  actionsListBorder: "#F1F1F1",
  disabledActionsColor: "#EBEBEB",
  optionTextColor: "#5E5E5E",
  modalCloseColor: "#757575",
  modalCloseHoverBG: "#EAEAEA",
  modalOverlayBG: "#00000050",
  bulletBGColor: "#F1F4F4",
  placeholder: "#858585",
  readBoxTextColor: "#696969",
  secondAction: "#005C7E",
  secondActionHover: "#1B779A",
  secondActionActive: "#07506A",
  mainOrange: "#FFBD62",
  menuBackground:
    "linear-gradient(90deg, rgba(2,49,80,1) 0%, rgba(0,39,77,1) 50%, rgba(11,34,69,1) 100%)",
  menuDropArrowColor: "#8399AB",
  menuDropArrowBackground: "#0A1C3C",
  menuSelectedOption:
    "linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(20,88,122,1) 100%)",
  menuCommonColor: "#CADAE8",
  menuColorDivider: "#0F446C",
  menuCollapseColor: "#E8E8E8",
  menuIconBG: "#06274E",
  menuIconBorder: "#052148",
  tabBorder: "#EAEAEA",
  codeEditorComment: "#6e7781",
  codeEditorEntityTag: "#116329",
  codeEditorEntity: "#8250df",
  codeEditorSublimelinterGutterMark: "#8c959f",
  codeEditorConstant: "#0550ae",
  codeEditorString: "#0a3069",
  codeEditorKeyword: "#cf222e",
  codeEditorMarkupBold: "#24292f",
  codeEditorRegexp: "#ffaa00",
  linkColor: "#2781B0",
  mutedText: "#87888d",
  disabledOnSwitchBG: "#a9d3c5",
  sliderDisabledBG: "#dbdbdb",
};

export const darkColors = {
  dark: "#181F2A",
  sectionOneBG: "#283140",
  defaultFontColor: "#C4C9D0",
  bulletColor: "#4B586A",
  borderColor: "#8E98A9",
  boxBackground: "#283140",
  mainGrey: "#A2ADC0",
  disabledGrey: "#494A4D",
  hoverGrey: "#4B586A",
  borderPressedGrey: "#707988",
  pressedGrey: "#333D4B",
  mainWhite: "#E6ECEC",
  disabledWhite: "#B5BCBD",
  hoverWhite: "#EFEDED",
  pressedWhite: "#C3CBCB",
  mainRed: "#FF3958",
  hoverRed: "#4B586A",
  divisorColor: "#E3E3E3",
  disabledBGGrey: "#616A7C",
  disabledInnerGrey: "#3A3F4A",
  logoLabel: "#A3B7D9",
  logoLabelInverse: "#fff",
  footerDivider: "#545D6A",
  footerColor: "#85B3EE",
  promoBG: "#000106",
  loaderColor: "#8E98A9",
  headerBG: "#212936",
  headerBorder: "#191E28",
  headerColor: "#E9F5F6",
  tooltipBG: "#8E98A9",
  tooltipColor: "#161C24",
  labelColor: "#A2ADC0",
  mainGreen: "#58FAB1",
  checkBoxBorder: "#8E98A9",
  iconButtonBG: "#A2ADC0",
  iconButtonActive: "#707988",
  iconButtonHover: "#4B586A",
  iconButtonDisabled: "#494A4D",
  iconButtonColor: "#283140",
  backLinkColor: "#8E98A9",
  backLinkArrow: "#A2ADC0",
  backLinkHover: "#3A3F4A",
  modalCloseColor: "#4B586A",
  modalCloseHoverBG: "#4B586A",
  modalOverlayBG: "#00010650",
  bulletBGColor: "#D5DEEF",
  disabledSwitchBG: "#494A4C",
  disabledOnSwitchBG: "#a2d7c3",
  disabledBulletBG: "#4B586B",
  placeholder: "#494A4D",
  readBoxTextColor: "#707988",
  secondAction: "#1B637E",
  secondActionHover: "#297E9D",
  secondActionActive: "#145B76",
  mainOrange: "#fCCE9D",
  menuBackground: "#242D3E",
  menuDropArrowColor: "#8E98A9",
  menuDropArrowBackground: "#1C2436",
  menuSelectedOption: "linear-gradient(90deg, rgba(0,0,0,0) 0%, #1B212C 100%)",
  menuCommonColor: "#8E98A9",
  menuColorDivider: "#323C4E",
  menuCollapseColor: "#E8E8E8",
  menuIconBG: "#161F30",
  menuIconBorder: "#151E2E",
  menuHoverSelectedBorderIcon: "#0E1119",
  menuHoverSelectedBG: "#909AAB",
  codeEditorComment: "#8b949e",
  codeEditorEntityTag: "#7ee787",
  codeEditorEntity: "#d2a8ff",
  codeEditorSublimelinterGutterMark: "#8E98A9",
  codeEditorConstant: "#79c0ff",
  codeEditorString: "#a5d6ff",
  codeEditorKeyword: "#ff7b72",
  codeEditorMarkupBold: "#c9d1d9",
  codeEditorRegexp: "#ffd582",
  linkColor: "#85B3EE",
  mutedText: "#767a80",
  disabledSliderBullet: "#939393",
};

export const lightV2 = {
  white: "#FFF",
  fontColor: "#1D2125",
  mainBackgroundColor: "#F3F4F6",
  menuSelectionColor: "#DCEAFD",
  switchBG: "#2B64E5",
  secondaryBlue: "#4082F1",
  green: "#15CBCE",
  lightGreen: "#CCFBF7",
  orange: "#FDBC2E",
  lightOrange: "#FEF1C7",
  danger: "#FE5F57",
  lightRed: "#FFE2E1",
  borderColor: "#D1D5DB",
  disabledGrey: "#E5E7EB",
  disabledGreyText: "#9CA3AF",
  disabledBlue: "#DCEAFD",
  disabledBlueText: "#64A4F6",
  disabledBlueRegular: "#C1DBFC",
  disabledSecondary: "#D1D5DB",
  disabledSecondaryText: "#9CA3AF",
  blueBorderActionButton: "#2350D2",
  redBorder: "#A5190F",
  disabledRed: "#FFE2E1",
  disabledRedText: "#F1756F",
  mutedText: "#6B7280",
  headerLabelText: "#3A3D41",
  plainIconButtonBorder: "#CBD5E1",
  plainIconButtonBG: "#F1F5F9",
  plainIconButtonColor: "#475569",
  linkColor: "#306CE8",
  modalCloseColor: "#454D59",
  modalBorderColor: "#E3E6EA",
  modalOverlayBG: "rgba(55, 59, 66, 0.50)",
  modalTitleColor: "#21242B",
  buttonDisabledBG: "#E3E6EA",
  buttonDisabledLabel: "#798797",
  defaultButtonPressed: "#CAD1D7",
  // NEW VARS NAMES
  bgColorBgShell: "#F4F6F7",
  colorTextLabel: "rgba(0,0,0,0.65)",
  colorBorderSubtle: "#CAD1D7",
  colorBgHover: "#E3E6EA",
  errorColorPrimaryText: "#FF3100",
  colorBorder: "#CFD0D2",
  colorText: "#000000E0",
  colorBgDisabled: "#E3E6EA",
  colorTextDisabled: "#00000040",
  // orphan colors? (not in themeColors)
  colorTextDestructive: "#FF3100",
  destructiveColorBorder: "#FF3100",
  neutralColorBorder: "#D6DAE1",
  buttonNeutralColorTextHover: "#000000E0",
};

export const lightTheme: ThemeDefinitionProps = {
  bgColor: themeColors["Color/Neutral/colorBgBase"].lightMode,
  fontColor: themeColors["Color/Neutral/Text/colorTextLabel"].lightMode,
  borderColor: themeColors["Color/Neutral/Border/colorBorderMinimal"].lightMode,
  bulletColor: themeColors["Color/Neutral/Text/colorTextSecondary"].lightMode,
  logoColor: themeColors["Color/Brand/_minio/Raspberry"].lightMode,
  logoLabelColor: themeColors["Color/Neutral/Text/colorTextHeading"].lightMode,
  logoLabelInverse:
    themeColors["Color/Neutral/Text/colorTextLightSolid"].lightMode,
  loaderColor: themeColors["Color/Base/Royal/10"].lightMode,
  linkColor: themeColors["Color/Brand/Primary/colorPrimaryText"].lightMode,
  secondaryLinkColor:
    themeColors["Color/Brand/Neutral/colorPrimaryText"].lightMode,
  boxBackground: themeColors["Color/Neutral/Bg/colorBgShell"].lightMode,
  mutedText: themeColors["Color/Neutral/Text/colorTextDisabled"].lightMode,
  secondaryText: themeColors["Color/Brand/Neutral/colorPrimaryText"].lightMode,
  colors: getThemeColors("lightMode"),
  borderRadius: radioVariants,
  paddingSizes: paddingSizeVariants,
  boxShadows: themeShadows,
  box: {
    border: "transparent",
    shadow: "0px 2px 2px 0px rgba(121, 135, 151, 0.15)",
    backgroundColor: themeColors["Color/Neutral/Bg/colorBgContainer"].lightMode,
  },
  signalColors: {
    main: themeColors["Color/Brand/Primary/colorPrimaryText"].lightMode,
    danger: themeColors["Color/Brand/Error/colorPrimaryText"].lightMode,
    good: themeColors["Color/Brand/Success/colorPrimaryText"].lightMode,
    info: themeColors["Color/Brand/Primary/colorPrimaryText"].lightMode,
    warning: themeColors["Color/Brand/Warning/colorPrimaryText"].lightMode,
    disabled: themeColors["Color/Neutral/Text/colorTextDisabled"].lightMode,
    dark: themeColors["Color/Neutral/Text/colorTextLabel"].lightMode,
    clear: themeColors["Color/Neutral/colorBgBase"].lightMode,
    selectBlue:
      themeColors["Color/Brand/Primary/colorPrimaryBgHover"].lightMode,
  },
  buttons: {
    primary: {
      enabled: {
        border: themeColors["Color/Brand/Primary/colorPrimaryBorder"].lightMode,
        text: themeColors["Color/Neutral/Text/colorTextLightSolid"].lightMode,
        background: `linear-gradient(180deg, ${themeColors["Color/Base/Royal/5"].lightMode} 0%, ${themeColors["Color/Base/Royal/6"].lightMode} 100%)`,
        iconColor:
          themeColors["Color/Neutral/Text/colorTextLightSolid"].lightMode,
        shadow: `0px 1px 0px 0px rgba(255, 255, 255, 0.25) inset`,
      },
      disabled: {
        border: themeColors["Color/Neutral/Bg/colorBgDisabled"].lightMode,
        text: themeColors["Color/Neutral/Text/colorTextDisabled"].lightMode,
        background: themeColors["Color/Neutral/Bg/colorBgDisabled"].lightMode,
        iconColor:
          themeColors["Color/Neutral/Text/colorTextDisabled"].lightMode,
        shadow: "none",
      },
      hover: {
        border: themeColors["Color/Brand/Primary/colorPrimaryBorder"].lightMode,
        text: themeColors["Color/Neutral/Text/colorTextLightSolid"].lightMode,
        background: `linear-gradient(180deg, ${themeColors["Color/Base/Royal/6"].lightMode} 0%, ${themeColors["Color/Base/Royal/7"].lightMode} 100%)`,
        iconColor:
          themeColors["Color/Neutral/Text/colorTextLightSolid"].lightMode,
        shadow: `0px 1px 0px 0px rgba(255, 255, 255, 0.25) inset`,
      },
      pressed: {
        border: themeColors["Color/Brand/Primary/colorPrimaryBorder"].lightMode,
        text: themeColors["Color/Neutral/Text/colorTextLightSolid"].lightMode,
        background: `linear-gradient(180deg, ${themeColors["Color/Base/Royal/6"].lightMode} 0%, ${themeColors["Color/Base/Royal/7"].lightMode} 100%)`,
        iconColor:
          themeColors["Color/Neutral/Text/colorTextLightSolid"].lightMode,
        shadow: "none",
      },
    },
    secondary: {
      enabled: {
        border: themeColors["Color/Neutral/Border/colorBorderSubtle"].lightMode,
        text: themeColors["Color/Brand/Neutral/colorPrimaryText"].lightMode,
        background: themeColors["Color/Neutral/Bg/colorBgContainer"].lightMode,
        iconColor:
          themeColors["Color/Brand/Neutral/colorPrimaryText"].lightMode,
        shadow: "none",
      },
      disabled: {
        border: themeColors["Color/Neutral/Bg/colorBgDisabled"].lightMode,
        text: themeColors["Color/Neutral/Text/colorTextDisabled"].lightMode,
        background: themeColors["Color/Neutral/Bg/colorBgDisabled"].lightMode,
        iconColor:
          themeColors["Color/Neutral/Text/colorTextDisabled"].lightMode,
        shadow: "none",
      },
      hover: {
        border:
          themeColors["Color/Brand/Neutral/colorPrimaryBgHover"].lightMode,
        text: themeColors["Color/Brand/Neutral/colorPrimaryText"].lightMode,
        background:
          themeColors["Color/Brand/Neutral/colorPrimaryBgHover"].lightMode,
        iconColor:
          themeColors["Color/Brand/Neutral/colorPrimaryText"].lightMode,
        shadow: "none",
      },
      pressed: {
        border:
          themeColors["Color/Brand/Neutral/colorPrimaryBgHover"].lightMode,
        text: themeColors["Color/Brand/Neutral/colorPrimaryText"].lightMode,
        background:
          themeColors["Color/Brand/Neutral/colorPrimaryBgHover"].lightMode,
        iconColor:
          themeColors["Color/Brand/Neutral/colorPrimaryText"].lightMode,
        shadow: "none",
      },
    },
    destructive: {
      enabled: {
        border: themeColors["Color/Brand/Error/colorPrimaryBorder"].lightMode,
        text: themeColors["Color/Neutral/Text/colorTextLightSolid"].lightMode,
        background: `linear-gradient(180deg, ${themeColors["Color/Base/Sunset/5"].lightMode} 0%, ${themeColors["Color/Base/Sunset/6"].lightMode} 100%)`,
        iconColor:
          themeColors["Color/Neutral/Text/colorTextLightSolid"].lightMode,
        shadow: `0px 1px 0px 0px rgba(255, 255, 255, 0.25) inset`,
      },
      disabled: {
        border: themeColors["Color/Neutral/Bg/colorBgDisabled"].lightMode,
        text: themeColors["Color/Neutral/Text/colorTextDisabled"].lightMode,
        background: themeColors["Color/Neutral/Bg/colorBgDisabled"].lightMode,
        iconColor:
          themeColors["Color/Neutral/Text/colorTextDisabled"].lightMode,
        shadow: "none",
      },
      hover: {
        border: themeColors["Color/Brand/Error/colorPrimaryBorder"].lightMode,
        text: themeColors["Color/Neutral/Text/colorTextLightSolid"].lightMode,
        background: `linear-gradient(180deg, ${themeColors["Color/Base/Sunset/6"].lightMode} 0%, ${themeColors["Color/Base/Sunset/7"].lightMode} 100%)`,
        iconColor:
          themeColors["Color/Neutral/Text/colorTextLightSolid"].lightMode,
        shadow: `0px 1px 0px 0px rgba(255, 255, 255, 0.25) inset`,
      },
      pressed: {
        border: themeColors["Color/Brand/Error/colorPrimaryBorder"].lightMode,
        text: themeColors["Color/Neutral/Text/colorTextLightSolid"].lightMode,
        background: `linear-gradient(180deg, ${themeColors["Color/Base/Sunset/6"].lightMode} 0%, ${themeColors["Color/Base/Sunset/7"].lightMode} 100%)`,
        iconColor:
          themeColors["Color/Neutral/Text/colorTextLightSolid"].lightMode,
        shadow: "none",
      },
    },
    "primary-lighter": {
      enabled: {
        border: themeColors["Color/Brand/Primary/colorPrimaryBg"].lightMode,
        text: themeColors["Color/Brand/Primary/colorPrimaryText"].lightMode,
        background: themeColors["Color/Brand/Primary/colorPrimaryBg"].lightMode,
        iconColor:
          themeColors["Color/Brand/Primary/colorPrimaryText"].lightMode,
        shadow: "none",
      },
      disabled: {
        border: themeColors["Color/Neutral/Bg/colorBgDisabled"].lightMode,
        text: themeColors["Color/Neutral/Text/colorTextDisabled"].lightMode,
        background: themeColors["Color/Neutral/Bg/colorBgDisabled"].lightMode,
        iconColor:
          themeColors["Color/Neutral/Text/colorTextDisabled"].lightMode,
        shadow: "none",
      },
      hover: {
        border:
          themeColors["Color/Brand/Primary/colorPrimaryBgHover"].lightMode,
        text: themeColors["Color/Brand/Primary/colorPrimaryTextHover"]
          .lightMode,
        background:
          themeColors["Color/Brand/Primary/colorPrimaryBgHover"].lightMode,
        iconColor:
          themeColors["Color/Brand/Primary/colorPrimaryTextHover"].lightMode,
        shadow: "none",
      },
      pressed: {
        border:
          themeColors["Color/Brand/Primary/colorPrimaryBgHover"].lightMode,
        text: themeColors["Color/Brand/Primary/colorPrimaryTextHover"]
          .lightMode,
        background:
          themeColors["Color/Brand/Primary/colorPrimaryBgHover"].lightMode,
        iconColor:
          themeColors["Color/Brand/Primary/colorPrimaryTextHover"].lightMode,
        shadow: "none",
      },
    },
    "secondary-lighter": {
      enabled: {
        border: themeColors["Color/Brand/Neutral/colorPrimaryBg"].lightMode,
        text: themeColors["Color/Brand/Neutral/colorPrimaryText"].lightMode,
        background: themeColors["Color/Brand/Neutral/colorPrimaryBg"].lightMode,
        iconColor:
          themeColors["Color/Brand/Neutral/colorPrimaryText"].lightMode,
        shadow: "none",
      },
      disabled: {
        border: themeColors["Color/Neutral/Bg/colorBgDisabled"].lightMode,
        text: themeColors["Color/Neutral/Text/colorTextDisabled"].lightMode,
        background: themeColors["Color/Neutral/Bg/colorBgDisabled"].lightMode,
        iconColor:
          themeColors["Color/Neutral/Text/colorTextDisabled"].lightMode,
        shadow: "none",
      },
      hover: {
        border:
          themeColors["Color/Brand/Neutral/colorPrimaryBgHover"].lightMode,
        text: themeColors["Color/Brand/Neutral/colorPrimaryTextHover"]
          .lightMode,
        background:
          themeColors["Color/Brand/Neutral/colorPrimaryBgHover"].lightMode,
        iconColor:
          themeColors["Color/Brand/Neutral/colorPrimaryTextHover"].lightMode,
        shadow: "none",
      },
      pressed: {
        border:
          themeColors["Color/Brand/Neutral/colorPrimaryBgHover"].lightMode,
        text: themeColors["Color/Brand/Neutral/colorPrimaryTextHover"]
          .lightMode,
        background:
          themeColors["Color/Brand/Neutral/colorPrimaryBgHover"].lightMode,
        iconColor:
          themeColors["Color/Brand/Neutral/colorPrimaryTextHover"].lightMode,
        shadow: "none",
      },
    },
    "destructive-lighter": {
      enabled: {
        border: themeColors["Color/Brand/Error/colorPrimaryBg"].lightMode,
        text: themeColors["Color/Brand/Error/colorPrimaryText"].lightMode,
        background: themeColors["Color/Brand/Error/colorPrimaryBg"].lightMode,
        iconColor: themeColors["Color/Brand/Error/colorPrimaryText"].lightMode,
        shadow: "none",
      },
      disabled: {
        border: themeColors["Color/Neutral/Bg/colorBgDisabled"].lightMode,
        text: themeColors["Color/Neutral/Text/colorTextDisabled"].lightMode,
        background: themeColors["Color/Neutral/Bg/colorBgDisabled"].lightMode,
        iconColor:
          themeColors["Color/Neutral/Text/colorTextDisabled"].lightMode,
        shadow: "none",
      },
      hover: {
        border: themeColors["Color/Brand/Error/colorPrimaryBgHover"].lightMode,
        text: themeColors["Color/Brand/Error/colorPrimaryTextHover"].lightMode,
        background:
          themeColors["Color/Brand/Error/colorPrimaryBgHover"].lightMode,
        iconColor:
          themeColors["Color/Brand/Error/colorPrimaryTextHover"].lightMode,
        shadow: "none",
      },
      pressed: {
        border: themeColors["Color/Brand/Error/colorPrimaryBgHover"].lightMode,
        text: themeColors["Color/Brand/Error/colorPrimaryTextHover"].lightMode,
        background:
          themeColors["Color/Brand/Error/colorPrimaryBgHover"].lightMode,
        iconColor:
          themeColors["Color/Brand/Error/colorPrimaryTextHover"].lightMode,
        shadow: "none",
      },
    },
    "primary-ghost": {
      enabled: {
        border: "transparent",
        text: themeColors["Color/Brand/Primary/colorPrimaryText"].lightMode,
        background: "transparent",
        iconColor:
          themeColors["Color/Brand/Primary/colorPrimaryText"].lightMode,
        shadow: "none",
      },
      disabled: {
        border: themeColors["Color/Neutral/Bg/colorBgDisabled"].lightMode,
        text: themeColors["Color/Neutral/Text/colorTextDisabled"].lightMode,
        background: themeColors["Color/Neutral/Bg/colorBgDisabled"].lightMode,
        iconColor:
          themeColors["Color/Neutral/Text/colorTextDisabled"].lightMode,
        shadow: "none",
      },
      hover: {
        border:
          themeColors["Color/Brand/Primary/colorPrimaryBgHover"].lightMode,
        text: themeColors["Color/Brand/Primary/colorPrimaryTextHover"]
          .lightMode,
        background:
          themeColors["Color/Brand/Primary/colorPrimaryBgHover"].lightMode,
        iconColor:
          themeColors["Color/Brand/Primary/colorPrimaryTextHover"].lightMode,
        shadow: "none",
      },
      pressed: {
        border:
          themeColors["Color/Brand/Primary/colorPrimaryBgHover"].lightMode,
        text: themeColors["Color/Brand/Primary/colorPrimaryTextHover"]
          .lightMode,
        background:
          themeColors["Color/Brand/Primary/colorPrimaryBgHover"].lightMode,
        iconColor:
          themeColors["Color/Brand/Primary/colorPrimaryTextHover"].lightMode,
        shadow: "none",
      },
    },
    "secondary-ghost": {
      enabled: {
        border: "transparent",
        text: themeColors["Color/Brand/Neutral/colorPrimaryText"].lightMode,
        background: "transparent",
        iconColor:
          themeColors["Color/Brand/Neutral/colorPrimaryText"].lightMode,
        shadow: "none",
      },
      disabled: {
        border: themeColors["Color/Neutral/Bg/colorBgDisabled"].lightMode,
        text: themeColors["Color/Neutral/Text/colorTextDisabled"].lightMode,
        background: themeColors["Color/Neutral/Bg/colorBgDisabled"].lightMode,
        iconColor:
          themeColors["Color/Neutral/Text/colorTextDisabled"].lightMode,
        shadow: "none",
      },
      hover: {
        border:
          themeColors["Color/Brand/Neutral/colorPrimaryBgHover"].lightMode,
        text: themeColors["Color/Brand/Neutral/colorPrimaryTextHover"]
          .lightMode,
        background:
          themeColors["Color/Brand/Neutral/colorPrimaryBgHover"].lightMode,
        iconColor:
          themeColors["Color/Brand/Neutral/colorPrimaryTextHover"].lightMode,
        shadow: "none",
      },
      pressed: {
        border:
          themeColors["Color/Brand/Neutral/colorPrimaryBgHover"].lightMode,
        text: themeColors["Color/Brand/Neutral/colorPrimaryTextHover"]
          .lightMode,
        background:
          themeColors["Color/Brand/Neutral/colorPrimaryBgHover"].lightMode,
        iconColor:
          themeColors["Color/Brand/Neutral/colorPrimaryTextHover"].lightMode,
        shadow: "none",
      },
    },
    "destructive-ghost": {
      enabled: {
        border: "transparent",
        text: themeColors["Color/Brand/Error/colorPrimaryText"].lightMode,
        background: "transparent",
        iconColor: themeColors["Color/Brand/Error/colorPrimaryText"].lightMode,
        shadow: "none",
      },
      disabled: {
        border: themeColors["Color/Neutral/Bg/colorBgDisabled"].lightMode,
        text: themeColors["Color/Neutral/Text/colorTextDisabled"].lightMode,
        background: themeColors["Color/Neutral/Bg/colorBgDisabled"].lightMode,
        iconColor:
          themeColors["Color/Neutral/Text/colorTextDisabled"].lightMode,
        shadow: "none",
      },
      hover: {
        border: themeColors["Color/Brand/Error/colorPrimaryBgHover"].lightMode,
        text: themeColors["Color/Brand/Error/colorPrimaryTextHover"].lightMode,
        background:
          themeColors["Color/Brand/Error/colorPrimaryBgHover"].lightMode,
        iconColor:
          themeColors["Color/Brand/Error/colorPrimaryTextHover"].lightMode,
        shadow: "none",
      },
      pressed: {
        border: themeColors["Color/Brand/Error/colorPrimaryBgHover"].lightMode,
        text: themeColors["Color/Brand/Error/colorPrimaryTextHover"].lightMode,
        background:
          themeColors["Color/Brand/Error/colorPrimaryBgHover"].lightMode,
        iconColor:
          themeColors["Color/Brand/Error/colorPrimaryTextHover"].lightMode,
        shadow: "none",
      },
    },
  },
  login: {
    formBG: lightV2.white,
    bgFilter: "none",
    promoBG: lightColors.promoBG,
    formBorder: lightV2.disabledGrey,
    formShadow: "0px 2px 8px 0px rgba(156, 163, 175, 0.15)",
    promoHeader: lightV2.white,
    promoText: lightV2.white,
    footerElements: lightV2.fontColor,
    footerDivider: lightV2.fontColor,
  },
  pageHeader: {
    color: lightColors.headerColor,
  },
  tooltip: {
    background: lightColors.tooltipBG,
    color: lightColors.tooltipColor,
  },
  commonInput: {
    labelColor: lightV2.fontColor,
  },
  checkbox: {
    checkBoxBorder:
      themeColors["Color/Neutral/Border/colorBorderSubtle"].lightMode,
    checkBoxBackground: themeColors["Color/Neutral/Bg/colorBgFields"].lightMode,
    checkBoxHoverBorder:
      themeColors["Color/Neutral/Border/colorBorderBold"].lightMode,
    checkBoxHoverBackground:
      themeColors["Color/Neutral/Bg/colorBgFields"].lightMode,
    checkBoxFocusBorder:
      themeColors["Color/Brand/Primary/colorPrimaryBorder"].lightMode,
    checkBoxFocusBackground:
      themeColors["Color/Neutral/Bg/colorBgFields"].lightMode,
    checkBoxFocusShadow: "0px 0px 0px 4px rgba(43, 100, 229, 0.30)",
    checkBoxActiveBorder:
      themeColors["Color/Brand/Primary/colorPrimary"].lightMode,
    checkBoxActiveBackground:
      themeColors["Color/Brand/Primary/colorPrimary"].lightMode,
    checkBoxActiveCheckboxColor:
      themeColors["Color/Neutral/Text/colorTextLightSolid"].lightMode,
    checkBoxActiveHoverCheckboxColor:
      themeColors["Color/Neutral/Text/colorTextLightSolid"].lightMode,
    checkBoxActiveHoverBackground:
      themeColors["Color/Brand/Primary/colorPrimaryHover"].lightMode,
    checkBoxActiveHoverBorder:
      themeColors["Color/Brand/Primary/colorPrimaryHover"].lightMode,
    checkBoxFocusActiveBorder:
      themeColors["Color/Brand/Primary/colorPrimaryActive"].lightMode,
    checkBoxFocusActiveBackground:
      themeColors["Color/Brand/Primary/colorPrimaryActive"].lightMode,
    checkBoxFocusActiveCheckboxColor:
      themeColors["Color/Neutral/Text/colorTextLightSolid"].lightMode,
    checkBoxFocusActiveHoverBackground:
      themeColors["Color/Brand/Primary/colorPrimaryHover"].lightMode,
    disabledBorder:
      themeColors["Color/Neutral/Border/colorBorderSubtle"].lightMode,
    disabledBackground:
      themeColors["Color/Neutral/Bg/colorBgDisabled"].lightMode,
    disabledColor:
      themeColors["Color/Neutral/Text/colorTextDisabled"].lightMode,
  },
  radioGroup: {
    radioBorder:
      themeColors["Color/Neutral/Border/colorBorderSubtle"].lightMode,
    radioBackground: themeColors["Color/Neutral/Bg/colorBgShell"].lightMode,
    radioHoverBorder:
      themeColors["Color/Brand/Primary/colorPrimaryHover"].lightMode,
    radioActiveBorder:
      themeColors["Color/Brand/Primary/colorPrimary"].lightMode,
    radioActiveBackground:
      themeColors["Color/Brand/Primary/colorPrimary"].lightMode,
    radioActiveCheck:
      themeColors["Color/Neutral/Text/colorTextLightSolid"].lightMode,
    radioHoverActiveBorder:
      themeColors["Color/Brand/Primary/colorPrimaryHover"].lightMode,
    radioHoverBackground:
      themeColors["Color/Brand/Primary/colorPrimaryHover"].lightMode,
    radioHoverActiveCheck:
      themeColors["Color/Neutral/Text/colorTextLightSolid"].lightMode,
    radioHoverActiveBackground:
      themeColors["Color/Brand/Primary/colorPrimaryHover"].lightMode,
    radioFocusBorder:
      themeColors["Color/Brand/Primary/colorPrimaryActive"].lightMode,
    radioFocusBackground:
      themeColors["Color/Brand/Primary/colorPrimaryActive"].lightMode,
    radioFocusCheck:
      themeColors["Color/Neutral/Text/colorTextLightSolid"].lightMode,
    radioFocusActiveBorder:
      themeColors["Color/Brand/Primary/colorPrimaryActive"].lightMode,
    radioFocusActiveBackground:
      themeColors["Color/Brand/Primary/colorPrimaryActive"].lightMode,
    radioFocusActiveCheck:
      themeColors["Color/Neutral/Text/colorTextLightSolid"].lightMode,
    radioFocusShadow: themeShadows["focusStyle-Light"],
    radioDisabledBorder:
      themeColors["Color/Neutral/Border/colorBorderSubtle"].lightMode,
    radioDisabledBackground:
      themeColors["Color/Neutral/Bg/colorBgDisabled"].lightMode,
    radioDisabledCheck:
      themeColors["Color/Neutral/Text/colorTextLightSolid"].lightMode,
    labelColor: themeColors["Color/Neutral/Text/colorTextHeading"].lightMode,
    subLabelColor: themeColors["Color/Neutral/Text/colorTextLabel"].lightMode,
    descriptionColor:
      themeColors["Color/Neutral/Text/colorTextDescription"].lightMode,
  },
  iconButton: {
    buttonBG: "linear-gradient(180deg, #4082F1 0%, #2B64E5 100%)",
    activeBG: "linear-gradient(180deg, #4082F1 0%, #2B64E5 100%)",
    hoverBG: "linear-gradient(180deg, #4082F1 0%, #2B64E5 100%)",
    disabledBG: lightV2.disabledBlue,
    color: lightV2.white,
    disabledColor: lightV2.disabledBlueText,
  },
  dataTable: {
    border: themeColors["Color/Neutral/Border/colorBorderSubtle"].lightMode,
    disabledBorder:
      themeColors["Color/Neutral/Border/colorBorderSubtle"].lightMode,
    disabledBG: "transparent",
    selected: themeColors["Color/Neutral/Text/colorTextHeading"].lightMode,
    itemDisabled: themeColors["Color/Neutral/Text/colorTextDisabled"].lightMode,
    itemColor: themeColors["Color/Neutral/Text/colorTextHeading"].lightMode,
    hoverColor: themeColors["Color/Brand/Control/colorBgActive"].lightMode,
    titleColor: themeColors["Color/Neutral/Text/colorTextLabel"].lightMode,
    actionButton: {
      border: lightV2.plainIconButtonBorder,
      background: lightV2.plainIconButtonBG,
      iconColor: lightV2.plainIconButtonColor,
      hoverBorder: lightV2.plainIconButtonBorder,
      hoverBackground: lightV2.plainIconButtonBG,
      hoverIconColor: lightV2.plainIconButtonColor,
      activeBorder: lightV2.plainIconButtonBorder,
      activeBackground: lightV2.plainIconButtonBG,
      activeIconColor: lightV2.plainIconButtonColor,
      disabledBackground: "transparent",
      disabledBorder: lightV2.disabledSecondary,
      disabledIconColor: lightV2.disabledSecondaryText,
    },
  },
  backLink: {
    color: lightColors.backLinkColor,
    arrow: lightColors.backLinkArrow,
    hover: lightColors.backLinkHover,
  },
  inputBox: {
    border: themeColors["Color/Neutral/Border/colorBorderSubtle"].lightMode,
    hoverBorder:
      themeColors["Color/Brand/Primary/colorPrimaryBorder"].lightMode,
    color: themeColors["Color/Neutral/Text/colorTextHeading"].lightMode,
    backgroundColor: "transparent",
    error: themeColors["Color/Brand/Error/colorPrimaryBorder"].lightMode,
    placeholderColor:
      themeColors["Color/Neutral/Text/colorTextPlaceholder"].lightMode,
    disabledBorder:
      themeColors["Color/Neutral/Border/colorBorderSubtle"].lightMode,
    disabledBackground:
      themeColors["Color/Neutral/Bg/colorBgDisabled"].lightMode,
    disabledPlaceholder:
      themeColors["Color/Neutral/Text/colorTextPlaceholder"].lightMode,
    disabledText:
      themeColors["Color/Neutral/Text/colorTextPlaceholder"].lightMode,
  },
  breadcrumbs: {
    elementsColor: themeColors["Color/Neutral/Text/colorTextHeading"].lightMode,
    selectedColor:
      themeColors["Color/Neutral/Text/colorTextDescription"].lightMode,
    hoverBG: themeColors["Color/Brand/Control/colorBgHover"].lightMode,
    hoverColor: themeColors["Color/Neutral/Text/colorTextLabel"].lightMode,
  },
  actionsList: {
    containerBorderColor: lightColors.actionsListBorder,
    backgroundColor: lightColors.iconButtonBG,
    disabledOptionsTextColor: lightColors.disabledActionsColor,
    optionsBorder: lightColors.headerBorder,
    optionsHoverTextColor: lightColors.defaultFontColor,
    optionsTextColor: lightColors.optionTextColor,
    titleColor: lightColors.defaultFontColor,
  },
  screenTitle: {
    subtitleColor:
      themeColors["Color/Neutral/Text/colorTextTertiary"].lightMode,
    titleColor: themeColors["Color/Neutral/Text/colorTextHeading"].lightMode,
  },
  modalBox: {
    closeColor: lightV2.modalCloseColor,
    closeHoverBG: lightColors.modalCloseHoverBG,
    closeHoverColor: lightColors.defaultFontColor,
    containerColor: lightV2.white,
    overlayColor: lightV2.modalOverlayBG,
    titleColor: lightV2.modalTitleColor,
    border: lightV2.modalBorderColor,
    iconColor: {
      default: lightV2.modalTitleColor,
      accept: lightV2.green,
      delete: lightV2.danger,
    },
  },
  switchButton: {
    bulletBGColor: lightV2.white,
    bulletBorderColor: lightV2.white,
    disabledBulletBGColor: lightV2.disabledGrey,
    disabledBulletBorderColor: lightV2.disabledGrey,
    offLabelColor: lightV2.mutedText,
    onLabelColor: lightV2.fontColor,
    onBackgroundColor: lightV2.switchBG,
    switchBackground: lightV2.menuSelectionColor,
    disabledBackground: lightV2.disabledSecondary,
    disabledOnBackground: lightV2.disabledBlueText,
  },
  dropdownSelector: {
    hoverText: themeColors["Color/Neutral/Text/colorTextHeading"].lightMode,
    backgroundColor: themeColors["Color/Neutral/Bg/colorBgContainer"].lightMode,
    hoverBG: themeColors["Color/Brand/Control/colorBgHover"].lightMode,
    selectedBGColor: themeColors["Color/Brand/Control/colorBgActive"].lightMode,
    selectedTextColor:
      themeColors["Color/Brand/Primary/colorPrimaryText"].lightMode,
    optionTextColor:
      themeColors["Color/Neutral/Text/colorTextHeading"].lightMode,
    disabledText: themeColors["Color/Neutral/Text/colorTextDisabled"].lightMode,
    border: themeColors["Color/Neutral/Border/colorBorderMinimal"].lightMode,
    dangerText: themeColors["Color/Brand/Error/colorPrimaryText"].lightMode,
    dangerHoverBG:
      themeColors["Color/Brand/Error/colorPrimaryBgHover"].lightMode,
    dangerHoverText:
      themeColors["Color/Brand/Error/colorPrimaryTextHover"].lightMode,
  },
  readBox: {
    borderColor: lightV2.borderColor,
    backgroundColor: lightV2.disabledGrey,
    textColor: lightV2.mutedText,
  },
  menu: {
    vertical: {
      background: lightColors.menuBackground,
      textColor: lightColors.menuCommonColor,
      hoverSelectedIconBorder: lightColors.white,
      iconBorderColor: lightColors.menuIconBorder,
      iconBGColor: lightColors.menuIconBG,
      dropArrowColor: lightColors.menuDropArrowColor,
      dropArrowBackground: lightColors.menuDropArrowBackground,
      hoverSelectedBackground: lightColors.menuSelectedOption,
      hoverSelectedColor: lightColors.white,
      notificationColor: lightColors.mainRed,
      sectionDividerColor: lightColors.menuColorDivider,
      sectionLabelColor: lightColors.white,
      menuCollapseColor: lightColors.menuCollapseColor,
    },
    horizontal: {
      menuHeaderBackground: lightColors.menuBackground,
      textColor: lightColors.optionTextColor,
      hoverSelectedIconBorder: lightColors.defaultFontColor,
      iconBorderColor: lightColors.menuIconBorder,
      iconBGColor: lightColors.boxBackground,
      dropArrowColor: lightColors.menuDropArrowColor,
      dropArrowBackground: lightColors.boxBackground,
      hoverSelectedBackground: lightColors.mainBlue,
      hoverSelectedColor: lightColors.defaultFontColor,
      notificationColor: lightColors.lightRed,
      sectionDividerColor: lightColors.menuColorDivider,
      barBackground: lightColors.boxBackground,
      dropBackground: lightColors.boxBackground,
      dropHoverSelectedColor: lightColors.white,
      noOptionsBar: lightColors.bulletColor,
    },
  },
  tabs: {
    vertical: {
      buttons: {
        hoverLabelColor:
          themeColors["Color/Brand/Neutral/colorPrimaryTextHover"].lightMode,
        hoverBackground:
          themeColors["Color/Brand/Neutral/colorPrimaryBg"].lightMode,
        backgroundColor: "transparent",
        labelColor: themeColors["Color/Neutral/Text/colorTextLabel"].lightMode,
        disabledBackgroundColor: "transparent",
        disabledColor:
          themeColors["Color/Neutral/Text/colorTextDisabled"].lightMode,
        selectedBackground: "transparent",
        selectedLabelColor:
          themeColors["Color/Brand/Primary/colorPrimaryText"].lightMode,
      },
      backgroundColor: "transparent",
      borders: "transparent",
    },
    horizontal: {
      buttons: {
        hoverLabelColor:
          themeColors["Color/Brand/Neutral/colorPrimaryTextHover"].lightMode,
        hoverBackground:
          themeColors["Color/Brand/Neutral/colorPrimaryBg"].lightMode,
        backgroundColor: "transparent",
        labelColor: themeColors["Color/Neutral/Text/colorTextLabel"].lightMode,
        disabledBackgroundColor: "transparent",
        disabledColor:
          themeColors["Color/Neutral/Text/colorTextDisabled"].lightMode,
        selectedBackground: "transparent",
        selectedLabelColor:
          themeColors["Color/Brand/Primary/colorPrimaryText"].lightMode,
      },
      backgroundColor: "transparent",
      selectedIndicatorColor:
        themeColors["Color/Brand/Primary/colorPrimaryBorder"].lightMode,
      bottomBorder:
        themeColors["Color/Neutral/Border/colorBorderSubtle"].lightMode,
    },
  },
  codeEditor: {
    backgroundColor: lightColors.white,
    textColor: lightColors.defaultFontColor,
    helpToolsBarBG: lightV2.mainBackgroundColor,
    comment: lightColors.codeEditorComment,
    entityTag: lightColors.codeEditorEntityTag,
    entity: lightColors.codeEditorEntity,
    sublimelinterGutterMark: lightColors.codeEditorSublimelinterGutterMark,
    constant: lightColors.codeEditorConstant,
    string: lightColors.codeEditorString,
    keyword: lightColors.codeEditorKeyword,
    markupBold: lightColors.codeEditorMarkupBold,
    codeEditorRegexp: lightColors.codeEditorRegexp,
  },
  tag: {
    primary: {
      background: themeColors["Color/Brand/Primary/colorPrimaryBg"].lightMode,
      label: themeColors["Color/Brand/Primary/colorPrimaryText"].lightMode,
      deleteColor:
        themeColors["Color/Brand/Primary/colorPrimaryText"].lightMode,
    },
    secondary: {
      background: themeColors["Color/Brand/Neutral/colorPrimaryBg"].lightMode,
      label: themeColors["Color/Brand/Neutral/colorPrimaryText"].lightMode,
      deleteColor:
        themeColors["Color/Brand/Neutral/colorPrimaryText"].lightMode,
    },
    destructive: {
      background: themeColors["Color/Brand/Error/colorPrimaryBg"].lightMode,
      label: themeColors["Color/Brand/Error/colorPrimaryText"].lightMode,
      deleteColor: themeColors["Color/Brand/Error/colorPrimaryText"].lightMode,
    },
  },
  snackbar: {
    error: {
      backgroundColor: lightV2.lightRed,
      labelColor: lightV2.fontColor,
    },
    default: {
      backgroundColor: lightV2.disabledBlueRegular,
      labelColor: lightV2.fontColor,
    },
    success: {
      backgroundColor: lightV2.lightGreen,
      labelColor: lightV2.fontColor,
    },
    warning: {
      backgroundColor: lightV2.lightOrange,
      labelColor: lightV2.fontColor,
    },
  },
  informativeMessage: {
    error: {
      backgroundColor: lightV2.lightRed,
      borderColor: lightV2.lightRed,
      textColor: lightV2.fontColor,
    },
    default: {
      backgroundColor: lightV2.disabledBlueRegular,
      borderColor: lightV2.disabledBlueRegular,
      textColor: lightV2.fontColor,
    },
    success: {
      backgroundColor: lightV2.lightGreen,
      borderColor: lightV2.lightGreen,
      textColor: lightV2.fontColor,
    },
    warning: {
      backgroundColor: lightV2.lightOrange,
      borderColor: lightV2.lightOrange,
      textColor: lightV2.fontColor,
    },
  },
  notificationCount: {
    none: {
      backgroundColor:
        themeColors["Color/Brand/Neutral/colorPrimaryBg"].lightMode,
      textColor: themeColors["Color/Brand/Neutral/colorPrimaryText"].lightMode,
    },
    info: {
      backgroundColor:
        themeColors["Color/Brand/Primary/colorPrimaryBg"].lightMode,
      textColor: themeColors["Color/Brand/Primary/colorPrimaryText"].lightMode,
    },
    success: {
      backgroundColor:
        themeColors["Color/Brand/Success/colorPrimaryBg"].lightMode,
      textColor: themeColors["Color/Brand/Success/colorPrimaryText"].lightMode,
    },
    warning: {
      backgroundColor:
        themeColors["Color/Brand/Warning/colorPrimaryBg"].lightMode,
      textColor: themeColors["Color/Brand/Warning/colorPrimaryText"].lightMode,
    },
    danger: {
      backgroundColor:
        themeColors["Color/Brand/Error/colorPrimaryBg"].lightMode,
      textColor: themeColors["Color/Brand/Error/colorPrimaryText"].lightMode,
    },
  },
  wizard: {
    stepsBackground: lightColors.boxBackground,
    vertical: {
      stepLabelColor: lightColors.defaultFontColor,
      selectedStepBG: lightColors.borderColor,
      selectedStepLabelColor: lightColors.defaultFontColor,
      disabledLabelColor: lightColors.disabledInnerGrey,
    },
    modal: {
      stepLabelColor: lightV2.modalCloseColor,
      selectedStepBG: lightV2.switchBG,
      selectedStepLabelColor: lightV2.switchBG,
      disabledLabelColor: lightV2.disabledGreyText,
      borderColor: lightV2.defaultButtonPressed,
      buttonHoverBG: lightV2.modalBorderColor,
    },
  },
  slider: {
    bulletBG: lightColors.bulletColor,
    railBG: lightColors.borderColor,
    disabledRail: lightColors.sliderDisabledBG,
    disabledBullet: lightColors.disabledInnerGrey,
  },
  valuePair: {
    labelColor: lightV2.modalTitleColor,
    textColor: lightV2.modalTitleColor,
    linkColor: lightV2.modalCloseColor,
  },
  buttonGroup: {
    border: themeColors["Color/Neutral/Border/colorBorderSubtle"].lightMode,
    labelColor: themeColors["Color/Brand/Neutral/colorPrimaryText"].lightMode,
    activeBackground:
      themeColors["Color/Brand/Neutral/colorPrimaryBgHover"].lightMode,
    activeLabelColor:
      themeColors["Color/Brand/Neutral/colorPrimaryTextHover"].lightMode,
    hoverBackground:
      themeColors["Color/Brand/Neutral/colorPrimaryBgHover"].lightMode,
    hoverLabelColor:
      themeColors["Color/Brand/Neutral/colorPrimaryTextHover"].lightMode,
    disabledLabelColor:
      themeColors["Color/Neutral/Text/colorTextDisabled"].lightMode,
    disabledBackground:
      themeColors["Color/Neutral/Bg/colorBgDisabled"].lightMode,
    background: themeColors["Color/Neutral/Bg/colorBgContainer"].lightMode,
    secondaryBackground:
      themeColors["Color/Neutral/Bg/colorBgContainer"].lightMode,
    secondaryLabelColor:
      themeColors["Color/Brand/Neutral/colorPrimaryText"].lightMode,
    selectedBackground:
      themeColors["Color/Brand/Control/colorBgActive"].lightMode,
    selectedLabelColor:
      themeColors["Color/Brand/Info/colorPrimaryActive"].lightMode,
  },
  dropdownOptions: {
    optionLabel: themeColors["Color/Neutral/Text/colorTextLabel"].lightMode,
    optionBG: "transparent",
    hoverOptionBG: themeColors["Color/Brand/Control/colorBgHover"].lightMode,
    activeOptionBG: themeColors["Color/Brand/Control/colorBgHover"].lightMode,
    dangerLabel: themeColors["Color/Brand/Error/colorPrimaryText"].lightMode,
    disabledLabel:
      themeColors["Color/Neutral/Text/colorTextDisabled"].lightMode,
  },
  boxedIcon: {
    iconColor: themeColors["Color/Neutral/Icon/colorIcon"].lightMode,
    bgColor: themeColors["Color/Neutral/Bg/colorBgSections"].lightMode,
  },
  pill: {
    default: {
      labelColor: themeColors["Color/Brand/Neutral/colorPrimary"].lightMode,
      bgColor: themeColors["Color/Brand/Neutral/colorPrimaryBg"].lightMode,
      borderColor: themeColors["Color/Brand/Neutral/colorPrimary"].lightMode,
    },
    secondary: {
      labelColor: themeColors["Color/Brand/Error/colorPrimary"].lightMode,
      bgColor: themeColors["Color/Brand/Error/colorPrimaryBg"].lightMode,
      borderColor: themeColors["Color/Brand/Error/colorPrimary"].lightMode,
    },
    current: {
      labelColor: themeColors["Color/Brand/Primary/colorPrimary"].lightMode,
      bgColor: themeColors["Color/Brand/Primary/colorPrimaryBg"].lightMode,
      borderColor: themeColors["Color/Brand/Primary/colorPrimary"].lightMode,
    },
  },
  badge: {
    none: {
      minimalColor:
        themeColors["Color/Brand/Neutral/colorPrimaryText"].lightMode,
      subtleBG: themeColors["Color/Brand/Neutral/colorPrimaryText"].lightMode,
      subtleLabel:
        themeColors["Color/Neutral/Text/colorTextLightSolid"].lightMode,
      boldBG: themeColors["Color/Brand/Neutral/colorPrimaryBg"].lightMode,
      boldLabel: themeColors["Color/Brand/Neutral/colorPrimaryText"].lightMode,
    },
    info: {
      minimalColor:
        themeColors["Color/Brand/Primary/colorPrimaryText"].lightMode,
      subtleBG: themeColors["Color/Brand/Primary/colorPrimaryText"].lightMode,
      subtleLabel:
        themeColors["Color/Neutral/Text/colorTextLightSolid"].lightMode,
      boldBG: themeColors["Color/Brand/Primary/colorPrimaryBg"].lightMode,
      boldLabel: themeColors["Color/Brand/Primary/colorPrimaryText"].lightMode,
    },
    success: {
      minimalColor:
        themeColors["Color/Brand/Success/colorPrimaryText"].lightMode,
      subtleBG: themeColors["Color/Brand/Success/colorPrimaryText"].lightMode,
      subtleLabel:
        themeColors["Color/Neutral/Text/colorTextLightSolid"].lightMode,
      boldBG: themeColors["Color/Brand/Success/colorPrimaryBg"].lightMode,
      boldLabel: themeColors["Color/Brand/Success/colorPrimaryText"].lightMode,
    },
    warning: {
      minimalColor:
        themeColors["Color/Brand/Warning/colorPrimaryText"].lightMode,
      subtleBG: themeColors["Color/Brand/Warning/colorPrimaryText"].lightMode,
      subtleLabel:
        themeColors["Color/Neutral/Text/colorTextLightSolid"].lightMode,
      boldBG: themeColors["Color/Brand/Warning/colorPrimaryBg"].lightMode,
      boldLabel: themeColors["Color/Brand/Warning/colorPrimaryText"].lightMode,
    },
    danger: {
      minimalColor: themeColors["Color/Brand/Error/colorPrimaryText"].lightMode,
      subtleBG: themeColors["Color/Brand/Error/colorPrimaryText"].lightMode,
      subtleLabel:
        themeColors["Color/Neutral/Text/colorTextLightSolid"].lightMode,
      boldBG: themeColors["Color/Brand/Error/colorPrimaryBg"].lightMode,
      boldLabel: themeColors["Color/Brand/Error/colorPrimaryText"].lightMode,
    },
    purple: {
      minimalColor: themeColors["Color/Base/Purple/6"].lightMode,
      subtleBG: themeColors["Color/Base/Purple/6"].lightMode,
      subtleLabel:
        themeColors["Color/Neutral/Text/colorTextLightSolid"].lightMode,
      boldBG: themeColors["Color/Base/Purple/1"].lightMode,
      boldLabel: themeColors["Color/Base/Purple/6"].lightMode,
    },
    rose: {
      minimalColor: themeColors["Color/Base/Rose/6"].lightMode,
      subtleBG: themeColors["Color/Base/Rose/6"].lightMode,
      subtleLabel:
        themeColors["Color/Neutral/Text/colorTextLightSolid"].lightMode,
      boldBG: themeColors["Color/Base/Rose/1"].lightMode,
      boldLabel: themeColors["Color/Base/Rose/6"].lightMode,
    },
    scooter: {
      minimalColor: themeColors["Color/Base/Scooter/6"].lightMode,
      subtleBG: themeColors["Color/Base/Scooter/6"].lightMode,
      subtleLabel:
        themeColors["Color/Neutral/Text/colorTextLightSolid"].lightMode,
      boldBG: themeColors["Color/Base/Scooter/1"].lightMode,
      boldLabel: themeColors["Color/Base/Scooter/6"].lightMode,
    },
    disabled: {
      minimalColor:
        themeColors["Color/Neutral/Text/colorTextDisabled"].lightMode,
      subtleBG: themeColors["Color/Brand/Control/colorBgHover"].lightMode,
      subtleLabel:
        themeColors["Color/Neutral/Text/colorTextDisabled"].lightMode,
      boldBG: themeColors["Color/Brand/Control/colorBgHover"].lightMode,
      boldLabel: themeColors["Color/Neutral/Text/colorTextDisabled"].lightMode,
    },
  },
  notificationAlert: {
    danger: {
      highContrastBG: themeColors["Color/Brand/Error/colorPrimaryBg"].lightMode,
      highContrastBorder:
        themeColors["Color/Brand/Error/colorPrimaryBg"].lightMode,
      minimalContrastBG:
        themeColors["Color/Neutral/Bg/colorBgElevated"].lightMode,
      minimalContrastBorder:
        themeColors["Color/Brand/Error/colorPrimaryBorder"].lightMode,
      actionColor:
        themeColors["Color/Brand/Primary/colorPrimaryText"].lightMode,
      iconColor: themeColors["Color/Brand/Error/colorPrimaryText"].lightMode,
      contentColor: themeColors["Color/Neutral/Text/colorTextLabel"].lightMode,
      titleColor: themeColors["Color/Neutral/Text/colorTextHeading"].lightMode,
    },
    success: {
      highContrastBG:
        themeColors["Color/Brand/Success/colorPrimaryBg"].lightMode,
      highContrastBorder:
        themeColors["Color/Brand/Success/colorPrimaryBg"].lightMode,
      minimalContrastBG:
        themeColors["Color/Neutral/Bg/colorBgElevated"].lightMode,
      minimalContrastBorder:
        themeColors["Color/Brand/Success/colorPrimaryBorder"].lightMode,
      actionColor:
        themeColors["Color/Brand/Primary/colorPrimaryText"].lightMode,
      iconColor:
        themeColors["Color/Brand/Success/colorPrimaryBorder"].lightMode,
      contentColor: themeColors["Color/Neutral/Text/colorTextLabel"].lightMode,
      titleColor: themeColors["Color/Neutral/Text/colorTextHeading"].lightMode,
    },
    warning: {
      highContrastBG:
        themeColors["Color/Brand/Warning/colorPrimaryBg"].lightMode,
      highContrastBorder:
        themeColors["Color/Brand/Warning/colorPrimaryBg"].lightMode,
      minimalContrastBG:
        themeColors["Color/Neutral/Bg/colorBgElevated"].lightMode,
      minimalContrastBorder:
        themeColors["Color/Brand/Warning/colorPrimaryBorder"].lightMode,
      actionColor:
        themeColors["Color/Brand/Primary/colorPrimaryText"].lightMode,
      iconColor:
        themeColors["Color/Brand/Warning/colorPrimaryBorder"].lightMode,
      contentColor: themeColors["Color/Neutral/Text/colorTextLabel"].lightMode,
      titleColor: themeColors["Color/Neutral/Text/colorTextHeading"].lightMode,
    },
    information: {
      highContrastBG: themeColors["Color/Brand/Info/colorPrimaryBg"].lightMode,
      highContrastBorder:
        themeColors["Color/Brand/Info/colorPrimaryBg"].lightMode,
      minimalContrastBG:
        themeColors["Color/Neutral/Bg/colorBgElevated"].lightMode,
      minimalContrastBorder:
        themeColors["Color/Brand/Primary/colorPrimaryText"].lightMode,
      actionColor:
        themeColors["Color/Brand/Primary/colorPrimaryText"].lightMode,
      iconColor: themeColors["Color/Brand/Primary/colorPrimaryText"].lightMode,
      contentColor: themeColors["Color/Neutral/Text/colorTextLabel"].lightMode,
      titleColor: themeColors["Color/Neutral/Text/colorTextHeading"].lightMode,
    },
    neutral: {
      highContrastBG:
        themeColors["Color/Brand/Neutral/colorPrimaryBg"].lightMode,
      highContrastBorder:
        themeColors["Color/Brand/Neutral/colorPrimaryBg"].lightMode,
      minimalContrastBG:
        themeColors["Color/Neutral/Bg/colorBgElevated"].lightMode,
      minimalContrastBorder:
        themeColors["Color/Brand/Neutral/colorPrimaryBorder"].lightMode,
      actionColor:
        themeColors["Color/Brand/Primary/colorPrimaryText"].lightMode,
      iconColor:
        themeColors["Color/Brand/Neutral/colorPrimaryBorder"].lightMode,
      contentColor: themeColors["Color/Neutral/Text/colorTextLabel"].lightMode,
      titleColor: themeColors["Color/Neutral/Text/colorTextHeading"].lightMode,
    },
  },
  linkButton: {
    primary: themeColors["Color/Brand/Primary/colorPrimaryText"].lightMode,
    neutral: themeColors["Color/Brand/Neutral/colorPrimaryText"].lightMode,
    destructive: themeColors["Color/Brand/Error/colorPrimaryText"].lightMode,
    disabled: themeColors["Color/Neutral/Text/colorTextDisabled"].lightMode,
  },
};

export const darkTheme: ThemeDefinitionProps = {
  bgColor: themeColors["Color/Neutral/colorBgBase"].darkMode,
  fontColor: themeColors["Color/Neutral/Text/colorTextLabel"].darkMode,
  borderColor: themeColors["Color/Neutral/Border/colorBorderMinimal"].darkMode,
  bulletColor: themeColors["Color/Neutral/Text/colorTextSecondary"].darkMode,
  logoColor: themeColors["Color/Brand/_minio/Raspberry"].darkMode,
  logoLabelColor: themeColors["Color/Neutral/Text/colorTextHeading"].darkMode,
  logoLabelInverse:
    themeColors["Color/Neutral/Text/colorTextLightSolid"].darkMode,
  loaderColor: themeColors["Color/Base/Royal/10"].darkMode,
  linkColor: themeColors["Color/Brand/Primary/colorPrimaryText"].darkMode,
  secondaryLinkColor:
    themeColors["Color/Brand/Neutral/colorPrimaryText"].darkMode,
  boxBackground: themeColors["Color/Neutral/Bg/colorBgShell"].darkMode,
  mutedText: themeColors["Color/Neutral/Text/colorTextDisabled"].darkMode,
  secondaryText: themeColors["Color/Brand/Neutral/colorPrimaryText"].darkMode,
  colors: getThemeColors("darkMode"),
  borderRadius: radioVariants,
  paddingSizes: paddingSizeVariants,
  boxShadows: themeShadows,
  box: {
    border: "transparent",
    shadow: "0px 2px 2px 0px rgba(121, 135, 151, 0.15)",
    backgroundColor: themeColors["Color/Neutral/Bg/colorBgContainer"].darkMode,
  },
  signalColors: {
    main: themeColors["Color/Brand/Primary/colorPrimaryText"].darkMode,
    danger: themeColors["Color/Brand/Error/colorPrimaryText"].darkMode,
    good: themeColors["Color/Brand/Success/colorPrimaryText"].darkMode,
    info: themeColors["Color/Brand/Primary/colorPrimaryText"].darkMode,
    warning: themeColors["Color/Brand/Warning/colorPrimaryText"].darkMode,
    disabled: themeColors["Color/Neutral/Text/colorTextDisabled"].darkMode,
    dark: themeColors["Color/Neutral/Text/colorTextLabel"].darkMode,
    clear: themeColors["Color/Neutral/colorBgBase"].darkMode,
    selectBlue: themeColors["Color/Brand/Primary/colorPrimaryBgHover"].darkMode,
  },
  buttons: {
    primary: {
      enabled: {
        border: themeColors["Color/Brand/Primary/colorPrimaryBorder"].darkMode,
        text: themeColors["Color/Neutral/Text/colorTextLightSolid"].darkMode,
        background: `linear-gradient(180deg, ${themeColors["Color/Base/Royal/5"].darkMode} 0%, ${themeColors["Color/Base/Royal/6"].darkMode} 100%)`,
        iconColor:
          themeColors["Color/Neutral/Text/colorTextLightSolid"].darkMode,
        shadow: `0px 1px 0px 0px rgba(255, 255, 255, 0.25) inset, 0px -2px 3px 0px #0B2CA2 inset`,
      },
      disabled: {
        border: themeColors["Color/Neutral/Bg/colorBgDisabled"].darkMode,
        text: themeColors["Color/Neutral/Text/colorTextDisabled"].darkMode,
        background: themeColors["Color/Neutral/Bg/colorBgDisabled"].darkMode,
        iconColor: themeColors["Color/Neutral/Text/colorTextDisabled"].darkMode,
        shadow: "none",
      },
      hover: {
        border: themeColors["Color/Brand/Primary/colorPrimaryBorder"].darkMode,
        text: themeColors["Color/Neutral/Text/colorTextLightSolid"].darkMode,
        background: `linear-gradient(180deg, ${themeColors["Color/Base/Royal/6"].darkMode} 0%, ${themeColors["Color/Base/Royal/7"].darkMode} 100%)`,
        iconColor:
          themeColors["Color/Neutral/Text/colorTextLightSolid"].darkMode,
        shadow: `0px 1px 0px 0px rgba(255, 255, 255, 0.25) inset, 0px -2px 3px 0px #0B2CA2 inset`,
      },
      pressed: {
        border: themeColors["Color/Brand/Primary/colorPrimaryBorder"].darkMode,
        text: themeColors["Color/Neutral/Text/colorTextLightSolid"].darkMode,
        background: `linear-gradient(180deg, ${themeColors["Color/Base/Royal/6"].darkMode} 0%, ${themeColors["Color/Base/Royal/7"].darkMode} 100%)`,
        iconColor:
          themeColors["Color/Neutral/Text/colorTextLightSolid"].darkMode,
        shadow: "none",
      },
    },
    secondary: {
      enabled: {
        border: themeColors["Color/Neutral/Border/colorBorderSubtle"].darkMode,
        text: themeColors["Color/Brand/Neutral/colorPrimaryText"].darkMode,
        background: themeColors["Color/Neutral/Bg/colorBgContainer"].darkMode,
        iconColor: themeColors["Color/Brand/Neutral/colorPrimaryText"].darkMode,
        shadow: "none",
      },
      disabled: {
        border: themeColors["Color/Neutral/Bg/colorBgDisabled"].darkMode,
        text: themeColors["Color/Neutral/Text/colorTextDisabled"].darkMode,
        background: themeColors["Color/Neutral/Bg/colorBgDisabled"].darkMode,
        iconColor: themeColors["Color/Neutral/Text/colorTextDisabled"].darkMode,
        shadow: "none",
      },
      hover: {
        border: themeColors["Color/Brand/Neutral/colorPrimaryBgHover"].darkMode,
        text: themeColors["Color/Brand/Neutral/colorPrimaryText"].darkMode,
        background:
          themeColors["Color/Brand/Neutral/colorPrimaryBgHover"].darkMode,
        iconColor: themeColors["Color/Brand/Neutral/colorPrimaryText"].darkMode,
        shadow: "none",
      },
      pressed: {
        border: themeColors["Color/Brand/Neutral/colorPrimaryBgHover"].darkMode,
        text: themeColors["Color/Brand/Neutral/colorPrimaryText"].darkMode,
        background:
          themeColors["Color/Brand/Neutral/colorPrimaryBgHover"].darkMode,
        iconColor: themeColors["Color/Brand/Neutral/colorPrimaryText"].darkMode,
        shadow: "none",
      },
    },
    destructive: {
      enabled: {
        border: themeColors["Color/Brand/Error/colorPrimaryBorder"].darkMode,
        text: themeColors["Color/Neutral/Text/colorTextLightSolid"].darkMode,
        background: `linear-gradient(180deg, ${themeColors["Color/Base/Sunset/5"].darkMode} 0%, ${themeColors["Color/Base/Sunset/6"].darkMode} 100%)`,
        iconColor:
          themeColors["Color/Neutral/Text/colorTextLightSolid"].darkMode,
        shadow: `0px 1px 0px 0px rgba(255, 255, 255, 0.25) inset, 0px -2px 3px 0px #981701 inset`,
      },
      disabled: {
        border: themeColors["Color/Neutral/Bg/colorBgDisabled"].darkMode,
        text: themeColors["Color/Neutral/Text/colorTextDisabled"].darkMode,
        background: themeColors["Color/Neutral/Bg/colorBgDisabled"].darkMode,
        iconColor: themeColors["Color/Neutral/Text/colorTextDisabled"].darkMode,
        shadow: "none",
      },
      hover: {
        border: themeColors["Color/Brand/Error/colorPrimaryBorder"].darkMode,
        text: themeColors["Color/Neutral/Text/colorTextLightSolid"].darkMode,
        background: `linear-gradient(180deg, ${themeColors["Color/Base/Sunset/6"].darkMode} 0%, ${themeColors["Color/Base/Sunset/7"].darkMode} 100%)`,
        iconColor:
          themeColors["Color/Neutral/Text/colorTextLightSolid"].darkMode,
        shadow: `0px 1px 0px 0px rgba(255, 255, 255, 0.25) inset, 0px -2px 3px 0px #981701 inset`,
      },
      pressed: {
        border: themeColors["Color/Brand/Error/colorPrimaryBorder"].darkMode,
        text: themeColors["Color/Neutral/Text/colorTextLightSolid"].darkMode,
        background: `linear-gradient(180deg, ${themeColors["Color/Base/Sunset/6"].darkMode} 0%, ${themeColors["Color/Base/Sunset/7"].darkMode} 100%)`,
        iconColor:
          themeColors["Color/Neutral/Text/colorTextLightSolid"].darkMode,
        shadow: "none",
      },
    },
    "primary-lighter": {
      enabled: {
        border: themeColors["Color/Brand/Primary/colorPrimaryBg"].darkMode,
        text: themeColors["Color/Brand/Primary/colorPrimaryText"].darkMode,
        background: themeColors["Color/Brand/Primary/colorPrimaryBg"].darkMode,
        iconColor: themeColors["Color/Brand/Primary/colorPrimaryText"].darkMode,
        shadow: "none",
      },
      disabled: {
        border: themeColors["Color/Neutral/Bg/colorBgDisabled"].darkMode,
        text: themeColors["Color/Neutral/Text/colorTextDisabled"].darkMode,
        background: themeColors["Color/Neutral/Bg/colorBgDisabled"].darkMode,
        iconColor: themeColors["Color/Neutral/Text/colorTextDisabled"].darkMode,
        shadow: "none",
      },
      hover: {
        border: themeColors["Color/Brand/Primary/colorPrimaryBgHover"].darkMode,
        text: themeColors["Color/Brand/Primary/colorPrimaryTextHover"].darkMode,
        background:
          themeColors["Color/Brand/Primary/colorPrimaryBgHover"].darkMode,
        iconColor:
          themeColors["Color/Brand/Primary/colorPrimaryTextHover"].darkMode,
        shadow: "none",
      },
      pressed: {
        border: themeColors["Color/Brand/Primary/colorPrimaryBgHover"].darkMode,
        text: themeColors["Color/Brand/Primary/colorPrimaryTextHover"].darkMode,
        background:
          themeColors["Color/Brand/Primary/colorPrimaryBgHover"].darkMode,
        iconColor:
          themeColors["Color/Brand/Primary/colorPrimaryTextHover"].darkMode,
        shadow: "none",
      },
    },
    "secondary-lighter": {
      enabled: {
        border: themeColors["Color/Brand/Neutral/colorPrimaryBg"].darkMode,
        text: themeColors["Color/Brand/Neutral/colorPrimaryText"].darkMode,
        background: themeColors["Color/Brand/Neutral/colorPrimaryBg"].darkMode,
        iconColor: themeColors["Color/Brand/Neutral/colorPrimaryText"].darkMode,
        shadow: "none",
      },
      disabled: {
        border: themeColors["Color/Neutral/Bg/colorBgDisabled"].darkMode,
        text: themeColors["Color/Neutral/Text/colorTextDisabled"].darkMode,
        background: themeColors["Color/Neutral/Bg/colorBgDisabled"].darkMode,
        iconColor: themeColors["Color/Neutral/Text/colorTextDisabled"].darkMode,
        shadow: "none",
      },
      hover: {
        border: themeColors["Color/Brand/Neutral/colorPrimaryBgHover"].darkMode,
        text: themeColors["Color/Brand/Neutral/colorPrimaryTextHover"].darkMode,
        background:
          themeColors["Color/Brand/Neutral/colorPrimaryBgHover"].darkMode,
        iconColor:
          themeColors["Color/Brand/Neutral/colorPrimaryTextHover"].darkMode,
        shadow: "none",
      },
      pressed: {
        border: themeColors["Color/Brand/Neutral/colorPrimaryBgHover"].darkMode,
        text: themeColors["Color/Brand/Neutral/colorPrimaryTextHover"].darkMode,
        background:
          themeColors["Color/Brand/Neutral/colorPrimaryBgHover"].darkMode,
        iconColor:
          themeColors["Color/Brand/Neutral/colorPrimaryTextHover"].darkMode,
        shadow: "none",
      },
    },
    "destructive-lighter": {
      enabled: {
        border: themeColors["Color/Brand/Error/colorPrimaryBg"].darkMode,
        text: themeColors["Color/Brand/Error/colorPrimaryText"].darkMode,
        background: themeColors["Color/Brand/Error/colorPrimaryBg"].darkMode,
        iconColor: themeColors["Color/Brand/Error/colorPrimaryText"].darkMode,
        shadow: "none",
      },
      disabled: {
        border: themeColors["Color/Neutral/Bg/colorBgDisabled"].darkMode,
        text: themeColors["Color/Neutral/Text/colorTextDisabled"].darkMode,
        background: themeColors["Color/Neutral/Bg/colorBgDisabled"].darkMode,
        iconColor: themeColors["Color/Neutral/Text/colorTextDisabled"].darkMode,
        shadow: "none",
      },
      hover: {
        border: themeColors["Color/Brand/Error/colorPrimaryBgHover"].darkMode,
        text: themeColors["Color/Brand/Error/colorPrimaryTextHover"].darkMode,
        background:
          themeColors["Color/Brand/Error/colorPrimaryBgHover"].darkMode,
        iconColor:
          themeColors["Color/Brand/Error/colorPrimaryTextHover"].darkMode,
        shadow: "none",
      },
      pressed: {
        border: themeColors["Color/Brand/Error/colorPrimaryBgHover"].darkMode,
        text: themeColors["Color/Brand/Error/colorPrimaryTextHover"].darkMode,
        background:
          themeColors["Color/Brand/Error/colorPrimaryBgHover"].darkMode,
        iconColor:
          themeColors["Color/Brand/Error/colorPrimaryTextHover"].darkMode,
        shadow: "none",
      },
    },
    "primary-ghost": {
      enabled: {
        border: "transparent",
        text: themeColors["Color/Brand/Primary/colorPrimaryText"].darkMode,
        background: "transparent",
        iconColor: themeColors["Color/Brand/Primary/colorPrimaryText"].darkMode,
        shadow: "none",
      },
      disabled: {
        border: themeColors["Color/Neutral/Bg/colorBgDisabled"].darkMode,
        text: themeColors["Color/Neutral/Text/colorTextDisabled"].darkMode,
        background: themeColors["Color/Neutral/Bg/colorBgDisabled"].darkMode,
        iconColor: themeColors["Color/Neutral/Text/colorTextDisabled"].darkMode,
        shadow: "none",
      },
      hover: {
        border: themeColors["Color/Brand/Primary/colorPrimaryBgHover"].darkMode,
        text: themeColors["Color/Brand/Primary/colorPrimaryTextHover"].darkMode,
        background:
          themeColors["Color/Brand/Primary/colorPrimaryBgHover"].darkMode,
        iconColor:
          themeColors["Color/Brand/Primary/colorPrimaryTextHover"].darkMode,
        shadow: "none",
      },
      pressed: {
        border: themeColors["Color/Brand/Primary/colorPrimaryBgHover"].darkMode,
        text: themeColors["Color/Brand/Primary/colorPrimaryTextHover"].darkMode,
        background:
          themeColors["Color/Brand/Primary/colorPrimaryBgHover"].darkMode,
        iconColor:
          themeColors["Color/Brand/Primary/colorPrimaryTextHover"].darkMode,
        shadow: "none",
      },
    },
    "secondary-ghost": {
      enabled: {
        border: "transparent",
        text: themeColors["Color/Brand/Neutral/colorPrimaryText"].darkMode,
        background: "transparent",
        iconColor: themeColors["Color/Brand/Neutral/colorPrimaryText"].darkMode,
        shadow: "none",
      },
      disabled: {
        border: themeColors["Color/Neutral/Bg/colorBgDisabled"].darkMode,
        text: themeColors["Color/Neutral/Text/colorTextDisabled"].darkMode,
        background: themeColors["Color/Neutral/Bg/colorBgDisabled"].darkMode,
        iconColor: themeColors["Color/Neutral/Text/colorTextDisabled"].darkMode,
        shadow: "none",
      },
      hover: {
        border: themeColors["Color/Brand/Neutral/colorPrimaryBgHover"].darkMode,
        text: themeColors["Color/Brand/Neutral/colorPrimaryTextHover"].darkMode,
        background:
          themeColors["Color/Brand/Neutral/colorPrimaryBgHover"].darkMode,
        iconColor:
          themeColors["Color/Brand/Neutral/colorPrimaryTextHover"].darkMode,
        shadow: "none",
      },
      pressed: {
        border: themeColors["Color/Brand/Neutral/colorPrimaryBgHover"].darkMode,
        text: themeColors["Color/Brand/Neutral/colorPrimaryTextHover"].darkMode,
        background:
          themeColors["Color/Brand/Neutral/colorPrimaryBgHover"].darkMode,
        iconColor:
          themeColors["Color/Brand/Neutral/colorPrimaryTextHover"].darkMode,
        shadow: "none",
      },
    },
    "destructive-ghost": {
      enabled: {
        border: "transparent",
        text: themeColors["Color/Brand/Error/colorPrimaryText"].darkMode,
        background: "transparent",
        iconColor: themeColors["Color/Brand/Error/colorPrimaryText"].darkMode,
        shadow: "none",
      },
      disabled: {
        border: themeColors["Color/Neutral/Bg/colorBgDisabled"].darkMode,
        text: themeColors["Color/Neutral/Text/colorTextDisabled"].darkMode,
        background: themeColors["Color/Neutral/Bg/colorBgDisabled"].darkMode,
        iconColor: themeColors["Color/Neutral/Text/colorTextDisabled"].darkMode,
        shadow: "none",
      },
      hover: {
        border: themeColors["Color/Brand/Error/colorPrimaryBgHover"].darkMode,
        text: themeColors["Color/Brand/Error/colorPrimaryTextHover"].darkMode,
        background:
          themeColors["Color/Brand/Error/colorPrimaryBgHover"].darkMode,
        iconColor:
          themeColors["Color/Brand/Error/colorPrimaryTextHover"].darkMode,
        shadow: "none",
      },
      pressed: {
        border: themeColors["Color/Brand/Error/colorPrimaryBgHover"].darkMode,
        text: themeColors["Color/Brand/Error/colorPrimaryTextHover"].darkMode,
        background:
          themeColors["Color/Brand/Error/colorPrimaryBgHover"].darkMode,
        iconColor:
          themeColors["Color/Brand/Error/colorPrimaryTextHover"].darkMode,
        shadow: "none",
      },
    },
  },
  login: {
    formBG: darkColors.sectionOneBG,
    promoBG: darkColors.promoBG,
    bgFilter: "grayscale(50%)",
    promoHeader: darkColors.logoLabel,
    promoText: darkColors.logoLabel,
    footerElements: darkColors.footerColor,
    footerDivider: darkColors.footerDivider,
  },
  pageHeader: {
    color: lightV2.headerLabelText,
  },
  tooltip: {
    background: darkColors.tooltipBG,
    color: darkColors.tooltipColor,
  },
  commonInput: {
    labelColor: darkColors.labelColor,
  },
  checkbox: {
    checkBoxBorder:
      themeColors["Color/Neutral/Border/colorBorderSubtle"].darkMode,
    checkBoxBackground: themeColors["Color/Neutral/Bg/colorBgFields"].darkMode,
    checkBoxHoverBorder:
      themeColors["Color/Neutral/Border/colorBorderBold"].darkMode,
    checkBoxHoverBackground:
      themeColors["Color/Neutral/Bg/colorBgFields"].darkMode,
    checkBoxFocusBorder:
      themeColors["Color/Brand/Primary/colorPrimaryBorder"].darkMode,
    checkBoxFocusBackground:
      themeColors["Color/Neutral/Bg/colorBgFields"].darkMode,
    checkBoxFocusShadow: "0px 0px 0px 4px rgba(43, 100, 229, 0.30)",
    checkBoxActiveBorder:
      themeColors["Color/Brand/Primary/colorPrimary"].darkMode,
    checkBoxActiveBackground:
      themeColors["Color/Brand/Primary/colorPrimary"].darkMode,
    checkBoxActiveCheckboxColor:
      themeColors["Color/Neutral/Text/colorTextLightSolid"].darkMode,
    checkBoxActiveHoverCheckboxColor:
      themeColors["Color/Neutral/Text/colorTextLightSolid"].darkMode,
    checkBoxActiveHoverBackground:
      themeColors["Color/Brand/Primary/colorPrimaryHover"].darkMode,
    checkBoxActiveHoverBorder:
      themeColors["Color/Brand/Primary/colorPrimaryHover"].darkMode,
    checkBoxFocusActiveBorder:
      themeColors["Color/Brand/Primary/colorPrimaryActive"].darkMode,
    checkBoxFocusActiveBackground:
      themeColors["Color/Brand/Primary/colorPrimaryActive"].darkMode,
    checkBoxFocusActiveCheckboxColor:
      themeColors["Color/Neutral/Text/colorTextLightSolid"].darkMode,
    checkBoxFocusActiveHoverBackground:
      themeColors["Color/Brand/Primary/colorPrimaryHover"].darkMode,
    disabledBorder:
      themeColors["Color/Neutral/Border/colorBorderSubtle"].darkMode,
    disabledBackground:
      themeColors["Color/Neutral/Bg/colorBgDisabled"].darkMode,
    disabledColor: themeColors["Color/Neutral/Text/colorTextDisabled"].darkMode,
  },
  radioGroup: {
    radioBorder: themeColors["Color/Neutral/Border/colorBorderSubtle"].darkMode,
    radioBackground: themeColors["Color/Neutral/Bg/colorBgShell"].darkMode,
    radioHoverBorder:
      themeColors["Color/Brand/Primary/colorPrimaryHover"].darkMode,
    radioActiveBorder: themeColors["Color/Brand/Primary/colorPrimary"].darkMode,
    radioActiveBackground:
      themeColors["Color/Brand/Primary/colorPrimary"].darkMode,
    radioActiveCheck:
      themeColors["Color/Neutral/Text/colorTextLightSolid"].darkMode,
    radioHoverActiveBorder:
      themeColors["Color/Brand/Primary/colorPrimaryHover"].darkMode,
    radioHoverBackground:
      themeColors["Color/Brand/Primary/colorPrimaryHover"].darkMode,
    radioHoverActiveCheck:
      themeColors["Color/Neutral/Text/colorTextLightSolid"].darkMode,
    radioHoverActiveBackground:
      themeColors["Color/Brand/Primary/colorPrimaryHover"].darkMode,
    radioFocusBorder:
      themeColors["Color/Brand/Primary/colorPrimaryActive"].darkMode,
    radioFocusBackground:
      themeColors["Color/Brand/Primary/colorPrimaryActive"].darkMode,
    radioFocusCheck:
      themeColors["Color/Neutral/Text/colorTextLightSolid"].darkMode,
    radioFocusActiveBorder:
      themeColors["Color/Brand/Primary/colorPrimaryActive"].darkMode,
    radioFocusActiveBackground:
      themeColors["Color/Brand/Primary/colorPrimaryActive"].darkMode,
    radioFocusActiveCheck:
      themeColors["Color/Neutral/Text/colorTextLightSolid"].darkMode,
    radioFocusShadow: themeShadows["focusStyle-Light"],
    radioDisabledBorder:
      themeColors["Color/Neutral/Border/colorBorderSubtle"].darkMode,
    radioDisabledBackground:
      themeColors["Color/Neutral/Bg/colorBgDisabled"].darkMode,
    radioDisabledCheck:
      themeColors["Color/Neutral/Text/colorTextLightSolid"].darkMode,
    labelColor: themeColors["Color/Neutral/Text/colorTextHeading"].darkMode,
    subLabelColor: themeColors["Color/Neutral/Text/colorTextLabel"].darkMode,
    descriptionColor:
      themeColors["Color/Neutral/Text/colorTextDescription"].darkMode,
  },
  iconButton: {
    buttonBG: darkColors.iconButtonBG,
    activeBG: darkColors.iconButtonActive,
    hoverBG: darkColors.iconButtonHover,
    disabledBG: darkColors.iconButtonDisabled,
    color: darkColors.iconButtonColor,
  },
  dataTable: {
    border: themeColors["Color/Neutral/Border/colorBorderSubtle"].darkMode,
    disabledBorder:
      themeColors["Color/Neutral/Border/colorBorderSubtle"].darkMode,
    disabledBG: "transparent",
    selected: themeColors["Color/Neutral/Text/colorTextHeading"].darkMode,
    itemDisabled: themeColors["Color/Neutral/Text/colorTextDisabled"].darkMode,
    itemColor: themeColors["Color/Neutral/Text/colorTextHeading"].darkMode,
    hoverColor: themeColors["Color/Brand/Control/colorBgActive"].darkMode,
    titleColor: themeColors["Color/Neutral/Text/colorTextLabel"].darkMode,
    actionButton: {
      border: lightV2.plainIconButtonBorder,
      background: lightV2.plainIconButtonBG,
      iconColor: lightV2.plainIconButtonColor,
      hoverBorder: lightV2.plainIconButtonBorder,
      hoverBackground: lightV2.plainIconButtonBG,
      hoverIconColor: lightV2.plainIconButtonColor,
      activeBorder: lightV2.plainIconButtonBorder,
      activeBackground: lightV2.plainIconButtonBG,
      activeIconColor: lightV2.plainIconButtonColor,
      disabledBackground: "transparent",
      disabledBorder: lightV2.disabledSecondary,
      disabledIconColor: lightV2.disabledSecondaryText,
    },
  },
  backLink: {
    color: darkColors.backLinkColor,
    arrow: darkColors.backLinkArrow,
    hover: darkColors.backLinkHover,
  },
  inputBox: {
    border: darkColors.borderColor,
    hoverBorder: darkColors.mainWhite,
    color: darkColors.mainGrey,
    backgroundColor: darkColors.dark,
    error: darkColors.mainRed,
    placeholderColor: darkColors.placeholder,
    disabledBorder: darkColors.disabledGrey,
    disabledBackground: darkColors.disabledInnerGrey,
    disabledPlaceholder: darkColors.disabledGrey,
    disabledText: darkColors.disabledBGGrey,
  },
  breadcrumbs: {
    elementsColor:
      themeColors["Color/Neutral/Text/colorTextDescription"].darkMode,
    selectedColor: themeColors["Color/Neutral/Text/colorTextHeading"].darkMode,
    hoverBG: themeColors["Color/Brand/Neutral/colorPrimaryBg"].darkMode,
    hoverColor: themeColors["Color/Brand/Neutral/colorPrimaryText"].darkMode,
  },
  actionsList: {
    containerBorderColor: darkColors.bulletColor,
    backgroundColor: darkColors.sectionOneBG,
    disabledOptionsTextColor: darkColors.disabledGrey,
    optionsBorder: darkColors.bulletColor,
    optionsHoverTextColor: darkColors.hoverWhite,
    optionsTextColor: darkColors.defaultFontColor,
    titleColor: darkColors.defaultFontColor,
  },
  screenTitle: {
    subtitleColor: themeColors["Color/Neutral/Text/colorTextTertiary"].darkMode,
    titleColor: themeColors["Color/Neutral/Text/colorTextHeading"].darkMode,
  },
  modalBox: {
    closeColor: darkColors.modalCloseColor,
    closeHoverBG: darkColors.modalCloseHoverBG,
    closeHoverColor: darkColors.defaultFontColor,
    containerColor: darkColors.boxBackground,
    overlayColor: darkColors.modalOverlayBG,
    titleColor: darkColors.defaultFontColor,
    iconColor: {
      default: darkColors.mainGrey,
      accept: darkColors.mainGreen,
      delete: darkColors.mainRed,
    },
  },
  switchButton: {
    bulletBGColor: darkColors.bulletBGColor,
    bulletBorderColor: darkColors.mainWhite,
    disabledBulletBGColor: darkColors.disabledBulletBG,
    disabledBulletBorderColor: darkColors.backLinkArrow,
    offLabelColor: darkColors.hoverGrey,
    onLabelColor: darkColors.hoverWhite,
    onBackgroundColor: darkColors.mainGreen,
    switchBackground: darkColors.backLinkArrow,
    disabledBackground: darkColors.disabledSwitchBG,
    disabledOnBackground: darkColors.disabledOnSwitchBG,
  },
  dropdownSelector: {
    hoverText: themeColors["Color/Neutral/Text/colorTextHeading"].darkMode,
    backgroundColor: "transparent",
    hoverBG: themeColors["Color/Brand/Control/colorBgHover"].darkMode,
    selectedBGColor: themeColors["Color/Brand/Control/colorBgActive"].darkMode,
    selectedTextColor:
      themeColors["Color/Brand/Primary/colorPrimaryText"].darkMode,
    optionTextColor:
      themeColors["Color/Neutral/Text/colorTextHeading"].darkMode,
    disabledText: themeColors["Color/Neutral/Text/colorTextDisabled"].darkMode,
    border: themeColors["Color/Neutral/Border/colorBorderMinimal"].darkMode,
    dangerText: themeColors["Color/Brand/Error/colorPrimaryText"].darkMode,
    dangerHoverBG:
      themeColors["Color/Brand/Error/colorPrimaryBgHover"].darkMode,
    dangerHoverText:
      themeColors["Color/Brand/Error/colorPrimaryTextHover"].darkMode,
  },
  readBox: {
    borderColor: darkColors.headerBorder,
    backgroundColor: darkColors.boxBackground,
    textColor: darkColors.readBoxTextColor,
  },
  menu: {
    vertical: {
      background: darkColors.menuBackground,
      textColor: darkColors.menuCommonColor,
      hoverSelectedIconBorder: darkColors.menuHoverSelectedBorderIcon,
      iconBorderColor: darkColors.menuIconBorder,
      iconBGColor: darkColors.menuIconBG,
      dropArrowColor: darkColors.menuDropArrowColor,
      dropArrowBackground: darkColors.menuDropArrowBackground,
      hoverSelectedBackground: darkColors.menuSelectedOption,
      hoverSelectedColor: darkColors.headerColor,
      notificationColor: darkColors.mainRed,
      sectionDividerColor: darkColors.menuColorDivider,
      sectionLabelColor: darkColors.headerColor,
      menuCollapseColor: darkColors.menuCollapseColor,
    },
    horizontal: {
      menuHeaderBackground: darkColors.menuBackground,
      textColor: darkColors.defaultFontColor,
      hoverSelectedIconBorder: darkColors.defaultFontColor,
      iconBorderColor: darkColors.menuIconBorder,
      iconBGColor: darkColors.boxBackground,
      dropArrowColor: darkColors.menuDropArrowColor,
      dropArrowBackground: darkColors.boxBackground,
      hoverSelectedBackground: darkColors.mainGrey,
      hoverSelectedColor: darkColors.headerColor,
      notificationColor: darkColors.mainRed,
      sectionDividerColor: darkColors.menuColorDivider,
      barBackground: darkColors.boxBackground,
      dropBackground: darkColors.boxBackground,
      dropHoverSelectedColor: darkColors.dark,
      noOptionsBar: darkColors.mainGrey,
    },
  },
  tabs: {
    vertical: {
      buttons: {
        hoverLabelColor:
          themeColors["Color/Brand/Neutral/colorPrimaryTextHover"].darkMode,
        hoverBackground:
          themeColors["Color/Brand/Neutral/colorPrimaryBg"].darkMode,
        backgroundColor: "transparent",
        labelColor: themeColors["Color/Neutral/Text/colorTextLabel"].darkMode,
        disabledBackgroundColor: "transparent",
        disabledColor:
          themeColors["Color/Neutral/Text/colorTextDisabled"].darkMode,
        selectedBackground: "transparent",
        selectedLabelColor:
          themeColors["Color/Brand/Primary/colorPrimaryText"].darkMode,
      },
      backgroundColor: "transparent",
      borders: "transparent",
    },
    horizontal: {
      buttons: {
        hoverLabelColor:
          themeColors["Color/Brand/Neutral/colorPrimaryTextHover"].darkMode,
        hoverBackground:
          themeColors["Color/Brand/Neutral/colorPrimaryBg"].darkMode,
        backgroundColor: "transparent",
        labelColor: themeColors["Color/Neutral/Text/colorTextLabel"].darkMode,
        disabledBackgroundColor: "transparent",
        disabledColor:
          themeColors["Color/Neutral/Text/colorTextDisabled"].darkMode,
        selectedBackground: "transparent",
        selectedLabelColor:
          themeColors["Color/Brand/Primary/colorPrimaryText"].darkMode,
      },
      backgroundColor: "transparent",
      selectedIndicatorColor:
        themeColors["Color/Brand/Primary/colorPrimaryBorder"].darkMode,
      bottomBorder:
        themeColors["Color/Neutral/Border/colorBorderSubtle"].darkMode,
    },
  },
  codeEditor: {
    backgroundColor: darkColors.boxBackground,
    textColor: darkColors.mainWhite,
    helpToolsBarBG: darkColors.boxBackground,
    comment: darkColors.codeEditorComment,
    entityTag: darkColors.codeEditorEntityTag,
    entity: darkColors.codeEditorEntity,
    sublimelinterGutterMark: darkColors.codeEditorSublimelinterGutterMark,
    constant: darkColors.codeEditorConstant,
    string: darkColors.codeEditorString,
    keyword: darkColors.codeEditorKeyword,
    markupBold: darkColors.codeEditorMarkupBold,
    codeEditorRegexp: darkColors.codeEditorRegexp,
  },
  tag: {
    primary: {
      background: themeColors["Color/Brand/Primary/colorPrimaryBg"].darkMode,
      label: themeColors["Color/Brand/Primary/colorPrimaryText"].darkMode,
      deleteColor: themeColors["Color/Brand/Primary/colorPrimaryText"].darkMode,
    },
    secondary: {
      background: themeColors["Color/Brand/Neutral/colorPrimaryBg"].darkMode,
      label: themeColors["Color/Brand/Neutral/colorPrimaryText"].darkMode,
      deleteColor: themeColors["Color/Brand/Neutral/colorPrimaryText"].darkMode,
    },
    destructive: {
      background: themeColors["Color/Brand/Error/colorPrimaryBg"].darkMode,
      label: themeColors["Color/Brand/Error/colorPrimaryText"].darkMode,
      deleteColor: themeColors["Color/Brand/Error/colorPrimaryText"].darkMode,
    },
  },
  snackbar: {
    error: {
      backgroundColor: darkColors.mainRed,
      labelColor: darkColors.mainWhite,
    },
    default: {
      backgroundColor: darkColors.mainGrey,
      labelColor: darkColors.dark,
    },
    success: {
      backgroundColor: darkColors.mainGreen,
      labelColor: darkColors.dark,
    },
    warning: {
      backgroundColor: darkColors.mainOrange,
      labelColor: darkColors.dark,
    },
  },
  informativeMessage: {
    error: {
      backgroundColor: darkColors.mainRed,
      borderColor: darkColors.mainRed,
      textColor: darkColors.mainWhite,
    },
    default: {
      backgroundColor: darkColors.mainGrey,
      borderColor: darkColors.mainGrey,
      textColor: darkColors.dark,
    },
    success: {
      backgroundColor: darkColors.mainGreen,
      borderColor: darkColors.mainGreen,
      textColor: darkColors.dark,
    },
    warning: {
      backgroundColor: darkColors.mainOrange,
      borderColor: darkColors.mainOrange,
      textColor: darkColors.dark,
    },
  },
  notificationCount: {
    none: {
      backgroundColor:
        themeColors["Color/Brand/Neutral/colorPrimaryBg"].darkMode,
      textColor: themeColors["Color/Brand/Neutral/colorPrimaryText"].darkMode,
    },
    info: {
      backgroundColor:
        themeColors["Color/Brand/Primary/colorPrimaryBg"].darkMode,
      textColor: themeColors["Color/Brand/Primary/colorPrimaryText"].darkMode,
    },
    success: {
      backgroundColor:
        themeColors["Color/Brand/Success/colorPrimaryBg"].darkMode,
      textColor: themeColors["Color/Brand/Success/colorPrimaryText"].darkMode,
    },
    warning: {
      backgroundColor:
        themeColors["Color/Brand/Warning/colorPrimaryBg"].darkMode,
      textColor: themeColors["Color/Brand/Warning/colorPrimaryText"].darkMode,
    },
    danger: {
      backgroundColor: themeColors["Color/Brand/Error/colorPrimaryBg"].darkMode,
      textColor: themeColors["Color/Brand/Error/colorPrimaryText"].darkMode,
    },
  },
  wizard: {
    stepsBackground: darkColors.boxBackground,
    vertical: {
      stepLabelColor: darkColors.defaultFontColor,
      selectedStepBG: darkColors.borderColor,
      selectedStepLabelColor: darkColors.dark,
      disabledLabelColor: darkColors.disabledGrey,
    },
    modal: {
      stepLabelColor: darkColors.defaultFontColor,
      selectedStepBG: darkColors.borderColor,
      selectedStepLabelColor: darkColors.mainWhite,
      disabledLabelColor: darkColors.disabledGrey,
    },
  },
  slider: {
    bulletBG: darkColors.defaultFontColor,
    railBG: darkColors.footerDivider,
    disabledRail: darkColors.disabledSwitchBG,
    disabledBullet: darkColors.disabledSliderBullet,
  },
  pill: {
    default: {
      labelColor: themeColors["Color/Brand/Neutral/colorPrimary"].darkMode,
      bgColor: themeColors["Color/Brand/Neutral/colorPrimaryBg"].darkMode,
      borderColor: themeColors["Color/Brand/Neutral/colorPrimary"].darkMode,
    },
    secondary: {
      labelColor: themeColors["Color/Brand/Error/colorPrimary"].darkMode,
      bgColor: themeColors["Color/Brand/Error/colorPrimaryBg"].darkMode,
      borderColor: themeColors["Color/Brand/Error/colorPrimary"].darkMode,
    },
    current: {
      labelColor: themeColors["Color/Brand/Primary/colorPrimary"].darkMode,
      bgColor: themeColors["Color/Brand/Primary/colorPrimaryBg"].darkMode,
      borderColor: themeColors["Color/Brand/Primary/colorPrimary"].darkMode,
    },
  },
  buttonGroup: {
    border: themeColors["Color/Neutral/Border/colorBorderSubtle"].darkMode,
    labelColor: themeColors["Color/Brand/Neutral/colorPrimaryText"].darkMode,
    activeBackground:
      themeColors["Color/Brand/Neutral/colorPrimaryBgHover"].darkMode,
    activeLabelColor:
      themeColors["Color/Brand/Neutral/colorPrimaryTextHover"].darkMode,
    hoverBackground:
      themeColors["Color/Brand/Neutral/colorPrimaryBgHover"].darkMode,
    hoverLabelColor:
      themeColors["Color/Brand/Neutral/colorPrimaryTextHover"].darkMode,
    disabledLabelColor:
      themeColors["Color/Neutral/Text/colorTextDisabled"].darkMode,
    disabledBackground:
      themeColors["Color/Neutral/Bg/colorBgDisabled"].darkMode,
    background: themeColors["Color/Neutral/Bg/colorBgContainer"].darkMode,
    secondaryBackground:
      themeColors["Color/Neutral/Bg/colorBgContainer"].darkMode,
    secondaryLabelColor:
      themeColors["Color/Brand/Neutral/colorPrimaryText"].darkMode,
    selectedBackground:
      themeColors["Color/Brand/Control/colorBgActive"].darkMode,
    selectedLabelColor:
      themeColors["Color/Brand/Info/colorPrimaryActive"].darkMode,
  },
  dropdownOptions: {
    optionLabel: themeColors["Color/Neutral/Text/colorTextLabel"].darkMode,
    optionBG: "transparent",
    hoverOptionBG: themeColors["Color/Brand/Control/colorBgHover"].darkMode,
    activeOptionBG: themeColors["Color/Brand/Control/colorBgHover"].darkMode,
    dangerLabel: themeColors["Color/Brand/Error/colorPrimaryText"].darkMode,
    disabledLabel: themeColors["Color/Neutral/Text/colorTextDisabled"].darkMode,
  },
  boxedIcon: {
    iconColor: themeColors["Color/Neutral/Icon/colorIcon"].darkMode,
    bgColor: themeColors["Color/Neutral/Bg/colorBgSections"].darkMode,
  },
  badge: {
    none: {
      minimalColor:
        themeColors["Color/Brand/Neutral/colorPrimaryText"].darkMode,
      subtleBG: themeColors["Color/Brand/Neutral/colorPrimaryText"].darkMode,
      subtleLabel:
        themeColors["Color/Neutral/Text/colorTextLightSolid"].darkMode,
      boldBG: themeColors["Color/Brand/Neutral/colorPrimaryBg"].darkMode,
      boldLabel: themeColors["Color/Brand/Neutral/colorPrimaryText"].darkMode,
    },
    info: {
      minimalColor:
        themeColors["Color/Brand/Primary/colorPrimaryText"].darkMode,
      subtleBG: themeColors["Color/Brand/Primary/colorPrimaryText"].darkMode,
      subtleLabel:
        themeColors["Color/Neutral/Text/colorTextLightSolid"].darkMode,
      boldBG: themeColors["Color/Brand/Primary/colorPrimaryBg"].darkMode,
      boldLabel: themeColors["Color/Brand/Primary/colorPrimaryText"].darkMode,
    },
    success: {
      minimalColor:
        themeColors["Color/Brand/Success/colorPrimaryText"].darkMode,
      subtleBG: themeColors["Color/Brand/Success/colorPrimaryText"].darkMode,
      subtleLabel:
        themeColors["Color/Neutral/Text/colorTextLightSolid"].darkMode,
      boldBG: themeColors["Color/Brand/Success/colorPrimaryBg"].darkMode,
      boldLabel: themeColors["Color/Brand/Success/colorPrimaryText"].darkMode,
    },
    warning: {
      minimalColor:
        themeColors["Color/Brand/Warning/colorPrimaryText"].darkMode,
      subtleBG: themeColors["Color/Brand/Warning/colorPrimaryText"].darkMode,
      subtleLabel:
        themeColors["Color/Neutral/Text/colorTextLightSolid"].darkMode,
      boldBG: themeColors["Color/Brand/Warning/colorPrimaryBg"].darkMode,
      boldLabel: themeColors["Color/Brand/Warning/colorPrimaryText"].darkMode,
    },
    danger: {
      minimalColor: themeColors["Color/Brand/Error/colorPrimaryText"].darkMode,
      subtleBG: themeColors["Color/Brand/Error/colorPrimaryText"].darkMode,
      subtleLabel:
        themeColors["Color/Neutral/Text/colorTextLightSolid"].darkMode,
      boldBG: themeColors["Color/Brand/Error/colorPrimaryBg"].darkMode,
      boldLabel: themeColors["Color/Brand/Error/colorPrimaryText"].darkMode,
    },
    purple: {
      minimalColor: themeColors["Color/Base/Purple/6"].darkMode,
      subtleBG: themeColors["Color/Base/Purple/6"].darkMode,
      subtleLabel:
        themeColors["Color/Neutral/Text/colorTextLightSolid"].darkMode,
      boldBG: themeColors["Color/Base/Purple/1"].darkMode,
      boldLabel: themeColors["Color/Base/Purple/6"].darkMode,
    },
    rose: {
      minimalColor: themeColors["Color/Base/Rose/6"].darkMode,
      subtleBG: themeColors["Color/Base/Rose/6"].darkMode,
      subtleLabel:
        themeColors["Color/Neutral/Text/colorTextLightSolid"].darkMode,
      boldBG: themeColors["Color/Base/Rose/1"].darkMode,
      boldLabel: themeColors["Color/Base/Rose/6"].darkMode,
    },
    scooter: {
      minimalColor: themeColors["Color/Base/Scooter/6"].darkMode,
      subtleBG: themeColors["Color/Base/Scooter/6"].darkMode,
      subtleLabel:
        themeColors["Color/Neutral/Text/colorTextLightSolid"].darkMode,
      boldBG: themeColors["Color/Base/Scooter/1"].darkMode,
      boldLabel: themeColors["Color/Base/Scooter/6"].darkMode,
    },
    disabled: {
      minimalColor:
        themeColors["Color/Neutral/Text/colorTextDisabled"].darkMode,
      subtleBG: themeColors["Color/Brand/Control/colorBgHover"].darkMode,
      subtleLabel: themeColors["Color/Neutral/Text/colorTextDisabled"].darkMode,
      boldBG: themeColors["Color/Brand/Control/colorBgHover"].darkMode,
      boldLabel: themeColors["Color/Neutral/Text/colorTextDisabled"].darkMode,
    },
  },
  notificationAlert: {
    danger: {
      highContrastBG: themeColors["Color/Brand/Error/colorPrimaryBg"].darkMode,
      highContrastBorder:
        themeColors["Color/Brand/Error/colorPrimaryBg"].darkMode,
      minimalContrastBG:
        themeColors["Color/Neutral/Bg/colorBgElevated"].darkMode,
      minimalContrastBorder:
        themeColors["Color/Brand/Error/colorPrimaryBorder"].darkMode,
      actionColor: themeColors["Color/Brand/Primary/colorPrimaryText"].darkMode,
      iconColor: themeColors["Color/Brand/Error/colorPrimaryText"].darkMode,
      contentColor: themeColors["Color/Neutral/Text/colorTextLabel"].darkMode,
      titleColor: themeColors["Color/Neutral/Text/colorTextHeading"].darkMode,
    },
    success: {
      highContrastBG:
        themeColors["Color/Brand/Success/colorPrimaryBg"].darkMode,
      highContrastBorder:
        themeColors["Color/Brand/Success/colorPrimaryBg"].darkMode,
      minimalContrastBG:
        themeColors["Color/Neutral/Bg/colorBgElevated"].darkMode,
      minimalContrastBorder:
        themeColors["Color/Brand/Success/colorPrimaryBorder"].darkMode,
      actionColor: themeColors["Color/Brand/Primary/colorPrimaryText"].darkMode,
      iconColor: themeColors["Color/Brand/Success/colorPrimaryBorder"].darkMode,
      contentColor: themeColors["Color/Neutral/Text/colorTextLabel"].darkMode,
      titleColor: themeColors["Color/Neutral/Text/colorTextHeading"].darkMode,
    },
    warning: {
      highContrastBG:
        themeColors["Color/Brand/Warning/colorPrimaryBg"].darkMode,
      highContrastBorder:
        themeColors["Color/Brand/Warning/colorPrimaryBg"].darkMode,
      minimalContrastBG:
        themeColors["Color/Neutral/Bg/colorBgElevated"].darkMode,
      minimalContrastBorder:
        themeColors["Color/Brand/Warning/colorPrimaryBorder"].darkMode,
      actionColor: themeColors["Color/Brand/Primary/colorPrimaryText"].darkMode,
      iconColor: themeColors["Color/Brand/Warning/colorPrimaryBorder"].darkMode,
      contentColor: themeColors["Color/Neutral/Text/colorTextLabel"].darkMode,
      titleColor: themeColors["Color/Neutral/Text/colorTextHeading"].darkMode,
    },
    information: {
      highContrastBG: themeColors["Color/Brand/Info/colorPrimaryBg"].darkMode,
      highContrastBorder:
        themeColors["Color/Brand/Info/colorPrimaryBg"].darkMode,
      minimalContrastBG:
        themeColors["Color/Neutral/Bg/colorBgElevated"].darkMode,
      minimalContrastBorder:
        themeColors["Color/Brand/Primary/colorPrimaryText"].darkMode,
      actionColor: themeColors["Color/Brand/Primary/colorPrimaryText"].darkMode,
      iconColor: themeColors["Color/Brand/Primary/colorPrimaryText"].darkMode,
      contentColor: themeColors["Color/Neutral/Text/colorTextLabel"].darkMode,
      titleColor: themeColors["Color/Neutral/Text/colorTextHeading"].darkMode,
    },
    neutral: {
      highContrastBG:
        themeColors["Color/Brand/Neutral/colorPrimaryBg"].darkMode,
      highContrastBorder:
        themeColors["Color/Brand/Neutral/colorPrimaryBg"].darkMode,
      minimalContrastBG:
        themeColors["Color/Neutral/Bg/colorBgElevated"].darkMode,
      minimalContrastBorder:
        themeColors["Color/Brand/Neutral/colorPrimaryBorder"].darkMode,
      actionColor: themeColors["Color/Brand/Primary/colorPrimaryText"].darkMode,
      iconColor: themeColors["Color/Brand/Neutral/colorPrimaryBorder"].darkMode,
      contentColor: themeColors["Color/Neutral/Text/colorTextLabel"].darkMode,
      titleColor: themeColors["Color/Neutral/Text/colorTextHeading"].darkMode,
    },
  },
  linkButton: {
    primary: themeColors["Color/Brand/Primary/colorPrimaryText"].darkMode,
    neutral: themeColors["Color/Brand/Neutral/colorPrimaryText"].darkMode,
    destructive: themeColors["Color/Brand/Error/colorPrimaryText"].darkMode,
    disabled: themeColors["Color/Neutral/Text/colorTextDisabled"].darkMode,
  },
};
