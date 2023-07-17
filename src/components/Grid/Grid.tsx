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

import React, { FC } from "react";
import styled, { CSSObject } from "styled-components";
import get from "lodash/get";
import { GridProps } from "./Grid.types";
import { breakPoints, fractionToPerc } from "../../global/utils";

const CustomDiv = styled.div<GridProps>((props) => {
  let constructProps: CSSObject = {
    boxSizing: "border-box",
  };

  if (props.container) {
    constructProps = {
      display: "flex",
      flexWrap: props.wrap || "wrap",
      flexDirection: props.direction || "row",
      columnGap: `${props.columnSpacing}px` || 0,
      rowGap: `${props.rowSpacing}px` || 0,
      boxSizing: "content-box",
    };
  } else if (props.item) {
    const brPoints = Object.keys(breakPoints);

    brPoints.forEach((item, index) => {
      const gridBRElement = get(props, item, false);

      const breakpointExists = !!gridBRElement;

      if (breakpointExists) {
        let extraWidthBlock = {};

        if (typeof gridBRElement === "number") {
          extraWidthBlock = {
            flexBasis: fractionToPerc(get(props, item, 12)),
            width: fractionToPerc(get(props, item, 12)),
          };
        }

        if (gridBRElement === "hidden") {
          let maxWidth = "";

          if (brPoints[index + 1]) {
            maxWidth = `and (max-width:  ${get(
              breakPoints,
              brPoints[index + 1],
              0,
            )}px)`;
          }

          constructProps = {
            ...constructProps,
            [`@media (min-width: ${get(breakPoints, item, 0)}px) ${maxWidth}`]:
              {
                display: "none",
              },
          };
        }

        constructProps = {
          ...constructProps,
          [`@media (min-width: ${get(breakPoints, item, 0)}px)`]: {
            flexGrow: "1",
            ...extraWidthBlock,
          },
        };
      }
    });
  }

  return { ...constructProps, ...props.sx };
});

const Grid: FC<GridProps> = (props) => {
  return <CustomDiv {...props}>{props.children}</CustomDiv>;
};

export default Grid;
