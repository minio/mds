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

import React, { FC, useState } from "react";
import styled from "styled-components";
import get from "lodash/get";
import {
  ExtraInputProps,
  InputBoxProps,
  InputContainerProps,
} from "./InputBox.types";
import HelpIcon from "../Icons/HelpIcon";
import Tooltip from "../Tooltip/Tooltip";
import IconButton from "../IconButton/IconButton";
import InputLabel from "../InputLabel/InputLabel";
import VisibilityOffIcon from "../Icons/VisibilityOffIcon";
import VisibilityOnIcon from "../Icons/VisibilityOnIcon";
import Box from "../Box/Box";

const InputBase = styled.input<InputBoxProps & ExtraInputProps>(
  ({ theme, error, startIcon, overlayIcon, overlayObject, originType }) => {
    let borderColor = get(theme, "inputBox.border", "#E2E2E2");
    let borderHover = get(theme, "inputBox.hoverBorder", "#000110");

    if (error && error !== "") {
      borderColor = get(theme, "inputBox.error", "#C51B3F");
      borderHover = get(theme, "inputBox.error", "#C51B3F");
    }

    return {
      height: 38,
      width: "100%",
      paddingTop: 0,
      paddingRight:
        !!overlayIcon || !!overlayObject || originType === "password" ? 35 : 15,
      paddingLeft: !!startIcon ? 35 : 15,
      paddingBottom: 0,
      color: get(theme, "inputBox.color", "#07193E"),
      fontSize: 13,
      fontWeight: 600,
      border: `${borderColor} 1px solid`,
      borderRadius: 3,
      outline: "none",
      transitionDuration: "0.1s",
      backgroundColor: get(theme, "inputBox.backgroundColor", "#fff"),
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

const InputContainer = styled.div<InputContainerProps>(
  ({ theme, error, sx }) => ({
    display: "flex",
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
    "& .overlayAction": {
      position: "absolute",
      right: 5,
      top: 6,
    },
    "& .inputLabel": {
      marginBottom: error ? 18 : 0,
    },
    "& .startOverlayIcon": {
      position: "absolute",
      left: 10,
      top: 10,
      "& svg": {
        width: 14,
        height: 14,
        fill: get(theme, "inputBox.color", "#07193E"),
      },
    },
    ...sx,
  }),
);

const InputBox: FC<InputBoxProps> = ({
  id,
  tooltip = "",
  index,
  type,
  overlayIcon,
  noLabelMinWidth,
  overlayId,
  overlayAction,
  overlayObject,
  label = "",
  required,
  startIcon,
  className,
  error,
  sx,
  helpTip,
  helpTipPlacement,
  ...props
}) => {
  const [toggleTextInput, setToggleTextInput] = useState<boolean>(false);

  let inputBoxWrapperIcon = overlayIcon;
  let inputBoxWrapperType = type;

  if (type === "password" && !overlayIcon) {
    inputBoxWrapperIcon = toggleTextInput ? (
      <VisibilityOffIcon />
    ) : (
      <VisibilityOnIcon />
    );
    inputBoxWrapperType = toggleTextInput ? "text" : "password";
  }

  return (
    <InputContainer
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
                  <HelpIcon />
                </Box>
              </Tooltip>
            </Box>
          )}
        </InputLabel>
      )}

      <Box className={"textBoxContainer"}>
        {startIcon && <Box className={"startOverlayIcon"}>{startIcon}</Box>}
        <InputBase
          id={id}
          fullWidth
          type={inputBoxWrapperType}
          error={error}
          className={"inputRebase"}
          data-index={index}
          startIcon={startIcon}
          overlayObject={overlayObject}
          overlayIcon={overlayIcon}
          originType={type}
          {...props}
        />
        {inputBoxWrapperIcon && (
          <Box className={"overlayAction"}>
            <IconButton
              onClick={
                overlayAction
                  ? () => {
                      overlayAction();
                    }
                  : () => setToggleTextInput(!toggleTextInput)
              }
              id={overlayId}
              size={"25px"}
              type={"button"}
            >
              {inputBoxWrapperIcon}
            </IconButton>
          </Box>
        )}
        {overlayObject && (
          <Box className={"overlayAction"}>{overlayObject}</Box>
        )}
        {error !== "" && <Box className={"errorText"}>{error}</Box>}
      </Box>
    </InputContainer>
  );
};

export default InputBox;
