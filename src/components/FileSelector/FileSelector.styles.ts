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

export const fileSelectorContainerStyles = (theme: Theme) =>
  css({
    display: "flex",
    flexGrow: 1,
    width: "100%",
    "& .textBoxContainer": {
      width: "100%",
      flexGrow: 1,
      position: "relative",
      minWidth: 160,
    },
    "& .tooltipContainer": {
      marginLeft: 5,
      display: "flex",
      alignItems: "center",
      "& .min-icon": {
        width: 13,
      },
    },
    "& .overlayAction": {
      position: "absolute",
      right: 5,
      top: 6,
    },
    "& .valueString": {
      maxWidth: 350,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      fontStyle: "italic",
      color: theme.colors["Color/Neutral/Text/colorTextSecondary"],
      "&.errorState": {
        color: theme.colors["Color/Brand/Error/colorPrimaryBorder"],
      },
      "&.warningState": {
        color: theme.colors["Color/Brand/Warning/colorPrimaryBorder"],
      },
      "&.successState": {
        color: theme.colors["Color/Brand/Success/colorPrimaryBorder"],
      },
    },
    "& .fileInputField": {
      display: "none",
      visibility: "hidden",
    },
    "& .fileReselect": {
      display: "flex",
      alignItems: "center",
      gap: 12,
    },
  });
