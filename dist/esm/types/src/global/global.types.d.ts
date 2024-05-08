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
  checkBoxActiveColor: string;
  checkBoxActiveBorder: string;
  checkBoxActiveBackground: string;
  disabledBorder: string;
  disabledBackground: string;
  disabledColor: string;
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
  outlineColor?: string;
  label: string;
  deleteColor: string;
}
export interface TagThemeProps {
  default: TagVariantProps;
  secondary: TagVariantProps;
  warn: TagVariantProps;
  alert: TagVariantProps;
  ok: TagVariantProps;
  grey: TagVariantProps;
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
export interface BadgeColorElements {
  backgroundColor: string;
  textColor: string;
}
export interface BadgeStyleProps {
  alert: BadgeColorElements;
  default: BadgeColorElements;
  secondary: BadgeColorElements;
  warn: BadgeColorElements;
  ok: BadgeColorElements;
  grey: BadgeColorElements;
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
  colors: {
    [key: string]: string;
  };
  box?: BoxThemeProps;
  signalColors?: SignalColorsThemeProps;
  buttons?: {
    regular?: ButtonThemeStatesProps;
    callAction?: ButtonThemeStatesProps;
    secondary?: ButtonThemeStatesProps;
    text?: ButtonThemeStatesProps;
    subAction?: ButtonThemeStatesProps;
  };
  roundedButtons?: {
    regular?: ButtonThemeStatesProps;
  };
  login?: LoginPageThemeProps;
  pageHeader?: PageHeaderThemeProps;
  tooltip?: TooltipThemeProps;
  commonInput?: CommonInputThemeProps;
  checkbox?: CheckBoxThemeProps;
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
  badge?: BadgeStyleProps;
  wizard?: WizardColorProps;
  slider?: SliderColorProps;
  valuePair?: ValuePairThemeProps;
  buttonGroup?: ButtonGroupThemeProps;
  dropdownOptions?: DropdownOptionsThemeProps;
  boxedIcon?: BoxedIconThemeProps;
  pill?: PillThemeProps;
}
export interface SelectOption {
  label: string;
  value: string;
  icon?: React.ReactNode;
  indicator?: React.ReactNode;
  extraValue?: any;
  disabled?: boolean;
}
export interface IBytesCalc {
  total: number;
  unit: string;
}
export type OverrideTheme =
  | CSSObject
  | ((theme: DefaultTheme) => CSSObject)
  | undefined;
export {};
