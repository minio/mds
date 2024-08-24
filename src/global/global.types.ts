// This file is part of MinIO Design System
// Copyright (c) 2023 MinIO, Inc.
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

import React from "react";
import { CSSObject, DefaultTheme } from "styled-components";

export interface ThemeColorItem {
  [key: string]: ColorVariant;
}

export interface ColorVariant {
  lightMode: string;
  darkMode: string;
}

export interface ButtonThemeProps {
  border: string;
  text: string;
  background: string;
  iconColor: string;
  shadow?: string;
}

export interface ButtonThemeStatesProps {
  enabled: ButtonThemeProps;
  disabled: ButtonThemeProps;
  hover: ButtonThemeProps;
  pressed: ButtonThemeProps;
}

export interface LoginPageThemeProps {
  formBG: string;
  formBorder?: string;
  formShadow?: string;
  bgFilter: string;
  promoBG: string;
  promoHeader: string;
  promoText: string;
  footerElements: string;
  footerDivider: string;
}

export interface PageHeaderThemeProps {
  color: string;
}

export interface TooltipThemeProps {
  background: string;
  color: string;
}

export interface CommonInputThemeProps {
  labelColor: string;
}

export interface CheckBoxThemeProps {
  checkBoxBorder: string;
  checkBoxBackground: string;
  checkBoxHoverBorder: string;
  checkBoxHoverBackground: string;
  checkBoxFocusBorder: string;
  checkBoxFocusBackground: string;
  checkBoxFocusShadow: string;
  checkBoxActiveCheckboxColor: string;
  checkBoxActiveBorder: string;
  checkBoxActiveBackground: string;
  checkBoxActiveHoverBackground: string;
  checkBoxActiveHoverBorder: string;
  checkBoxActiveHoverCheckboxColor: string;
  checkBoxFocusActiveBorder: string;
  checkBoxFocusActiveBackground: string;
  checkBoxFocusActiveHoverBackground: string;
  checkBoxFocusActiveCheckboxColor: string;
  disabledBorder: string;
  disabledBackground: string;
  disabledColor: string;
}

export interface RadioThemeProps {
  radioBorder: string;
  radioBackground: string;
  radioHoverBorder: string;
  radioActiveBorder: string;
  radioActiveBackground: string;
  radioActiveCheck: string;
  radioHoverBackground: string;
  radioHoverActiveBorder: string;
  radioHoverActiveBackground: string;
  radioHoverActiveCheck: string;
  radioFocusBorder: string;
  radioFocusBackground: string;
  radioFocusCheck: string;
  radioFocusActiveBorder: string;
  radioFocusActiveBackground: string;
  radioFocusActiveCheck: string;
  radioFocusShadow: string;
  radioDisabledBorder: string;
  radioDisabledBackground: string;
  radioDisabledCheck: string;
  labelColor: string;
  subLabelColor: string;
  descriptionColor: string;
}

export interface IconButtonThemeProps {
  buttonBG: string;
  activeBG: string;
  hoverBG: string;
  disabledBG: string;
  color: string;
  disabledColor?: string;
}

export interface ActionCustomButton {
  border: string;
  background: string;
  iconColor: string;
  disabledBorder: string;
  disabledBackground: string;
  disabledIconColor: string;
  hoverBorder: string;
  hoverBackground: string;
  hoverIconColor: string;
  activeBorder: string;
  activeBackground: string;
  activeIconColor: string;
}

export interface DataTableThemeProps {
  border: string;
  disabledBorder: string;
  disabledBG: string;
  selected: string;
  itemDisabled: string;
  hoverColor: string;
  titleColor: string;
  itemColor: string;
  actionButton?: ActionCustomButton;
}

export interface BackLinkThemeProps {
  color: string;
  arrow: string;
  hover: string;
}

export interface InputBoxThemeProps {
  border: string;
  hoverBorder: string;
  color: string;
  backgroundColor: string;
  placeholderColor: string;
  error: string;
  disabledBorder: string;
  disabledBackground: string;
  disabledText: string;
  disabledPlaceholder: string;
}

export interface BreadcrumbsThemeProps {
  elementsColor: string;
  selectedColor: string;
  hoverColor: string;
  hoverBG: string;
}

export interface ActionsListThemeProps {
  titleColor: string;
  containerBorderColor: string;
  backgroundColor: string;
  optionsTextColor: string;
  optionsBorder: string;
  optionsHoverTextColor: string;
  disabledOptionsTextColor: string;
}

export interface ScreenTitleThemeProps {
  subtitleColor: string;
  titleColor: string;
}

export interface IconThemeColorProps {
  accept: string;
  delete: string;
  default: string;
}

export interface ModalBoxThemeProps {
  overlayColor: string;
  containerColor: string;
  closeColor: string;
  closeHoverColor: string;
  closeHoverBG: string;
  titleColor: string;
  border?: string;
  iconColor: IconThemeColorProps;
}

