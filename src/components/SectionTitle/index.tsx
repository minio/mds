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

import React, { FC, HTMLAttributes, useMemo } from "react";
import { css, useTheme } from "@emotion/react";

import { overridePropsParse } from "../../global/utils";
import Grid from "../Grid";
import { SectionTitleProps } from "./SectionTitle.types";

const SectionTitle: FC<SectionTitleProps & HTMLAttributes<HTMLDivElement>> = ({
  separator,
  icon,
  children,
  actions,
  sx,
  ...restProps
}) => {
  const theme = useTheme();

  const overrideThemes = useMemo(() => {
    if (sx) {
      return css({ ...overridePropsParse(sx, theme) });
    }

    return {};
  }, [sx, theme]);

  const sectionParentStyles = css({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: "10px",
  });

  return (
    <div
      css={[sectionParentStyles, overrideThemes]}
      className={"section-title"}
      {...restProps}
    >
      <Grid
        item
        xs
        sx={(theme) => ({
          display: "flex",
          flexGrow: 1,
          justifyContent: "flex-start",
          alignItems: "center",
          "& svg": { marginRight: "10px", width: 26, height: 16 },
          "& .title": {
            fontSize: 20,
            fontStyle: "normal",
            fontWeight: 600,
            lineHeight: "28px",
            margin: "12px 0",
            color: theme.colors["Color/Neutral/Text/colorTextHeading"],
            padding: `${theme.paddingSizes.sizeXXS}px 0`,
          },
        })}
      >
        {icon}
        <span className={"title"}>{children}</span>
      </Grid>
      {actions && (
        <Grid
          item
          xs
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            marginRight: "10px",
          }}
        >
          {" "}
          {actions}
        </Grid>
      )}
    </div>
  );
};

export default SectionTitle;
