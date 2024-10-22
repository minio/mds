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

export const parentContainerStyles = css({
  display: "flex",
  flexDirection: "row",
  width: "100%",
  left: 0,
  justifyContent: "space-between",
  paddingLeft: 32,
  paddingRight: 32,
  borderBottom: 0,
  paddingTop: 24,
  paddingBottom: 0,
  marginBottom: 0,
  alignItems: "start",
  "& .page-header-label": {
    color: "#21242B",
    fontSize: 24,
    fontStyle: " normal",
    fontWeight: "bold",
    lineHeight: " 28px",
  },
  "& .page-header-label,& .page-header-actions": {
    flexGrow: 1,
  },
});

export const labelContainerStyles = (theme: Theme) =>
  css({
    color: theme.colors["Color/Brand/Neutral/colorPrimaryText"],
    fontSize: 20,
    paddingLeft: 0,
    display: "flex",
    flexGrow: 1,
    marginRight: 0,
    "& a": {
      color: theme.colors["Color/Brand/Neutral/colorPrimaryText"],
      textDecoration: "none",
    },
  });

export const middleContainerStyles = css({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexGrow: 1,
  margin: "0 10px",
});

export const actionsContainerStyles = css({
  display: "flex",
  justifyContent: "flex-end",
  paddingRight: 0,
  flexGrow: 1,
  marginLeft: 10,
  gap: 8,
});
