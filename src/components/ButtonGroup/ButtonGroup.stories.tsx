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

import ButtonGroup from "./ButtonGroup";
import { ButtonGroupProps } from "./ButtonGroup.types";

import StoryThemeProvider from "../../utils/StoryThemeProvider";
import GlobalStyles from "../GlobalStyles/GlobalStyles";
import Button from "../Button/Button";
import Tooltip from "../Tooltip/Tooltip";
import ExpandMenuOption from "../ExpandMenu/ExpandMenuOption";
import ExpandMenu from "../ExpandMenu/ExpandMenu";
import TestIcon from "../../utils/TestIcon";
import DeleteIcon from "../Icons/NewDesignIcons/DeleteIcon";
import EditIcon from "../Icons/EditIcon";
import AddIcon from "../Icons/AddIcon";
import RefreshCWIcon from "../Icons/NewDesignIcons/RefreshCWIcon";

export default {
  title: "MDS/Forms/ButtonGroup",
  component: ButtonGroup,
  argTypes: {},
} as Meta<typeof ButtonGroup>;

const Template: Story<ButtonGroupProps> = (args) => (
  <StoryThemeProvider>
    <GlobalStyles />
    <ButtonGroup {...args}>
      <Button id={"test"} icon={<TestIcon />} iconLocation={"start"}>
        Button one
      </Button>
      <Button id={"test"} icon={<TestIcon />} iconLocation={"start"}>
        Button one
      </Button>
      <Button id={"test"} icon={<TestIcon />} iconLocation={"start"}>
        Button one
      </Button>
      <Tooltip tooltip={"with tooltip"}>
        <Button id={"test"} icon={<TestIcon />} iconLocation={"start"}>
          Button one
        </Button>
      </Tooltip>
      <Button id={"test"} icon={<TestIcon />} disabled iconLocation={"start"}>
        Button one
      </Button>
      <Button
        id="secondaryButton"
        variant={"descructive"}
        icon={<DeleteIcon />}
        iconLocation={"start"}
      >
        Delete
      </Button>
      <ExpandMenuOption id={"expand-option-test"} icon={<EditIcon />}>
        Expand Option Only
      </ExpandMenuOption>
      <ExpandMenu
        id={"expand-menu"}
        label={"Expand Menu"}
        dropMenuPosition={"end"}
      >
        <Button id={"test"} icon={<TestIcon />} iconLocation={"start"}>
          Button one
        </Button>
        <Button id={"test"} icon={<TestIcon />} iconLocation={"start"}>
          Button one
        </Button>
        <Button id={"test"} icon={<TestIcon />} iconLocation={"start"}>
          Button one
        </Button>
      </ExpandMenu>
    </ButtonGroup>

    <h2>Icon Only buttons</h2>

    <ButtonGroup {...args}>
      <Button id={"test"} icon={<TestIcon />} iconLocation={"start"} />
      <Button id={"test"} icon={<TestIcon />} iconLocation={"start"} />
      <Button id={"test"} icon={<TestIcon />} iconLocation={"start"} />
      <Tooltip tooltip={"with tooltip"}>
        <Button id={"test"} icon={<TestIcon />} iconLocation={"start"} />
      </Tooltip>
      <Button id={"test"} icon={<TestIcon />} disabled iconLocation={"start"} />
      <Button
        id="secondaryButton"
        variant={"descructive"}
        icon={<DeleteIcon />}
        iconLocation={"start"}
      />
      <ExpandMenu
        id={"expand-menu"}
        icon={<AddIcon />}
        dropMenuPosition={"end"}
        dropArrow={false}
      >
        <Button id={"test"} icon={<TestIcon />} iconLocation={"start"}>
          Button one
        </Button>
        <Button id={"test"} icon={<TestIcon />} iconLocation={"start"}>
          Button one
        </Button>
        <Button id={"test"} icon={<TestIcon />} iconLocation={"start"}>
          Button one
        </Button>
      </ExpandMenu>
    </ButtonGroup>

    <h2>No Icons</h2>

    <ButtonGroup {...args}>
      <Button id={"test"} iconLocation={"start"} label={"Button"} />
      <Button id={"test"} iconLocation={"start"} label={"Button"} />
      <Button id={"test"} iconLocation={"start"} label={"Button"} />
      <Tooltip tooltip={"with tooltip"}>
        <Button id={"test"} iconLocation={"start"} label={"Button"} />
      </Tooltip>
      <Button id={"test"} disabled iconLocation={"start"} label={"Button"} />
      <Button
        id="secondaryButton"
        variant={"descructive"}
        iconLocation={"start"}
        label={"Button"}
      />
      <ExpandMenu
        id={"expand-menu"}
        dropMenuPosition={"end"}
        dropArrow={false}
        label={"Expand"}
      >
        <Button id={"test"} iconLocation={"start"}>
          Button one
        </Button>
        <Button id={"test"} iconLocation={"start"}>
          Button one
        </Button>
        <Button id={"test"} iconLocation={"start"}>
          Button one
        </Button>
      </ExpandMenu>
    </ButtonGroup>

    <h2>Single Icon Button</h2>

    <ButtonGroup {...args}>
      <Button id={"test"} icon={<RefreshCWIcon />} iconLocation={"start"} />
    </ButtonGroup>
  </StoryThemeProvider>
);

export const Default = Template.bind({});
Default.args = {};
