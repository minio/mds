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

import React, { FC } from "react";
import get from "lodash/get";
import {
  BreadcrumbsContainerProps,
  BreadcrumbsProps,
} from "./Breadcrumbs.types";
import IconButton from "../IconButton/IconButton";
import styled from "styled-components";
import BackCaretIcon from "../Icons/BackCaretIcon";
import Box from "../Box/Box";

const BoxParent = styled.div<BreadcrumbsContainerProps>(({ theme, sx }) => {
  return {
    boxSizing: "border-box",
    flexBasis: "100%",
    width: "100%",
    fontSize: 12,
    color: get(theme, "breadcrumbs.textColor", "#969FA8"),
    fontWeight: "bold",
    border: `${get(theme, "breadcrumbs.border", "#eaeaea")} 1px solid`,
    height: 38,
    display: "flex",
    alignItems: "center",
    backgroundColor: get(theme, "breadcrumbs.backgroundColor", "#FCFCFD"),
    marginRight: 10,
    "& a": {
      textDecoration: "none",
      color: get(theme, "breadcrumbs.linksColor", "#969FA8"),
      "&:hover": {
        textDecoration: "underline",
      },
    },
    "& .min-icon": {
      width: 16,
      minWidth: 16,
    },
    "& .backButton": {
      border: `${get(
        theme,
        "breadcrumbs.backButton.border",
        "#EAEDEE",
      )} 1px solid`,
      backgroundColor: get(
        theme,
        "breadcrumbs.backButton.backgroundColor",
        "#FFF",
      ),
      borderLeft: 0,
      borderRadius: 0,
      width: 38,
      height: 38,
      marginRight: "10px",
      "& > svg": {
        fill: get(theme, "breadcrumbs.textColor", "#969FA8"),
      },
    },
    "& .breadcrumbsList": {
      textOverflow: "ellipsis" as const,
      overflow: "hidden" as const,
      whiteSpace: "nowrap" as const,
      display: "inline-block" as const,
      flexGrow: 1,
      textAlign: "left" as const,
      marginLeft: 15,
      marginRight: 10,
      width: 0, // WA to avoid overflow if child elements in flexbox list.**
    },
    "& .slashSpacingStyle": {
      margin: "0 5px",
    },
    ...sx,
  };
});

const Breadcrumbs: FC<BreadcrumbsProps> = ({
  sx,
  children,
  additionalOptions,
  goBackFunction,
}) => {
  return (
    <BoxParent className={"breadcrumbs-bar"} sx={sx}>
      <IconButton onClick={goBackFunction} className={"backButton"}>
        <BackCaretIcon />
      </IconButton>
      <Box className={"breadcrumbsList"} dir="rtl">
        {children}
      </Box>
      {additionalOptions}
    </BoxParent>
  );
};

export default Breadcrumbs;
