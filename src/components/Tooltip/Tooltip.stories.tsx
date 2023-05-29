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

import Tooltip from "./Tooltip";
import StoryThemeProvider from "../../utils/StoryThemeProvider";
import GlobalStyles from "../GlobalStyles/GlobalStyles";
import { TooltipProps } from "./Tooltip.types";
import Button from "../Button/Button";
import Grid from "../Grid/Grid";

export default {
  title: "MDS/Graphics/Tooltip",
  component: Tooltip,
  argTypes: {},
} as Meta<typeof Tooltip>;

const Template: Story<TooltipProps> = (args) => (
  <StoryThemeProvider>
    <GlobalStyles />
    <Grid container>
      <Grid item xs={4}>
        <Tooltip {...args} />
      </Grid>
      <Grid item xs={4}>
        <Grid
          container
          sx={{
            flexDirection: "column",
            display: "flex",
            height: "calc(100vh - 40px)",
          }}
        >
          <Grid
            item
            xs={4}
            sx={{
              display: "flex",
              flexGrow: 1,
              height: "100%",
              justifyContent: "center",
              alignItems: "flex-start",
            }}
          >
            <Tooltip {...args} />
          </Grid>
          <Grid
            item
            xs={4}
            sx={{
              display: "flex",
              flexGrow: 1,
              height: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Tooltip {...args} />
          </Grid>
          <Grid
            item
            xs={4}
            sx={{
              display: "flex",
              flexGrow: 1,
              height: "100%",
              justifyContent: "center",
              alignItems: "flex-end",
            }}
          >
            <Tooltip {...args} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={4} sx={{ textAlign: "right" }}>
        <Tooltip {...args} />
      </Grid>
    </Grid>
  </StoryThemeProvider>
);

export const Bottom = Template.bind({});
Bottom.args = {
  tooltip: <span>Some tooltip Label</span>,
  placement: "bottom",
  children: <span>A span block</span>,
};

export const Top = Template.bind({});
Top.args = {
  tooltip: <span>Some tooltip Label</span>,
  placement: "top",
  children: <div>A div with some content</div>,
};

export const Left = Template.bind({});
Left.args = {
  tooltip: <span>Some tooltip Label</span>,
  placement: "left",
  children: <a href={"#"}>A link</a>,
};

export const Right = Template.bind({});
Right.args = {
  tooltip: <span>Some tooltip Label</span>,
  placement: "right",
  children: <Button id={"testButton1"}>Enabled Button</Button>,
};

export const OnDisabledElement = Template.bind({});
OnDisabledElement.args = {
  tooltip: <span>Some tooltip Label</span>,
  placement: "top",
  children: (
    <Button id={"testButton"} disabled style={{ pointerEvents: "none" }}>
      Button
    </Button>
  ),
};
