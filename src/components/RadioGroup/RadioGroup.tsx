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
import get from "lodash/get";
import styled from "styled-components";

import FieldContainer from "../../global/FieldContainer";
import { themeColors } from "../../global/themeColors";
import { overridePropsParse } from "../../global/utils";
import CircleHelpIcon from "../Icons/NewDesignIcons/CircleHelpIcon";
import InputLabel from "../InputLabel/InputLabel";
import { InputLabelProps } from "../InputLabel/InputLabel.types";
import Tooltip from "../Tooltip/Tooltip";
import { OptionsContainerProps, RadioGroupProps } from "./RadioGroup.types";

const RadioButton = styled.label<InputLabelProps>(({ sx, theme }) => ({
  "& input": {
    appearance: "none" as const,
    backgroundColor: "transparent",
    margin: 0,
    display: "none",
    "& ~ .radio": {
      position: "relative",
      display: "block",
      boxSizing: "border-box" as const,
      width: 16,
      height: 16,
      borderRadius: "100%",
      border: `2px solid ${get(theme, "radioGroup.radioBorder", themeColors["Color/Neutral/Border/colorBorderSubtle"].lightMode)}`,
      backgroundColor: get(
        theme,
        "radioGroup.radioBackground",
        themeColors["Color/Neutral/Bg/colorBgShell"].lightMode,
      ),
      "&:hover": {
        borderColor: get(
          theme,
          "radioGroup.radioHoverBorder",
          themeColors["Color/Brand/Primary/colorPrimaryHover"].lightMode,
        ),
        cursor: "pointer",
      },
      "&.checked": {
        borderColor: get(
          theme,
          "radioGroup.radioActiveBorder",
          themeColors["Color/Brand/Primary/colorPrimary"].lightMode,
        ),
        backgroundColor: get(
          theme,
          "radioGroup.radioActiveBackground",
          themeColors["Color/Brand/Primary/colorPrimary"].lightMode,
        ),
        "&::before": {
          content: "' '",
          position: "absolute",
          display: "block",
          width: 8,
          height: 8,
          backgroundColor: get(
            theme,
            "radioGroup.radioHoverActiveCheck",
            themeColors["Color/Neutral/Text/colorTextLightSolid"].lightMode,
          ),
          borderRadius: "100%",
          top: "50%",
          left: "50%",
          transform: "translateX(-50%) translateY(-50%)",
        },
        "&:hover": {
          backgroundColor: get(
            theme,
            "radioGroup.radioHoverActiveBackground",
            themeColors["Color/Brand/Primary/colorPrimaryHover"].lightMode,
          ),
          borderColor: get(
            theme,
            "radioGroup.radioHoverActiveBorder",
            themeColors["Color/Brand/Primary/colorPrimaryHover"].lightMode,
          ),
        },
      },
    },
    "&:disabled": {
      "& ~ .radio": {
        border: `2px solid ${get(theme, "radioGroup.radioDisabledBorder", themeColors["Color/Neutral/Border/colorBorderSubtle"].lightMode)}`,
        cursor: "not-allowed",
        boxShadow: "inset 0px 1px 3px rgba(240,240,240,0.1)" as const,
        backgroundColor: get(
          theme,
          "radioGroup.radioDisabledBackground",
          themeColors["Color/Neutral/Bg/colorBgDisabled"].lightMode,
        ),
        "&:hover": {
          borderColor: get(
            theme,
            "radioGroup.radioDisabledBorder",
            themeColors["Color/Neutral/Border/colorBorderSubtle"].lightMode,
          ),
          backgroundColor: get(
            theme,
            "radioGroup.radioDisabledBackground",
            themeColors["Color/Neutral/Border/colorBorderSubtle"].lightMode,
          ),
          cursor: "not-allowed",
        },
        "&.checked": {
          backgroundColor: get(
            theme,
            "radioGroup.radioDisabledBorder",
            themeColors["Color/Neutral/Border/colorBorderSubtle"].lightMode,
          ),
        },
      },
      "&:checked ~ .radio": {
        "&:before": {
          backgroundColor: get(
            theme,
            "radioGroup.radioDisabledCheck",
            themeColors["Color/Neutral/Text/colorTextLightSolid"].lightMode,
          ),
        },
      },
    },
  },
  ...overridePropsParse(sx, theme),
}));

