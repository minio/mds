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
import styled from "styled-components";
import get from "lodash/get";
import { TagConstructProps, TagProps } from "./Tag.types";
import AlertCloseIcon from "../Icons/AlertCloseIcon";
import { lightColors } from "../../global/themes";

const TagBase = styled.span<TagConstructProps>(
  ({ theme, color, variant, square, sx }) => {
    return {
      position: "relative",
      margin: 0,
      userSelect: "none",
      appearance: "none",
      maxWidth: "100%",
      fontFamily: "'Inter', sans-serif",
      fontSize: 13,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      height: 24,
      color:
        variant === "regular"
          ? get(theme, `tag.${color}.label`, lightColors.white)
          : get(theme, `tag.${color}.background`, lightColors.mainBlue),
      backgroundColor:
        variant === "regular"
          ? get(theme, `tag.${color}.background`, lightColors.mainBlue)
          : "transparent",
      borderRadius: square ? 3 : 16,
      whiteSpace: "nowrap",
      cursor: "default",
      outline: 0,
      textDecoration: "none",
      border:
        variant === "regular"
          ? 0
          : `${get(
              theme,
              `tag.${color}.background`,
              lightColors.mainBlue,
            )} 1px solid`,
      padding: "0 10px",
      verticalAlign: "middle",
      gap: 8,
      "& svg": {
        width: 12,
        height: 12,
        fill:
          variant === "regular"
            ? get(theme, `tag.${color}.label`, lightColors.white)
            : get(theme, `tag.${color}.background`, lightColors.mainBlue),
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
          fill:
            variant === "regular"
              ? get(theme, `tag.${color}.deleteColor`, lightColors.white)
              : get(theme, `tag.${color}.background`, lightColors.mainBlue),
          width: 10,
          height: 10,
          minWidth: 10,
          minHeight: 10,
        },
      },
      ...sx,
    };
  },
);

const Tag: FC<TagProps & React.HTMLAttributes<HTMLSpanElement>> = ({
  children,
  color = "default",
  sx,
  onDelete,
  id,
  label,
  variant = "regular",
  icon,
  square = false,
  ...props
}) => {
  return (
    <TagBase
      id={id}
      color={color}
      sx={sx}
      variant={variant}
      square={square}
      {...props}
    >
      {icon}
      <span>
        {label}
        {children}
      </span>
      {onDelete && (
        <button className={"deleteTagButton"} onClick={() => onDelete(id)}>
          <AlertCloseIcon />
        </button>
      )}
    </TagBase>
  );
};

export default Tag;
