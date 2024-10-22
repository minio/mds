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

import React from "react";
import { Meta, Story } from "@storybook/react";

import GlobalStyles from "./";
import Box from "../Box";
import StoryThemeProvider from "../../utils/StoryThemeProvider";
import { darkModeColors, lightModeColors } from "../../global/themeColors";

export default {
  title: "MDS/Global/Colors",
  component: GlobalStyles,
  argTypes: {},
} as Meta<typeof GlobalStyles>;

const renderItems = (variants: object) => {
  return (
    <Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "auto auto auto",
          width: "100%",
          flexWrap: "wrap",
          gap: 15,
          "& .item": {
            gap: 15,
            "& .itemColor": {
              display: "grid",
              gridTemplateColumns: "1fr 16px 1fr",
              gap: 5,
            },
          },
          "& .colorElement": {
            width: 16,
            height: 16,
            minWidth: 16,
            minHeight: 16,
            display: "block",
            border: "1px solid #000",
          },
        }}
      >
        {Object.keys(variants).map((varName: any) => (
          <Box className={"item"}>
            <Box>
              <strong>{varName}</strong>
            </Box>
            <Box className={"itemColor"}>
              <span>Color:</span>
              <Box
                className={"colorElement"}
                sx={{ backgroundColor: variants[varName] }}
              />
              <span>{variants[varName]}</span>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

const Template: Story = (args) => (
  <StoryThemeProvider>
    <GlobalStyles />
    <Box>
      <h1>Color vars Usage</h1>
      <code>
        theme.colors["varName"] <br />
        theme.colors["varName"] <br />
        <br />
        Eg.: theme.colors["Color/Neutral/Text/colorTextLabel"]
      </code>
    </Box>
    <h2>Light Colors</h2>
    {renderItems(lightModeColors)}
    <h2>Dark Colors</h2>
    {renderItems(darkModeColors)}
  </StoryThemeProvider>
);

export const Default = Template.bind({});
Default.args = {};
