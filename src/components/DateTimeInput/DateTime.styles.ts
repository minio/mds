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

import { DateTimeMode } from "./DateTimeInput.types";

const globalWidth = 315;

export const dateSelectorContainerStyles = (theme: Theme) =>
  css({
    "& .react-calendar__navigation": {
      display: "flex",
      justifyContent: "space-between",
      gap: 5,
      borderBottom: `1px solid ${theme.colors["Color/Neutral/Border/colorBorderSubtle"]}`,
      padding: "0 0 12px",
      marginBottom: 10,
      "& button": {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        backgroundColor: "transparent",
        border: 0,
        fontWeight: "bold",
        fontSize: 16,
        color: theme.colors["Color/Neutral/Text/colorText"],
        borderRadius: 3,
        "&:not(:disabled):hover": {
          backgroundColor:
            theme.colors["Color/Brand/Neutral/colorPrimaryBgHover"],
          color: theme.colors["Color/Brand/Neutral/colorPrimaryText"],
        },
        "&:disabled": {
          cursor: "not-allowed",
          color: theme.colors["Color/Neutral/Text/colorTextDisabled"],
        },
        "& svg": {
          width: 12,
          height: 12,
        },
      },
      "& .react-calendar__navigation__label__labelText": {
        display: "flex",
        gap: 5,
        justifyContent: "center",
        color: theme.colors["Color/Brand/Neutral/colorPrimaryText"],
        userSelect: "none",
        "& .secondaryItem": {
          fontWeight: "normal",
          color: theme.colors["Color/Neutral/Text/colorTextSecondary"],
        },
      },
    },
    "& .react-calendar__month-view__weekdays__weekday": {
      fontSize: 10,
      color: theme.colors["Color/Neutral/Text/colorTextSecondary"],
      textAlign: "center",
      "& abbr": {
        textDecoration: "none",
      },
    },
    "& .react-calendar__month-view__weekdays": {
      marginBottom: 5,
      userSelect: "none",
    },
    "& .react-calendar__month-view__days": {
      rowGap: 8,
      columnGap: 6,
      justifyContent: "space-evenly",
      "& .react-calendar__month-view__days__day": {
        cursor: "pointer",
        height: 28,
        width: 28,
        maxWidth: 28,
        maxHeight: 28,
        borderRadius: "100%",
        padding: 0,
        fontWeight: "bold",
        backgroundColor: "transparent",
        border: 0,
        color: theme.colors["Color/Brand/Primary/colorPrimaryText"],
        "&:not(.react-calendar__tile--active):hover": {
          backgroundColor: theme.colors["Color/Brand/Control/colorBgHover"],
          color: theme.colors["Color/Neutral/Text/colorTextLabel"],
        },
        "&.react-calendar__tile--now": {
          backgroundColor: theme.colors["Color/Brand/Primary/colorPrimaryBg"],
          color: theme.colors["Color/Brand/Primary/colorPrimaryText"],
        },
        "&.react-calendar__tile--active": {
          backgroundColor: theme.colors["Color/Brand/Primary/colorPrimary"],
          color: theme.colors["Color/Neutral/Text/colorTextLightSolid"],
        },
      },
    },
    "& .react-calendar__year-view__months, & .react-calendar__decade-view__years, & .react-calendar__century-view__decades":
      {
        gap: 15,
        justifyContent: "center",
        "& button": {
          cursor: "pointer",
          padding: "5px 10px",
          backgroundColor: "transparent",
          border: 0,
          fontSize: 14,
          fontWeight: "normal",
          color: theme.colors["Color/Neutral/Text/colorTextSecondary"],
          borderRadius: 3,
          "&:not(:disabled):hover": {
            backgroundColor: theme.colors["Color/Brand/Control/colorBgHover"],
            color: theme.colors["Color/Neutral/Text/colorTextLabel"],
          },
          "&:disabled": {
            cursor: "not-allowed",
            color: theme.colors["Color/Neutral/Text/colorTextDisabled"],
          },
        },
      },
    "& .react-calendar__century-view__decades": {
      "& button": {
        minWidth: 120,
      },
    },
  });

