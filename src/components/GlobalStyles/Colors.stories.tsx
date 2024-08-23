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

import { themeColors } from "../../global/themeColors";
import StoryThemeProvider from "../../utils/StoryThemeProvider";
import Box from "../Box/Box";
import GlobalStyles from "./GlobalStyles";

export default {
  title: "MDS/Global/Colors",
  component: GlobalStyles,
  argTypes: {},
} as Meta<typeof GlobalStyles>;

const renderItems = (variants: object, varName: string) => {
  return (
    <Box>
      <h1>{varName}</h1>
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
        {Object.keys(variants).map((varName) => (
          <Box className={"item"}>
            <Box>
              <strong>{varName}</strong>
            </Box>
            <Box className={"itemColor"}>
              <span>lightMode:</span>
              <Box
                className={"colorElement"}
                sx={{ backgroundColor: variants[varName].lightMode }}
              />
              <span>{variants[varName].lightMode}</span>
            </Box>
            <Box className={"itemColor"}>
              <span>darkMode:</span>
              <Box
                className={"colorElement"}
                sx={{ backgroundColor: variants[varName].darkMode }}
              />
              <span>{variants[varName].darkMode}</span>
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
        themeColors["varName"].lightMode <br />
        themeColors["varName"].darkMode <br />
        <br />
        Eg.: themeColors["Color/Neutral/Text/colorTextLabel"].lightMode
      </code>
    </Box>
    {renderItems(themeColors, "themeColors")}
  </StoryThemeProvider>
);

export const Default = Template.bind({});
Default.args = {};
