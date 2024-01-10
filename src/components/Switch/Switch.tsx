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
import {
  IndicatorProps,
  SwitchContainerProps,
  SwitchProps,
} from "./Switch.types";
import InputLabel from "../InputLabel/InputLabel";
import Tooltip from "../Tooltip/Tooltip";
import HelpIcon from "../Icons/HelpIcon";
import Box from "../Box/Box";
import FieldContainer from "../../global/FieldContainer";

const SwitchIndicator = styled.span<IndicatorProps>(({ theme, active }) => ({
  fontSize: 12,
  color: active
    ? get(theme, "switchButton.onLabelColor", "#081C42")
    : get(theme, "switchButton.offLabelColor", "#E2E2E2"),
  margin: "0 8px 0 10px",
  fontWeight: active ? "bold" : "normal",
}));

const SwitchItem = styled.label(({ theme }) => ({
  width: 54,
  height: 24,
  position: "relative",
  "& .switchRail": {
    position: "relative",
    display: "block",
    width: 54,
    height: 24,
    borderRadius: 24,
    padding: 2,
    boxShadow: "inset 0px 1px 3px rgba(0,0,0,0.1)",
  },

  "& input": {
    display: "none",
    "& ~.switchRail": {
      backgroundColor: get(theme, "switchButton.switchBackground", "#E6EBEB"),
      "&:before": {
        content: "' '",
        position: "absolute",
        display: "block",
        width: 22,
        height: 22,
        top: 1,
        left: 1,
        borderRadius: "100%",
        border: `${get(
          theme,
          "switchButton.bulletBorderColor",
          "#FFF",
        )} 2px solid `,
        backgroundColor: get(theme, "switchButton.bulletBGColor", "#F1F4F4"),
        transitionDuration: "0.1s",
      },
    },
    "&:checked ~.switchRail": {
      backgroundColor: get(theme, "switchButton.onBackgroundColor", "#4CCB92"),
      "&:before": {
        left: "calc(100% - 23px)",
      },
    },
    "&:disabled:checked ~.switchRail": {
      backgroundColor: get(
        theme,
        "switchButton.disabledOnBackground",
        "#8bb0a0",
      ),
    },
    "&:disabled ~.switchRail": {
      cursor: "not-allowed",
      backgroundColor: get(theme, "switchButton.disabledBackground", "#E6EAEB"),
      "&:before": {
        borderColor: get(
          theme,
          "switchButton.disabledBulletBorderColor",
          "#F1F4F4",
        ),
        backgroundColor: get(
          theme,
          "switchButton.disabledBulletBGColor",
          "#E6EAEB",
        ),
      },
    },
  },
}));

const SwitchContainer = styled.div(() => ({
  display: "flex",
  alignItems: "center",
}));

const SwitchMainContainer = styled.div<SwitchContainerProps>(
  ({ theme, sx }) => ({
    "& .inputBase": {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexBasis: "initial",
      flexWrap: "nowrap",
    },
    "& .actionDescription": {
      marginTop: 4,
      padding: "0 10px",
      color: "#999999",
    },
    ...sx,
  }),
);

const Switch: FC<SwitchProps & React.InputHTMLAttributes<HTMLInputElement>> = ({
  tooltip,
  label,
  id,
  sx,
  className,
  switchOnly,
  indicatorLabels,
  description,
  checked,
  helpTip,
  helpTipPlacement,
  ...props
}) => {
  const switchComponent = (
    <SwitchContainer>
      {!switchOnly && (
        <SwitchIndicator active={!checked}>
          {indicatorLabels && indicatorLabels.length > 1
            ? indicatorLabels[1]
            : "OFF"}
        </SwitchIndicator>
      )}
      <SwitchItem id={`${id}-switch`}>
        <input type={"checkbox"} id={id} checked={checked} {...props} />
        <span className={"switchRail"} />
      </SwitchItem>
      {!switchOnly && (
        <SwitchIndicator active={!!checked}>
          {indicatorLabels ? indicatorLabels[0] : "ON"}
        </SwitchIndicator>
      )}
    </SwitchContainer>
  );

  if (switchOnly) {
    return switchComponent;
  }

  return (
    <SwitchMainContainer
      className={`inputItem ${className ? className : ""}`}
      sx={sx}
    >
      <FieldContainer className={"inputBase"}>
        {label !== "" && (
          <InputLabel
            htmlFor={id}
            noMinWidth
            helpTip={helpTip}
            helpTipPlacement={helpTipPlacement}
          >
            {label}
            {tooltip && tooltip !== "" && (
              <div className={"tooltipContainer"}>
                <Tooltip tooltip={tooltip} placement="top">
                  <HelpIcon />
                </Tooltip>
              </div>
            )}
          </InputLabel>
        )}
        {switchComponent}
      </FieldContainer>
      {description && <Box className={"actionDescription"}>{description}</Box>}
    </SwitchMainContainer>
  );
};

export default Switch;
