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

import React, { FC, Fragment, HTMLAttributes, useMemo } from "react";
import { css, useTheme } from "@emotion/react";

import { overridePropsParse } from "../../global/utils";
import Box from "../Box";
import BoxedIcon from "../BoxedIcon";
import { screenTitleContainerStyles } from "./ScreenTitle.styles";
import { ScreenTitleProps } from "./ScreenTitle.types";

const ScreenTitle: FC<ScreenTitleProps & HTMLAttributes<HTMLDivElement>> = ({
  icon,
  superTitle = "",
  subTitle = "",
  title,
  actions,
  sx,
  titleOptions,
  titleBadges,
  ...restProps
}) => {
  const theme = useTheme();

  const screenTitleContainer = screenTitleContainerStyles(
    theme,
    !!subTitle,
    !!titleOptions,
  );

  const overrideThemes = useMemo(() => {
    if (sx) {
      return css({ ...overridePropsParse(sx, theme) });
    }

    return {};
  }, [sx, theme]);

  return (
    <div
      css={[screenTitleContainer, overrideThemes]}
      className={"screen-title"}
      {...restProps}
    >
      <Box className={"stContainer"}>
        <Box className={"leftItems"}>
          {icon ? (
            <BoxedIcon
              sx={{
                "& .min-icon": {
                  color: theme.colors["Color/Brand/_minio/Raspberry"],
                  width: 24,
                  height: 24,
                },
              }}
            >
              {icon}
            </BoxedIcon>
          ) : null}
          <Box className={"titleColumn"}>
            {superTitle && (
              <div className={"superTitle SM_Normal"}>{superTitle}</div>
            )}
            <Box className={"titleElement Heading3"}>{title}</Box>
            {subTitle && (
              <span className={"subTitle SM_Normal"}>{subTitle}</span>
            )}
          </Box>
          {titleBadges && (
            <Box className={"badges"}>
              {titleBadges?.map((optionItem, index) => (
                <Fragment key={`badge-${index}`}>{optionItem}</Fragment>
              ))}
            </Box>
          )}
          {titleOptions && (
            <Box className={"options"}>
              {titleOptions?.map((optionItem, index) => (
                <Box className={"optionElement"} key={`option-${index}`}>
                  <Box className={"title SM_Normal"}>{optionItem.title}</Box>
                  <Box className={"value SM_Strong"}>{optionItem.value}</Box>
                </Box>
              ))}
            </Box>
          )}
        </Box>
        {actions && <Box className={"rightItems"}>{actions}</Box>}
      </Box>
    </div>
  );
};

export default ScreenTitle;
