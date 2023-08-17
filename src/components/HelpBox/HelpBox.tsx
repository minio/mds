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
import styled from "styled-components";
import get from "lodash/get";
import { HelpBoxProps } from "./HelpBox.types";
import Grid from "../Grid/Grid";

const BaseHelpBox = styled.div(({ theme }) => ({
  border: `1px solid ${get(theme, "borderColor", "#E2E2E2")}`,
  borderRadius: 2,
  backgroundColor: get(theme, "boxBackground", "#FBFAFA"),
  paddingLeft: 25,
  paddingTop: 20,
  paddingBottom: 20,
  paddingRight: 30,
  "& .leftItems": {
    fontSize: 16,
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    "& .min-icon": {
      marginRight: 15,
      height: 28,
      width: 38,
    },
  },
  "& .helpText": {
    fontSize: 16,
    paddingLeft: 5,
    marginTop: 15,
  },
}));

const HelpBox: FC<HelpBoxProps> = ({ iconComponent, title, help }) => {
  return (
    <BaseHelpBox className={"helpbox-container"}>
      <Grid container>
        <Grid item xs={12} className={"leftItems"}>
          {iconComponent || null}
          {title}
        </Grid>
        {help && (
          <Grid item xs={12} className={"helpText"}>
            {help}
          </Grid>
        )}
      </Grid>
    </BaseHelpBox>
  );
};

export default HelpBox;
