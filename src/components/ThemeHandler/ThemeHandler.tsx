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

import React, { FC } from "react";
import isPropValid from "@emotion/is-prop-valid";
import { StyleSheetManager, ThemeProvider } from "styled-components";

import { ThemeDefinitionProps } from "../../global/global.types";
import { darkTheme, lightTheme } from "../../global/themes";
import { ThemeHandlerProps } from "./ThemeHandler.types";

const ThemeHandler: FC<ThemeHandlerProps> = ({
  darkMode = false,
  children,
  customTheme,
}) => {
  let selectedTheme: ThemeDefinitionProps = darkMode ? darkTheme : lightTheme;

  if (customTheme) {
    selectedTheme = customTheme;
  }

  const shouldForwardProp = (propName: string, target: any) => {
    if (typeof target === "string") {
      // For HTML elements, forward the prop if it is a valid HTML attribute
      return isPropValid(propName);
    }
    // For other elements, forward all props
    return true;
  };

  return (
    <StyleSheetManager shouldForwardProp={shouldForwardProp}>
      <ThemeProvider theme={selectedTheme}>{children}</ThemeProvider>
    </StyleSheetManager>
  );
};

export default ThemeHandler;
