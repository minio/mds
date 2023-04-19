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

import { lightColors } from "./themes";

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

export interface ScreenTitleThemeProps {
  border: string;
  subtitleColor: string;
  iconColor: string;
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
  iconColor: IconThemeColorProps;
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
  screenTitle: ScreenTitleThemeProps;
  modalBox: ModalBoxThemeProps;
}
