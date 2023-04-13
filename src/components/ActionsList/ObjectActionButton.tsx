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
import { ActionButtonProps } from "./ActionsList.types";
import styled from "styled-components";
import get from "lodash/get";

const CustomButton = styled.button<
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ theme }) => ({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "flex-start",
  color: get(theme, "actionsList.optionsTextColor", "#5E5E5E"),
  width: "100%",
  height: 22,
  margin: 0,
  padding: "0 15px",
  fontSize: 14,
  fontWeight: "normal",
  whiteSpace: "nowrap",
  backgroundColor: "transparent",
  border: "none",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: "transparent",
    color: get(theme, "actionsList.optionsHoverTextColor", "#000"),
  },
  "& svg": {
    width: 11,
    marginRight: 8,
  },
  "&:disabled": {
    color: get(theme, "actionsList.disabledOptionsTextColor", "#EBEBEB"),
    cursor: "not-allowed",
  },
  "& .buttonIcon": {
    width: 11,
  },
}));

const ObjectActionButton: FC<ActionButtonProps> = ({
  icon,
  label,
  ...props
}) => {
  return (
    <CustomButton {...props}>
      {icon}
      {label}
    </CustomButton>
  );
};

export default ObjectActionButton;