export const dateInputContainerStyles = css({
  display: "flex",
  flexGrow: 1,
  width: "100%",
  position: "relative",
  "& .dateTimeInputContainer": {
    display: "flex",
    gap: 10,
    width: "100%",
    flexGrow: 1,
    position: "relative",
    minWidth: 80,
  },
});

export const optionChangeButtonStyles = (theme: Theme) =>
  css({
    height: 30,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    border: `2px solid ${theme.colors["Color/Neutral/Border/colorBorderSubtle"]}`,
    borderRadius: 4,
    backgroundColor: theme.colors["Color/Brand/Neutral/colorPrimaryBgHover"],
    color: theme.colors["Color/Base/Royal/6"],
    fontSize: 14,
    fontWeight: "bold",
    "& svg": {
      width: 12,
      height: 12,
    },
    "&.selected": {
      backgroundColor: theme.colors["Color/Base/Royal/6"],
      color: theme.colors["Color/Neutral/Text/colorTextLightSolid"],
      borderColor: theme.colors["Color/Base/Royal/6"],
      boxShadow: theme.shadows["boxShadow-02"],
    },
  });

export const dateTimeContainerStyles = (
  theme: Theme,
  isPortal: boolean,
  mode: DateTimeMode,
) => ({
  position: isPortal ? "absolute" : ("relative" as const),
  border: `1px solid ${theme.colors["Color/Neutral/Border/colorBorderSubtle"]}`,
  backgroundColor: theme.colors["Color/Neutral/Bg/colorBgContainer"],
  width: globalWidth,
  minHeight: mode === "all" ? 290 : 285,
  boxShadow: theme.shadows["boxShadow-02"],
  padding: 24,
  borderRadius: 4,
  "& .modeBar": {
    display: "flex",
    gap: 16,
    marginBottom: 18,
  },
});

export const timeSelectorContainerStyles = (theme: Theme) =>
  css({
    "& .timeTitle": {
      display: "flex",
      justifyContent: "center",
      gap: 5,
      borderBottom: `1px solid ${theme.colors["Color/Neutral/Border/colorBorderSubtle"]}`,
      padding: "0 0 12px",
      marginBottom: 10,
      fontWeight: "bold",
      fontSize: 16,
      color: theme.colors["Color/Brand/Primary/colorPrimaryText"],
    },
    "& .selectors": {
      display: "flex",
      width: "100%",
      justifyContent: "space-evenly",
      "& .columnSelector": {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        gap: 5,
        "& .scrollRollbar": {
          display: "block",
          overflowY: "auto",
          overflowX: "hidden",
          height: 170,
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          "&::-webkit-scrollbar": {
            width: 5,
          },
          "&::-webkit-scrollbar-thumb": {
            background: theme.colors["Color/Brand/Primary/colorPrimaryText"],
            borderRadius: 0,
          },

          "&::-webkit-scrollbar-track": {
            background: theme.colors["Color/Neutral/Border/colorBorderSubtle"],
            boxShadow: `inset ${theme.shadows["boxShadow-04"]}`,
            borderRadius: 0,
          },
        },
        "& .titleElement": {
          fontSize: 10,
          color: theme.colors["Color/Neutral/Text/colorTextSecondary"],
          textAlign: "center",
        },
      },
    },
    "& .titles": {
      display: "flex",
      width: "100%",
      justifyContent: "space-evenly",
    },
  });

export const selectorButtonStyles = (theme: Theme) =>
  css({
    cursor: "pointer",
    display: "flex",
    width: "100%",
    backgroundColor: "transparent",
    fontWeight: "bold",
    border: 0,
    padding: "5px 10px",
    color: theme.colors["Color/Brand/Primary/colorPrimaryText"],
    "&:hover": {
      backgroundColor: theme.colors["Color/Brand/Neutral/colorPrimaryBgHover"],
    },
    "&.selected": {
      backgroundColor: theme.colors["Color/Brand/Primary/colorPrimary"],
      color: theme.colors["Color/Neutral/Text/colorTextLightSolid"],
    },
  });
