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

import React, { FC } from "react";
import styled, { css } from "styled-components";

import { overridePropsParse, paddingSizeVariants } from "../../global/utils";
import {
  NotificationStackConstructProps,
  NotificationStackContainerProps,
} from "./NotificationStack.types";
import { notificationDrop } from "./NotificationStack.utils";

export const NotificationStackContainer =
  styled.div<NotificationStackConstructProps>(
    ({ sx, theme }) => ({
      boxSizing: "border-box",
      display: "flex",
      flexDirection: "column",
      gap: paddingSizeVariants.sizeXS,

      "& .notification-alert": {
        animationDuration: "500ms" as const,
        animationIterationCount: 1,
        animationTimingFunction: "ease-in-out",
        animationFillMode: "forwards",
        animationDirection: "normal",
      },
      ...overridePropsParse(sx, theme),
    }),
    // Keyframes injected with css helper as required by styled-components (Please refer to https://styled-components.com/docs/basics#animations)
    css`
      .notification-alert {
        animation-name: ${notificationDrop};
      }
    `,
  );

const NotificationStack: FC<
  NotificationStackContainerProps & NotificationStackConstructProps
> = ({ children, sx }) => {
  return (
    <NotificationStackContainer sx={sx}>{children}</NotificationStackContainer>
  );
};

export default NotificationStack;
