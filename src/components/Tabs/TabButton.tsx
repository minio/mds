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
import { useTheme } from "@emotion/react";

import { tabButtonBaseStyles, tabButtonHorizontalStyles } from "./Tabs.styles";
import { TabButtonProps } from "./Tabs.types";

const TabButton: FC<TabButtonProps> = ({
  horizontal,
  id,
  onClick,
  label,
  disabled,
  icon,
  selected,
}) => {
  const theme = useTheme();

  const tabButton = tabButtonBaseStyles(theme);
  const tabButtonHorizontal = tabButtonHorizontalStyles(theme);

  return (
    <button
      css={[tabButton, horizontal ? tabButtonHorizontal : {}]}
      id={id}
      onClick={() => onClick()}
      disabled={disabled}
      className={`${selected ? "selected" : ""}`}
      type={"button"}
    >
      {icon}
      {label}
    </button>
  );
};

export default TabButton;
