// This file is part of MinIO Design System
// Copyright (c) 2024 MinIO, Inc.
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

import { CSSProperties } from "react";
import { css, keyframes } from "@emotion/react";

// Define keyframes for animations
const slideInFromTop = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideOutToTop = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-20px);
  }
`;

const slideInFromBottom = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideOutToBottom = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(20px);
  }
`;

export const animatedNotificationStyles = (
  isExiting: boolean,
  position: string,
) =>
  css({
    width: "max-content",
    maxWidth: 600,
    pointerEvents: "auto",
    margin: "0 auto",
    animation: isExiting
      ? `
          ${
            position.startsWith("bottom") ? slideOutToBottom : slideOutToTop
          } 0.3s ease forwards
        `
      : `
          ${
            position.startsWith("bottom") ? slideInFromBottom : slideInFromTop
          } 0.3s ease-out forwards
        `,
  });

export const notificationsContainerStyles = (position: string) => {
  let posLocation: CSSProperties = {};

  switch (position) {
    case "top-left":
      posLocation = { top: 0, left: 0 };
      break;
    case "top-right":
      posLocation = { top: 0, right: 0 };
      break;
    case "bottom-left":
      posLocation = { bottom: 0, left: 0 };
      break;
    case "bottom-right":
      posLocation = { bottom: 0, right: 0 };
      break;
    case "top-center":
      posLocation = { top: 0, left: "50%", transform: "translateX(-50%)" };
      break;
    case "bottom-center":
      posLocation = { bottom: 0, left: "50%", transform: "translateX(-50%)" };
      break;
  }

  return css({
    position: "fixed",
    maxHeight: "100%",
    overflow: "hidden",
    display: "flex",
    flexDirection: position.startsWith("bottom") ? "column-reverse" : "column",
    padding: 16,
    gap: 8,
    zIndex: 9999,
    pointerEvents: "none",
    ...posLocation,
  });
};
