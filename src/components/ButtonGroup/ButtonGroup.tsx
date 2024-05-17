// This file is part of MinIO Design System
// Copyright (c) 2024 MinIO, Inc.
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
import styled from "styled-components";
import get from "lodash/get";
import { ButtonGroupProps } from "./ButtonGroup.types";
import { lightV2 } from "../../global/themes";
import { overridePropsParse } from "../../global/utils";
import { themeColors } from "../../global/themeColors";

const ButtonGroupMain = styled.div<ButtonGroupProps>(
  ({ theme, sx, displayLabels }) => ({
    display: "inline-flex",
    flexDirection: "row" as const,
    border: `1px solid ${get(theme, "buttonGroup.border", themeColors["Color/Neutral/Border/colorBorderMinimal"].lightMode)}`,
    backgroundColor: get(
      theme,
      "buttonGroup.background",
      lightV2.bgColorBgShell,
    ),
    borderRadius: 4,
    overflow: "hidden",
    width: "initial",
    height: 30,
    boxSizing: "border-box" as const,
    "& > *:not(:last-child)": {
      borderRight: `1px solid   ${get(theme, "buttonGroup.border", themeColors["Color/Neutral/Border/colorBorderMinimal"].lightMode)}`,
    },
    "& button": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "none",
      border: 0,
      borderRadius: 0,
      fontSize: 14,
      lineHeight: "20px",
      fontStyle: "normal",
      fontWeight: 400,
      letterSpacing: "0.16px",
      fontFamily: "'Geist', sans-serif",
      boxSizing: "border-box",
      color: get(
        theme,
        "buttonGroup.labelColor",
        themeColors["Color/Neutral/Text/colorTextSecondary"].lightMode,
      ),
      padding: displayLabels ? "4px 12px" : 6,
      height: 28,
      width: displayLabels ? "initial" : 28,
      gap: 4,
      background: "transparent",
      "& .buttonIcon": {
        height: 16,
        "& > svg": {
          width: 16,
          height: 16,
          minWidth: 16,
          minHeight: 16,
          color: get(
            theme,
            "buttonGroup.labelColor",
            themeColors["Color/Neutral/Text/colorTextSecondary"].lightMode,
          ),
        },
      },
      "&.button-secondary": {
        color: get(
          theme,
          "buttonGroup.secondaryLabelColor",
          themeColors["Color/Brand/Error/colorPrimary"].lightMode,
        ),
        "& .buttonIcon > svg": {
          color: get(
            theme,
            "buttonGroup.secondaryLabelColor",
            themeColors["Color/Brand/Error/colorPrimary"].lightMode,
          ),
        },
      },
      "& .button-label, & .menu-option": {
        display: displayLabels ? "initial" : "none",
        margin: 0,
        whiteSpace: "nowrap",
      },
      "&:disabled": {
        cursor: "not-allowed",
        color: get(
          theme,
          "buttonGroup.disabledLabelColor",
          themeColors["Color/Neutral/Text/colorTextDisabled"].lightMode,
        ),
        backgroundColor: get(
          theme,
          "buttonGroup.disabledBackground",
          themeColors["Color/Neutral/Bg/colorBgDisabled"].lightMode,
        ),
        "& .buttonIcon > svg": {
          color: get(
            theme,
            "buttonGroup.disabledLabelColor",
            themeColors["Color/Neutral/Text/colorTextDisabled"].lightMode,
          ),
        },
      },
      "&:hover:not(:disabled)": {
        background: get(
          theme,
          "buttonGroup.hoverBackground",
          themeColors["Color/Brand/Neutral/colorPrimaryBg"].lightMode,
        ),
        color: get(
          theme,
          "buttonGroup.hoverLabelColor",
          themeColors["Color/Neutral/Text/colorTextSecondary"].lightMode,
        ),
        borderColor: get(
          theme,
          "buttonGroup.border",
          themeColors["Color/Neutral/Border/colorBorderMinimal"].lightMode,
        ),
        "& .buttonIcon > svg": {
          color: get(
            theme,
            "buttonGroup.hoverLabelColor",
            themeColors["Color/Neutral/Text/colorTextSecondary"].lightMode,
          ),
        },
        "&.button-secondary": {
          color: get(
            theme,
            "buttonGroup.secondaryLabelColor",
            themeColors["Color/Brand/Error/colorPrimary"].lightMode,
          ),
          "& .buttonIcon > svg": {
            color: get(
              theme,
              "buttonGroup.secondaryLabelColor",
              themeColors["Color/Brand/Error/colorPrimary"].lightMode,
            ),
          },
        },
      },
      "&:active": {
        backgroundColor: get(
          theme,
          "buttonGroup.activeBackground",
          themeColors["Color/Brand/Neutral/colorPrimaryBg"].lightMode,
        ),
        color: get(
          theme,
          "buttonGroup.activeLabelColor",
          themeColors["Color/Neutral/Text/colorTextSecondary"].lightMode,
        ),
        borderColor: get(
          theme,
          "buttonGroup.border",
          themeColors["Color/Neutral/Border/colorBorderMinimal"].lightMode,
        ),
        "& .buttonIcon > svg": {
          color: get(
            theme,
            "buttonGroup.activeLabelColor",
            themeColors["Color/Neutral/Text/colorTextSecondary"].lightMode,
          ),
        },
      },
    },
    ...overridePropsParse(sx, theme),
  }),
);

const ButtonGroup: FC<ButtonGroupProps> = ({
  displayLabels = true,
  sx,
  children,
  ...restProps
}) => {
  return (
    <ButtonGroupMain {...restProps} sx={sx} displayLabels={displayLabels}>
      {children}
    </ButtonGroupMain>
  );
};

export default ButtonGroup;
