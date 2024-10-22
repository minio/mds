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

import { css, Theme } from "@emotion/react";

export const tableMainStyles = css({
  display: "table",
  width: "100%",
  borderCollapse: "collapse",
  borderSpacing: 0,
});

export const tableBodyMainStyles = css({
  display: "table-row-group",
  width: "100%",
  borderCollapse: "collapse",
  borderSpacing: 0,
});

export const tableCellMainStyles = (theme: Theme) => ({
  fontFamily: "'Geist',sans-serif",
  fontWeight: 400,
  fontSize: 14,
  lineHeight: "20px",
  letterSpacing: "0.16px",
  display: "table-cell",
  verticalAlign: "inherit",
  borderBottom: `1px solid ${theme.colors["Color/Neutral/Border/colorBorderSubtle"]}`,
  textAlign: "left",
  padding: "8px 0",
  color: theme.colors["Color/Neutral/Text/colorText"],
});

export const tableHeadMainStyles = css({
  display: "table-row-group",
  width: "100%",
  borderCollapse: "collapse",
  borderSpacing: 0,
});

export const tableHeadCellMainStyles = (theme: Theme) => ({
  fontFamily: "'Geist',sans-serif",
  fontSize: 12,
  lineHeight: "16px",
  display: "table-cell",
  verticalAlign: "inherit",
  textAlign: "left",
  padding: "24px 0px 12px",
  fontWeight: "600",
  letterSpacing: "0.5px",
  color: theme.colors["Color/Neutral/Text/colorTextLabel"],
});

export const tableRowMainStyles = css({
  color: "inherit",
  display: "table-row",
  verticalAlign: "middle",
  outline: 0,
  cursor: "pointer",
  borderLeft: 0,
  borderRight: 0,
});
