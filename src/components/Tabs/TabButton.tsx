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

import React, { FC } from "react";
import get from "lodash/get";
import styled from "styled-components";

import { lightColors, lightV2 } from "../../global/themes";
import { TabButtonConstructProps, TabButtonProps } from "./Tabs.types";

const TabButtonBase = styled.button<TabButtonConstructProps>(
  ({ theme, horizontal }) => ({
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 10,
    height: horizontal ? 34 : 26,
    width: horizontal ? "auto" : 255,
    padding: "0 6px",
    border: "none",
    fontSize: 14,
    fontWeight: 400,
    backgroundColor: "transparent",
    color: horizontal
      ? get(theme, "tabs.horizontal.buttons.labelColor", lightColors.mainGrey)
      : get(theme, "tabs.vertical.buttons.labelColor", lightColors.mainGrey),
    borderBottom: horizontal
      ? "0"
      : `${get(
          theme,
          "tabs.vertical.borders",
          lightColors.tabBorder,
        )} 1px solid`,
    "&:hover": {
      cursor: "pointer",
      backgroundColor: horizontal
        ? get(
            theme,
            "tabs.horizontal.buttons.hoverBackground",
            lightV2.modalBorderColor,
          )
        : get(
            theme,
            "tabs.vertical.buttons.hoverBackground",
            lightV2.modalBorderColor,
          ),
      color: horizontal
        ? get(
            theme,
            "tabs.horizontal.buttons.hoverLabelColor",
            lightColors.mainBlue,
          )
        : get(
            theme,
            "tabs.vertical.buttons.hoverLabelColor",
            lightColors.mainBlue,
          ),
    },
    "&:disabled": {
      cursor: "not-allowed",
      backgroundColor: "transparent",
      color: horizontal
        ? get(
            theme,
            "tabs.horizontal.buttons.disabledColor",
            lightColors.disabledInnerGrey,
          )
        : get(
            theme,
            "tabs.vertical.buttons.disabledColor",
            lightColors.disabledInnerGrey,
          ),
    },
    "& svg": {
      width: 18,
      height: 18,
    },
    "&.selected": {
      position: "relative" as const,
      fontWeight: 600,
      backgroundColor: "transparent",
      color: horizontal
        ? get(
            theme,
            "tabs.horizontal.buttons.selectedLabelColor",
            lightColors.mainBlue,
          )
        : get(
            theme,
            "tabs.vertical.buttons.selectedLabelColor",
            lightColors.mainBlue,
          ),
      "&:after": {
        display: horizontal ? "block" : "none",
        content: "' '",
        position: "absolute" as const,
        left: 0,
        bottom: -1,
        width: "100%",
        height: 2,
        backgroundColor: get(
          theme,
          "wizard.modal.selectedStepLabelColor",
          lightV2.switchBG,
        ),
      },
    },
  }),
);

const TabButton: FC<TabButtonProps> = ({
  horizontal,
  id,
  onClick,
  label,
  disabled,
  icon,
  selected,
}) => {
  return (
    <TabButtonBase
      horizontal={!!horizontal}
      id={id}
      onClick={() => onClick()}
      disabled={disabled}
      className={`${selected ? "selected" : ""}`}
    >
      {icon}
      {label}
    </TabButtonBase>
  );
};

export default TabButton;
