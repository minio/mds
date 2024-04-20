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
import InputLabel from "../InputLabel/InputLabel";
import Box from "../Box/Box";
import { overridePropsParse } from "../../global/utils";
import { themeColors } from "../../global/themeColors";
import {
  ErrorAlertIcon,
  EyeIcon,
  SuccessAlertIcon,
  WarningAlertIcon,
} from "../Icons";
import Button from "../Button/Button";

const InputBase = styled.input.attrs({
  className: "Base_Normal",
})<InputBoxProps & ExtraInputProps>(
  ({
    theme,
    helper,
    state = "normal",
    startIcon,
    overlayIcon,
    overlayObject,
    originType,
    size,
  }) => {
    return {
      lineHeight: "20px",
      width: "100%",
      paddingTop: size === "small" ? 4 : 8,
      paddingBottom: size === "small" ? 4 : 8,
      paddingRight:
        !!overlayIcon || !!overlayObject || originType === "password" ? 35 : 8,
      paddingLeft: !!startIcon ? 35 : 8,
      color: theme.colors["Color/Neutral/Text/colorTextHeading"] + "!important",
      fontSize: 14,
      fontWeight: 400,
      borderWidth: "1px",
      borderStyle: "solid",
      borderRadius: 4,
      outline: "none",
      transitionDuration: "0.1s",
      backgroundColor: get(theme, "inputBox.backgroundColor", "#fff"),
      letterSpacing: "0.16px",
      "&:placeholder": {
        color: get(theme, "inputBox.placeholderColor", "#858585"),
        opacity: 1,
        fontWeight: 400,
        letterSpacing: "0.16px",
      },
      "&:hover": {
        borderColor: theme.colors["Color/Neutral/Border/colorBorderBold"],
      },
      "&:focus": {
        borderColor: theme.colors["Color/Brand/Primary/colorPrimaryBorder"],
        boxShadow: "0px 0px 0px 2px rgba(43, 100, 229, 0.30)",
      },
      "&:disabled, &:read-only": {
        color: theme.colors["Color/Neutral/Text/colorTextHeading"],
        borderColor: theme.colors["Color/Neutral/Border/colorBorderSubtle"],
        backgroundColor: theme.colors["Color/Neutral/Bg/colorBgDisabled"],
        "&:placeholder": {
          color: get(theme, "inputBox.disabledPlaceholder", "#E6EBEB"),
        },
      },
    };
  },
);

const InputContainer = styled.div<InputContainerProps & InputBoxProps>(
  ({ theme, error, size, sx }) => ({
    display: "flex",
    flexGrow: 1,
    width: "100%",

    "& .errorState": {
      color: theme.colors["Color/Brand/Error/colorPrimaryText"],
      borderColor: theme.colors["Color/Brand/Error/colorPrimaryBorder"],
    },
    "& .warningState": {
      color: theme.colors["Color/Brand/Warning/colorPrimaryText"],
      borderColor: theme.colors["Color/Brand/Warning/colorPrimaryBorder"],
    },
    "& .successState": {
      color: theme.colors["Color/Brand/Success/colorPrimaryText"],
      borderColor: theme.colors["Color/Brand/Success/colorPrimaryBorder"],
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
      right: 1,
      top: 1,
      "& button": {
        padding: 6,
        border: 0,
        borderRadius: 0,
        borderTopRightRadius: 4,
        borderBottomRightRadius: 4,
        borderLeft: `1px solid ${theme.colors["Color/Neutral/Border/colorBorderSubtle"]}`,
        boxShadow: "none",
        height: size === "small" ? 28 : 36,
        "& .min-icon": {
          width: 16,
          height: 16,
        },
      },
    },

    "& .startOverlayIcon": {
      position: "absolute",
      left: 8,
      top: size === "small" ? 6 : 10,
      "& svg": {
        width: 16,
        height: 16,
        fill: get(theme, "inputBox.color", "#07193E"),
      },
    },
    ...overridePropsParse(sx, theme),
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
  helper,
  state,
  sx,
  helpTip,
  helpTipPlacement,
  size = "small",
  orientation = "horizontal",
  ...props
}) => {
  const [toggleTextInput, setToggleTextInput] = useState<boolean>(false);

  let inputBoxWrapperIcon = overlayIcon;
  let inputBoxWrapperType = type;

  if (type === "password" && !overlayIcon) {
    inputBoxWrapperIcon = toggleTextInput ? <EyeIcon /> : <EyeIcon />;
    inputBoxWrapperType = toggleTextInput ? "text" : "password";
  }

  return (
    <InputContainer
      error={!!helper && helper !== ""}
      sx={{
        "& .accessoryIcon": {
          float: "right",
          position: "absolute",
          right: overlayIcon || type === "password" ? 8 + 29 : 8,
          top: "50%",
          marginTop: size === "small" ? -22 : -18,
          width: 16,
          height: 16,
        },
        flexDirection: orientation === "vertical" ? "column" : "row",
        ...sx,
      }}
      className={`inputItem inputBox Base_Normal ${className}`}
      size={size}
    >
      {label !== "" && (
        <InputLabel
          htmlFor={id}
          noMinWidth={noLabelMinWidth}
          className={"inputLabel"}
          helpTip={helpTip}
          helpTipPlacement={helpTipPlacement}
          orientation={orientation}
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
          helper={helper}
          state={state}
          className={`inputRebase ${state}State`}
          data-index={index}
          startIcon={startIcon}
          overlayObject={overlayObject}
          overlayIcon={overlayIcon}
          originType={type}
          size={size}
          {...props}
        />
        {state === "error" && (
          <ErrorAlertIcon className={"accessoryIcon errorState"} />
        )}
        {state === "warning" && (
          <WarningAlertIcon className={"accessoryIcon warningState"} />
        )}
        {state === "success" && (
          <SuccessAlertIcon className={"accessoryIcon successState"} />
        )}
        {inputBoxWrapperIcon && (
          <Box className={"overlayAction"}>
            <Button
              onClick={
                overlayAction
                  ? () => {
                      overlayAction();
                    }
                  : () => setToggleTextInput(!toggleTextInput)
              }
              id={`${id}-button`}
              type={"button"}
              icon={inputBoxWrapperIcon}
            />
          </Box>
        )}
        {overlayObject && (
          <Box className={"overlayAction"}>{overlayObject}</Box>
        )}
        {helper !== "" && (
          <Box
            sx={{
              color: themeColors["Color/Neutral/Text/colorTextLabel"],
              marginTop: 4,
            }}
            className={`SM_Normal ${state}State`}
          >
            {helper}
          </Box>
        )}
      </Box>
    </InputContainer>
  );
};

export default InputBox;
