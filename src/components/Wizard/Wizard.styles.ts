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

export const wizardMainStyles = (theme: Theme) =>
  css({
    position: "relative",
    display: "flex",
    flexDirection: "column" as const,
    "& .wizardSteps": {
      borderBottom: `1px solid ${theme.colors["Color/Neutral/Border/colorBorderSubtle"]}`,
      marginBottom: 24,
    },
    "& .paddedContentGrid": {
      marginTop: 8,
      padding: "0 10px",
      minHeight: 400,
    },
    "& .modalSteps": {
      width: "100%",
      maxHeight: 90,
      "& .stepsLabel": {
        fontSize: 20,
        color: theme.colors["Color/Neutral/Text/colorTextSecondary"],
        fontWeight: 600,
        margin: "10px 12px",
        "&.stepsModalTitle": {
          textAlign: "center",
        },
      },
      "& .buttonList": {
        backgroundColor: "transparent",
        border: "none",
        cursor: "pointer",
        userSelect: "none",
        position: "relative",
        lineHeight: "34px" as const,
        fontWeight: 600,
        color: theme.colors["Color/Neutral/Text/colorTextSecondary"],
        "&:not(:disabled):hover": {
          backgroundColor:
            theme.colors["Color/Brand/Neutral/colorPrimaryBgHover"],
        },
        "&:selected, &:active, &:focus, &:focus:active": {
          border: "none",
          outline: 0,
          boxShadow: "none",
        },
        "&:disabled": {
          cursor: "not-allowed",
          color: theme.colors["Color/Neutral/Text/colorTextDisabled"],
        },
        "&.selected": {
          fontWeight: "bold",
          color: theme.colors["Color/Brand/Primary/colorPrimaryText"],
          "&:after": {
            content: "' '",
            position: "absolute",
            left: 0,
            bottom: -1,
            width: "100%",
            height: 2,
            backgroundColor:
              theme.colors["Color/Brand/Primary/colorPrimaryText"],
          },
        },
      },
    },
    "& .stepsContainer": {
      display: "flex",
      justifyContent: "flex-start",
      gap: 16,
    },
  });

export const wizardPageMainStyles = (theme: Theme) =>
  css({
    display: "flex",
    flexDirection: "column",
    flex: 1,
    "& .wizardComponent": {
      overflowY: "auto",
      marginBottom: 10,
      height: "calc(100vh - 100px - 80px)",
      minHeight: 400,
      flex: 1,
      width: "100%",
    },
    "& .wizardModal": {
      overflowY: "auto",
      overflowX: "hidden",
      margin: "10px 0",
      minHeight: 350,
      maxHeight: "calc(100vh - 515px)",
      padding: "15px",
      position: "relative",
    },
    "& .buttonsContainer": {
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start" as const,
      padding: "10px 0",
      borderTop: `1px solid ${theme.colors["Color/Neutral/Border/colorBorderSubtle"]}`,
      "& button": {
        marginLeft: 10,
      },
      "&.forModal": {
        paddingBottom: 0,
      },
    },
    "& .buttonInnerContainer": {
      width: "100%",
      display: "flex",
      justifyContent: "flex-end",
      marginRight: 15,
    },
  });
