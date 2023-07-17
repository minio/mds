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
import styled from "styled-components";
import get from "lodash/get";
import { TabButtonConstructProps, TabButtonProps } from "./Tabs.types";
import { lightColors } from "../../global/themes";

const TabButtonBase = styled.button<TabButtonConstructProps>(
  ({ theme, horizontal }) => ({
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 10,
    height: horizontal ? 50 : 60,
    width: horizontal ? "auto" : 255,
    padding: "0 16px",
    border: "none",
    fontSize: 14,
    fontWeight: horizontal ? "bold" : "inherit",
    backgroundColor: horizontal
      ? get(theme, "tabs.horizontal.buttons.backgroundColor", "transparent")
      : get(
          theme,
          "tabs.vertical.buttons.backgroundColor",
          lightColors.iconButtonBG,
        ),
    color: horizontal
      ? get(theme, "tabs.horizontal.buttons.labelColor", lightColors.mainGrey)
      : get(theme, "tabs.vertical.buttons.labelColor", lightColors.mainGrey),
    borderBottom: horizontal
      ? "transparent 2px solid"
      : `${get(
          theme,
          "tabs.vertical.borders",
          lightColors.tabBorder,
        )} 1px solid`,
    "&:hover": {
      backgroundColor: horizontal
        ? get(theme, "tabs.horizontal.buttons.backgroundColor", "transparent")
        : get(theme, "tabs.vertical.buttons.hoverBackground", "transparent"),
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
      backgroundColor: horizontal
        ? get(theme, "tabs.horizontal.buttons.backgroundColor", "transparent")
        : get(
            theme,
            "tabs.vertical.buttons.disabledBackgroundColor",
            lightColors.disabledBGGrey,
          ),
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
      fontWeight: "bold",
      backgroundColor: horizontal
        ? get(theme, "tabs.horizontal.buttons.backgroundColor", "transparent")
        : get(
            theme,
            "tabs.vertical.buttons.selectedBackground",
            lightColors.headerBorder,
          ),
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
      borderBottom: horizontal
        ? `${get(
            theme,
            "tabs.horizontal.selectedIndicatorColor",
            lightColors.mainBlue,
          )} 2px solid`
        : `${get(
            theme,
            "tabs.vertical.borders",
            lightColors.tabBorder,
          )} 1px solid`,
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
