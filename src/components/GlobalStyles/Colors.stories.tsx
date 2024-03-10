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
import StoryThemeProvider from "../../utils/StoryThemeProvider";
import GlobalStyles from "./GlobalStyles";
import Box from "../Box/Box";
import { darkColors, lightV2 } from "../../global/themes";

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
            display: "flex",
            gap: 5,
          },
          "& .colorElement": {
            width: 16,
            height: 16,
            display: "block",
            border: "1px solid #000",
          },
        }}
      >
        {Object.keys(variants).map((varName) => (
          <Box className={"item"}>
            <Box
              className={"colorElement"}
              sx={{ backgroundColor: variants[varName] }}
            />
            {varName} {variants[varName]}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

const Template: Story = (args) => (
  <StoryThemeProvider>
    <GlobalStyles />
    {renderItems(lightV2, "lightV2")}
    {renderItems(darkColors, "darkColors (Don't use yet)")}
  </StoryThemeProvider>
);

export const Default = Template.bind({});
Default.args = {};
