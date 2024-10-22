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

import { CSSProperties } from "react";
import { css, Theme } from "@emotion/react";

export const dataTableWrapperStyles = (
  theme: Theme,
  customPaperHeight: CSSProperties["height"],
  disabled: boolean,
  rowHeight: number,
) =>
  css({
    display: "flex",
    overflow: "auto",
    boxSizing: "border-box" as const,
    flexDirection: "column" as const,
    boxShadow: "none",
    border: 0,
    minHeight: 200,
    overflowY: "scroll",
    position: "relative",
    height: customPaperHeight || "calc(100vh - 205px)",
    backgroundColor: disabled
      ? theme.colors["Color/Neutral/Bg/colorBgDisabled"]
      : "transparent",
    "& .loadingBox": {
      padding: "100px 0",
    },
    "& .overlayColumnSelection": {
      position: "absolute",
      right: 0,
      top: 0,
      "& .popoverContent": {
        maxHeight: 250,
        overflowY: "auto",
        padding: "0 10px 10px",
      },
    },
    "&::-webkit-scrollbar": {
      width: 0,
      height: 3,
    },
    "& .rowLine": {
      borderBottom: `1px solid ${theme.colors["Color/Neutral/Border/colorBorderSubtle"]}`,
      height: rowHeight,
      fontSize: 14,
      transitionDuration: "0.3s",
      "&:focus": {
        outline: "initial",
      },
      "&:hover:not(.ReactVirtualized__Table__headerRow)": {
        userSelect: "none",
        backgroundColor: theme.colors["Color/Brand/Control/colorBgActive"],
        "&.canClick": {
          cursor: "pointer",
        },
        "&.canSelectText": {
          userSelect: "text",
        },
      },
      "& .selected": {
        fontWeight: 600,
      },
      "&:not(.deleted) .selected": {
        color: theme.colors["Color/Neutral/Text/colorTextHeading"],
      },
      "&.deleted .selected": {
        color: theme.colors["Color/Neutral/Text/colorTextDisabled"],
      },
    },
    "& .headerItem": {
      userSelect: "none",
      fontSize: 12,
      fontStyle: "normal",
      fontWeight: 600,
      lineHeight: "16px",
      letterSpacing: "0.5px",
      display: "flex",
      alignItems: "center",
      outline: "none",
    },
    "& .ReactVirtualized__Table__row": {
      width: "100% !important",
      display: "flex",
      flexDirection: "row" as const,
      alignItems: "center",
    },
    "& .ReactVirtualized__Table__headerRow": {
      display: "flex",
      flexDirection: "row" as const,
      alignItems: "center",
      fontSize: 12,
      fontStyle: "normal",
      fontWeight: 600,
      lineHeight: "16px",
      letterSpacing: "0.5px",
      borderColor: "transparent",
      textTransform: "initial",
      transitionDuration: "0s",
    },
    "& .ReactVirtualized__Table__headerTruncatedText": {
      display: "inline-block",
      maxWidth: "100%",
      whiteSpace: "nowrap",
      textOverflow: "ellipsis",
      overflow: "hidden",
    },
    "& .ReactVirtualized__Table__headerColumn": {
      marginRight: 10,
      minWidth: 0,
      "&:first-of-type": {
        marginLeft: 10,
      },
      "& svg": {
        width: 12,
        height: 12,
        marginRight: 5,
        alignSelf: "center" as const,
      },
    },
    "& .ReactVirtualized__Table__rowColumn": {
      marginRight: 10,
      minWidth: 0,
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      "&:first-of-type": {
        marginLeft: 10,
      },
    },
    "& .ReactVirtualized__Table__sortableHeaderColumn": {
      cursor: "pointer",
    },
    "& .ReactVirtualized__Table__sortableHeaderIconContainer": {
      display: "flex",
      alignItems: "center",
    },
    "& .ReactVirtualized__Table__sortableHeaderIcon": {
      flex: "0 0 24px",
      height: "1em",
      width: "1em",
      fill: "currentColor",
    },
    "& .optionsAlignment": {
      display: "flex",
      gap: 5,
      "& .min-icon": {
        width: 16,
        height: 16,
      },
    },
    "& .text-center": {
      textAlign: "center",
    },
    "& .text-right": {
      textAlign: "right",
    },
    "& .progress-enabled": {
      display: "inline-flex",
      position: "relative",
      alignItems: "center",
      justifyContent: "center",
      width: 30,
      height: 30,
    },
  });

export const tableRowPredefStyles = (theme: Theme) => ({
  deleted: {
    color: theme.colors["Color/Neutral/Text/colorTextDisabled"],
    backgroundColor: theme.colors["Color/Neutral/Bg/colorBgDisabled"],
    "&.selected": {
      color: theme.colors["Color/Brand/Neutral/colorPrimaryText"],
    },
  },
});

export const selectorBoxStyles = (theme: Theme) =>
  css({
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    backgroundColor: theme.colors["Color/Neutral/colorWhite"],
    border: `1px solid ${theme.colors["Color/Neutral/Border/colorBorderSubtle"]}`,
    padding: "10px 10px",

    minWidth: 150,
    borderRadius: 4,
    boxShadow:
      "rgba(0, 0, 0, 0.2) 0px 11px 15px -7px, rgba(0, 0, 0, 0.14) 0px 24px 38px 3px, rgba(0, 0, 0, 0.12) 0px 9px 46px 8px",
    "& .columnsSelectorTitle": {
      fontWeight: "bold",
      padding: "0 0 5px",
      borderBottom: `1px solid ${theme.colors["Color/Neutral/Border/colorBorderSubtle"]}`,
      marginBottom: 5,
      color: theme.colors["Color/Neutral/Text/colorTextLabel"],
    },
    "& .columnsSelectorContainer": {
      display: "flex",
      flexDirection: "column",
      gap: 5,
      maxHeight: 250,
      overflowY: "auto",
    },
  });
