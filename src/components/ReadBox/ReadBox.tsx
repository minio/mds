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
import { ReadBoxBaseProps, ReadBoxProps } from "./ReadBox.types";
import InputLabel from "../InputLabel/InputLabel";
import Box from "../Box/Box";

const ReadBoxBase = styled.div<ReadBoxBaseProps>(
  ({ theme, sx, label, multiLine }) => ({
    display: "flex",
    width: label !== "" && !multiLine ? "calc(100% - 170px)" : "100%",
    alignItems: "center",
    "& .predefinedList": {
      backgroundColor: get(theme, "readBox.backgroundColor", "#fbfafa"),
      border: `${get(theme, "readBox.borderColor", "#e5e5e5")} 1px solid`,
      padding: "12px 10px",
      color: get(theme, "readBox.textColor", "#696969"),
      fontSize: 12,
      fontWeight: 600,
      minHeight: 41,
      borderRadius: 4,
      width: "100%",
    },
    "& .innerContent": {
      width: "100%",
      overflowX: "auto",
      whiteSpace: "nowrap",
      scrollbarWidth: "none",
      "&::-webkit-scrollbar": {
        display: "none",
      },
    },
    "& .innerContentMultiline": {
      width: "100%",
      maxHeight: 100,
      overflowY: "auto" as const,
      scrollbarWidth: "none" as const,
      "&::-webkit-scrollbar": {
        display: "none",
      },
    },
    "& .includesActionButton": {
      paddingRight: 45,
      position: "relative" as const,
    },
    "& .overlayShareOption": {
      position: "absolute" as const,
      width: 45,
      right: 0,
      top: "50%",
      transform: "translate(0, -50%)",
    },
    ...sx,
  }),
);

const ReadBox: FC<ReadBoxProps> = ({
  label = "",
  children,
  multiLine,
  actionButton,
  sx,
  helpTip,
  helpTipPlacement,
}) => {
  return (
    <ReadBoxBase
      className={"inputItem"}
      label={label}
      multiLine={multiLine}
      sx={sx}
    >
      {label !== "" && (
        <InputLabel
          className={"inputLabel"}
          helpTip={helpTip}
          helpTipPlacement={helpTipPlacement}
        >
          {label}
        </InputLabel>
      )}
      <Box
        className={`predefinedList ${
          actionButton ? "includesActionButton" : ""
        }`}
      >
        <Box className={multiLine ? "innerContentMultiline" : "innerContent"}>
          {children}
        </Box>
        {actionButton && (
          <Box className={"overlayShareOption"}>{actionButton}</Box>
        )}
      </Box>
    </ReadBoxBase>
  );
};

export default ReadBox;
