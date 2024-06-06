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

import Button from "./Button";
import { ButtonProps } from "./Button.types";

import StoryThemeProvider from "../../utils/StoryThemeProvider";
import GlobalStyles from "../GlobalStyles/GlobalStyles";
import { Box, ButtonGroup } from "../index";
import PlusIcon from "../Icons/NewDesignIcons/PlusIcon";

export default {
  title: "UI Kit/Forms & Inputs/Buttons",
  component: Button,
  argTypes: {},
  parameters: {
    pseudo: {
      hover: [".hover"],
    },
  },
} as Meta<typeof Button>;

const Template: Story<ButtonProps> = (args) => (
  <StoryThemeProvider>
    <GlobalStyles />
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 44,
        "& .buttonDisplay": {
          display: "flex",
          flexDirection: "column",
          gap: 16,
          "& .buttonRow": {
            display: "flex",
            "& .box": {
              flexBasis: "25%",
            },
          },
        },
      }}
    >
      <Box className={"buttonDisplay"}>
        <Box className={"buttonRow"}>
          <Box>
            <Button
              {...args}
              label={"Button"}
              variant={"primary"}
              compact={true}
            />
          </Box>
          <Box>
            <Button
              {...args}
              label={"Button"}
              variant={"primary"}
              compact={true}
              className={"hover"}
            />
          </Box>
          <Box>
            <Button
              {...args}
              label={"Button"}
              variant={"primary"}
              compact={true}
              className={"active"}
            />
          </Box>
          <Box>
            <Button
              {...args}
              label={"Button"}
              variant={"primary"}
              compact={true}
              disabled
            />
          </Box>
        </Box>
        <Box className={"buttonRow"}>
          <Box>
            <Button {...args} label={"Button"} compact={true} />
          </Box>
          <Box>
            <Button
              {...args}
              label={"Button"}
              compact={true}
              className={"hover"}
            />
          </Box>
          <Box>
            <Button
              {...args}
              label={"Button"}
              compact={true}
              className={"active"}
            />
          </Box>
          <Box></Box>
        </Box>
        <Box className={"buttonRow"}>
          <Box>
            <Button
              {...args}
              label={"Button"}
              variant={"destructive"}
              compact={true}
            />
          </Box>
          <Box>
            <Button
              {...args}
              label={"Button"}
              variant={"destructive"}
              compact={true}
              className={"hover"}
            />
          </Box>
          <Box>
            <Button
              {...args}
              label={"Button"}
              variant={"destructive"}
              compact={true}
              className={"active"}
            />
          </Box>
          <Box></Box>
        </Box>
        <Box className={"buttonRow"}>
          <Box>
            <Button
              {...args}
              label={"Button"}
              variant={"destructive-bare"}
              compact={true}
            />
          </Box>
          <Box>
            <Button
              {...args}
              label={"Button"}
              variant={"destructive-bare"}
              compact={true}
              className={"hover"}
            />
          </Box>
          <Box>
            <Button
              {...args}
              label={"Button"}
              variant={"destructive-bare"}
              compact={true}
              className={"active"}
            />
          </Box>
          <Box></Box>
        </Box>
      </Box>
      <Box className={"buttonDisplay"}>
        <Box className={"buttonRow"}>
          <Box>
            <Button
              {...args}
              label={"Button"}
              variant={"primary"}
              compact={false}
            />
          </Box>
          <Box>
            <Button
              {...args}
              label={"Button"}
              variant={"primary"}
              compact={false}
              className={"hover"}
            />
          </Box>
          <Box>
            <Button
              {...args}
              label={"Button"}
              variant={"primary"}
              compact={false}
              className={"active"}
            />
          </Box>
          <Box>
            <Button
              {...args}
              label={"Button"}
              variant={"primary"}
              compact={false}
              disabled
            />
          </Box>
        </Box>
        <Box className={"buttonRow"}>
          <Box>
            <Button {...args} label={"Button"} compact={false} />
          </Box>
          <Box>
            <Button
              {...args}
              label={"Button"}
              compact={false}
              className={"hover"}
            />
          </Box>
          <Box>
            <Button
              {...args}
              label={"Button"}
              compact={false}
              className={"active"}
            />
          </Box>
          <Box></Box>
        </Box>
        <Box className={"buttonRow"}>
          <Box>
            <Button
              {...args}
              label={"Button"}
              variant={"destructive"}
              compact={false}
            />
          </Box>
          <Box>
            <Button
              {...args}
              label={"Button"}
              variant={"destructive"}
              compact={false}
              className={"hover"}
            />
          </Box>
          <Box>
            <Button
              {...args}
              label={"Button"}
              variant={"destructive"}
              compact={false}
              className={"active"}
            />
          </Box>
          <Box></Box>
        </Box>
        <Box className={"buttonRow"}>
          <Box>
            <Button
              {...args}
              label={"Button"}
              variant={"destructive-bare"}
              compact={false}
            />
          </Box>
          <Box>
            <Button
              {...args}
              label={"Button"}
              variant={"destructive-bare"}
              compact={false}
              className={"hover"}
            />
          </Box>
          <Box>
            <Button
              {...args}
              label={"Button"}
              variant={"destructive-bare"}
              compact={false}
              className={"active"}
            />
          </Box>
          <Box></Box>
        </Box>
      </Box>
      <Box className={"buttonDisplay"}>
        <Box className={"buttonRow"}>
          <Box>
            <Button
              {...args}
              icon={<PlusIcon />}
              variant={"primary"}
              compact={true}
            />
          </Box>
          <Box>
            <Button
              {...args}
              icon={<PlusIcon />}
              variant={"primary"}
              compact={true}
              className={"hover"}
            />
          </Box>
          <Box>
            <Button
              {...args}
              icon={<PlusIcon />}
              variant={"primary"}
              compact={true}
              className={"active"}
            />
          </Box>
          <Box>
            <Button
              {...args}
              icon={<PlusIcon />}
              variant={"primary"}
              compact={true}
              disabled
            />
          </Box>
        </Box>
        <Box className={"buttonRow"}>
          <Box>
            <Button {...args} icon={<PlusIcon />} compact={true} />
          </Box>
          <Box>
            <Button
              {...args}
              icon={<PlusIcon />}
              compact={true}
              className={"hover"}
            />
          </Box>
          <Box>
            <Button
              {...args}
              icon={<PlusIcon />}
              compact={true}
              className={"active"}
            />
          </Box>
          <Box></Box>
        </Box>
        <Box className={"buttonRow"}>
          <Box>
            <Button
              {...args}
              icon={<PlusIcon />}
              variant={"destructive"}
              compact={true}
            />
          </Box>
          <Box>
            <Button
              {...args}
              icon={<PlusIcon />}
              variant={"destructive"}
              compact={true}
              className={"hover"}
            />
          </Box>
          <Box>
            <Button
              {...args}
              icon={<PlusIcon />}
              variant={"destructive"}
              compact={true}
              className={"active"}
            />
          </Box>
          <Box></Box>
        </Box>
        <Box className={"buttonRow"}>
          <Box>
            <Button
              {...args}
              icon={<PlusIcon />}
              variant={"destructive-bare"}
              compact={true}
            />
          </Box>
          <Box>
            <Button
              {...args}
              icon={<PlusIcon />}
              variant={"destructive-bare"}
              compact={true}
              className={"hover"}
            />
          </Box>
          <Box>
            <Button
              {...args}
              icon={<PlusIcon />}
              variant={"destructive-bare"}
              compact={true}
              className={"active"}
            />
          </Box>
          <Box></Box>
        </Box>
      </Box>
      <Box className={"buttonDisplay"}>
        <Box className={"buttonRow"}>
          <Box>
            <Button
              {...args}
              icon={<PlusIcon />}
              variant={"primary"}
              compact={false}
            />
          </Box>
          <Box>
            <Button
              {...args}
              icon={<PlusIcon />}
              variant={"primary"}
              compact={false}
              className={"hover"}
            />
          </Box>
          <Box>
            <Button
              {...args}
              icon={<PlusIcon />}
              variant={"primary"}
              compact={false}
              className={"active"}
            />
          </Box>
          <Box>
            <Button
              {...args}
              icon={<PlusIcon />}
              variant={"primary"}
              compact={false}
              disabled
            />
          </Box>
        </Box>
        <Box className={"buttonRow"}>
          <Box>
            <Button {...args} icon={<PlusIcon />} compact={false} />
          </Box>
          <Box>
            <Button
              {...args}
              icon={<PlusIcon />}
              compact={false}
              className={"hover"}
            />
          </Box>
          <Box>
            <Button
              {...args}
              icon={<PlusIcon />}
              compact={false}
              className={"active"}
            />
          </Box>
          <Box></Box>
        </Box>
        <Box className={"buttonRow"}>
          <Box>
            <Button
              {...args}
              icon={<PlusIcon />}
              variant={"destructive"}
              compact={false}
            />
          </Box>
          <Box>
            <Button
              {...args}
              icon={<PlusIcon />}
              variant={"destructive"}
              compact={false}
              className={"hover"}
            />
          </Box>
          <Box>
            <Button
              {...args}
              icon={<PlusIcon />}
              variant={"destructive"}
              compact={false}
              className={"active"}
            />
          </Box>
          <Box></Box>
        </Box>
        <Box className={"buttonRow"}>
          <Box>
            <Button
              {...args}
              icon={<PlusIcon />}
              variant={"destructive-bare"}
              compact={false}
            />
          </Box>
          <Box>
            <Button
              {...args}
              icon={<PlusIcon />}
              variant={"destructive-bare"}
              compact={false}
              className={"hover"}
            />
          </Box>
          <Box>
            <Button
              {...args}
              icon={<PlusIcon />}
              variant={"destructive-bare"}
              compact={false}
              className={"active"}
            />
          </Box>
          <Box></Box>
        </Box>
      </Box>
    </Box>
    <h1>ButtonGroup</h1>
    <Box sx={{ display: "flex", flexDirection: "column", gap: 24 }}>
      <Box>
        <ButtonGroup>
          <Button id={"plus"} icon={<PlusIcon />} />
          <Button id={"plus"} icon={<PlusIcon />} />
          <Button id={"plus"} icon={<PlusIcon />} />
          <Button id={"plus"} icon={<PlusIcon />} />
          <Button id={"plus"} icon={<PlusIcon />} />
          <Button id={"plus"} icon={<PlusIcon />} />
        </ButtonGroup>
      </Box>
      <Box>
        <ButtonGroup>
          <Button id={"plus"} label={"Button"} />
          <Button id={"plus"} label={"Button"} />
          <Button id={"plus"} label={"Button"} />
          <Button id={"plus"} label={"Button"} />
          <Button id={"plus"} label={"Button"} />
          <Button id={"plus"} label={"Button"} />
        </ButtonGroup>
      </Box>
      <Box>
        <ButtonGroup>
          <Button id={"plus"} icon={<PlusIcon />} label={"Button"} />
          <Button id={"plus"} icon={<PlusIcon />} label={"Button"} />
          <Button id={"plus"} icon={<PlusIcon />} label={"Button"} />
          <Button id={"plus"} icon={<PlusIcon />} label={"Button"} />
          <Button id={"plus"} icon={<PlusIcon />} label={"Button"} />
          <Button id={"plus"} icon={<PlusIcon />} label={"Button"} />
        </ButtonGroup>
      </Box>
    </Box>
  </StoryThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
  onClick: () => alert("You clicked me!"),
};
