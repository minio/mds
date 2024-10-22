// This file is part of MinIO Design System
// Copyright (c) 2024 MinIO, Inc.
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

import { css, Theme } from "@emotion/react";

export const inlineBox = css({
  "& .predefinedList": {
    width: "initial",
    padding: "0 8px",
    display: "inline-block",
    minHeight: "initial",
  },
});

export const readBoxBaseStyles = (theme: Theme) => ({
  boxSizing: "border-box",
  display: "flex",
  width: "100%",
  alignItems: "center",
  "& .predefinedList": {
    boxSizing: "border-box",
    backgroundColor: theme.colors["Color/Neutral/Bg/colorBgSections"],
    border: `${theme.colors["Color/Neutral/Border/colorBorderSubtle"]} 1px solid`,
    padding: "12px 10px",
    color: theme.colors["Color/Neutral/Text/colorTextHeading"],
    fontSize: 14,
    fontWeight: 400,
    minHeight: 41,
    borderRadius: 4,
    width: "100%",
  },
  "& .innerContent": {
    width: "100%",
    overflowX: "auto",
    whiteSpace: "nowrap",
    scrollbarWidth: "none",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
  "& .innerContentMultiline": {
    width: "100%",
    maxHeight: 100,
    overflowY: "auto",
    scrollbarWidth: "none",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
  "& .includesActionButton": {
    paddingRight: 45,
    position: "relative",
  },
  "& .overlayShareOption": {
    position: "absolute",
    width: 45,
    right: 0,
    top: "50%",
    transform: "translate(0, -50%)",
  },
  "& .codeSnippet": {
    "& .inputBase": {
      flexWrap: "nowrap",
    },
  },
});
