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

import React, { RefObject, useMemo, useState } from "react";
import { css, useTheme } from "@emotion/react";

import { overridePropsParse } from "../../global/utils";
import CircleAlertIcon from "../../icons/CircleAlertIcon";
import CircleCheckIcon from "../../icons/CircleCheckIcon";
import CircleHelpIcon from "../../icons/CircleHelpIcon";
import EyeIcon from "../../icons/EyeIcon";
import EyeOffIcon from "../../icons/EyeOffIcon";
import TriangleAlertIcon from "../../icons/TriangleAlertIcon";
import Button from "../Button";
import InputHelper from "../InputHelper";
import InputLabel from "../InputLabel";
import Tooltip from "../Tooltip";
import {
  containerOverlayIcon,
  containerSizeSmall,
  inputBaseSizeSmall,
  inputBaseStyles,
  inputContainerStyles,
} from "./InputBox.styles";
import { InputBoxProps } from "./InputBox.types";

const Inputdiv = React.forwardRef<
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
    const theme = useTheme();

    const overrideThemes = useMemo(() => {
      if (sx) {
        return css({ ...overridePropsParse(sx, theme) });
      }

      return {};
    }, [sx, theme]);

    const baseStyles = inputBaseStyles(theme);
    const containerStyles = inputContainerStyles(theme);

    const [toggleTextInput, setToggleTextInput] = useState<boolean>(false);

    let inputdivWrapperIcon = overlayIcon;
    let inputdivWrapperType = type;

    if (type === "password" && !overlayIcon) {
      inputdivWrapperIcon = toggleTextInput ? <EyeOffIcon /> : <EyeIcon />;
      inputdivWrapperType = toggleTextInput ? "text" : "password";
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

    const hasState = state !== "normal";

    return (
      <div
        css={[
          containerStyles,
          sizeMode === "small" ? containerSizeSmall : {},
          overlayIcon || type === "password" ? containerOverlayIcon : {},
          css({ flexDirection: orientation === "vertical" ? "column" : "row" }),
          overrideThemes,
        ]}
        className={`inputItem inputdiv Base_Normal ${className}`}
      >
        {label !== "" && (
          <InputLabel
            htmlFor={id}
            noMinWidth={noLabelMinWidth}
            className={`inputLabel ${orientation === "vertical" ? "verticalMode" : ""}`}
            orientation={orientation}
            inputSizeMode={sizeMode}
          >
            {label}
            {required ? "*" : ""}
            {tooltip !== "" && (
              <div className={"tooltipContainer"}>
                <Tooltip tooltip={tooltip} placement="top">
                  <div className={tooltip}>
                    <CircleHelpIcon />
                  </div>
                </Tooltip>
              </div>
            )}
          </InputLabel>
        )}

        <div className={"textdivContainer"}>
          <div css={{ position: "relative" }}>
            {startIcon && <div className={"startOverlayIcon"}>{startIcon}</div>}
            <input
              id={id}
              css={[
                baseStyles,
                sizeMode === "small" ? inputBaseSizeSmall : {},
                startIcon ? { paddingLeft: 35 } : {},
                hasState ? { paddingRight: 30 } : {},
                hasState && (overlayObject || inputdivWrapperIcon)
                  ? { paddingRight: 60 }
                  : {},
              ]}
              type={inputdivWrapperType}
              className={`Base_Normal inputRebase ${state}State ${value && value !== "" ? "filled" : ""}`}
              value={value}
              data-index={index}
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
            {inputdivWrapperIcon && (
              <div className={"overlayAction"}>
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
                  icon={inputdivWrapperIcon}
                />
              </div>
            )}
            {overlayObject && (
              <div className={"overlayAction"}>{overlayObject}</div>
            )}
          </div>
          {helper !== undefined && (
            <InputHelper state={state}>{helper}</InputHelper>
          )}
          {children}
        </div>
      </div>
    );
  },
);

export default Inputdiv;
