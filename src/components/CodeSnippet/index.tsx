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

import React, { FC, useMemo } from "react";
import { css, useTheme } from "@emotion/react";

import { overridePropsParse } from "../../global/utils";
import InputLabel from "../InputLabel";
import { inlineBox, readBoxBaseStyles } from "./CodeSnippet.styles";
import { CodeSnippetProps } from "./CodeSnippet.types";

const CodeSnippet: FC<CodeSnippetProps> = ({
  label = "",
  children,
  actionButton,
  mode = "single",
  sx,
}) => {
  const theme = useTheme();

  const overrideThemes = useMemo(() => {
    if (sx) {
      return css({ ...overridePropsParse(sx, theme) });
    }

    return {};
  }, [sx, theme]);

  const multiLine = mode === "multi";

  const readBox = readBoxBaseStyles(theme);

  return (
    <div className={"codeSnippet"}>
      <div>
        {label !== "" && (
          <InputLabel className={"inputLabel"}>{label}</InputLabel>
        )}
      </div>
      <div css={[readBox, mode === "inline" ? inlineBox : {}, overrideThemes]}>
        <div
          className={`predefinedList ${
            actionButton ? "includesActionButton" : ""
          }`}
        >
          <div className={multiLine ? "innerContentMultiline" : "innerContent"}>
            {children}
          </div>
          {actionButton && (
            <div className={"overlayShareOption"}>{actionButton}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CodeSnippet;
