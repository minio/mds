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

import { Theme } from "@emotion/react";

import { breakPoints } from "../../global/utils";

export const codeEditorStyles = (theme: Theme) => ({
  display: "grid",
  [`@media (max-width: ${breakPoints.md}px)`]: {
    gridTemplateColumns: "1fr",
  },
  "& .inputLabel": {
    marginBottom: 10,
  },
  "& .editorWrapper": {
    overflow: "auto",
    border: `${theme.colors["Color/Neutral/Border/colorBorderBold"]} 1px solid`,
    borderRadius: 4,
  },
  "& .editorContainer": {
    overflow: "auto",
  },
  "& .editor": {
    "&.w-tc-editor": {
      fontSize: 12,
      backgroundColor: theme.colors["Color/Neutral/Bg/colorBgContainer"],
      color: theme.colors["Color/Base/Shark/8"],
      fontFamily: "'GeistMono', monospace!important",
      [`& code[class*="language-"] .token.cdata,
      & pre[class*="language-"] .token.cdata,
      & code[class*="language-"] .token.comment,
      & pre[class*="language-"] .token.comment,
      & code[class*="language-"] .token.doctype,
      & pre[class*="language-"] .token.doctype,
      & code[class*="language-"] .token.prolog,
      & pre[class*="language-"] .token.prolog`]: {
        color: theme.colors["Color/Base/Shark/4"],
      },
      [`& code[class*="language-"] .token.punctuation,
& pre[class*="language-"] .token.punctuation`]: {
        color: theme.colors["Color/Base/Shark/8"],
      },
      [`& code[class*="language-"] .namespace,
& pre[class*="language-"] .namespace`]: {
        opacity: 0.7,
      },
      [`& code[class*="language-"] .token.boolean,
& pre[class*="language-"] .token.boolean,
& code[class*="language-"] .token.constant,
& pre[class*="language-"] .token.constant,
& code[class*="language-"] .token.deleted,
& pre[class*="language-"] .token.deleted,
& code[class*="language-"] .token.number,
& pre[class*="language-"] .token.number,
& code[class*="language-"] .token.symbol,
& pre[class*="language-"] .token.symbol`]: {
        color: theme.colors["Color/Base/Scooter/6"],
      },
      [`& code[class*="language-"] .token.builtin,
& pre[class*="language-"] .token.builtin,
& code[class*="language-"] .token.char,
& pre[class*="language-"] .token.char,
& code[class*="language-"] .token.inserted,
& pre[class*="language-"] .token.inserted,
& code[class*="language-"] .token.selector,
& pre[class*="language-"] .token.selector,
& code[class*="language-"] .token.string,
& pre[class*="language-"] .token.string`]: {
        color: theme.colors["Color/Base/Orange/5"],
      },
      [`& code[class*="language-"] .style .token.string,
& pre[class*="language-"] .style .token.string,
& code[class*="language-"] .token.entity,
& pre[class*="language-"] .token.entity,
& code[class*="language-"] .token.property,
& pre[class*="language-"] .token.property,
& code[class*="language-"] .token.operator,
& pre[class*="language-"] .token.operator,
& code[class*="language-"] .token.url,
& pre[class*="language-"] .token.url`]: {
        color: theme.colors["Color/Base/Purple/5"],
      },
      [`& code[class*="language-"] .token.atrule,
& pre[class*="language-"] .token.atrule,
& code[class*="language-"] .token.property-access .token.method,
& pre[class*="language-"] .token.property-access .token.method,
& code[class*="language-"] .token.keyword,
& pre[class*="language-"] .token.keyword`]: {
        color: theme.colors["Color/Base/Scooter/5"],
      },
      [`& code[class*="language-"] .token.function,
& pre[class*="language-"] .token.function`]: {
        color: theme.colors["Color/Base/Rose/6"],
      },

      [`& code[class*="language-"] .token.important,
& pre[class*="language-"] .token.important,
& code[class*="language-"] .token.regex,
& pre[class*="language-"] .token.regex,
& code[class*="language-"] .token.variable,
& pre[class*="language-"] .token.variable`]: {
        color: theme.colors["Color/Base/Rose/6"],
      },
      [`& code[class*="language-"] .token.bold,
& pre[class*="language-"] .token.bold,
& code[class*="language-"] .token.important,
& pre[class*="language-"] .token.important`]: {
        color: theme.colors["Color/Base/Sunset/6"],
      },
      [`& code[class*="language-"] .token.tag,
& pre[class*="language-"] .token.tag`]: {
        color: theme.colors["Color/Base/Royal/6"],
      },
      [`& code[class*="language-"] .token.attr-value,
& pre[class*="language-"] .token.attr-value,
& code[class*="language-"] .token.attr-name,
& pre[class*="language-"] .token.attr-name`]: {
        color: theme.colors["Color/Base/Sunset/6"],
      },
      [`& code[class*="language-"] .token.selector .class,
& pre[class*="language-"] .token.selector .class,
& code[class*="language-"] .token.class-name,
& pre[class*="language-"] .token.class-name`]: {
        color: theme.colors["Color/Base/Scooter/6"],
      },
    },
    "& .w-tc-editor-text, .w-tc-editor-preview": {
      minHeight: 16,
      "& textarea, & *, & *::before, & *::after": {
        fontFamily: "'GeistMono', monospace!important",
      },
    },
    "& .w-tc-editor-preview pre": {
      margin: 0,
      padding: 0,
      whiteSpace: "inherit",
      fontFamily: "'GeistMono', monospace!important",
      fontSize: "inherit",
    },
    "& .w-tc-editor-preview pre code": {
      fontFamily: "'GeistMono', monospace!important",
    },
  },
  "& .actionsContainer": {
    display: "flex",
    alignItems: "center",
    background: theme.colors["Color/Neutral/Bg/colorBgContainer"],
    borderBottom: `${theme.colors["Color/Neutral/Border/colorBorderBold"]} 1px solid`,
    padding: "2px",
    paddingRight: "5px",
    justifyContent: "flex-end",
    "& button": {
      height: "26px",
      width: "26px",
      padding: "2px",
      " .min-icon": {
        marginLeft: "0",
      },
    },
  },
});
