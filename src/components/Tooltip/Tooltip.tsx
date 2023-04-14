// This file is part of MinIO Design System
// Copyright (c) 2022 MinIO, Inc.
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

import React, { cloneElement, FC, Fragment, HTMLAttributes } from "react";
import styled, { css, keyframes } from "styled-components";
import get from "lodash/get";
import { TooltipConstructProps, TooltipProps } from "./Tooltip.types";

const opacityAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const TooltipWrapper = styled.span<HTMLAttributes<HTMLDivElement>>(
  {
    display: "inline-flex",
    position: "relative",
  },
  css`
    &:hover {
      & .tooltipElement {
        display: block;
        animation: ${opacityAnimation} 1s;
      }
    }
  `
);

const TooltipItem = styled.div<TooltipConstructProps>(
  ({ theme, placement }) => {
    const tooltipMargin = "35px";
    const tooltipArrowSize = "6px";

    const background = get(theme, "tooltip.background", "#737373");
    const textColor = get(theme, "tooltip.color", "#FFFFFF");

    let placementPosition = {};
    const beforePosition = {
      content: "' '",
      left: "50%",
      border: "solid transparent",
      height: 0,
      width: 0,
      position: "absolute",
      pointerEvents: "none",
      borderWidth: tooltipArrowSize,
      marginLeft: `calc(${tooltipArrowSize} * -1);`,
    };

    switch (placement) {
      case "top":
        placementPosition = {
          top: `calc(${tooltipMargin} * -1);`,
          "&::before": {
            ...beforePosition,
            top: "100%",
            borderTopColor: background,
          },
        };
        break;
      case "right":
        placementPosition = {
          left: `calc(100% + ${tooltipArrowSize} + 10px)`,
          top: "50%",
          transform: "translateX(0) translateY(-50%)",
          "&::before": {
            ...beforePosition,
            left: `calc(${tooltipArrowSize} * -1)`,
            top: "50%",
            transform: "translateX(0) translateY(-50%)",
            borderRightColor: background,
          },
        };
        break;
      case "left":
        placementPosition = {
          left: "auto",
          right: `calc(100% + ${tooltipArrowSize} + 10px)`,
          top: "50%",
          transform: "translateX(0) translateY(-50%)",
          "&::before": {
            ...beforePosition,
            left: "auto",
            right: `calc(${tooltipArrowSize} * -2)`,
            top: "50%",
            transform: "translateX(0) translateY(-50%)",
            borderLeftColor: background,
          },
        };
        break;
      default:
        placementPosition = {
          bottom: `calc(${tooltipMargin} * -1)`,
          "&::before": {
            ...beforePosition,
            bottom: "100%",
            borderBottomColor: background,
          },
        };
    }

    return {
      position: "absolute",
      borderRadius: 4,
      left: "50%",
      transform: "translateX(-50%)",
      color: textColor,
      background: background,
      lineHeight: 1,
      zIndex: 1000,
      whiteSpace: "nowrap",
      padding: 8,
      fontSize: 12,
      display: "none",
      boxShadow: "#00000050 0px 3px 10px",
      ...placementPosition,
    };
  }
);

const Tooltip: FC<TooltipProps> = ({
  children,
  tooltip,
  errorProps,
  placement,
}) => {
  if (tooltip === "") {
    return (
      <Fragment>
        {errorProps ? cloneElement(children, { ...errorProps }) : children}
      </Fragment>
    );
  }

  return (
    <Fragment>
      <TooltipWrapper>
        {errorProps ? cloneElement(children, { ...errorProps }) : children}
        <TooltipItem
          placement={placement || "bottom"}
          className={"tooltipElement"}
        >
          {tooltip}
        </TooltipItem>
      </TooltipWrapper>
    </Fragment>
  );
};

export default Tooltip;
