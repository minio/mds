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

import React, {
  cloneElement,
  FC,
  Fragment,
  HTMLAttributes,
  useState,
} from "react";
import styled, { css, keyframes } from "styled-components";
import { createPortal } from "react-dom";
import get from "lodash/get";
import {
  TooltipBuild,
  TooltipConstructProps,
  TooltipProps,
} from "./Tooltip.types";

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
  `,
);

const TooltipItem = styled.div<TooltipBuild>(({ theme, placement }) => {
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
        transform: "translateX(-50%) translateY(-50%)",
        "&::before": {
          ...beforePosition,
          top: "100%",
          borderTopColor: background,
        },
      };
      break;
    case "right":
      placementPosition = {
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
        transform: "translateX(-100%) translateY(-50%)",
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
        transform: "translateX(-50%)",
        "&::before": {
          ...beforePosition,
          bottom: "100%",
          borderBottomColor: background,
        },
      };
  }

  return {
    position: "fixed",
    borderRadius: 4,
    color: textColor,
    background: background,
    lineHeight: 1,
    zIndex: 10001,
    padding: 8,
    fontSize: 12,
    boxShadow: "#00000050 0px 3px 10px",
    maxWidth: 350,
    ...placementPosition,
  };
});

const TooltipElement: FC<TooltipConstructProps> = ({
  placement,
  content,
  anchorEl,
}) => {
  let position = {};
  let calculatedPlacement = placement;
  const boundYLimit = 45;
  const boundXLimit = 175;

  if (anchorEl) {
    const bounds = anchorEl.getBoundingClientRect();
    const windowWidth = document.documentElement.offsetWidth;
    const windowHeight = document.documentElement.offsetHeight;

    switch (placement) {
      case "bottom":
        const calcPosition = bounds.top + bounds.height + boundYLimit;

        if (calcPosition > windowHeight) {
          calculatedPlacement = "top";
        }
        break;
      case "left":
        const calcInitPosition = bounds.left - boundXLimit;

        if (calcInitPosition < 0) {
          calculatedPlacement = "right";
        }

        break;
      case "right":
        const calcEndPosition = bounds.left + bounds.width + boundXLimit;

        if (calcEndPosition > windowWidth) {
          calculatedPlacement = "left";
        }
        break;
      case "top":
        if (bounds.top < boundYLimit) {
          calculatedPlacement = "bottom";
        }

        break;
    }

    switch (calculatedPlacement) {
      case "bottom":
        position = {
          top: bounds.top + bounds.height + 10,
          left: bounds.left + bounds.width / 2,
        };
        break;
      case "left":
        position = {
          top: bounds.top + bounds.height / 2,
          left: bounds.left - 12,
        };
        break;
      case "right":
        position = {
          top: bounds.top + bounds.height / 2,
          left: bounds.left + bounds.width + 12,
        };
        break;
      case "top":
        position = {
          top: bounds.top - bounds.height / 2 - 10,
          left: bounds.left + bounds.width / 2,
        };
        break;
    }
  }

  return (
    <TooltipItem placement={calculatedPlacement} style={position}>
      {content}
    </TooltipItem>
  );
};

const Tooltip: FC<TooltipProps> = ({
  children,
  tooltip,
  errorProps,
  placement = "bottom",
}) => {
  const [anchorEl, setAnchorEl] = useState<
    (EventTarget & HTMLSpanElement) | null
  >(null);
  const [tooltipVisible, setTooltipVisible] = useState<boolean>(false);

  if (tooltip === "") {
    return (
      <Fragment>
        {errorProps ? cloneElement(children, { ...errorProps }) : children}
      </Fragment>
    );
  }

  return (
    <Fragment>
      <TooltipWrapper
        onPointerEnter={(event) => {
          setAnchorEl(event.currentTarget);
          setTooltipVisible(true);
        }}
        onPointerLeave={() => {
          setTooltipVisible(false);
        }}
      >
        {errorProps ? cloneElement(children, { ...errorProps }) : children}
        {tooltipVisible &&
          createPortal(
            <TooltipElement
              placement={placement}
              content={tooltip}
              anchorEl={anchorEl}
            />,
            document.body,
          )}
      </TooltipWrapper>
    </Fragment>
  );
};

export default Tooltip;
