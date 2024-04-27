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

import React, { Fragment, useState } from "react";
import { Meta, Story } from "@storybook/react";

import ExpandMenu from "./ExpandMenu";
import { ExpandMenuProps } from "./ExpandMenu.types";

import StoryThemeProvider from "../../utils/StoryThemeProvider";
import GlobalStyles from "../GlobalStyles/GlobalStyles";
import ExpandMenuOption from "./ExpandMenuOption";
import Button from "../Button/Button";
import EditIcon from "../Icons/EditIcon";
import VersionsIcon from "../Icons/VersionsIcon";
import DeleteIcon from "../Icons/NewDesignIcons/DeleteIcon";
import TestIcon from "../../utils/TestIcon";

export default {
  title: "MDS/Forms/ExpandMenu",
  component: ExpandMenu,
  argTypes: {},
} as Meta<typeof ExpandMenu>;

const Template: Story<ExpandMenuProps> = (args) => {
  const [open, setOpen] = useState<boolean>(false);

  const extraArgs = {
    ...args,
    open,
    onClick: () => {
      setOpen(!open);
    },
  };

  return (
    <StoryThemeProvider>
      <GlobalStyles />
      <ExpandMenu {...extraArgs} />
    </StoryThemeProvider>
  );
};

export const Default = Template.bind({});
Default.args = {
  id: "expand-button",
  label: "Option",
  children: (
    <Fragment>
      <ExpandMenuOption
        id={"opt-1"}
        onClick={() => {
          console.log("click1");
        }}
        icon={<EditIcon />}
      >
        Option 1
      </ExpandMenuOption>
      <ExpandMenuOption
        id={"opt-2"}
        onClick={() => {
          console.log("click2");
        }}
        icon={<Fragment />}
      >
        Option 2
      </ExpandMenuOption>
      <ExpandMenuOption
        id={"opt-3"}
        onClick={() => {
          console.log("click3");
        }}
        icon={<VersionsIcon />}
      >
        Display Object Versions
      </ExpandMenuOption>
      <ExpandMenuOption
        id={"opt-4 "}
        onClick={() => {
          console.log("click4");
        }}
        className={"danger"}
        icon={<DeleteIcon />}
      >
        Option 4
      </ExpandMenuOption>
      <Button
        id={"test-button"}
        onClick={() => {
          console.log("Mixed");
        }}
        icon={<TestIcon />}
        iconLocation={"start"}
      >
        Mixed Button
      </Button>
      <ExpandMenuOption
        id={"opt-4 "}
        onClick={() => {
          console.log("click5");
        }}
        icon={<DeleteIcon />}
        disabled
      >
        Disabled Option
      </ExpandMenuOption>
    </Fragment>
  ),
};

export const IconOnly = Template.bind({});
IconOnly.args = {
  id: "expand-button",
  icon: <TestIcon />,
  children: (
    <Fragment>
      <ExpandMenuOption
        id={"opt-1"}
        onClick={() => {
          console.log("click1");
        }}
        icon={<EditIcon />}
      >
        Option 1
      </ExpandMenuOption>
      <ExpandMenuOption
        id={"opt-2"}
        onClick={() => {
          console.log("click2");
        }}
        icon={<Fragment />}
      >
        Option 2
      </ExpandMenuOption>
      <ExpandMenuOption
        id={"opt-3"}
        onClick={() => {
          console.log("click3");
        }}
        icon={<VersionsIcon />}
      >
        Display Object Versions
      </ExpandMenuOption>
      <ExpandMenuOption
        id={"opt-4 "}
        onClick={() => {
          console.log("click4");
        }}
        className={"danger"}
        icon={<DeleteIcon />}
      >
        Option 4
      </ExpandMenuOption>
      <Button
        id={"test-button"}
        onClick={() => {
          console.log("Mixed");
        }}
        icon={<TestIcon />}
        iconLocation={"start"}
      >
        Mixed Button
      </Button>
      <ExpandMenuOption
        id={"opt-4 "}
        onClick={() => {
          console.log("click5");
        }}
        icon={<DeleteIcon />}
        disabled
      >
        Disabled Option
      </ExpandMenuOption>
    </Fragment>
  ),
};

export const DisabledOption = Template.bind({});
DisabledOption.args = {
  id: "expand-button",
  icon: <TestIcon />,
  disabled: true,
  children: (
    <Fragment>
      <ExpandMenuOption
        id={"opt-1"}
        onClick={() => {
          console.log("click1");
        }}
        icon={<EditIcon />}
      >
        Option 1
      </ExpandMenuOption>
      <ExpandMenuOption
        id={"opt-2"}
        onClick={() => {
          console.log("click2");
        }}
        icon={<Fragment />}
      >
        Option 2
      </ExpandMenuOption>
      <ExpandMenuOption
        id={"opt-3"}
        onClick={() => {
          console.log("click3");
        }}
        icon={<VersionsIcon />}
      >
        Display Object Versions
      </ExpandMenuOption>
      <ExpandMenuOption
        id={"opt-4 "}
        onClick={() => {
          console.log("click4");
        }}
        className={"danger"}
        icon={<DeleteIcon />}
      >
        Option 4
      </ExpandMenuOption>
      <Button
        id={"test-button"}
        onClick={() => {
          console.log("Mixed");
        }}
        icon={<TestIcon />}
        iconLocation={"start"}
      >
        Mixed Button
      </Button>
      <ExpandMenuOption
        id={"opt-4 "}
        onClick={() => {
          console.log("click5");
        }}
        icon={<DeleteIcon />}
        disabled
      >
        Disabled Option
      </ExpandMenuOption>
    </Fragment>
  ),
};
