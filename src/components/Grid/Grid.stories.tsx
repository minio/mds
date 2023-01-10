// This file is part of MinIO Design System
// Copyright (c) 2022 MinIO, Inc.
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

import React from "react";
import { Meta, Story } from "@storybook/react";

import Grid from "./Grid";
import { GridProps } from "./Grid.types";

import StoryThemeProvider from "../../utils/StoryThemeProvider";
import GlobalStyles from "../GlobalStyles/GlobalStyles";

export default {
  title: "MDS/Layout/Grid",
  component: Grid,
  argTypes: {},
} as Meta<typeof Grid>;

const Template: Story<GridProps> = (args) => (
  <StoryThemeProvider>
    <GlobalStyles />
    <Grid
      container
      sx={{
        backgroundColor: "#080",
        padding: 15,
        marginBottom: 15,
      }}
      id={"idElement"}
    >
      <Grid
        item
        xs={12}
        md={6}
        sx={{ backgroundColor: "#abc", border: "#fff 1px solid", padding: 5 }}
        onClick={() => {
          alert("You clicked me!");
        }}
      >
        xs = 12
        <br />
        md = 6
        <br />
        CLICK ME!
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          backgroundColor: "#b4f3b4",
          border: "#fff 1px solid",
          padding: 5,
        }}
      >
        xs = 12
        <br />
        md = 6
      </Grid>
    </Grid>
    <Grid
      container
      sx={{ backgroundColor: "#11619e", marginBottom: 15, padding: 15 }}
    >
      <Grid
        item
        xs={"auto"}
        sm={7}
        md={8}
        lg={12}
        sx={{
          backgroundColor: "#091",
          padding: 5,
        }}
      >
        xs = auto
        <br />
        sm = 7<br />
        md = 8<br />
        lg = 12
      </Grid>
      <Grid
        item
        xs={6}
        sm={3}
        md={2}
        sx={{
          backgroundColor: "#2f9",
          padding: 5,
        }}
      >
        xs = 6<br />
        sm = 3<br />
        md = 2
      </Grid>
      <Grid
        item
        xs
        sm={2}
        md={1}
        sx={{
          backgroundColor: "#f09",
          padding: 5,
          color: "#fff",
        }}
      >
        xs = auto, sm = 2, md = 1
      </Grid>
    </Grid>
    <Grid container sx={{ marginBottom: 15 }}>
      <Grid item xs={6} md={1} sx={{ backgroundColor: "#abc" }}>
        xs = 6 <br /> md = 1
      </Grid>
      <Grid item xs={6} md={1} sx={{ backgroundColor: "#c0f", color: "#fff" }}>
        xs = 6 <br /> md = 1
      </Grid>
      <Grid item xs={6} md={1} sx={{ backgroundColor: "#123", color: "#fff" }}>
        xs = 6 <br /> md = 1
      </Grid>
      <Grid item xs={6} md={1} sx={{ backgroundColor: "#44f", color: "#fff" }}>
        xs = 6 <br /> md = 1
      </Grid>
      <Grid item xs={6} md={1} sx={{ backgroundColor: "#90d", color: "#fff" }}>
        xs = 6 <br /> md = 1
      </Grid>
      <Grid item xs={6} md={1} sx={{ backgroundColor: "#67a" }}>
        xs = 6 <br /> md = 1
      </Grid>
      <Grid item xs={6} md={1} sx={{ backgroundColor: "#500", color: "#fff" }}>
        xs = 6 <br /> md = 1
      </Grid>
      <Grid item xs={6} md={1} sx={{ backgroundColor: "#972" }}>
        xs = 6 <br /> md = 1
      </Grid>
      <Grid item xs={6} md={1} sx={{ backgroundColor: "#dc0" }}>
        xs = 6 <br /> md = 1
      </Grid>
      <Grid item xs={6} md={1} sx={{ backgroundColor: "#a02", color: "#fff" }}>
        xs = 6 <br /> md = 1
      </Grid>
      <Grid item xs={6} md={1} sx={{ backgroundColor: "#456", color: "#fff" }}>
        xs = 6 <br /> md = 1
      </Grid>
      <Grid item xs={6} md={1} sx={{ backgroundColor: "#c27", color: "#fff" }}>
        xs = 6 <br /> md = 1
      </Grid>
    </Grid>
    <Grid container sx={{ marginBottom: 15 }}>
      <Grid item xs={"hidden"} sm={12} sx={{ backgroundColor: "#abc" }}>
        Hidden on extra small screens
      </Grid>
      <Grid
        item
        xs={12}
        sm={"hidden"}
        sx={{ backgroundColor: "#c0f", color: "#fff" }}
      >
        Hidden on small screens
      </Grid>
      <Grid
        item
        xs={12}
        md={"hidden"}
        sx={{ backgroundColor: "#123", color: "#fff" }}
      >
        Hidden on medium screens
      </Grid>

      <Grid
        item
        xs={12}
        lg={"hidden"}
        sx={{ backgroundColor: "#500", color: "#fff" }}
      >
        Hidden on large screens
      </Grid>

      <Grid
        item
        xs={12}
        xl={"hidden"}
        sx={{ backgroundColor: "#972", color: "#fff" }}
      >
        Hidden on extra large screens
      </Grid>
    </Grid>
  </StoryThemeProvider>
);

export const Default = Template.bind({});
Default.args = {};
