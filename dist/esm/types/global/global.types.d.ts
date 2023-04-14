export interface ButtonThemeProps {
  border: string;
  text: string;
  background: string;
  iconColor: string;
}
export interface ButtonThemeStatesProps {
  enabled: ButtonThemeProps;
  disabled: ButtonThemeProps;
  hover: ButtonThemeProps;
  pressed: ButtonThemeProps;
}
export interface LoginPageThemeProps {
  formBG: string;
  bgFilter: string;
  promoBG: string;
  promoHeader: string;
  promoText: string;
  footerElements: string;
  footerDivider: string;
}
export interface PageHeaderThemeProps {
  background: string;
  border: string;
  color: string;
}
export interface TooltipThemeProps {
  background: string;
  color: string;
}
export interface CommonInputThemeProps {
  labelColor: string;
  checkBoxBorder: string;
  checkBoxColor: string;
}
export interface IconButtonThemeProps {
  buttonBG: string;
  activeBG: string;
  hoverBG: string;
  disabledBG: string;
  color: string;
}
export interface DataTableThemeProps {
  border: string;
  disabledBorder: string;
  disabledBG: string;
  selected: string;
  deletedDisabled: string;
  hoverColor: string;
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
  error: string;
}
export interface BreadcrumbsBackStyle {
  border: string;
  backgroundColor: string;
}
export interface BreadcrumbsThemeProps {
  border: string;
  backgroundColor: string;
  linksColor: string;
  backButton: BreadcrumbsBackStyle;
  textColor: string;
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
export interface ThemeDefinitionProps {
  bgColor: string;
  fontColor: string;
  borderColor: string;
  bulletColor: string;
  logoColor: string;
  logoLabelColor: string;
  logoLabelInverse: string;
  loaderColor: string;
  boxBackground: string;
  buttons: {
    regular: ButtonThemeStatesProps;
    callAction: ButtonThemeStatesProps;
    secondary: ButtonThemeStatesProps;
    text: ButtonThemeStatesProps;
  };
  login: LoginPageThemeProps;
  pageHeader: PageHeaderThemeProps;
  tooltip: TooltipThemeProps;
  commonInput: CommonInputThemeProps;
  iconButton: IconButtonThemeProps;
  dataTable: DataTableThemeProps;
  backLink: BackLinkThemeProps;
  inputBox: InputBoxThemeProps;
  breadcrumbs: BreadcrumbsThemeProps;
  actionsList: ActionsListThemeProps;
}
