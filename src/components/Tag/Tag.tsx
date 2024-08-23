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
import styled from "styled-components";

import { themeColors } from "../../global/themeColors";
import {
  overridePropsParse,
  paddingSizeVariants,
  radioVariants,
} from "../../global/utils";
import XIcon from "../Icons/NewDesignIcons/XIcon";
import { TagConstructProps, TagProps } from "./Tag.types";

const TagBase = styled.span<TagConstructProps>(({ theme, color, size, sx }) => {
  return {
    position: "relative",
    margin: 0,
    userSelect: "none",
    appearance: "none",
    maxWidth: "100%",
    fontFamily: "'Geist', sans-serif",
    fontSize: 12,
    fontWeight: 600,
    lineHeight: "16px",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    height: size === "small" ? 16 : 24,
    color: get(
      theme,
      `tag.${color}.label`,
      themeColors["Color/Brand/Primary/colorPrimaryText"].lightMode,
    ),
    background: get(
      theme,
      `tag.${color}.background`,
      themeColors["Color/Brand/Primary/colorPrimaryBg"].lightMode,
    ),
    boxShadow: "0px 1px 0px 0px rgba(255, 255, 255, 0.25) inset",
    borderRadius:
      size === "large"
        ? radioVariants.borderRadiusSM
        : radioVariants.borderRadiusXS,
    whiteSpace: "nowrap",
    cursor: "default",
    outline: 0,
    textDecoration: "none",
    padding:
      size === "small"
        ? `0 ${paddingSizeVariants.sizeXXS}px`
        : `${paddingSizeVariants.sizeXXS}px ${paddingSizeVariants.sizeXS}px`,
    verticalAlign: "middle",
    gap: paddingSizeVariants.sizeXXS,
    "& svg": {
      width: 12,
      height: 12,
      fill: get(
        theme,
        `tag.${color}.label`,
        themeColors["Color/Brand/Primary/colorPrimaryText"].lightMode,
      ),
    },
    "& .deleteTagButton": {
      backgroundColor: "transparent",
      border: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 0,
      cursor: "pointer",
      opacity: 0.6,
      "&:hover": {
        opacity: 1,
      },
      "& svg": {
        color: get(
          theme,
          `tag.${color}.deleteColor`,
          themeColors["Color/Brand/Primary/colorPrimaryText"].lightMode,
        ),
        fill: get(
          theme,
          `tag.${color}.deleteColor`,
          themeColors["Color/Brand/Primary/colorPrimaryText"].lightMode,
        ),
        width: size === "small" ? 14 : 16,
        height: size === "small" ? 14 : 16,
        minWidth: size === "small" ? 14 : 16,
        minHeight: size === "small" ? 14 : 16,
      },
    },
    ...overridePropsParse(sx, theme),
  };
});

const Tag: FC<TagProps & React.HTMLAttributes<HTMLSpanElement>> = ({
  children,
  color = "primary",
  sx,
  onDelete,
  id,
  label,
  size = "large",
  icon,
  ...props
}) => {
  return (
    <TagBase id={id} color={color} sx={sx} size={size} {...props}>
      {icon}
      <span>
        {label}
        {children}
      </span>
      {onDelete && (
        <button className={"deleteTagButton"} onClick={() => onDelete(id)}>
          <XIcon />
        </button>
      )}
    </TagBase>
  );
};

export default Tag;
