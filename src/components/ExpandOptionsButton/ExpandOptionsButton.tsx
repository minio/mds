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

import { lightColors } from "../../global/themes";
import { overridePropsParse } from "../../global/utils";
import ChevronDownIcon from "../Icons/NewDesignIcons/ChevronDownIcon";
import ChevronUpIcon from "../Icons/NewDesignIcons/ChevronUpIcon";
import {
  ConstructExpandOptionsProps,
  ExpandOptionsButtonProps,
} from "./ExpandOptionsButton.types";

const ExpandButtonBase = styled.button<ConstructExpandOptionsProps>(
  ({ sx, theme }) => ({
    display: "flex",
    cursor: "pointer",
    alignItems: "center",
    backgroundColor: "transparent",
    borderRadius: 3,
    padding: 5,
    height: 10,
    fontSize: 10,
    border: "none",
    color: get(theme, "buttons.regular.enabled.text", lightColors.mainGrey),
    "& svg": {
      width: 16,
      height: 16,
    },
    "&:hover": {
      color: get(theme, "buttons.regular.hover.text", lightColors.mainGrey),
      backgroundColor: get(
        theme,
        "buttons.regular.hover.background",
        lightColors.hoverGrey,
      ),
    },
    "&:active": {
      color: get(theme, "buttons.regular.pressed.text", lightColors.mainGrey),
      backgroundColor: get(
        theme,
        "buttons.regular.pressed.background",
        lightColors.pressedGrey,
      ),
    },
    "&:disabled": {
      color: get(
        theme,
        "buttons.regular.disabled.text",
        lightColors.disabledInnerGrey,
      ),
      backgroundColor: "transparent",
      cursor: "not-allowed",
    },
    ...overridePropsParse(sx, theme),
  }),
);

const ExpandOptionsButton: FC<
  ExpandOptionsButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ open, label, sx, ...props }) => {
  return (
    <ExpandButtonBase sx={sx} {...props}>
      {label}
      {open ? <ChevronUpIcon /> : <ChevronDownIcon />}
    </ExpandButtonBase>
  );
};

export default ExpandOptionsButton;
