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

import React, { Fragment } from "react";
import { Meta, Story } from "@storybook/react";

import Breadcrumbs from "./Breadcrumbs";
import { BreadcrumbsProps } from "./Breadcrumbs.types";

import StoryThemeProvider from "../../utils/StoryThemeProvider";
import { GlobalStyles } from "../index";
import Button from "../Button/Button";
import CopyIcon from "../Icons/CopyIcon";

export default {
  title: "MDS/Layout/Breadcrumbs",
  component: Breadcrumbs,
  argTypes: {},
} as Meta<typeof Breadcrumbs>;

const Template: Story<BreadcrumbsProps> = (args) => (
  <StoryThemeProvider>
    <GlobalStyles />
    <Breadcrumbs
      additionalOptions={
        <Fragment>
          <Button
            id={"copy-path"}
            icon={
              <CopyIcon
                style={{
                  width: "12px",
                  height: "12px",
                  fill: "#969FA8",
                  marginTop: -1,
                }}
              />
            }
            variant={"regular"}
            onClick={() => {
              alert("Copy test");
            }}
            style={{
              width: "28px",
              height: "28px",
              color: "#969FA8",
              border: "#969FA8 1px solid",
              marginRight: 5,
            }}
          />
        </Fragment>
      }
      goBackFunction={() => {
        alert("Go back!");
      }}
    >
      <a href="#">First Link</a>
      <span className={"slashSpacingStyle"}>/</span>
      <a href="#">Second Link</a>
      <span className={"slashSpacingStyle"}>/</span>
      <a href="#">Third Link</a>
      <span className={"slashSpacingStyle"}>/</span>
      <a href="#">Fourth Link</a>
      <span className={"slashSpacingStyle"}>/</span>
      <a href="#">Fifth Link</a>
      <span className={"slashSpacingStyle"}>/</span>
      <a href="#">Sixth Link</a>
      <span className={"slashSpacingStyle"}>/</span>
      <a href="#">Seventh Link</a>
      <span className={"slashSpacingStyle"}>/</span>
      <a href="#">Eighth Link</a>
    </Breadcrumbs>
  </StoryThemeProvider>
);

export const Default = Template.bind({});
Default.args = {};
