// This file is part of MinIO Design System
// Copyright (c) 2022 MinIO, Inc.
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

import { css, Global, useTheme } from "@emotion/react";

const GlobalStyles = () => {
  const theme = useTheme();

  const globalCSS = () =>
    css({
      "*, *::before, *::after": {
        fontFamily: "'Geist', sans-serif",
        boxSizing: "inherit",
        outline: 0,
      },
      html: {
        boxSizing: "border-box",
        WebkitTextSizeAdjust: "100%",
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale",
      },
      body: {
        backgroundColor: theme.colors["Color/Neutral/Bg/colorBgShell"],
        color: theme.colors["Color/Neutral/Text/colorTextLabel"],
        minHeight: "100vh",
        fontFamily: "'Geist', sans-serif",
        margin: 0,
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale",
        fonWeight: 400,
        fontSize: 14,
        lineHeight: 1.5,
        transition: "background-color 0s",
      },
      "fieldset, section": {
        border: `1px solid ${theme.colors["Color/Neutral/Border/colorBorderSubtle"]}`,
        borderRadius: theme.borderRadius.borderRadiusXS,
        backgroundColor: "transparent",
        padding: 25,
      },
      a: {
        cursor: "pointer",
        display: "inline-flex",
        backgroundColor: "transparent",
        border: 0,
        padding: 0,
        color: theme.colors["Color/Brand/Primary/colorPrimaryText"],
        textDecoration: "none",
        fontSize: "inherit",
        "&:disabled": {
          cursor: "not-allowed",
          textDecoration: "none",
          color: theme.colors["Color/Neutral/Text/colorTextDisabled"],
        },
        "&:hover:not(:disabled)": {
          textDecoration: "underline",
          color: theme.colors["Color/Brand/Primary/colorPrimaryText"],
        },
        "&:active:not(:disabled)": {
          textDecoration: "underline",
          color: theme.colors["Color/Brand/Primary/colorPrimaryText"],
        },
      },
      hr: {
        borderTop: 0,
        borderLeft: 0,
        borderRight: 0,
        borderBottom: `1px solid ${theme.colors["Color/Neutral/Border/colorBorderSubtle"]}`,
        backgroundColor: "transparent",
      },
      ul: {
        paddingLeft: 20,
        listStyle: "none",
        "& li::before": {
          content: '"￭"',
          color: theme.colors["Color/Brand/Primary/colorPrimaryText"],
          fontSize: 20,
          display: "inline-block",
          width: "1em",
          marginLeft: "-1em",
        },
        "& ul": {
          "li::before": {
            content: '"￮"',
            color: theme.colors["Color/Brand/Primary/colorPrimaryText"],
            fontSize: 20,
            display: "inline-block",
            width: "1em",
            marginLeft: "-1em",
          },
        },
      },
      "button:active, button:focus, input: active, input:focus": {
        outline: 0,
      },
      ".min-icon": {
        width: 26,
      },
      "#root": {
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        flexFlow: "column",
        alignItems: "stretch",
      },

      "#preload": {
        display: "none",
      },

      "#loader-block": {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      },
      ".muted": {
        color: theme.colors["Color/Neutral/Text/colorTextSecondary"],
        fontSize: 14,
      },

      ".error": {
        color: theme.colors["Color/Brand/Error/colorPrimary"],
      },

      ".SM_Normal": {
        fontFamily: "'Geist', sans-serif",
        fontSize: 12,
        fontStyle: "normal",
        fontWeight: 400,
        lineHeight: "16px",
      },
      ".SM_Strong": {
        fontFamily: "'Geist', sans-serif",
        fontSize: 12,
        fontStyle: "normal",
        fontWeight: 600,
        lineHeight: "16px",
      },
      ".Base_Normal": {
        fontFamily: "'Geist', sans-serif",
        fontSize: 14,
        fontStyle: "normal",
        fontWeight: 400,
        lineHeight: "20px",
      },
      ".Base_Strong": {
        fontFamily: "'Geist', sans-serif",
        fontSize: 14,
        fontStyle: "normal",
        fontWeight: 600,
        lineHeight: "20px",
        letterSpacing: "0.16px",
      },
      ".LG_Normal": {
        fontFamily: "'Geist', sans-serif",
        fontSize: 16,
        fontStyle: "normal",
        fontWeight: 400,
        lineHeight: "24px",
      },
      ".LG_Strong": {
        fontFamily: "'Geist', sans-serif",
        fontSize: 16,
        fontStyle: "normal",
        fontWeight: 600,
        lineHeight: "24px",
        letterSpacing: "0.16px",
      },
      ".XL_Normal": {
        fontFamily: "'Geist', sans-serif",
        fontSize: 20,
        fontStyle: "normal",
        fontWeight: 400,
        lineHeight: "28px",
      },
      ".XL_Strong": {
        fontFamily: "'Geist', sans-serif",
        fontSize: 20,
        fontStyle: "normal",
        fontWeight: 600,
        lineHeight: "28px",
      },
      ".Heading3": {
        fontFamily: "'Geist', sans-serif",
        fontSize: 30,
        fontStyle: "normal",
        fontWeight: 600,
        lineHeight: "38px",
      },
    });

  return <Global styles={[globalCSS]} />;
};

export default GlobalStyles;
