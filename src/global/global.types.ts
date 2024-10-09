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
import { Theme } from "@emotion/react";
import { CSSObject } from "@emotion/serialize";

export interface ThemeDefinition {
  colors: ColorThemeProps;
  shadows: ShadowsThemeProps;
  paddingSizes: PaddingThemeProps;
  borderRadius: BorderRadiusThemeProps;
}

export interface PaddingThemeProps {
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

export interface BorderRadiusThemeProps {
  borderRadiusXS: number;
  borderRadiusSM: number;
  borderRadius: number;
  borderRadiusLG: number;
  borderRadiusXLG: number;
}

export interface ShadowsThemeProps {
  "boxShadow-01": string;
  "boxShadow-02": string;
  "boxShadow-03": string;
  "boxShadow-04": string;
  "focusStyle-Light": string;
  "focusStyle-Dark": string;
  "contentShadow-Light": string;
}

export interface ColorThemeProps {
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
  | ((theme: Theme) => CSSObject)
  | undefined;
