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

import { CSSObject } from "styled-components";
import { SelectorType } from "../../global/global.types";
import { CommonHelpTipPlacement } from "../HelpTip/HelpTip.types";

export interface SelectProps {
  options: SelectorType[];
  value?: string;
  id: string;
  name?: string;
  required?: boolean;
  className?: string;
  disabled?: boolean;
  label?: string;
  tooltip?: string;
  noLabelMinWidth?: boolean;
  fixedLabel?: string;
  placeholder?: string;
  onChange: (newValue: string, extraValue?: any) => void;
  sx?: CSSObject;
  helpTip?: React.ReactNode;
  helpTipPlacement?: CommonHelpTipPlacement;
}
