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

import React, { useState } from "react";
import { Meta, Story } from "@storybook/react";

import ModalBox from "./ModalBox";
import { ModalBoxProps } from "./ModalBox.types";
import StoryThemeProvider from "../../utils/StoryThemeProvider";
import { Button, GlobalStyles } from "../index";
import TestIcon from "../../utils/TestIcon";
import SectionTitle from "../SectionTitle/SectionTitle";

export default {
  title: "MDS/Layout/ModalBox",
  component: ModalBox,
  argTypes: {},
} as Meta<typeof ModalBox>;

const Template: Story<ModalBoxProps> = ({
  title,
  sx,
  titleIcon,
  widthLimit,
  customMaxWidth,
  backgroundOverlay,
  iconColor,
}) => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  return (
    <StoryThemeProvider>
      <GlobalStyles />
      <div style={{ width: 150, height: 50, overflow: "hidden" }}>
        <Button
          id={"open-modal"}
          onClick={() => {
            setOpenModal(!openModal);
          }}
        >
          Open Modal
        </Button>
        <ModalBox
          open={openModal}
          onClose={() => {
            setOpenModal(false);
          }}
          title={title}
          sx={sx}
          backgroundOverlay={backgroundOverlay}
          titleIcon={titleIcon}
          widthLimit={widthLimit}
          iconColor={iconColor}
          customMaxWidth={customMaxWidth}
        >
          <SectionTitle>Inside my Computer</SectionTitle>
          <p>
            My computer-- disassembled is a maze of cables, drives chips and
            ports--an array of connections, silver solderings, twisting wires.
          </p>
          <p>
            But when the satiny case is latched in place coils and cables
            disappear. The smallest particle of matter is not an atom, but a
            byte-- a particle of magic that combines and multiplies unseen
            inside the blinking box.
          </p>
          <p>
            Creation occurs inside my computer-- friends, family rest behind the
            pressing of selected keys. Words and faces form; smiles and frowns
            become feelings. Attraction becomes addiction.
          </p>
          <p>
            Inside my computer merchants buy and sell-- musicians sing, artists
            train pictures into pixels, poets recollect emotion in tranquillity.
          </p>
          <p>
            Inside my computer dreams are imagined into reality-- inventions,
            hopes, ideas are born and nurtured into happenings. Strangers share
            a table, touch hands across the world.
          </p>
          <p>
            Inside my computer the pulse of human hearts waxes and wanes as
            people fall in and out of love.
          </p>
          <div style={{ textAlign: "right" }}>Karen Ruff - 2014</div>
        </ModalBox>
      </div>
    </StoryThemeProvider>
  );
};

export const Default = Template.bind({});

Default.args = {
  title: "Test Title",
  titleIcon: <TestIcon />,
};

export const NoIcon = Template.bind({});

NoIcon.args = {
  title: "Test Title",
};

export const NoWidthLimit = Template.bind({});

NoWidthLimit.args = {
  title: "Test Title",
  widthLimit: false,
};

export const IconColorOverlay = Template.bind({});

IconColorOverlay.args = {
  title: "Test Title",
  titleIcon: <TestIcon />,
  iconColor: "accept",
};

export const NoOverlayBG = Template.bind({});

NoOverlayBG.args = {
  title: "Test Title",
  titleIcon: <TestIcon />,
  iconColor: "delete",
  backgroundOverlay: false,
};

export const CustomMaxWidth = Template.bind({});

CustomMaxWidth.args = {
  title: "Test Title",
  titleIcon: <TestIcon />,
  customMaxWidth: 250,
};
