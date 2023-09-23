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

import React, {
  FC,
  Fragment,
  HTMLAttributes,
  useEffect,
  useRef,
  useState,
} from "react";
import styled, { css, keyframes } from "styled-components";
import { createPortal } from "react-dom";
import get from "lodash/get";
import {
  CommonHelpTipPlacement,
  HelpTipBuild,
  HelpTipConstructProps,
  HelpTipProps,
} from "./HelpTip.types";
import Grid from "../Grid/Grid";
import { HelpIconFilled } from "../Icons";

const opacityAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const HelptipWrapper = styled.span<HTMLAttributes<HTMLDivElement>>(
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

const HelptipItem = styled.div<HelpTipBuild>(({ theme, placement }) => {
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
    padding: 2,
    fontSize: 12,
    boxShadow: "#00000050 0px 3px 10px",
    maxWidth: 350,
    ...placementPosition,
  };
});

const HelpTargetItem = styled.div<HelpTipBuild>(({ theme, placement }) => {
  const tooltipArrowSize = "6px";

  const background = get(theme, "tooltip.background", "#737373");

  let placementPosition = {};
  const beforePosition = {
    content: "' '",
    left: "50%",
    height: 0,
    width: 0,
    position: "absolute",
    pointerEvents: "none",
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
    color: background,
    zIndex: 10001,
    ...placementPosition,
  };
});

const BaseHelpTip = styled.div(({ theme }) => ({
  border: `1px solid ${get(theme, "borderColor", "#E2E2E2")}`,
  borderRadius: 2,
  backgroundColor: get(theme, "boxBackground", "#FBFAFA"),
  paddingLeft: 10,
  paddingTop: 5,
  paddingBottom: 5,
  paddingRight: 10,
  "& .leftItems": {
    fontSize: 16,
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    "& .min-icon": {
      marginRight: 5,
      height: 28,
      width: 38,
    },
  },
  "& .helpText": {
    fontSize: 10,
    paddingLeft: 5,
    marginTop: 5,
    color: "black",
  },
}));

export const HelpTip: FC<HelpTipProps> = ({ children, content, placement }) => {
  const [anchorEl, setAnchorEl] = useState<
    (EventTarget & HTMLSpanElement) | null
  >(null);
  const [helptipVisible, setHelptipVisible] = useState<boolean>(false);
  const [helptipOpen, setHelptipOpen] = useState<boolean>(false);

  const handlePointerLeave = () => {
    helptipOpen
      ? setTimeout(() => {
          setHelptipVisible(false);
          setHelptipOpen(false);
        }, 50000)
      : setTimeout(() => {
          setHelptipVisible(false);
        }, 1000);
  };

  const handleClick = () => {
    if (!helptipOpen) {
      setHelptipVisible(false);
      setHelptipOpen(true);
    }
  };

  const HelptipElement: FC<HelpTipConstructProps> = ({
    placement,
    content,
    anchorEl,
  }) => {
    let position = {};
    let calculatedPlacement = placement;
    const boundYLimit = 25;
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
      <HelptipItem
        placement={calculatedPlacement}
        style={position}
        onClick={handleClick}
      >
        {content}
      </HelptipItem>
    );
  };

  const HelptipTarget: FC<HelpTipConstructProps> = ({
    placement,
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
      <HelpTargetItem
        placement={calculatedPlacement}
        style={position}
        onClick={handleClick}
      >
        <HelpIconFilled style={{ width: 12, height: 12 }} />
      </HelpTargetItem>
    );
  };

  function useOutsideAlerter(ref: any) {
    useEffect(() => {
      function handleClickOutside(event: any) {
        if (ref.current && !ref.current.contains(event.target)) {
          setHelptipOpen(false);
        }
      }

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  return placement ? (
    <Fragment>
      <HelptipWrapper
        ref={wrapperRef}
        onPointerEnter={(event) => {
          if (!helptipOpen) {
            setAnchorEl(event.currentTarget);
            setHelptipVisible(true);
          }
        }}
        onMouseLeave={handlePointerLeave}
      >
        {children}
        {helptipVisible &&
          !helptipOpen &&
          createPortal(
            <HelptipTarget
              placement={placement}
              content={<HelpIconFilled />}
              anchorEl={anchorEl}
            />,
            document.body,
          )}
        {helptipOpen &&
          createPortal(
            <HelptipElement
              placement={placement}
              content={
                <BaseHelpTip className={"helpbox-container"} ref={wrapperRef}>
                  <Grid container>
                    <Grid item xs={12} className={"helpText"}>
                      {content}
                    </Grid>
                  </Grid>
                </BaseHelpTip>
              }
              anchorEl={anchorEl}
            />,
            document.body,
          )}
      </HelptipWrapper>
    </Fragment>
  ) : (
    <Fragment>{children}</Fragment>
  );
};

export default HelpTip;