export interface SwitchThemeProps {
  onLabelColor: string;
  offLabelColor: string;
  switchBackground: string;
  onBackgroundColor: string;
  bulletBorderColor: string;
  bulletBGColor: string;
  disabledBackground: string;
  disabledBulletBorderColor: string;
  disabledBulletBGColor: string;
  disabledOnBackground: string;
}

export interface DropdownSelectorThemeProps {
  backgroundColor: string;
  optionTextColor: string;
  selectedTextColor: string;
  selectedBGColor: string;
  hoverText: string;
  hoverBG: string;
  disabledText: string;
  border?: string;
  dangerText: string;
  dangerHoverBG: string;
  dangerHoverText: string;
}

export interface ReadBoxThemeProps {
  borderColor: string;
  backgroundColor: string;
  textColor: string;
}

export interface SignalColorsThemeProps {
  main: string;
  danger: string;
  warning: string;
  good: string;
  info: string;
  disabled: string;
  dark: string;
  clear: string;
  selectBlue?: string;
}

export interface MenuThemeProps {
  vertical?: {
    background: string;
    textColor: string;
    iconBorderColor: string;
    iconBGColor: string;
    hoverSelectedIconBorder: string;
    hoverSelectedBackground: string;
    hoverSelectedColor: string;
    sectionDividerColor: string;
    notificationColor: string;
    dropArrowBackground: string;
    dropArrowColor: string;
    menuCollapseColor: string;
    sectionLabelColor: string;
  };
  horizontal?: {
    menuHeaderBackground: string;
    barBackground: string;
    textColor: string;
    iconBorderColor: string;
    iconBGColor: string;
    hoverSelectedIconBorder: string;
    hoverSelectedBackground: string;
    hoverSelectedColor: string;
    sectionDividerColor: string;
    notificationColor: string;
    dropArrowBackground: string;
    dropArrowColor: string;
    dropBackground: string;
    dropHoverSelectedColor: string;
    noOptionsBar: string;
  };
}

interface TabButtonProps {
  labelColor: string;
  backgroundColor: string;
  hoverBackground: string;
  hoverLabelColor: string;
  selectedBackground: string;
  selectedLabelColor: string;
  disabledBackgroundColor: string;
  disabledColor: string;
}

export interface TabThemeProps {
  vertical?: {
    backgroundColor: string;
    buttons: TabButtonProps;
    borders: string;
  };
  horizontal?: {
    backgroundColor: string;
    selectedIndicatorColor: string;
    buttons: TabButtonProps;
    bottomBorder?: string;
  };
}

export interface CodeEditorThemeProps {
  backgroundColor: string;
  textColor: string;
  helpToolsBarBG: string;
  comment: string;
  entityTag: string;
  entity: string;
  sublimelinterGutterMark: string;
  constant: string;
  string: string;
  keyword: string;
  markupBold: string;
  codeEditorRegexp: string;
}

export interface TagVariantProps {
  background: string;
  label: string;
  deleteColor: string;
}

export interface TagThemeProps {
  primary: TagVariantProps;
  secondary: TagVariantProps;
  destructive: TagVariantProps;
}

interface SnackBarColorElements {
  backgroundColor: string;
  labelColor: string;
}

export interface SnackBarThemeProps {
  default: SnackBarColorElements;
  success: SnackBarColorElements;
  warning: SnackBarColorElements;
  error: SnackBarColorElements;
}

export interface InformativeColorElements {
  backgroundColor: string;
  borderColor: string;
  textColor: string;
}

export interface InformativeMessageThemeProps {
  default: InformativeColorElements;
  success: InformativeColorElements;
  warning: InformativeColorElements;
  error: InformativeColorElements;
}

export interface NotificationCountElements {
  backgroundColor: string;
  textColor: string;
}

export interface NotificationCountStyleProps {
  none: NotificationCountElements;
  info: NotificationCountElements;
  success: NotificationCountElements;
  warning: NotificationCountElements;
  danger: NotificationCountElements;
}

export interface WizardStepColorProps {
  stepLabelColor: string;
  selectedStepBG: string;
  selectedStepLabelColor: string;
  disabledLabelColor: string;
  borderColor?: string;
  buttonHoverBG?: string;
}

export interface WizardColorProps {
  stepsBackground: string;
  vertical: WizardStepColorProps;
  modal: WizardStepColorProps;
}

export interface SliderColorProps {
  railBG: string;
  bulletBG: string;
  disabledRail: string;
  disabledBullet: string;
}

export interface BoxThemeProps {
  border: string;
  backgroundColor: string;
  shadow: string;
}

export interface ValuePairThemeProps {
  labelColor: string;
  textColor: string;
  linkColor: string;
}

export interface ButtonGroupThemeProps {
  border: string;
  labelColor: string;
  background: string;
  hoverBackground: string;
  hoverLabelColor: string;
  activeBackground: string;
  activeLabelColor: string;
  disabledLabelColor: string;
  disabledBackground: string;
  secondaryLabelColor: string;
  secondaryBackground: string;
  selectedBackground: string;
  selectedLabelColor: string;
}

