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

import Snackbar from "./Snackbar";
import { SnackbarProps } from "./Snackbar.types";

import StoryThemeProvider from "../../utils/StoryThemeProvider";
import { Button, GlobalStyles } from "../index";

export default {
  title: "MDS/Information/Snackbar",
  component: Snackbar,
  argTypes: {},
} as Meta<typeof Snackbar>;

const Template: Story<SnackbarProps> = ({
  message,
  closeButton,
  variant,
  autoHideDuration,
  condensed,
  mode,
}) => {
  const [snackbarOpen, setSnackbarOpen] = useState<boolean>(false);

  return (
    <StoryThemeProvider>
      <GlobalStyles />
      <Button id={"activateSnackbar"} onClick={() => setSnackbarOpen(true)}>
        Click to Show Snackbar
      </Button>
      <Snackbar
        message={message}
        closeButton={closeButton}
        onClose={() => {
          setSnackbarOpen(false);
        }}
        open={snackbarOpen}
        autoHideDuration={autoHideDuration}
        variant={variant}
        condensed={condensed}
        mode={mode}
      />
    </StoryThemeProvider>
  );
};

export const Default = Template.bind({});
Default.args = {
  message: "This is a notice message",
  closeButton: true,
};

export const Success = Template.bind({});
Success.args = {
  message: "This is a success message",
  closeButton: true,
  autoHideDuration: 0,
  variant: "success",
};

export const Warning = Template.bind({});
Warning.args = {
  message: "This is a warning message",
  closeButton: true,
  autoHideDuration: 0,
  variant: "warning",
};

export const Error = Template.bind({});
Error.args = {
  message: "This is an error message",
  closeButton: true,
  autoHideDuration: 0,
  variant: "error",
};

export const NoCloseButton = Template.bind({});
NoCloseButton.args = {
  message: "This is an error message",
  closeButton: false,
  variant: "error",
};

export const LongTextTruncation = Template.bind({});
LongTextTruncation.args = {
  message:
    "Super long text message to test truncate functionality in this snackbar Super long text message to test truncate functionality in this snackbar Super long text message to test truncate functionality in this snackbar Super long text message to test truncate functionality in this snackbar ",
  closeButton: true,
  autoHideDuration: 0,
};

export const AutoHideDuration = Template.bind({});
AutoHideDuration.args = {
  message:
    "Super long text message to test truncate functionality in this snackbar Super long text message to test truncate functionality in this snackbar Super long text message to test truncate functionality in this snackbar Super long text message to test truncate functionality in this snackbar ",
  closeButton: true,
  autoHideDuration: 2,
};

export const Condensed = Template.bind({});
Condensed.args = {
  message: "Small Notification",
  closeButton: false,
  autoHideDuration: 0,
  condensed: true,
};

export const CondensedWithClose = Template.bind({});
CondensedWithClose.args = {
  message: "Small Notification",
  closeButton: true,
  autoHideDuration: 10,
  condensed: true,
};

export const CondensedWithLargeText = Template.bind({});
CondensedWithLargeText.args = {
  message:
    "Super long text message to test truncate functionality in this snackbar Super long text message to test truncate functionality in this snackbar Super long text message to test truncate functionality in this snackbar Super long text message to test truncate functionality in this snackbar ",
  closeButton: true,
  autoHideDuration: 0,
  condensed: true,
};

export const InlineMode = Template.bind({});
InlineMode.args = {
  message:
    "Super long text message to test truncate functionality in this snackbar Super long text message to test truncate functionality in this snackbar Super long text message to test truncate functionality in this snackbar Super long text message to test truncate functionality in this snackbar ",
  closeButton: true,
  autoHideDuration: 0,
  condensed: true,
  mode: "inline",
};