const OptionsContainer = styled.div<OptionsContainerProps>(
  ({ inColumn, theme }) => ({
    flexGrow: 1,
    width: "100%",
    display: "flex",
    flexDirection: inColumn ? "column" : "row",
    justifyContent: "flex-end",
    gap: 15,
    "& .optionLabel": {
      userSelect: "none",
      lineHeight: "20px",
      color: get(
        theme,
        "radioGroup.labelColor",
        themeColors["Color/Neutral/Text/colorTextHeading"].lightMode,
      ),
      "& .subLabel": {
        color: get(
          theme,
          "radioGroup.subLabelColor",
          themeColors["Color/Neutral/Text/colorTextLabel"].lightMode,
        ),
      },
      "&:hover": {
        cursor: "pointer",
      },
      "&.disabled": {
        color: get(
          theme,
          "radioGroup.labelColor",
          themeColors["Color/Neutral/Text/colorTextHeading"].lightMode,
        ),
        cursor: "not-allowed",
      },
    },
  }),
);

const RadioContainer = styled.div(() => ({
  display: "flex",
  alignItems: "center",
  gap: 5,
}));

const RadioMain = styled.div(() => ({
  "& .descriptionLabel": {
    display: "block",
    marginLeft: 21,
    marginTop: 4,
  },
}));

const RadioGroup: FC<RadioGroupProps> = ({
  tooltip,
  label,
  id,
  sx,
  onChange,
  className,
  name,
  selectorOptions,
  currentValue,
  disableOptions = false,
  displayInColumn = false,
  helpTip,
  helpTipPlacement,
}) => {
  return (
    <FieldContainer
      className={`inputItem ${className ? className : ""}`}
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: displayInColumn ? "flex-start" : "center",
        flexBasis: "initial",
        flexWrap: "nowrap",
      }}
    >
      {label !== "" && (
        <InputLabel
          htmlFor={id}
          helpTip={helpTip}
          helpTipPlacement={helpTipPlacement}
        >
          {label}
          {tooltip && tooltip !== "" && (
            <div className={"tooltipContainer"}>
              <Tooltip tooltip={tooltip} placement="top">
                <CircleHelpIcon />
              </Tooltip>
            </div>
          )}
        </InputLabel>
      )}
      <OptionsContainer inColumn={displayInColumn}>
        {selectorOptions && (
          <Fragment>
            {selectorOptions.map((selector) => (
              <RadioMain>
                <RadioContainer key={`option-${id}-${selector.value}`}>
                  <RadioButton
                    htmlFor={`option-${id}-${selector.value}`}
                    sx={sx}
                  >
                    <input
                      type={"radio"}
                      name={name}
                      id={`option-${id}-${selector.value}`}
                      value={selector.value}
                      checked={currentValue === selector.value}
                      onChange={(event) => onChange(event, selector.extraValue)}
                      disabled={disableOptions || !!selector.disabled}
                    />
                    <span
                      className={`radio ${
                        currentValue === selector.value ? "checked" : ""
                      }`}
                    />
                  </RadioButton>
                  <label
                    htmlFor={`option-${id}-${selector.value}`}
                    className={`optionLabel ${
                      currentValue === selector.value ? "checked" : ""
                    } ${disableOptions || !!selector.disabled ? "disabled" : ""}`}
                  >
                    {selector.label}{" "}
                    {selector.subLabel && (
                      <span className={"subLabel"}>{selector.subLabel}</span>
                    )}
                  </label>
                </RadioContainer>
                {selector.description && displayInColumn && (
                  <span className={"descriptionLabel"}>
                    {selector.description}
                  </span>
                )}
              </RadioMain>
            ))}
          </Fragment>
        )}
      </OptionsContainer>
    </FieldContainer>
  );
};

export default RadioGroup;
