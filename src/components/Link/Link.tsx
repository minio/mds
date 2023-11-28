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

import React, { FC } from "react";
import get from "lodash/get";
import styled from "styled-components";
import { lightColors } from "../../global/themes";
import { LinkProps } from "./Link.types";

const LinkBase = styled.a<LinkProps>(({ theme, sx }) => ({
  cursor: "pointer",
  display: "inline-flex",
  backgroundColor: "transparent",
  border: 0,
  padding: 0,
  color: get(theme, "linkColor", lightColors.linkColor),
  textDecoration: "none",
  fontSize: "inherit",
  "&:visited": {
    color: get(theme, "linkColor", lightColors.linkColor),
  },
  "&:hover": {
    textDecoration: "underline",
    color: get(theme, "linkColor", lightColors.linkColor),
  },
  ...sx,
}));

const Link: FC<LinkProps & React.AnchorHTMLAttributes<HTMLAnchorElement>> = ({
  sx,
  children,
  ...props
}) => {
  return (
    <LinkBase {...props} sx={sx}>
      {children}
    </LinkBase>
  );
};

export default Link;
