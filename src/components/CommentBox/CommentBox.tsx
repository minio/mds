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

import { lightV2 } from "../../global/themes";
import { overridePropsParse } from "../../global/utils";
import Box from "../Box/Box";
import CircleHelpIcon from "../Icons/NewDesignIcons/CircleHelpIcon";
import InputLabel from "../InputLabel/InputLabel";
import Tooltip from "../Tooltip/Tooltip";
import {
  CommentBoxProps,
  CommentContainerProps,
  ExtraCommentProps,
} from "./CommentBox.types";

const TextAreaBase = styled.textarea<CommentBoxProps & ExtraCommentProps>(
  ({ theme, error }) => {
    let borderColor = get(theme, "inputBox.border", "#E2E2E2");
    let borderHover = get(theme, "inputBox.hoverBorder", "#000110");

    if (error && error !== "") {
      borderColor = get(theme, "inputBox.error", lightV2.danger);
      borderHover = get(theme, "inputBox.error", lightV2.danger);
    }

    return {
      fontFamily: "'Geist',sans-serif",
      width: "100%",
      resize: "none" as const,
      padding: "16px 14px",
      color: get(theme, "inputBox.color", lightV2.fontColor),
      fontSize: 14,
      fontWeight: 400,
      border: `${borderColor} 1px solid`,
      borderRadius: 3,
      outline: "none",
      transitionDuration: "0.1s",
      backgroundColor: get(theme, "inputBox.backgroundColor", "transparent"),
      "&:placeholder": {
        color: get(theme, "inputBox.placeholderColor", "#858585"),
        opacity: 1,
        fontWeight: 400,
      },
      "&:hover": {
        borderColor: borderHover,
      },
      "&:focus": {
        borderColor: borderHover,
      },
      "&:disabled": {
        border: get(theme, "inputBox.disabledBorder", "#494A4D"),
        backgroundColor: get(theme, "inputBox.disabledBackground", "#B4B4B4"),
        color: get(theme, "inputBox.disabledText", "#E6EBEB"),
        "&:placeholder": {
          color: get(theme, "inputBox.disabledPlaceholder", "#E6EBEB"),
        },
      },
    };
  },
);

const BoxContainer = styled.div<CommentContainerProps>(
  ({ theme, error, sx }) => ({
    display: "flex",
    alignItems: "flex-start",
    flexGrow: 1,
    width: "100%",
    "& .errorText": {
      fontSize: 12,
      color: get(theme, "inputBox.error", "#C51B3F"),
      marginTop: 3,
    },
    "& .textBoxContainer": {
      width: "100%",
      flexGrow: 1,
      position: "relative",
      minWidth: 160,
    },
    "& .tooltipContainer": {
      marginLeft: 5,
      display: "flex",
      alignItems: "center",
      "& .min-icon": {
        width: 13,
      },
    },
    "& .inputLabel": {
      marginBottom: error ? 18 : 0,
    },
    ...overridePropsParse(sx, theme),
  }),
);

const InputBox: FC<CommentBoxProps> = ({
  id,
  tooltip = "",
  index,
  noLabelMinWidth,
  label = "",
  required,
  className,
  error,
  sx,
  helpTip,
  helpTipPlacement,
  ...props
}) => {
  return (
    <BoxContainer
      error={!!error && error !== ""}
      sx={sx}
      className={`inputItem ${className}`}
    >
      {label !== "" && (
        <InputLabel
          htmlFor={id}
          noMinWidth={noLabelMinWidth}
          className={"inputLabel"}
          helpTip={helpTip}
          helpTipPlacement={helpTipPlacement}
        >
          {label}
          {required ? "*" : ""}
          {tooltip !== "" && (
            <Box className={"tooltipContainer"}>
              <Tooltip tooltip={tooltip} placement="top">
                <Box className={tooltip}>
                  <CircleHelpIcon />
                </Box>
              </Tooltip>
            </Box>
          )}
        </InputLabel>
      )}

      <Box className={"textBoxContainer"}>
        <TextAreaBase
          id={id}
          fullWidth
          error={error}
          className={"inputRebase"}
          data-index={index}
          rows={5}
          {...props}
        />
        {error !== "" && <Box className={"errorText"}>{error}</Box>}
      </Box>
    </BoxContainer>
  );
};

export default InputBox;
