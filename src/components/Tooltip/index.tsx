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

import { cloneElement, FC, Fragment, useState } from "react";
import { createPortal } from "react-dom";
import { useTheme } from "@emotion/react";

import {
  mainTooltipStyle,
  opacityAnimation,
  tooltipPlacement,
} from "./Tooltip.styles";
import { TooltipConstructProps, TooltipProps } from "./Tooltip.types";

const TooltipElement: FC<TooltipConstructProps> = ({
  placement,
  title = "",
  content,
  anchorEl,
}) => {
  const theme = useTheme();

  let position = {};
  let calculatedPlacement = placement;
  const boundYLimit = 45;
  const boundXLimit = 175;

  if (anchorEl) {
    const bounds = anchorEl.getBoundingClientRect();
    const windowWidth = document.documentElement.offsetWidth;
    const windowHeight = document.documentElement.offsetHeight;

    switch (placement) {
      case "bottom": {
        const calcPosition = bounds.top + bounds.height + boundYLimit;

        if (calcPosition > windowHeight) {
          calculatedPlacement = "top";
        }
        break;
      }
      case "left": {
        const calcInitPosition = bounds.left - boundXLimit;

        if (calcInitPosition < 0) {
          calculatedPlacement = "right";
        }

        break;
      }
      case "right": {
        const calcEndPosition = bounds.left + bounds.width + boundXLimit;

        if (calcEndPosition > windowWidth) {
          calculatedPlacement = "left";
        }
        break;
      }
      case "top": {
        if (bounds.top < boundYLimit) {
          calculatedPlacement = "bottom";
        }

        break;
      }
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
    <div
      css={[
        mainTooltipStyle(theme),
        tooltipPlacement(theme, calculatedPlacement),
      ]}
      style={position}
    >
      {title && <div className={"title SM_Strong"}>{title}</div>}
      <div className={"content SM_Normal"}>{content}</div>
    </div>
  );
};

const Tooltip: FC<TooltipProps> = ({
  children,
  tooltip,
  title = "",
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
      <span
        css={[
          {
            display: "inline-flex",
            position: "relative",
            "&:hover": {
              "& .tooltipElement": {
                display: "block",
                animation: `${opacityAnimation} 1s ease`,
              },
            },
          },
        ]}
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
              title={title}
              anchorEl={anchorEl}
            />,
            document.body,
          )}
      </span>
    </Fragment>
  );
};

export default Tooltip;
