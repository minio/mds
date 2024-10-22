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

import { forwardRef, HTMLAttributes, RefObject, useMemo } from "react";
import { css, useTheme } from "@emotion/react";

import { overridePropsParse } from "../../global/utils";
import { BoxProps } from "./Box.types";

const Box = forwardRef<HTMLAttributes<HTMLDivElement>, BoxProps>(
  (
    {
      children,
      customBorderPadding,
      customBorderRadius = 16,
      className,
      withBorders,
      sx,
      ...props
    },
    ref,
  ) => {
    const theme = useTheme();

    const overrideThemes = useMemo(() => {
      if (sx) {
        return css({ ...overridePropsParse(sx, theme) });
      }

      return {};
    }, [sx, theme]);

    const borderStyle = css({
      borderRadius: customBorderRadius || theme.borderRadius["borderRadiusXLG"],
      padding: customBorderPadding || theme.paddingSizes["sizeLG"],
      backgroundColor: theme.colors["Color/Neutral/Bg/colorBgContainer"],
    });

    const baseTheme = css({
      backgroundColor: "transparent",
    });

    return (
      <div
        ref={ref as RefObject<HTMLDivElement> | null | undefined}
        css={[baseTheme, withBorders ? borderStyle : {}, overrideThemes]}
        className={`box ${className ?? ""}`}
        {...props}
      >
        {children}
      </div>
    );
  },
);

export default Box;
