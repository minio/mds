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
import { themeColors } from "./themeColors";
import { getThemeColors } from "./utils";

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
  bgColor: lightV2.mainBackgroundColor,
  fontColor: lightV2.fontColor,
  borderColor: themeColors["Color/Neutral/Border/colorBorderMinimal"].lightMode,
  bulletColor: lightColors.bulletColor,
  logoColor: lightColors.mainRed,
  logoLabelColor: lightColors.logoLabel,
  logoLabelInverse: lightColors.logoLabelInverse,
  loaderColor: lightColors.loaderColor,
  linkColor: lightV2.linkColor,
  secondaryLinkColor: lightV2.modalCloseColor,
  boxBackground: lightColors.boxBackground,
  mutedText: lightV2.mutedText,
  secondaryText: lightColors.mainGrey,
  colors: getThemeColors("lightMode"),
  box: {
    border: "transparent",
    shadow: "0px 2px 2px 0px rgba(121, 135, 151, 0.15)",
    backgroundColor: themeColors["Color/Neutral/Bg/colorBgContainer"].lightMode,
  },
  signalColors: {
    main: lightV2.switchBG,
    danger: lightV2.danger,
    good: lightV2.green,
    info: lightV2.secondaryBlue,
    warning: lightV2.orange,
    disabled: lightV2.disabledGrey,
    dark: lightV2.fontColor,
    clear: lightColors.white,
    selectBlue: lightV2.menuSelectionColor,
  },
  buttons: {
    neutral: {
      enabled: {
        border: lightV2.modalBorderColor,
        text: lightV2.modalTitleColor,
        background: "transparent",
        iconColor: lightV2.modalTitleColor,
        shadow: "0px 1px 1px 0px rgba(121, 135, 151, 0.15)",
      },
      disabled: {
        border: lightV2.buttonDisabledBG,
        text: lightV2.buttonDisabledLabel,
        background: lightV2.buttonDisabledBG,
        iconColor: lightV2.buttonDisabledLabel,
      },
      hover: {
        border: lightV2.neutralColorBorder,
        text: lightV2.modalTitleColor,
        background: lightV2.modalBorderColor,
        iconColor: lightV2.modalTitleColor,
        shadow: "0px 1px 1px 0px rgba(121, 135, 151, 0.15)",
      },
      pressed: {
        border: lightV2.buttonDisabledLabel,
        text: lightV2.modalTitleColor,
        background: lightV2.defaultButtonPressed,
        iconColor: lightV2.modalTitleColor,
        shadow: "0px 1px 1px 0px rgba(121, 135, 151, 0.15)",
      },
    },
    primary: {
      enabled: {
        border: lightV2.blueBorderActionButton,
        text: lightV2.white,
        background: "linear-gradient(180deg, #4182F0 0%, #2B64E5 100%)",
        iconColor: lightV2.white,
        shadow: "0px 1px 0px 0px rgba(255, 255, 255, 0.25) inset",
      },
      disabled: {
        border: lightV2.buttonDisabledBG,
        text: lightV2.buttonDisabledLabel,
        background: lightV2.buttonDisabledBG,
        iconColor: lightV2.buttonDisabledLabel,
      },
      hover: {
        border: lightV2.blueBorderActionButton,
        text: lightV2.white,
        background: "linear-gradient(180deg, #2B64E5 0%, #2350D2 100%)",
        iconColor: lightV2.white,
        shadow: "0px 1px 0px 0px rgba(255, 255, 255, 0.25) inset",
      },
      pressed: {
        border: lightV2.blueBorderActionButton,
        text: lightV2.white,
        background:
          themeColors["Components/Button/Primary/colorBgActive"].lightMode,
        iconColor: lightV2.white,
      },
    },
    destructive: {
      enabled: {
        border: lightV2.destructiveColorBorder,
        text: lightV2.white,
        background: "linear-gradient(180deg, #FF4E42 0%, #ED2315 100%)",
        iconColor: lightV2.white,
        shadow: "0px 1px 0px 0px rgba(255, 255, 255, 0.25) inset",
      },
      disabled: {
        border: lightV2.buttonDisabledBG,
        text: lightV2.buttonDisabledLabel,
        background: lightV2.buttonDisabledBG,
        iconColor: lightV2.buttonDisabledLabel,
      },
      hover: {
        border: lightV2.redBorder,
        text: lightV2.white,
        background: "linear-gradient(180deg, #ED2315 0%, #C8190D 100%)",
        iconColor: lightV2.white,
        shadow: "0px 1px 0px 0px rgba(255, 255, 255, 0.25) inset",
      },
      pressed: {
        border: lightV2.destructiveColorBorder,
        text: lightV2.white,
        background: "linear-gradient(180deg, #C8190D 0%, #A5190F 100%)",
        iconColor: lightV2.white,
      },
    },
    "destructive-bare": {
      enabled: {
        border: lightV2.destructiveColorBorder,
        text: lightV2.colorTextDestructive,
        background: "transparent",
        iconColor: lightV2.white,
        shadow: "0px 1px 0px 0px rgba(255, 255, 255, 0.25) inset",
      },
      disabled: {
        border: lightV2.buttonDisabledBG,
        text: lightV2.buttonDisabledLabel,
        background: lightV2.buttonDisabledBG,
        iconColor: lightV2.buttonDisabledLabel,
      },
      hover: {
        border:
          themeColors["Components/Button/Destructive/colorBgActive"].lightMode,
        text: themeColors["Components/Button/Destructive/colorBgActive"]
          .lightMode,
        background: "transparent",
        iconColor: lightV2.white,
        shadow: "0px 1px 0px 0px rgba(255, 255, 255, 0.25) inset",
      },
      pressed: {
        border:
          themeColors["Components/Button/Destructive/colorBgActive"].lightMode,
        text: themeColors["Components/Button/Destructive/colorBgActive"]
          .lightMode,
        background: "transparent",
        iconColor: lightV2.white,
      },
    },
    text: {
      enabled: {
        border: "transparent",
        text: lightColors.mainGrey,
        background: "transparent",
        iconColor: lightColors.mainGrey,
      },
      disabled: {
        border: "transparent",
        text: lightColors.disabledInnerGrey,
        background: "transparent",
        iconColor: lightColors.disabledInnerGrey,
      },
      hover: {
        border: lightColors.hoverGrey,
        text: lightColors.mainGrey,
        background: lightColors.hoverGrey,
        iconColor: lightColors.mainGrey,
      },
      pressed: {
        border: lightColors.pressedGrey,
        text: lightColors.mainGrey,
        background: lightColors.pressedGrey,
        iconColor: lightColors.mainGrey,
      },
    },
    subAction: {
      enabled: {
        border: lightV2.modalBorderColor,
        text: lightV2.modalTitleColor,
        background: "transparent",
        iconColor: lightV2.modalTitleColor,
        shadow: "0px 1px 1px 0px rgba(121, 135, 151, 0.15)",
      },
      disabled: {
        border: lightV2.buttonDisabledBG,
        text: lightV2.buttonDisabledLabel,
        background: lightV2.buttonDisabledBG,
        iconColor: lightV2.buttonDisabledLabel,
      },
      hover: {
        border: lightV2.buttonDisabledLabel,
        text: lightV2.modalTitleColor,
        background: lightV2.modalBorderColor,
        iconColor: lightV2.modalTitleColor,
        shadow: "0px 1px 1px 0px rgba(121, 135, 151, 0.15)",
      },
      pressed: {
        border: lightV2.buttonDisabledLabel,
        text: lightV2.modalTitleColor,
        background: lightV2.defaultButtonPressed,
        iconColor: lightV2.modalTitleColor,
        shadow: "0px 1px 1px 0px rgba(121, 135, 151, 0.15)",
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
      themeColors["Color/Brand/Neutral/colorPrimaryBorder"].lightMode,
    checkBoxBackground: "transparent",
    checkBoxHoverBorder:
      themeColors["Color/Brand/Primary/colorPrimaryBorder"].lightMode,
    checkBoxHoverBackground:
      themeColors["Color/Brand/Control/colorBgHover"].lightMode,
    checkBoxFocusBorder:
      themeColors["Color/Brand/Primary/colorPrimaryBorder"].lightMode,
    checkBoxFocusBackground: themeColors["Color/Neutral/colorBgBase"].lightMode,
    checkBoxFocusShadow: "",
    checkBoxActiveColor:
      themeColors["Color/Brand/Primary/colorPrimary"].lightMode,
    checkBoxActiveBorder:
      themeColors["Color/Brand/Primary/colorPrimaryBorder"].lightMode,
    checkBoxActiveBackground:
      themeColors["Color/Neutral/colorBgBase"].lightMode,
    disabledBorder:
      themeColors["Color/Brand/Neutral/colorPrimaryBorder"].lightMode,
    disabledBackground:
      themeColors["Color/Neutral/Bg/colorBgDisabled"].lightMode,
    disabledColor:
      themeColors["Color/Brand/Neutral/colorPrimaryBorder"].lightMode,
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
    subtitleColor: themeColors["Color/Neutral/Text/colorTextLabel"].lightMode,
    titleColor: themeColors["Color/Neutral/Text/colorText"].lightMode,
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
    hoverText: lightV2.fontColor,
    backgroundColor: lightV2.white,
    hoverBG: lightV2.menuSelectionColor,
    selectedBGColor: lightV2.menuSelectionColor,
    selectedTextColor: lightV2.fontColor,
    optionTextColor: lightV2.fontColor,
    disabledText: lightV2.disabledGreyText,
    border: lightV2.disabledGrey,
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
    alert: {
      background: "linear-gradient(180deg, #FF4E42 0%, #ED2315 100%)",
      label: lightV2.white,
      deleteColor: lightV2.white,
      outlineColor: lightV2.danger,
    },
    default: {
      background: "linear-gradient(180deg, #4182F0 0%, #2B64E5 100%)",
      label: lightV2.white,
      deleteColor: lightV2.white,
      outlineColor: lightV2.switchBG,
    },
    secondary: {
      background: "linear-gradient(180deg, #4B5563 0%, #1D2125 100%)",
      label: lightV2.white,
      deleteColor: lightV2.white,
      outlineColor: lightV2.fontColor,
    },
    warn: {
      background: "linear-gradient(180deg, #fccb62 0%, #FDBC2E 100%)",
      label: lightV2.fontColor,
      deleteColor: lightV2.fontColor,
      outlineColor: lightV2.orange,
    },
    ok: {
      background: "linear-gradient(180deg, #48d6d6 0%, #15CBCE 100%)",
      label: lightV2.fontColor,
      deleteColor: lightV2.fontColor,
      outlineColor: lightV2.green,
    },
    grey: {
      background: lightV2.modalBorderColor,
      label: lightV2.modalTitleColor,
      deleteColor: lightV2.modalTitleColor,
      outlineColor: lightV2.modalTitleColor,
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
  badge: {
    alert: {
      backgroundColor: lightColors.mainRed,
      textColor: lightColors.white,
    },
    default: {
      backgroundColor: lightColors.mainBlue,
      textColor: lightColors.white,
    },
    secondary: {
      backgroundColor: lightColors.secondAction,
      textColor: lightColors.white,
    },
    warn: {
      backgroundColor: lightColors.mainOrange,
      textColor: lightColors.defaultFontColor,
    },
    ok: {
      backgroundColor: lightColors.mainGreen,
      textColor: lightColors.defaultFontColor,
    },
    grey: {
      backgroundColor: lightColors.actionDisabledGrey,
      textColor: lightColors.defaultFontColor,
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
    border: themeColors["Color/Neutral/Border/colorBorderMinimal"].lightMode,
    labelColor: themeColors["Color/Neutral/Text/colorTextSecondary"].lightMode,
    activeBackground:
      themeColors["Color/Brand/Neutral/colorPrimaryBg"].lightMode,
    activeLabelColor:
      themeColors["Color/Neutral/Text/colorTextSecondary"].lightMode,
    hoverBackground:
      themeColors["Color/Brand/Neutral/colorPrimaryBg"].lightMode,
    hoverLabelColor:
      themeColors["Color/Neutral/Text/colorTextSecondary"].lightMode,
    disabledLabelColor:
      themeColors["Color/Neutral/Text/colorTextDisabled"].lightMode,
    disabledBackground:
      themeColors["Color/Neutral/Bg/colorBgDisabled"].lightMode,
    background: "transparent",
    secondaryBackground: "transparent",
    secondaryLabelColor:
      themeColors["Color/Brand/Error/colorPrimary"].lightMode,
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
};

export const darkTheme: ThemeDefinitionProps = {
  bgColor: darkColors.dark,
  fontColor: darkColors.defaultFontColor,
  borderColor: darkColors.borderColor,
  bulletColor: darkColors.bulletColor,
  logoColor: darkColors.mainRed,
  logoLabelColor: darkColors.logoLabel,
  logoLabelInverse: darkColors.logoLabelInverse,
  loaderColor: darkColors.loaderColor,
  linkColor: darkColors.linkColor,
  boxBackground: darkColors.boxBackground,
  mutedText: darkColors.mutedText,
  secondaryText: darkColors.mainGrey,
  colors: getThemeColors("darkMode"),
  signalColors: {
    main: darkColors.mainGrey,
    danger: darkColors.mainRed,
    good: darkColors.mainGreen,
    info: darkColors.secondActionHover,
    warning: darkColors.mainOrange,
    disabled: darkColors.disabledGrey,
    dark: darkColors.dark,
    clear: darkColors.mainWhite,
  },
  buttons: {
    neutral: {
      enabled: {
        border: darkColors.mainGrey,
        text: darkColors.mainGrey,
        background: "transparent",
        iconColor: darkColors.mainGrey,
      },
      disabled: {
        border: darkColors.disabledInnerGrey,
        text: darkColors.disabledInnerGrey,
        background: darkColors.disabledBGGrey,
        iconColor: darkColors.disabledInnerGrey,
      },
      hover: {
        border: darkColors.mainGrey,
        text: darkColors.mainGrey,
        background: darkColors.hoverGrey,
        iconColor: darkColors.mainGrey,
      },
      pressed: {
        border: darkColors.borderPressedGrey,
        text: darkColors.borderPressedGrey,
        background: darkColors.pressedGrey,
        iconColor: darkColors.borderPressedGrey,
      },
    },
    primary: {
      enabled: {
        border: darkColors.mainWhite,
        text: darkColors.dark,
        background: darkColors.mainWhite,
        iconColor: darkColors.dark,
      },
      disabled: {
        border: darkColors.disabledWhite,
        text: darkColors.dark,
        background: darkColors.disabledWhite,
        iconColor: darkColors.dark,
      },
      hover: {
        border: darkColors.hoverWhite,
        text: darkColors.dark,
        background: darkColors.hoverWhite,
        iconColor: darkColors.dark,
      },
      pressed: {
        border: darkColors.pressedWhite,
        text: darkColors.dark,
        background: darkColors.pressedWhite,
        iconColor: darkColors.dark,
      },
    },
    destructive: {
      enabled: {
        border: darkColors.mainRed,
        text: darkColors.mainRed,
        background: "transparent",
        iconColor: darkColors.mainRed,
      },
      disabled: {
        border: darkColors.disabledInnerGrey,
        text: darkColors.disabledInnerGrey,
        background: darkColors.disabledBGGrey,
        iconColor: darkColors.disabledInnerGrey,
      },
      hover: {
        border: darkColors.mainRed,
        text: darkColors.mainRed,
        background: darkColors.hoverRed,
        iconColor: darkColors.mainRed,
      },
      pressed: {
        border: darkColors.mainRed,
        text: darkColors.dark,
        background: darkColors.mainRed,
        iconColor: darkColors.dark,
      },
    },
    "destructive-bare": {
      enabled: {
        border: darkColors.mainRed,
        text: darkColors.mainRed,
        background: "transparent",
        iconColor: darkColors.mainRed,
      },
      disabled: {
        border: darkColors.disabledInnerGrey,
        text: darkColors.disabledInnerGrey,
        background: darkColors.disabledBGGrey,
        iconColor: darkColors.disabledInnerGrey,
      },
      hover: {
        border: darkColors.mainRed,
        text: darkColors.mainRed,
        background: darkColors.hoverRed,
        iconColor: darkColors.mainRed,
      },
      pressed: {
        border: darkColors.mainRed,
        text: darkColors.dark,
        background: darkColors.mainRed,
        iconColor: darkColors.dark,
      },
    },
    text: {
      enabled: {
        border: "transparent",
        text: darkColors.mainGrey,
        background: "transparent",
        iconColor: darkColors.mainGrey,
      },
      disabled: {
        border: "transparent",
        text: darkColors.disabledInnerGrey,
        background: "transparent",
        iconColor: darkColors.disabledInnerGrey,
      },
      hover: {
        border: darkColors.hoverGrey,
        text: darkColors.mainGrey,
        background: darkColors.hoverGrey,
        iconColor: darkColors.mainGrey,
      },
      pressed: {
        border: darkColors.pressedGrey,
        text: darkColors.borderPressedGrey,
        background: darkColors.pressedGrey,
        iconColor: darkColors.borderPressedGrey,
      },
    },
    subAction: {
      enabled: {
        border: darkColors.secondAction,
        text: darkColors.mainWhite,
        background: darkColors.secondAction,
        iconColor: darkColors.mainWhite,
      },
      disabled: {
        border: darkColors.disabledWhite,
        text: darkColors.dark,
        background: darkColors.disabledWhite,
        iconColor: darkColors.dark,
      },
      hover: {
        border: darkColors.secondActionHover,
        text: darkColors.mainWhite,
        background: darkColors.secondActionHover,
        iconColor: darkColors.mainWhite,
      },
      pressed: {
        border: darkColors.secondActionActive,
        text: darkColors.mainWhite,
        background: darkColors.secondActionActive,
        iconColor: darkColors.mainWhite,
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
      themeColors["Color/Brand/Neutral/colorPrimaryBorder"].darkMode,
    checkBoxBackground: "transparent",
    checkBoxHoverBorder:
      themeColors["Color/Brand/Primary/colorPrimaryBorder"].darkMode,
    checkBoxHoverBackground:
      themeColors["Color/Brand/Control/colorBgHover"].darkMode,
    checkBoxFocusBorder:
      themeColors["Color/Brand/Primary/colorPrimaryBorder"].darkMode,
    checkBoxFocusBackground: themeColors["Color/Neutral/colorBgBase"].darkMode,
    checkBoxFocusShadow: "",
    checkBoxActiveColor:
      themeColors["Color/Brand/Primary/colorPrimary"].darkMode,
    checkBoxActiveBorder:
      themeColors["Color/Brand/Primary/colorPrimaryBorder"].darkMode,
    checkBoxActiveBackground: themeColors["Color/Neutral/colorBgBase"].darkMode,
    disabledBorder:
      themeColors["Color/Brand/Neutral/colorPrimaryBorder"].darkMode,
    disabledBackground:
      themeColors["Color/Neutral/Bg/colorBgDisabled"].darkMode,
    disabledColor:
      themeColors["Color/Brand/Neutral/colorPrimaryBorder"].darkMode,
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
    subtitleColor: themeColors["Color/Neutral/Text/colorTextLabel"].darkMode,
    titleColor: themeColors["Color/Neutral/Text/colorText"].darkMode,
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
    hoverText: darkColors.dark,
    backgroundColor: darkColors.sectionOneBG,
    hoverBG: darkColors.mainGrey,
    selectedBGColor: darkColors.bulletColor,
    selectedTextColor: darkColors.mainWhite,
    optionTextColor: darkColors.defaultFontColor,
    disabledText: darkColors.disabledGrey,
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
    alert: {
      background: darkColors.mainRed,
      label: darkColors.mainWhite,
      deleteColor: darkColors.mainWhite,
    },
    default: {
      background: darkColors.mainGrey,
      label: darkColors.dark,
      deleteColor: darkColors.dark,
    },
    secondary: {
      background: darkColors.secondAction,
      label: darkColors.mainWhite,
      deleteColor: darkColors.mainWhite,
    },
    warn: {
      background: darkColors.mainOrange,
      label: darkColors.dark,
      deleteColor: darkColors.dark,
    },
    ok: {
      background: darkColors.mainGreen,
      label: darkColors.dark,
      deleteColor: darkColors.dark,
    },
    grey: {
      background: darkColors.disabledBGGrey,
      label: darkColors.mainWhite,
      deleteColor: darkColors.mainWhite,
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
  badge: {
    alert: {
      backgroundColor: darkColors.mainRed,
      textColor: darkColors.mainWhite,
    },
    default: {
      backgroundColor: darkColors.mainGrey,
      textColor: darkColors.dark,
    },
    secondary: {
      backgroundColor: darkColors.secondAction,
      textColor: darkColors.mainWhite,
    },
    warn: {
      backgroundColor: darkColors.mainOrange,
      textColor: darkColors.dark,
    },
    ok: {
      backgroundColor: darkColors.mainGreen,
      textColor: darkColors.dark,
    },
    grey: {
      backgroundColor: darkColors.disabledBGGrey,
      textColor: darkColors.mainWhite,
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
    border: themeColors["Color/Neutral/Border/colorBorderMinimal"].darkMode,
    labelColor: themeColors["Color/Neutral/Text/colorTextSecondary"].darkMode,
    activeBackground:
      themeColors["Color/Brand/Neutral/colorPrimaryBg"].darkMode,
    activeLabelColor:
      themeColors["Color/Neutral/Text/colorTextSecondary"].darkMode,
    hoverBackground: themeColors["Color/Brand/Neutral/colorPrimaryBg"].darkMode,
    hoverLabelColor:
      themeColors["Color/Neutral/Text/colorTextSecondary"].darkMode,
    disabledLabelColor:
      themeColors["Color/Neutral/Text/colorTextDisabled"].darkMode,
    disabledBackground:
      themeColors["Color/Neutral/Bg/colorBgDisabled"].darkMode,
    background: "transparent",
    secondaryBackground: "transparent",
    secondaryLabelColor: themeColors["Color/Brand/Error/colorPrimary"].darkMode,
  },
};
