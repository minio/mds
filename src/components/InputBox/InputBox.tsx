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

import React, { RefObject, useState } from "react";
import get from "lodash/get";
import styled from "styled-components";

import { overridePropsParse, paddingSizeVariants } from "../../global/utils";
import Box from "../Box/Box";
import Button from "../Button/Button";
import CircleAlertIcon from "../Icons/NewDesignIcons/CircleAlertIcon";
import CircleCheckIcon from "../Icons/NewDesignIcons/CircleCheckIcon";
import CircleHelpIcon from "../Icons/NewDesignIcons/CircleHelpIcon";
import EyeIcon from "../Icons/NewDesignIcons/EyeIcon";
import EyeOffIcon from "../Icons/NewDesignIcons/EyeOffIcon";
import TriangleAlertIcon from "../Icons/NewDesignIcons/TriangleAlertIcon";
import InputLabel from "../InputLabel/InputLabel";
import Tooltip from "../Tooltip/Tooltip";
import {
  ExtraInputProps,
  InputBoxProps,
  InputContainerProps,
} from "./InputBox.types";

const InputBase = styled.input<InputBoxProps & ExtraInputProps>(
  ({
    theme,
    startIcon,
    overlayIcon,
    overlayObject,
    originType,
    sizeMode,
    state,
  }) => {
    let paddingRight = 8;
    const overlayAction =
      overlayIcon || overlayObject || originType === "password";
    const overlayState = state !== "normal";

    if (overlayAction || overlayState) {
      paddingRight = overlayAction && overlayState ? 60 : 30;
    }

    return {
      lineHeight: "20px",
      height: sizeMode === "small" ? 28 : 38,
      boxSizing: "border-box",
      width: "100%",
      paddingTop: sizeMode === "small" ? 4 : 8,
      paddingBottom: sizeMode === "small" ? 4 : 8,
      paddingRight: paddingRight,
      paddingLeft: startIcon ? 35 : 8,
      color: theme.colors["Color/Neutral/Text/colorTextHeading"],
      fontSize: 14,
      fontWeight: 400,
      borderWidth: "1px",
      borderStyle: "solid",
      borderRadius: 4,
      borderColor: theme.colors["Color/Neutral/Border/colorBorderSubtle"],
      outline: "none",
      transitionDuration: "0.1s",
      backgroundColor: theme.colors["Color/Neutral/Bg/colorBgFields"],
      letterSpacing: "0.16px",
      "&.filled": {
        borderColor: theme.colors["Color/Neutral/Border/colorBorderSubtle"],
      },
      "&::placeholder": {
        color: theme.colors["Color/Neutral/Text/colorTextPlaceholder"],
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
      "&:read-only": {
        color: theme.colors["Color/Neutral/Text/colorTextHeading"],
        borderColor: theme.colors["Color/Neutral/Border/colorBorderSubtle"],
        backgroundColor: theme.colors["Color/Neutral/Bg/colorBgShell"],
        "&:placeholder": {
          color: get(theme, "inputBox.disabledPlaceholder", "#E6EBEB"),
        },
      },
      "&::-webkit-outer-spin-button, &::-webkit-inner-spin-button": {
        WebkitAppearance: "none",
        margin: 0,
      },
      "&[type=number]": {
        "-moz-appearance": "textfield",
      },
      "&:disabled": {
        cursor: "not-allowed",
        userSelect: "none",
        color: theme.colors["Color/Neutral/Text/colorTextPlaceholder"],
        borderColor: theme.colors["Color/Neutral/Border/colorBorderSubtle"],
        backgroundColor: theme.colors["Color/Neutral/Bg/colorBgDisabled"],
        "&:placeholder": {
          color: theme.colors["Color/Neutral/Text/colorTextPlaceholder"],
        },
      },
    };
  },
);

const InputContainer = styled.div<InputContainerProps>(
  ({ theme, sizeMode, sx }) => ({
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
      boxSizing: "border-box",
      "& button": {
        padding: 6,
        border: 0,
        borderRadius: 0,
        borderTopRightRadius: 3,
        borderBottomRightRadius: 3,
        borderLeft: `1px solid ${theme.colors["Color/Neutral/Border/colorBorderSubtle"]}`,
        boxShadow: "none",
        height: sizeMode === "small" ? 26 : 36,
        boxSizing: "border-box",
        fontWeight: "400",
        "& .min-icon": {
          width: 16,
          height: 16,
          color: theme.colors["Color/Neutral/Text/colorText"],
          fill: theme.colors["Color/Neutral/Text/colorText"],
        },
      },
    },

    "& .startOverlayIcon": {
      position: "absolute" as const,
      left: 8,
      top: sizeMode === "small" ? 6 : 10,
      "& svg": {
        width: 16,
        height: 16,
        color: get(theme, "inputBox.color", "#07193E"),
      },
    },
    ...overridePropsParse(sx, theme),
  }),
);

