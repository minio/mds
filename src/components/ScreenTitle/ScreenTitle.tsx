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
      justifyContent: "space-between",
      padding: 8,
      width: "100%",
    },
    "& .headerBarIcon": {
      color: get(theme, `screenTitle.iconColor`, lightV2.fontColor),
      "& .min-icon": {
        width: 44,
        height: 44,
      },
    },
    "& .headerBarSubheader": {
      color: get(theme, `screenTitle.subtitleColor`, lightV2.mutedText),
      fontSize: 14,
    },
    "& .titleColumn": {
      height: !subTitle && !titleOptions ? "60px" : ("auto" as const),
      justifyContent: "center",
      display: "flex",
      flexFlow: "column",
      alignItems: "flex-start",
      gap: 4 as const,
      "& .titleElement": {
        fontSize: 24,
        fontWeight: 600,
        fontStyle: "normal" as const,
        lineHeight: "28px",
        color: get(
          theme,
          `screenTitle.titleColor`,
          themeColors["Color/Neutral/Text/colorText"].lightMode,
        ),
      },
      "& .options": {
        display: "flex",
        gap: 28,
        "& .title": {
          fontSize: 12,
          fontStyle: "normal",
          fontWeight: 400,
          lineHeight: "16px",
          color: get(
            theme,
            `screenTitle.subtitleColor`,
            themeColors["Color/Neutral/Text/colorTextTertiary"].lightMode,
          ),
        },
        "& .value": {
          fontSize: 12,
          fontStyle: "normal",
          fontWeight: 600,
          lineHeight: "16px",
          color: get(
            theme,
            `screenTitle.subtitleColor`,
            themeColors["Color/Neutral/Text/colorTextLabel"].lightMode,
          ),
        },
      },
    },
    "& .leftItems": {
      display: "flex",
      alignItems: "flex-start" as const,
      gap: 16,
    },
    "& .rightItems": {
      display: "flex",
      alignItems: "center",
      gap: 10,
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
      subTitle={subTitle}
      titleOptions={titleOptions}
      {...restProps}
    >
      <Box className={"stContainer"}>
        <Box className={"leftItems"}>
          {icon ? <BoxedIcon>{icon}</BoxedIcon> : null}
          <Box className={"titleColumn"}>
            <Box className={"titleElement"}>{title}</Box>
            {subTitle && (
              <span className={"headerBarSubheader"}>{subTitle}</span>
            )}
            {titleOptions && (
              <Box className={"options"}>
                {titleOptions?.map((optionItem) => (
                  <Box className={"optionElement"}>
                    <Box className={"title"}>{optionItem.title}</Box>
                    <Box className={"value"}>{optionItem.value}</Box>
                  </Box>
                ))}
              </Box>
            )}
          </Box>
        </Box>
        {actions && <Box className={"rightItems"}>{actions}</Box>}
      </Box>
    </ScreenTitleContainer>
  );
};

export default ScreenTitle;