export interface DropdownOptionsThemeProps {
  hoverOptionBG: string;
  activeOptionBG: string;
  optionBG: string;
  optionLabel: string;
  dangerLabel: string;
  disabledLabel: string;
}

export interface BoxedIconThemeProps {
  bgColor: string;
  iconColor: string;
}

export interface PillElementThemeProps {
  bgColor: string;
  labelColor: string;
  borderColor: string;
}

export interface PillThemeProps {
  current: PillElementThemeProps;
  secondary: PillElementThemeProps;
  default: PillElementThemeProps;
}

export interface BadgeElementThemeProps {
  minimalColor: string;
  subtleBG: string;
  subtleLabel: string;
  boldBG: string;
  boldLabel: string;
}

export interface BadgeThemeProps {
  none: BadgeElementThemeProps;
  info: BadgeElementThemeProps;
  success: BadgeElementThemeProps;
  warning: BadgeElementThemeProps;
  danger: BadgeElementThemeProps;
  purple: BadgeElementThemeProps;
  rose: BadgeElementThemeProps;
  scooter: BadgeElementThemeProps;
  disabled: BadgeElementThemeProps;
}

export interface NotificationAlertThemeProps {
  highContrastBG: string;
  highContrastBorder: string;
  minimalContrastBG: string;
  minimalContrastBorder: string;
  iconColor: string;
  titleColor: string;
  contentColor: string;
  actionColor: string;
}

export interface NotificationAlertProps {
  neutral: NotificationAlertThemeProps;
  information: NotificationAlertThemeProps;
  success: NotificationAlertThemeProps;
  warning: NotificationAlertThemeProps;
  danger: NotificationAlertThemeProps;
}

export interface LinkButtonThemeProps {
  destructive: string;
  neutral: string;
  primary: string;
  disabled: string;
}

export interface ThemeDefinitionProps {
  bgColor: string;
  fontColor: string;
  borderColor: string;
  bulletColor: string;
  logoColor: string;
  logoLabelColor: string;
  logoLabelInverse: string;
  loaderColor: string;
  linkColor?: string;
  secondaryLinkColor?: string;
  boxBackground: string;
  mutedText: string;
  secondaryText: string;
  colors: { [key: string]: string };
  paddingSizes: { [key: string]: number };
  borderRadius: { [key: string]: number };
  boxShadows: { [key: string]: string };
  box?: BoxThemeProps;
  signalColors?: SignalColorsThemeProps;
  buttons?: {
    primary?: ButtonThemeStatesProps;
    secondary?: ButtonThemeStatesProps;
    destructive?: ButtonThemeStatesProps;
    "primary-lighter"?: ButtonThemeStatesProps;
    "secondary-lighter"?: ButtonThemeStatesProps;
    "destructive-lighter"?: ButtonThemeStatesProps;
    "primary-ghost"?: ButtonThemeStatesProps;
    "secondary-ghost"?: ButtonThemeStatesProps;
    "destructive-ghost"?: ButtonThemeStatesProps;
  };
  login?: LoginPageThemeProps;
  pageHeader?: PageHeaderThemeProps;
  tooltip?: TooltipThemeProps;
  commonInput?: CommonInputThemeProps;
  checkbox?: CheckBoxThemeProps;
  radioGroup?: RadioThemeProps;
  iconButton?: IconButtonThemeProps;
  dataTable?: DataTableThemeProps;
  backLink?: BackLinkThemeProps;
  inputBox?: InputBoxThemeProps;
  breadcrumbs?: BreadcrumbsThemeProps;
  actionsList?: ActionsListThemeProps;
  screenTitle?: ScreenTitleThemeProps;
  modalBox?: ModalBoxThemeProps;
  switchButton?: SwitchThemeProps;
  dropdownSelector?: DropdownSelectorThemeProps;
  readBox?: ReadBoxThemeProps;
  menu?: MenuThemeProps;
  tabs?: TabThemeProps;
  codeEditor?: CodeEditorThemeProps;
  tag?: TagThemeProps;
  snackbar?: SnackBarThemeProps;
  informativeMessage?: InformativeMessageThemeProps;
  notificationCount?: NotificationCountStyleProps;
  wizard?: WizardColorProps;
  slider?: SliderColorProps;
  valuePair?: ValuePairThemeProps;
  buttonGroup?: ButtonGroupThemeProps;
  dropdownOptions?: DropdownOptionsThemeProps;
  boxedIcon?: BoxedIconThemeProps;
  pill?: PillThemeProps;
  badge?: BadgeThemeProps;
  notificationAlert: NotificationAlertProps;
  linkButton: LinkButtonThemeProps;
}

export interface SelectOption {
  label: string;
  value: string;
  icon?: React.ReactNode;
  indicator?: React.ReactNode;
  extraValue?: any;
  disabled?: boolean;
  subLabel?: string;
  description?: string;
  danger?: boolean;
}

export interface IBytesCalc {
  total: number;
  unit: string;
}

// Components Styling Override type

export type OverrideTheme =
  | CSSObject
  | ((theme: DefaultTheme) => CSSObject)
  | undefined;
