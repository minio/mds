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

import PageHeader from "./PageHeader";
import { PageHeaderProps } from "./PageHeader.types";

import StoryThemeProvider from "../../utils/StoryThemeProvider";
import { Button, GlobalStyles } from "../index";
import TestIcon from "../../utils/TestIcon";

export default {
  title: "MDS/Layout/PageHeader",
  component: PageHeader,
  argTypes: {},
} as Meta<typeof PageHeader>;

const Template: Story<PageHeaderProps> = (args) => (
  <StoryThemeProvider>
    <GlobalStyles />
    <PageHeader {...args} />
  </StoryThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
  label: "Just Label",
};

export const LabelAndSearch = Template.bind({});
LabelAndSearch.args = {
  label: "Label and Search",
  middleComponent: (
    <Fragment>
      <input
        type={"text"}
        id={"test"}
        style={{
          width: "500px",
          borderRadius: 3,
          height: 30,
          border: "#E5E5E5 1px solid",
        }}
      />
    </Fragment>
  ),
};

export const LabelAndActions = Template.bind({});
LabelAndActions.args = {
  label: "Label and Search",
  actions: (
    <Fragment>
      <Button id={"test1"} icon={<TestIcon />} />
      <Button id={"test2"} icon={<TestIcon />} />
      <Button id={"test3"} icon={<TestIcon />} />
      <Button id={"test4"} icon={<TestIcon />} />
      <Button id={"test5"} icon={<TestIcon />} />
    </Fragment>
  ),
};

export const LinkAsLabel = Template.bind({});
LinkAsLabel.args = {
  label: <a href={"#"}>&lt; Go Back</a>,
};

export const OtherComponents = Template.bind({});
OtherComponents.args = {
  label: <input type={"text"} />,
  middleComponent: "Just some Text",
  actions: <TestIcon />,
};

export const FullComponentsSet = Template.bind({});
FullComponentsSet.args = {
  label: "TestLabel",
  middleComponent: (
    <Fragment>
      <input
        type={"text"}
        id={"test"}
        style={{
          width: "500px",
          borderRadius: 3,
          height: 30,
          border: "#E5E5E5 1px solid",
        }}
      />
    </Fragment>
  ),
  actions: (
    <Fragment>
      <Button id={"test1"} icon={<TestIcon />} />
      <Button id={"test2"} icon={<TestIcon />} />
      <Button id={"test3"} icon={<TestIcon />} />
      <Button id={"test4"} icon={<TestIcon />} />
      <Button id={"test5"} icon={<TestIcon />} />
    </Fragment>
  ),
};

export const CustomStyles = Template.bind({});
CustomStyles.args = {
  label: "Just Label",
  sx: {
    backgroundColor: "#008800",
  },
};
