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

import { FC, useMemo } from "react";
import { css, useTheme } from "@emotion/react";

import { overridePropsParse } from "../../global/utils";
import ChevronDownIcon from "../../icons/ChevronDownIcon";
import ChevronUpIcon from "../../icons/ChevronUpIcon";
import Box from "../Box";
import { AccordionProps } from "./Accordion.types";

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
  const theme = useTheme();

  const overrideThemes = useMemo(() => {
    if (sx) {
      return css({ ...overridePropsParse(sx, theme) });
    }

    return {};
  }, [sx, theme]);

  const accordionContainer = css({
    borderBottom: `1px solid ${theme.colors["Color/Neutral/Border/colorBorderSubtle"]}`,
    borderRadius: 2,
  });

  const accordionTitleBar = css({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: `${theme.paddingSizes["sizeXXS"]}px 0`,
    cursor: "pointer",
    userSelect: "none",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "20px",
    letterSpacing: "0.16px",
    color: theme.colors["Color/Neutral/Text/colorTextHeading"],
    "& svg": {
      width: 16,
      height: 16,
    },
  });

  const accordionDisabled = css({
    cursor: "not-allowed",
    color: theme.colors["Color/Neutral/Text/colorTextDisabled"],
  });

  const accordionContent = css({
    borderTop: 0,
    display: "grid",
    gridTemplateRows: expanded ? "1fr" : "0fr",
    transition: "250ms grid-template-rows ease",
    "& .expandSubContainer": {
      overflow: "hidden",
      padding: 0,
      transition: "250ms padding ease 150ms",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      backgroundColor: contentBackgroundColor
        ? theme.colors["Color/Neutral/Bg/colorBgSections"]
        : "initial",
      color: theme.colors["Color/Neutral/Text/colorTextLabel"],
      marginBottom: 0,
      "& > div:last-of-type": {
        marginBottom: 36,
      },
    },
  });

  const expandedAccordionContent = css({
    gridTemplateRows: "1fr",
    "& .expandSubContainer": {
      padding: theme.paddingSizes.sizeXS,
      transition: "initial",
      marginBottom: theme.paddingSizes.sizeXS,
    },
  });

  return (
    <div
      id={id}
      className={"accordion"}
      css={[accordionContainer, overrideThemes]}
    >
      <div
        css={[accordionTitleBar, disabled ? accordionDisabled : ""]}
        onClick={() => (!disabled ? onTitleClick() : null)}
        className={"accordionTitle"}
      >
        {title}
        {expanded ? <ChevronUpIcon /> : <ChevronDownIcon />}
      </div>
      <div
        css={[accordionContent, expanded ? expandedAccordionContent : {}]}
        className={`accordionContent`}
      >
        <Box className={"expandSubContainer"}>{children}</Box>
      </div>
    </div>
  );
};

export default Accordion;
