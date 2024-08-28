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

import React, { RefObject } from "react";
import get from "lodash/get";
import styled from "styled-components";

import { lightV2 } from "../../global/themes";
import { overridePropsParse } from "../../global/utils";
import { BoxProps } from "./Box.types";

const BoxParent = styled.div<BoxProps & React.HTMLAttributes<HTMLDivElement>>(
  ({
    theme,
    sx,
    withBorders,
    customBorderPadding,
    customBorderRadius,
    useBackground,
  }) => {
    let extraBorders = {};

    if (withBorders) {
      extraBorders = {
        border: `${get(theme, "box.border", lightV2.disabledGrey)} 1px solid`,
        borderRadius: customBorderRadius || 16,
        padding: customBorderPadding || 24,
        boxShadow: get(theme, "box.shadow", "none"),
        backgroundColor: get(theme, "box.backgroundColor", lightV2.white),
      };
    }

    return {
      backgroundColor: useBackground
        ? get(theme, "boxBackground", "#FBFAFA")
        : "transparent",
      ...extraBorders,
      ...overridePropsParse(sx, theme),
    };
  },
);

const Box = React.forwardRef<React.HTMLAttributes<HTMLDivElement>, BoxProps>(
  (
    {
      sx,
      children,
      customBorderPadding,
      customBorderRadius = 16,
      className,
      withBorders,
      ...props
    },
    ref,
  ) => {
    return (
      <BoxParent
        {...props}
        sx={sx}
        customBorderPadding={customBorderPadding}
        customBorderRadius={customBorderRadius}
        ref={ref as RefObject<HTMLDivElement> | null | undefined}
        withBorders={withBorders}
        className={`box ${withBorders ? "with-borders" : ""} ${className || ""}`}
      >
        {children}
      </BoxParent>
    );
  },
);

export default Box;
