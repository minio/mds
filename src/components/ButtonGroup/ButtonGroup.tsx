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

import React, { cloneElement, FC, isValidElement } from "react";
import get from "lodash/get";
import styled from "styled-components";

import { themeColors } from "../../global/themeColors";
import { lightV2 } from "../../global/themes";
import { overridePropsParse } from "../../global/utils";
import { ButtonProps } from "../Button/Button.types";
import Loader from "../Loader/Loader";
import { ButtonGroupProps } from "./ButtonGroup.types";

const ButtonGroupMain = styled.div<ButtonGroupProps>(({ theme, sx }) => ({
  display: "inline-flex",
  flexDirection: "row" as const,
  border: `1px solid ${get(theme, "buttonGroup.border", themeColors["Color/Neutral/Border/colorBorderMinimal"].lightMode)}`,
  backgroundColor: get(theme, "buttonGroup.background", lightV2.bgColorBgShell),
  borderRadius: 4,
  overflow: "hidden",
  width: "initial",
  height: 28,
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
    height: 26,
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
      boxShadow: "none",
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
      boxShadow: "none",
      "& .buttonIcon > svg": {
        color: get(
          theme,
          "buttonGroup.activeLabelColor",
          themeColors["Color/Neutral/Text/colorTextSecondary"].lightMode,
        ),
      },
    },
    "&.selected:not(:disabled)": {
      backgroundColor: get(
        theme,
        "buttonGroup.selectedBackground",
        themeColors["Color/Brand/Control/colorBgActive"].lightMode,
      ),
      color: get(
        theme,
        "buttonGroup.selectedLabelColor",
        themeColors["Color/Brand/Info/colorPrimaryActive"].lightMode,
      ),
      "& .buttonIcon > svg": {
        color: get(
          theme,
          "buttonGroup.selectedLabelColor",
          themeColors["Color/Brand/Info/colorPrimaryActive"].lightMode,
        ),
      },
      "&:hover": {
        backgroundColor: get(
          theme,
          "buttonGroup.selectedBackground",
          themeColors["Color/Brand/Control/colorBgActive"].lightMode,
        ),
        color: get(
          theme,
          "buttonGroup.selectedLabelColor",
          themeColors["Color/Brand/Info/colorPrimaryActive"].lightMode,
        ),
        "& .buttonIcon > svg": {
          color: get(
            theme,
            "buttonGroup.selectedLabelColor",
            themeColors["Color/Brand/Info/colorPrimaryActive"].lightMode,
          ),
        },
      },
    },
  },
  ...overridePropsParse(sx, theme),
}));

const ButtonGroup: FC<ButtonGroupProps> = ({
  sx,
  children,
  isLoading,
  ...restProps
}) => {
  if (isLoading) {
    return <Loader />;
  }

  return (
    <ButtonGroupMain {...restProps} sx={sx}>
      {React.Children.map(children, (child) => {
        // Ensure the child is a valid ButtonProps and pass the prop
        if (isValidElement<ButtonProps>(child)) {
          return cloneElement(child, { inButtonGroup: true });
        }
        return child;
      })}
    </ButtonGroupMain>
  );
};

export default ButtonGroup;
