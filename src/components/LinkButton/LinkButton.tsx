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

import React, { FC, Fragment } from "react";
import get from "lodash/get";
import styled from "styled-components";

import { themeColors } from "../../global/themeColors";
import { overridePropsParse } from "../../global/utils";
import Loader from "../Loader/Loader";
import { BaseLinkButtonProps, LinkButtonProps } from "./LinkButton.types";

const LinkButtonBase = styled.button.attrs(() => ({
  className: "LinkButton",
}))<BaseLinkButtonProps>(({ theme, sx, variant }) => ({
  cursor: "pointer",
  display: "inline-flex",
  backgroundColor: "transparent",
  border: 0,
  padding: 0,
  color: get(
    theme,
    `linkButton.${variant}`,
    themeColors["Color/Brand/Primary/colorPrimaryText"].lightMode,
  ),
  textDecoration: "none",
  fontSize: "inherit",
  "&:hover:not(:disabled)": {
    textDecoration: "underline",
  },
  "&:disabled": {
    cursor: "not-allowed",
    color: get(
      theme,
      `linkButton.disabled`,
      themeColors["Color/Neutral/Text/colorTextDisabled"].lightMode,
    ),
  },
  ...overridePropsParse(sx, theme),
}));

const LinkButton: FC<
  LinkButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ label = "", isLoading = false, sx, children, ...props }) => {
  return (
    <LinkButtonBase {...props} sx={sx}>
      {isLoading ? (
        <Loader style={{ width: 16, height: 16 }} />
      ) : (
        <Fragment>
          {label}
          {children}
        </Fragment>
      )}
    </LinkButtonBase>
  );
};

export default LinkButton;
