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

export const inputHelperStyles = (theme: Theme) => ({
  fontFamily: "'Geist', sans-serif",
  fontSize: 14,
  color: theme.colors["Color/Neutral/Text/colorTextDescription"],
  marginTop: 4,
  lineHeight: "16px",
  minHeight: 16,
  "&.errorState": {
    color: theme.colors["Color/Brand/Error/colorPrimaryText"],
  },
  "&.successState": {
    color: theme.colors["Color/Brand/Success/colorPrimaryText"],
  },
  "&.warningState": {
    color: theme.colors["Color/Brand/Warning/colorPrimaryText"],
  },
});
