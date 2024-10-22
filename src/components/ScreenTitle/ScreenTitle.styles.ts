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

export const screenTitleContainerStyles = (
  theme: Theme,
  subTitle: boolean,
  titleOptions: boolean,
) => ({
  boxSizing: "border-box" as const,
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  width: "100%",
  "& .stContainer": {
    display: "flex",
    alignItems: !subTitle && !titleOptions ? "center" : ("flex-start" as const),
    gap: 24,
    justifyContent: "space-between",
    width: "100%",
  },
  "& .titleColumn": {
    height: !subTitle && !titleOptions ? "56px" : ("auto" as const),
    justifyContent: "center",
    display: "flex",
    flexFlow: "column",
    alignItems: "flex-start",
    gap: 0,
    "& .titleElement": {
      color: theme.colors["Color/Neutral/Text/colorTextHeading"],
    },
    "& .subTitle, .superTitle": {
      color: theme.colors["Color/Neutral/Text/colorTextQuaternary"],
    },
    "& .superTitle": {
      position: "absolute",
      marginTop: -44,
    },
  },
  "& .leftItems": {
    flexGrow: 1,
    display: "flex",
    justifyContent: "space-between",
    gap: 16,
    "& .titleColumn": {
      flexGrow: "1",
    },
    "& .badges": {
      display: "flex",
      alignItems: "center",
      gap: 4,
    },
    "& .options": {
      display: "flex",
      alignItems: "center",
      color: theme.colors["Color/Neutral/Text/colorTextTertiary"],
      gap: 24,
    },
  },
  "& .rightItems": {
    display: "flex",
    alignItems: "center",
    gap: 8,
    height: "100%",
  },
  "& .optionElement": {
    display: "flex",
    gap: theme.paddingSizes.sizeXS,
  },
  [`@media (max-width: ${breakPoints.md}px)`]: {
    "& .stContainer": {
      flexDirection: "column",
      gap: 12,
      flexFlow: "column",
      alignItems: "flex-start",
    },
    "& .headerBarIcon": { display: "none" },
    "& .headerBarSubheader": {
      display: "flex",
      flexDirection: "column",
    },
    "& .rightItems": {
      width: "100%",
      justifyContent: "flex-start",
    },
    "& .titleColumn": {
      "& .options": {
        flexDirection: "column",
        gap: 4,
      },
    },
  },
});
