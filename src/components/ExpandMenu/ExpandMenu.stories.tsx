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
import { Meta, StoryFn } from "@storybook/react";

import { ExpandMenuProps } from "./ExpandMenu.types";
import ExpandMenuOption from "./ExpandMenuOption";
import StoryThemeProvider from "../../utils/StoryThemeProvider";
import PencilLineIcon from "../../icons/PencilLineIcon";
import IceCreamConeIcon from "../../icons/IceCreamConeIcon";
import DeleteIcon from "../../icons/DeleteIcon";
import Button from "../Button";
import TestIcon from "../../utils/TestIcon";
import FilesIcon from "../../icons/FilesIcon";
import PencilIcon from "../../icons/PencilIcon";
import ExpandMenu from "./";
import GlobalStyles from "../GlobalStyles";
import ExpandMenuDivider from "./ExpandMenuDivider";
import LogOutIcon from "../../icons/LogOutIcon";
import BookIcon from "../../icons/BookIcon";
import UserIcon from "../../icons/UserIcon";
import CircleUserIcon from "../../icons/CircleUserIcon";
import UserCheckIcon from "../../icons/UserCheckIcon";
import SquareUserIcon from "../../icons/SquareUserIcon";
import BadgeCheckIcon from "../../icons/BadgeCheckIcon";
import ExpandMenuDescription from "./ExpandMenuDescription";
import Badge from "../Badge";

export default {
  title: "MDS/Forms/ExpandMenu",
  component: ExpandMenu,
  argTypes: {},
} as Meta<typeof ExpandMenu>;

const Template: StoryFn<ExpandMenuProps> = (args) => {
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
        icon={<PencilLineIcon />}
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
        icon={<IceCreamConeIcon />}
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
        icon={<PencilLineIcon />}
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
        icon={<IceCreamConeIcon />}
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
        icon={<PencilLineIcon />}
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
        icon={<FilesIcon />}
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

export const LongOptionsList = Template.bind({});
LongOptionsList.args = {
  id: "expand-button",
  icon: <TestIcon />,
  children: (
    <Fragment>
      <ExpandMenuOption
        id={"opt-1"}
        onClick={() => {
          console.log("click1");
        }}
        icon={<PencilLineIcon />}
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
        icon={<PencilLineIcon />}
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

      <ExpandMenuOption
        id={"opt-5"}
        onClick={() => {
          console.log("click1");
        }}
        icon={<PencilLineIcon />}
      >
        Option 5
      </ExpandMenuOption>
      <ExpandMenuOption
        id={"opt-6"}
        onClick={() => {
          console.log("click2");
        }}
        icon={<Fragment />}
      >
        Option 6
      </ExpandMenuOption>
      <ExpandMenuOption
        id={"opt-7"}
        onClick={() => {
          console.log("click3");
        }}
        icon={<IceCreamConeIcon />}
      >
        Display Object Versions
      </ExpandMenuOption>
      <ExpandMenuOption
        id={"opt-8"}
        onClick={() => {
          console.log("click4");
        }}
        className={"danger"}
        icon={<DeleteIcon />}
      >
        Option 8
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
        id={"opt-9"}
        onClick={() => {
          console.log("click5");
        }}
        icon={<DeleteIcon />}
        disabled
      >
        Disabled Option
      </ExpandMenuOption>
      <ExpandMenuOption
        id={"opt-5"}
        onClick={() => {
          console.log("click1");
        }}
        icon={<PencilIcon />}
      >
        Option 5
      </ExpandMenuOption>
      <ExpandMenuOption
        id={"opt-6"}
        onClick={() => {
          console.log("click2");
        }}
        icon={<Fragment />}
      >
        Option 6
      </ExpandMenuOption>
      <ExpandMenuOption
        id={"opt-7"}
        onClick={() => {
          console.log("click3");
        }}
        icon={<IceCreamConeIcon />}
      >
        Display Object Versions
      </ExpandMenuOption>
      <ExpandMenuOption
        id={"opt-8"}
        onClick={() => {
          console.log("click4");
        }}
        className={"danger"}
        icon={<DeleteIcon />}
      >
        Option 8
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
        id={"opt-9"}
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

export const ListDividersWithInputOptions = Template.bind({});
ListDividersWithInputOptions.args = {
  id: "expand-button",
  icon: <CircleUserIcon />,
  forInputOptions: true,
  variant: "primary-ghost",
  children: (
    <Fragment>
      <ExpandMenuDescription
        icon={<UserIcon width={16} height={16} />}
        title={"Firstname Lastname"}
        subTitle={"extras@domain.ext"}
        extras={
          <Fragment>
            <Badge label={"Admin"} id={"admin-pill"} size={"small"} />
          </Fragment>
        }
      />
      <ExpandMenuDivider />
      <ExpandMenuOption
        id={"opt-2"}
        onClick={() => {
          console.log("click2");
        }}
        icon={<CircleUserIcon />}
      >
        My Profile
      </ExpandMenuOption>
      <ExpandMenuDivider />
      <ExpandMenuOption
        id={"opt-3"}
        onClick={() => {
          console.log("click3");
        }}
        icon={<UserIcon />}
      >
        Users
      </ExpandMenuOption>
      <ExpandMenuOption
        id={"opt-4 "}
        onClick={() => {
          console.log("click4");
        }}
        icon={<UserCheckIcon />}
      >
        Roles
      </ExpandMenuOption>
      <Button
        id={"test-button"}
        onClick={() => {
          console.log("Mixed");
        }}
        icon={<SquareUserIcon />}
        iconLocation={"start"}
      >
        Identity Providers
      </Button>
      <ExpandMenuOption
        id={"opt-4 "}
        onClick={() => {
          console.log("click5");
        }}
        icon={<BadgeCheckIcon />}
      >
        License
      </ExpandMenuOption>
      <ExpandMenuDivider />
      <ExpandMenuOption
        id={"opt-5"}
        onClick={() => {
          console.log("click1");
        }}
        icon={<BookIcon />}
      >
        Documentation
      </ExpandMenuOption>
      <ExpandMenuDivider />
      <ExpandMenuOption
        id={"opt-6"}
        onClick={() => {
          console.log("click2");
        }}
        icon={<LogOutIcon />}
      >
        Logout
      </ExpandMenuOption>
    </Fragment>
  ),
};