const InputBox = React.forwardRef<
  React.HTMLAttributes<HTMLInputElement>,
  InputBoxProps
>(
  (
    {
      id,
      tooltip = "",
      index,
      type,
      overlayIcon,
      noLabelMinWidth,
      overlayAction,
      overlayObject,
      label = "",
      required,
      startIcon,
      className,
      helper,
      state = "normal",
      sx,
      helpTip,
      helpTipPlacement,
      sizeMode = "large",
      orientation = "horizontal",
      onFocus,
      disableErrorUntilFocus = false,
      children,
      value,
      ...props
    },
    ref,
  ) => {
    const [toggleTextInput, setToggleTextInput] = useState<boolean>(false);

    let inputBoxWrapperIcon = overlayIcon;
    let inputBoxWrapperType = type;

    if (type === "password" && !overlayIcon) {
      inputBoxWrapperIcon = toggleTextInput ? <EyeOffIcon /> : <EyeIcon />;
      inputBoxWrapperType = toggleTextInput ? "text" : "password";
    }

    const [hasReceivedFocus, setHasReceivedFocus] = useState<boolean>(false);

    if (
      !disableErrorUntilFocus &&
      state === "error" &&
      !hasReceivedFocus &&
      helper
    ) {
      helper = "";
      state = "normal";
    }

    return (
      <InputContainer
        sx={(theme) => ({
          "& .accessoryIcon": {
            position: "absolute",
            right: overlayIcon || type === "password" ? 8 + 29 : 8,
            top: "50%",
            transform: "translateY(-50%)",
            width: 16,
            height: 16,
          },
          flexDirection: orientation === "vertical" ? "column" : "row",
          "& .inputLabel.verticalMode": {
            fontSize: 14,
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "20px",
            letterSpacing: "0.16px",
            color: theme.colors["Color/Neutral/Text/colorTextLabel"],
            marginBottom: paddingSizeVariants.sizeXXS,
          },
          ...sx,
        })}
        className={`inputItem inputBox Base_Normal ${className}`}
        sizeMode={sizeMode}
      >
        {label !== "" && (
          <InputLabel
            htmlFor={id}
            noMinWidth={noLabelMinWidth}
            className={`inputLabel ${orientation === "vertical" ? "verticalMode" : ""}`}
            helpTip={helpTip}
            helpTipPlacement={helpTipPlacement}
            orientation={orientation}
            inputSizeMode={sizeMode}
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
          <Box sx={{ position: "relative" }}>
            {startIcon && <Box className={"startOverlayIcon"}>{startIcon}</Box>}
            <InputBase
              id={id}
              fullWidth
              type={inputBoxWrapperType}
              helper={helper}
              state={state}
              className={`Base_Normal inputRebase ${state}State ${value && value !== "" ? "filled" : ""}`}
              value={value}
              data-index={index}
              startIcon={startIcon}
              overlayObject={overlayObject}
              overlayIcon={overlayIcon}
              originType={type}
              sizeMode={sizeMode}
              onFocus={(e) => {
                setHasReceivedFocus(true);
                if (onFocus) {
                  onFocus(e);
                }
              }}
              ref={ref as RefObject<HTMLInputElement> | null | undefined}
              {...props}
            />
            {state === "error" && (
              <CircleAlertIcon className={"accessoryIcon errorState"} />
            )}
            {state === "warning" && (
              <TriangleAlertIcon className={"accessoryIcon warningState"} />
            )}
            {state === "success" && (
              <CircleCheckIcon className={"accessoryIcon successState"} />
            )}
            {inputBoxWrapperIcon && (
              <Box className={"overlayAction"}>
                <Button
                  onClick={
                    overlayAction
                      ? (e) => {
                          overlayAction(e);
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
          </Box>
          {helper !== undefined && (
            <Box
              sx={(theme) => ({
                color: theme.colors["Color/Neutral/Text/colorTextLabel"],
                marginTop: 4,
                lineHeight: "16px",
                minHeight: 16,
              })}
              className={`SM_Normal ${state}State`}
            >
              {helper}
            </Box>
          )}
          {children}
        </Box>
      </InputContainer>
    );
  },
);

export default InputBox;
