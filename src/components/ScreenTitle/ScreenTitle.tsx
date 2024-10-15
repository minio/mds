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

import React, { FC, HTMLAttributes } from "react";
import get from "lodash/get";
import styled from "styled-components";

import { themeColors } from "../../global/themeColors";
import { lightV2 } from "../../global/themes";
import {
  breakPoints,
  overridePropsParse,
  paddingSizeVariants,
} from "../../global/utils";
import Box from "../Box/Box";
import BoxedIcon from "../BoxedIcon/BoxedIcon";
import {
  ScreenTitleContainerProps,
  ScreenTitleProps,
} from "./ScreenTitle.types";

const ScreenTitleContainer = styled.div<ScreenTitleContainerProps>(
  ({ theme, sx, subTitle, titleOptions }) => ({
    boxSizing: "border-box" as const,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
    "& .stContainer": {
      display: "flex",
      alignItems:
        !subTitle && !titleOptions ? "center" : ("flex-start" as const),
      gap: 24,
      justifyContent: "space-between",
      width: "100%",
    },
    "& .headerBarIcon": {
      color: get(theme, `screenTitle.iconColor`, lightV2.fontColor),
      "& .min-icon": {
        width: 44,
        height: 44,
      },
    },
    "& .titleColumn": {
      height: !subTitle && !titleOptions ? "56px" : ("auto" as const),
      justifyContent: "center",
      display: "flex",
      flexFlow: "column",
      alignItems: "flex-start",
      gap: 0,
      "& .titleElement": {
        color: theme.colors["Color/Neutral/Text/colorTextHeading"],
      },
      "& .subTitle, .superTitle": {
        color: theme.colors["Color/Neutral/Text/colorTextQuaternary"],
      },
    },
    "& .leftItems": {
      flexGrow: 1,
      display: "flex",
      justifyContent: "space-between",
      gap: 16,
      "& .titleColumn": {
        flexGrow: "1",
      },
      "& .options": {
        display: "flex",
        alignItems: "center",
        color: theme.colors["Color/Neutral/Text/colorTextTertiary"],
        gap: 24,
      },
    },
    "& .rightItems": {
      display: "flex",
      alignItems: "center",
      gap: 8,
      height: "100%",
    },
    "& .optionElement": {
      display: "flex",
      gap: paddingSizeVariants.sizeXS,
    },
    [`@media (max-width: ${get(breakPoints, "md", 0)}px)`]: {
      "& .stContainer": {
        flexDirection: "column",
        gap: 12,
        flexFlow: "column",
        alignItems: "flex-start",
      },
      "& .headerBarIcon": { display: "none" },
      "& .headerBarSubheader": {
        display: "flex",
        flexDirection: "column",
      },
      "& .rightItems": {
        width: "100%",
        justifyContent: "flex-start",
      },
      "& .titleColumn": {
        "& .options": {
          flexDirection: "column",
          gap: 4,
        },
      },
    },
    ...overridePropsParse(sx, theme),
  }),
);

const ScreenTitle: FC<ScreenTitleProps & HTMLAttributes<HTMLDivElement>> = ({
  icon,
  superTitle = "",
  subTitle = "",
  title,
  actions,
  sx,
  titleOptions,
  ...restProps
}) => {
  return (
    <ScreenTitleContainer
      className={"screen-title"}
      sx={sx}
      superTitle={superTitle}
      subTitle={subTitle}
      titleOptions={titleOptions}
      {...restProps}
    >
      <Box className={"stContainer"}>
        <Box className={"leftItems"}>
          {icon ? (
            <BoxedIcon
              sx={(theme) => ({
                "& .min-icon": {
                  color: theme.colors["Color/Brand/_minio/Raspberry"],
                  width: 24,
                  height: 24,
                },
              })}
            >
              {icon}
            </BoxedIcon>
          ) : null}
          <Box className={"titleColumn"}>
            {superTitle && (
              <span className={"superTitle SM_Normal"}>{superTitle}</span>
            )}
            <Box className={"titleElement Heading3"}>{title}</Box>
            {subTitle && (
              <span className={"subTitle SM_Normal"}>{subTitle}</span>
            )}
          </Box>
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
    </ScreenTitleContainer>
  );
};

export default ScreenTitle;
