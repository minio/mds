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

import React, { FC, Fragment } from "react";
import styled from "styled-components";
import get from "lodash/get";
import { InputLabelProps } from "./InputLabel.types";
import HelpTip from "../HelpTip/HelpTip";

const CustomLabel = styled.label<InputLabelProps>(({ theme, sx }) => ({
  fontWeight: 600,
  marginRight: 10,
  fontSize: 14,
  color: get(theme, "commonInput.labelColor", "#07193E"),
  textAlign: "left" as const,
  alignItems: "center",
  display: "flex",
  userSelect: "none",
  whiteSpace: "nowrap",
  "& > span": {
    display: "flex",
    alignItems: "center",
    minWidth: 160,
    "&.noMinWidthLabel": {
      minWidth: "initial",
    },
  },
  ...sx,
}));

const InputLabel: FC<InputLabelProps> = ({
  children,
  sx,
  noMinWidth,
  htmlFor,
  helpTip,
  helpTipPlacement,
  ...props
}) => {
  return (
    <CustomLabel sx={sx} htmlFor={htmlFor} {...props}>
      <span className={`${noMinWidth ? "noMinWidthLabel" : ""}`}>
        {helpTip ? (
          <HelpTip placement={helpTipPlacement} content={helpTip}>
            {children}
          </HelpTip>
        ) : (
          children
        )}
      </span>
    </CustomLabel>
  );
};

export default InputLabel;
