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

import { lightColors } from "../../global/themes";
import { overridePropsParse, paddingSizeVariants } from "../../global/utils";
import Box from "../Box/Box";
import ChevronDownIcon from "../Icons/NewDesignIcons/ChevronDownIcon";
import ChevronUpIcon from "../Icons/NewDesignIcons/ChevronUpIcon";
import {
  AccordionContentProps,
  AccordionMainProps,
  AccordionProps,
} from "./Accordion.types";

const AccordionContainer = styled.div<AccordionMainProps>(({ theme, sx }) => ({
  borderBottom: `1px solid ${get(theme, "borderColor", lightColors.borderColor)}`,

  borderRadius: 2,
  ...overridePropsParse(sx, theme),
}));

const AccordionTitleBar = styled.div<HTMLAttributes<HTMLDivElement>>(
  ({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: `${paddingSizeVariants.sizeXXS}px 0`,
    cursor: "pointer",
    userSelect: "none",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "20px",
    letterSpacing: "0.16px",
    color: theme.colors["Color/Neutral/Text/colorTextHeading"],
    "&.disabled": {
      cursor: "not-allowed",
      color: theme.colors["Color/Neutral/Text/colorTextDisabled"],
    },
  }),
);

const AccordionContent = styled.div<AccordionContentProps>(
  ({ theme, expanded, backgroundColor }) => ({
    borderTop: 0,
    display: "grid",
    gridTemplateRows: expanded ? "1fr" : "0fr",
    transition: "250ms grid-template-rows ease",
    "& .expandSubContainer": {
      overflow: "hidden",
      padding: expanded ? paddingSizeVariants.sizeXS : 0,
      transition: expanded ? "initial" : "250ms padding ease 150ms",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      backgroundColor: backgroundColor
        ? theme.colors["Color/Neutral/Bg/colorBgSections"]
        : "initial",
      color: theme.colors["Color/Neutral/Text/colorTextLabel"],
      marginBottom: expanded ? paddingSizeVariants.sizeXS : 0,
      "& > div:last-of-type": {
        marginBottom: 36,
      },
    },
  }),
);

const Accordion: FC<AccordionProps> = ({
  title,
  expanded,
  children,
  onTitleClick,
  disabled,
  id,
  contentBackgroundColor = false,
  sx,
}) => {
  return (
    <AccordionContainer id={id} sx={sx}>
      <AccordionTitleBar
        onClick={() => (!disabled ? onTitleClick() : null)}
        className={`accordionTitle ${disabled ? "disabled" : ""}`}
      >
        {title}
        {expanded ? <ChevronUpIcon /> : <ChevronDownIcon />}
      </AccordionTitleBar>
      <AccordionContent
        className={`accordionContent`}
        expanded={expanded}
        backgroundColor={contentBackgroundColor}
      >
        <Box className={"expandSubContainer"}>{children}</Box>
      </AccordionContent>
    </AccordionContainer>
  );
};

export default Accordion;
