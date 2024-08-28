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

import StoryThemeProvider from "../../utils/StoryThemeProvider";
import GlobalStyles from "../GlobalStyles/GlobalStyles";
import AlignCenterIcon from "../Icons/NewDesignIcons/AlignCenterIcon";
import BriefcaseMedicalIcon from "../Icons/NewDesignIcons/BriefcaseMedicalIcon";
import IceCreamConeIcon from "../Icons/NewDesignIcons/IceCreamConeIcon";
import PlusIcon from "../Icons/NewDesignIcons/PlusIcon";
import { Box, ButtonGroup } from "../index";
import Button from "./Button";
import { ButtonProps } from "./Button.types";

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
          "& .buttonBlock": {
            display: "flex",
            flexDirection: "column",
            gap: 28,
            "& .buttonSimilar": {
              display: "flex",
              gap: 16,
            },
          },
        },
      }}
    >
      <Box className={"buttonDisplay"}>
        <Box className={"buttonRow"}>
          <Box className={"buttonBlock"}>
            <Box className={"buttonSimilar"}>
              <Button
                {...args}
                label={"Button"}
                variant={"primary"}
                compact={true}
              />
              <Button
                {...args}
                icon={<PlusIcon />}
                variant={"primary"}
                compact={true}
              />
            </Box>
            <Box className={"buttonSimilar"}>
              <Button
                {...args}
                label={"Button"}
                variant={"primary"}
                compact={true}
                className={"hover"}
              />
              <Button
                {...args}
                icon={<PlusIcon />}
                variant={"primary"}
                compact={true}
                className={"hover"}
              />
            </Box>
            <Box className={"buttonSimilar"}>
              <Button
                {...args}
                label={"Button"}
                variant={"primary"}
                compact={true}
                className={"active"}
              />
              <Button
                {...args}
                icon={<PlusIcon />}
                variant={"primary"}
                compact={true}
                className={"active"}
              />
            </Box>
          </Box>
          <Box className={"buttonBlock"}>
            <Box className={"buttonSimilar"}>
              <Button
                {...args}
                label={"Button"}
                variant={"secondary"}
                compact={true}
              />
              <Button
                {...args}
                icon={<PlusIcon />}
                variant={"secondary"}
                compact={true}
              />
            </Box>
            <Box className={"buttonSimilar"}>
              <Button
                {...args}
                label={"Button"}
                variant={"secondary"}
                compact={true}
                className={"hover"}
              />
              <Button
                {...args}
                icon={<PlusIcon />}
                variant={"secondary"}
                compact={true}
                className={"hover"}
              />
            </Box>
            <Box className={"buttonSimilar"}>
              <Button
                {...args}
                label={"Button"}
                variant={"secondary"}
                compact={true}
                className={"active"}
              />
              <Button
                {...args}
                icon={<PlusIcon />}
                variant={"secondary"}
                compact={true}
                className={"active"}
              />
            </Box>
          </Box>
          <Box className={"buttonBlock"}>
            <Box className={"buttonSimilar"}>
              <Button
                {...args}
                label={"Button"}
                variant={"destructive"}
                compact={true}
              />
              <Button
                {...args}
                icon={<PlusIcon />}
                variant={"destructive"}
                compact={true}
              />
            </Box>
            <Box className={"buttonSimilar"}>
              <Button
                {...args}
                label={"Button"}
                variant={"destructive"}
                compact={true}
                className={"hover"}
              />
              <Button
                {...args}
                icon={<PlusIcon />}
                variant={"destructive"}
                compact={true}
                className={"hover"}
              />
            </Box>
            <Box className={"buttonSimilar"}>
              <Button
                {...args}
                label={"Button"}
                variant={"destructive"}
                compact={true}
                className={"active"}
              />
              <Button
                {...args}
                icon={<PlusIcon />}
                variant={"destructive"}
                compact={true}
                className={"active"}
              />
            </Box>
          </Box>
          <Box className={"buttonBlock"}>
            <Box className={"buttonSimilar"}>
              <Button
                {...args}
                label={"Button"}
                variant={"primary"}
                compact={true}
                disabled
              />
              <Button
                {...args}
                icon={<PlusIcon />}
                variant={"destructive"}
                compact={true}
                className={"active"}
                disabled
              />
            </Box>
          </Box>
        </Box>
        <Box className={"buttonRow"} sx={{ marginTop: 48 }}>
          <Box className={"buttonBlock"}>
            <Box className={"buttonSimilar"}>
              <Button
                {...args}
                label={"Button"}
                variant={"primary-lighter"}
                compact={true}
              />
              <Button
                {...args}
                icon={<PlusIcon />}
                variant={"primary-lighter"}
                compact={true}
              />
            </Box>
            <Box className={"buttonSimilar"}>
              <Button
                {...args}
                label={"Button"}
                variant={"primary-lighter"}
                compact={true}
                className={"hover"}
              />
              <Button
                {...args}
                icon={<PlusIcon />}
                variant={"primary-lighter"}
                compact={true}
                className={"hover"}
              />
            </Box>
            <Box className={"buttonSimilar"}>
              <Button
                {...args}
                label={"Button"}
                variant={"primary-lighter"}
                compact={true}
                className={"active"}
              />
              <Button
                {...args}
                icon={<PlusIcon />}
                variant={"primary-lighter"}
                compact={true}
                className={"active"}
              />
            </Box>
          </Box>
          <Box className={"buttonBlock"}>
            <Box className={"buttonSimilar"}>
              <Button
                {...args}
                label={"Button"}
                variant={"secondary-lighter"}
                compact={true}
              />
              <Button
                {...args}
                icon={<PlusIcon />}
                variant={"secondary-lighter"}
                compact={true}
              />
            </Box>
            <Box className={"buttonSimilar"}>
              <Button
                {...args}
                label={"Button"}
                variant={"secondary-lighter"}
                compact={true}
                className={"hover"}
              />
              <Button
                {...args}
                icon={<PlusIcon />}
                variant={"secondary-lighter"}
                compact={true}
                className={"hover"}
              />
            </Box>
            <Box className={"buttonSimilar"}>
              <Button
                {...args}
                label={"Button"}
                variant={"secondary-lighter"}
                compact={true}
                className={"active"}
              />
              <Button
                {...args}
                icon={<PlusIcon />}
                variant={"secondary-lighter"}
                compact={true}
                className={"active"}
              />
            </Box>
          </Box>
          <Box className={"buttonBlock"}>
            <Box className={"buttonSimilar"}>
              <Button
                {...args}
                label={"Button"}
                variant={"destructive-lighter"}
                compact={true}
              />
              <Button
                {...args}
                icon={<PlusIcon />}
                variant={"destructive-lighter"}
                compact={true}
              />
            </Box>
            <Box className={"buttonSimilar"}>
              <Button
                {...args}
                label={"Button"}
                variant={"destructive-lighter"}
                compact={true}
                className={"hover"}
              />
              <Button
                {...args}
                icon={<PlusIcon />}
                variant={"destructive-lighter"}
                compact={true}
                className={"hover"}
              />
            </Box>
            <Box className={"buttonSimilar"}>
              <Button
                {...args}
                label={"Button"}
                variant={"destructive-lighter"}
                compact={true}
                className={"active"}
              />
              <Button
                {...args}
                icon={<PlusIcon />}
                variant={"destructive-lighter"}
                compact={true}
                className={"active"}
              />
            </Box>
          </Box>
          <Box className={"buttonBlock"}>
            <Box className={"buttonSimilar"}>
              <Button
                {...args}
                label={"Button"}
                variant={"primary"}
                compact={true}
                disabled
              />
              <Button
                {...args}
                icon={<PlusIcon />}
                variant={"destructive"}
                compact={true}
                className={"active"}
                disabled
              />
            </Box>
          </Box>
        </Box>
        <Box className={"buttonRow"} sx={{ marginTop: 48 }}>
          <Box className={"buttonBlock"}>
            <Box className={"buttonSimilar"}>
              <Button
                {...args}
                label={"Button"}
                variant={"primary-ghost"}
                compact={true}
              />
              <Button
                {...args}
                icon={<PlusIcon />}
                variant={"primary-ghost"}
                compact={true}
              />
            </Box>
            <Box className={"buttonSimilar"}>
              <Button
                {...args}
                label={"Button"}
                variant={"primary-ghost"}
                compact={true}
                className={"hover"}
              />
              <Button
                {...args}
                icon={<PlusIcon />}
                variant={"primary-ghost"}
                compact={true}
                className={"hover"}
              />
            </Box>
            <Box className={"buttonSimilar"}>
              <Button
                {...args}
                label={"Button"}
                variant={"primary-ghost"}
                compact={true}
                className={"active"}
              />
              <Button
                {...args}
                icon={<PlusIcon />}
                variant={"primary-ghost"}
                compact={true}
                className={"active"}
              />
            </Box>
          </Box>
          <Box className={"buttonBlock"}>
            <Box className={"buttonSimilar"}>
              <Button
                {...args}
                label={"Button"}
                variant={"secondary-ghost"}
                compact={true}
              />
              <Button
                {...args}
                icon={<PlusIcon />}
                variant={"secondary-ghost"}
                compact={true}
              />
            </Box>
            <Box className={"buttonSimilar"}>
              <Button
                {...args}
                label={"Button"}
                variant={"secondary-ghost"}
                compact={true}
                className={"hover"}
              />
              <Button
                {...args}
                icon={<PlusIcon />}
                variant={"secondary-ghost"}
                compact={true}
                className={"hover"}
              />
            </Box>
            <Box className={"buttonSimilar"}>
              <Button
                {...args}
                label={"Button"}
                variant={"secondary-ghost"}
                compact={true}
                className={"active"}
              />
              <Button
                {...args}
                icon={<PlusIcon />}
                variant={"secondary-ghost"}
                compact={true}
                className={"active"}
              />
            </Box>
          </Box>
          <Box className={"buttonBlock"}>
            <Box className={"buttonSimilar"}>
              <Button
                {...args}
                label={"Button"}
                variant={"destructive-ghost"}
                compact={true}
              />
              <Button
                {...args}
                icon={<PlusIcon />}
                variant={"destructive-ghost"}
                compact={true}
              />
            </Box>
            <Box className={"buttonSimilar"}>
              <Button
                {...args}
                label={"Button"}
                variant={"destructive-ghost"}
                compact={true}
                className={"hover"}
              />
              <Button
                {...args}
                icon={<PlusIcon />}
                variant={"destructive-ghost"}
                compact={true}
                className={"hover"}
              />
            </Box>
            <Box className={"buttonSimilar"}>
              <Button
                {...args}
                label={"Button"}
                variant={"destructive-ghost"}
                compact={true}
                className={"active"}
              />
              <Button
                {...args}
                icon={<PlusIcon />}
                variant={"destructive-ghost"}
                compact={true}
                className={"active"}
              />
            </Box>
          </Box>
          <Box className={"buttonBlock"}>
            <Box className={"buttonSimilar"}>
              <Button
                {...args}
                label={"Button"}
                variant={"primary"}
                compact={true}
                disabled
              />
              <Button
                {...args}
                icon={<PlusIcon />}
                variant={"destructive"}
                compact={true}
                className={"active"}
                disabled
              />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className={"buttonDisplay"}>
        <Box className={"buttonRow"}>
          <Box className={"buttonBlock"}>
            <Box className={"buttonSimilar"}>
              <Button {...args} label={"Button"} variant={"primary"} />
              <Button {...args} icon={<PlusIcon />} variant={"primary"} />
            </Box>
            <Box className={"buttonSimilar"}>
              <Button
                {...args}
                label={"Button"}
                variant={"primary"}
                className={"hover"}
              />
              <Button
                {...args}
                icon={<PlusIcon />}
                variant={"primary"}
                className={"hover"}
              />
            </Box>
            <Box className={"buttonSimilar"}>
              <Button
                {...args}
                label={"Button"}
                variant={"primary"}
                className={"active"}
              />
              <Button
                {...args}
                icon={<PlusIcon />}
                variant={"primary"}
                className={"active"}
              />
            </Box>
          </Box>
          <Box className={"buttonBlock"}>
            <Box className={"buttonSimilar"}>
              <Button {...args} label={"Button"} variant={"secondary"} />
              <Button {...args} icon={<PlusIcon />} variant={"secondary"} />
            </Box>
            <Box className={"buttonSimilar"}>
              <Button
                {...args}
                label={"Button"}
                variant={"secondary"}
                className={"hover"}
              />
              <Button
                {...args}
                icon={<PlusIcon />}
                variant={"secondary"}
                className={"hover"}
              />
            </Box>
            <Box className={"buttonSimilar"}>
              <Button
                {...args}
                label={"Button"}
                variant={"secondary"}
                className={"active"}
              />
              <Button
                {...args}
                icon={<PlusIcon />}
                variant={"secondary"}
                className={"active"}
              />
            </Box>
          </Box>
          <Box className={"buttonBlock"}>
            <Box className={"buttonSimilar"}>
              <Button {...args} label={"Button"} variant={"destructive"} />
              <Button {...args} icon={<PlusIcon />} variant={"destructive"} />
            </Box>
            <Box className={"buttonSimilar"}>
              <Button
                {...args}
                label={"Button"}
                variant={"destructive"}
                className={"hover"}
              />
              <Button
                {...args}
                icon={<PlusIcon />}
                variant={"destructive"}
                className={"hover"}
              />
            </Box>
            <Box className={"buttonSimilar"}>
              <Button
                {...args}
                label={"Button"}
                variant={"destructive"}
                className={"active"}
              />
              <Button
                {...args}
                icon={<PlusIcon />}
                variant={"destructive"}
                className={"active"}
              />
            </Box>
          </Box>
          <Box className={"buttonBlock"}>
            <Box className={"buttonSimilar"}>
              <Button {...args} label={"Button"} variant={"primary"} disabled />
              <Button
                {...args}
                icon={<PlusIcon />}
                variant={"destructive"}
                className={"active"}
                disabled
              />
            </Box>
          </Box>
        </Box>
        <Box className={"buttonRow"} sx={{ marginTop: 48 }}>
          <Box className={"buttonBlock"}>
            <Box className={"buttonSimilar"}>
              <Button {...args} label={"Button"} variant={"primary-lighter"} />
              <Button
                {...args}
                icon={<PlusIcon />}
                variant={"primary-lighter"}
              />
            </Box>
            <Box className={"buttonSimilar"}>
              <Button
                {...args}
                label={"Button"}
                variant={"primary-lighter"}
                className={"hover"}
              />
              <Button
                {...args}
                icon={<PlusIcon />}
                variant={"primary-lighter"}
                className={"hover"}
              />
            </Box>
            <Box className={"buttonSimilar"}>
              <Button
                {...args}
                label={"Button"}
                variant={"primary-lighter"}
                className={"active"}
              />
              <Button
                {...args}
                icon={<PlusIcon />}
                variant={"primary-lighter"}
                className={"active"}
              />
            </Box>
          </Box>
          <Box className={"buttonBlock"}>
            <Box className={"buttonSimilar"}>
              <Button
                {...args}
                label={"Button"}
                variant={"secondary-lighter"}
              />
              <Button
                {...args}
                icon={<PlusIcon />}
                variant={"secondary-lighter"}
              />
            </Box>
            <Box className={"buttonSimilar"}>
              <Button
                {...args}
                label={"Button"}
                variant={"secondary-lighter"}
                className={"hover"}
              />
              <Button
                {...args}
                icon={<PlusIcon />}
                variant={"secondary-lighter"}
                className={"hover"}
              />
            </Box>
            <Box className={"buttonSimilar"}>
              <Button
                {...args}
                label={"Button"}
                variant={"secondary-lighter"}
                className={"active"}
              />
              <Button
                {...args}
                icon={<PlusIcon />}
                variant={"secondary-lighter"}
                className={"active"}
              />
            </Box>
          </Box>
          <Box className={"buttonBlock"}>
            <Box className={"buttonSimilar"}>
              <Button
                {...args}
                label={"Button"}
                variant={"destructive-lighter"}
              />
              <Button
                {...args}
                icon={<PlusIcon />}
                variant={"destructive-lighter"}
              />
            </Box>
            <Box className={"buttonSimilar"}>
              <Button
                {...args}
                label={"Button"}
                variant={"destructive-lighter"}
                className={"hover"}
              />
              <Button
                {...args}
                icon={<PlusIcon />}
                variant={"destructive-lighter"}
                className={"hover"}
              />
            </Box>
            <Box className={"buttonSimilar"}>
              <Button
                {...args}
                label={"Button"}
                variant={"destructive-lighter"}
                className={"active"}
              />
              <Button
                {...args}
                icon={<PlusIcon />}
                variant={"destructive-lighter"}
                className={"active"}
              />
            </Box>
          </Box>
          <Box className={"buttonBlock"}>
            <Box className={"buttonSimilar"}>
              <Button {...args} label={"Button"} variant={"primary"} disabled />
              <Button
                {...args}
                icon={<PlusIcon />}
                variant={"destructive"}
                className={"active"}
                disabled
              />
            </Box>
          </Box>
        </Box>
        <Box className={"buttonRow"} sx={{ marginTop: 48 }}>
          <Box className={"buttonBlock"}>
            <Box className={"buttonSimilar"}>
              <Button {...args} label={"Button"} variant={"primary-ghost"} />
              <Button {...args} icon={<PlusIcon />} variant={"primary-ghost"} />
            </Box>
            <Box className={"buttonSimilar"}>
              <Button
                {...args}
                label={"Button"}
                variant={"primary-ghost"}
                className={"hover"}
              />
              <Button
                {...args}
                icon={<PlusIcon />}
                variant={"primary-ghost"}
                className={"hover"}
              />
            </Box>
            <Box className={"buttonSimilar"}>
              <Button
                {...args}
                label={"Button"}
                variant={"primary-ghost"}
                className={"active"}
              />
              <Button
                {...args}
                icon={<PlusIcon />}
                variant={"primary-ghost"}
                className={"active"}
              />
            </Box>
          </Box>
          <Box className={"buttonBlock"}>
            <Box className={"buttonSimilar"}>
              <Button {...args} label={"Button"} variant={"secondary-ghost"} />
              <Button
                {...args}
                icon={<PlusIcon />}
                variant={"secondary-ghost"}
              />
            </Box>
            <Box className={"buttonSimilar"}>
              <Button
                {...args}
                label={"Button"}
                variant={"secondary-ghost"}
                className={"hover"}
              />
              <Button
                {...args}
                icon={<PlusIcon />}
                variant={"secondary-ghost"}
                className={"hover"}
              />
            </Box>
            <Box className={"buttonSimilar"}>
              <Button
                {...args}
                label={"Button"}
                variant={"secondary-ghost"}
                className={"active"}
              />
              <Button
                {...args}
                icon={<PlusIcon />}
                variant={"secondary-ghost"}
                className={"active"}
              />
            </Box>
          </Box>
          <Box className={"buttonBlock"}>
            <Box className={"buttonSimilar"}>
              <Button
                {...args}
                label={"Button"}
                variant={"destructive-ghost"}
              />
              <Button
                {...args}
                icon={<PlusIcon />}
                variant={"destructive-ghost"}
              />
            </Box>
            <Box className={"buttonSimilar"}>
              <Button
                {...args}
                label={"Button"}
                variant={"destructive-ghost"}
                className={"hover"}
              />
              <Button
                {...args}
                icon={<PlusIcon />}
                variant={"destructive-ghost"}
                className={"hover"}
              />
            </Box>
            <Box className={"buttonSimilar"}>
              <Button
                {...args}
                label={"Button"}
                variant={"destructive-ghost"}
                className={"active"}
              />
              <Button
                {...args}
                icon={<PlusIcon />}
                variant={"destructive-ghost"}
                className={"active"}
              />
            </Box>
          </Box>
          <Box className={"buttonBlock"}>
            <Box className={"buttonSimilar"}>
              <Button {...args} label={"Button"} variant={"primary"} disabled />
              <Button
                {...args}
                icon={<PlusIcon />}
                variant={"destructive"}
                className={"active"}
                disabled
              />
            </Box>
          </Box>
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
      <Box>
        <ButtonGroup>
          <Button
            id={"plus"}
            icon={<BriefcaseMedicalIcon />}
            label={"Selected"}
            className={"selected"}
          />
          <Button id={"plus"} icon={<PlusIcon />} label={"Button"} />
          <Button
            id={"plus"}
            icon={<AlignCenterIcon />}
            label={"Selected"}
            className={"selected"}
          />
          <Button id={"plus"} icon={<PlusIcon />} label={"Button"} />
          <Button id={"plus"} icon={<PlusIcon />} label={"Disabled"} disabled />
        </ButtonGroup>
      </Box>
      <Box>
        <ButtonGroup>
          <Button id={"plus"} icon={<PlusIcon />} />
          <Button
            id={"plus"}
            icon={<AlignCenterIcon />}
            className={"selected"}
          />
          <Button
            id={"plus"}
            icon={<IceCreamConeIcon />}
            className={"selected"}
            disabled
          />
        </ButtonGroup>
      </Box>
    </Box>
  </StoryThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
  onClick: () => alert("You clicked me!"),
};
