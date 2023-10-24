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

import React from "react";
import { Meta, Story } from "@storybook/react";

import Wizard from "./Wizard";
import StoryThemeProvider from "../../utils/StoryThemeProvider";
import GlobalStyles from "../GlobalStyles/GlobalStyles";
import { WizardProps } from "./Wizard.types";
import Select from "../Select/Select";
import InputBox from "../InputBox/InputBox";
import Switch from "../Switch/Switch";
import FormLayout from "../FormLayout/FormLayout";

export default {
  title: "MDS/Layout/Wizard",
  component: Wizard,
  argTypes: {},
} as Meta<typeof Wizard>;

const Template: Story<WizardProps> = ({ ...props }) => (
  <StoryThemeProvider>
    <GlobalStyles />
    <Wizard {...props} />
  </StoryThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
  wizardSteps: [
    {
      label: "Step 1",
      loadingStep: false,
      advancedOnly: false,
      componentRender: (
        <FormLayout containerPadding={false} withBorders={false}>
          <InputBox id="accessKey" label="Access Key" />
          <InputBox id="secretKey" label="Secret Key" />
          <InputBox id="targetURL" label="Target URL" />
          <Switch id="useTLS" name="useTLS" label="Use TLS" value="yes" />
          <InputBox id="region" label="Region" />
          <Select
            id="replication_mode"
            name="replication_mode"
            label="Replication Mode"
            options={[
              { label: "Asynchronous", value: "async" },
              { label: "Synchronous", value: "sync" },
            ]}
            onChange={() => {}}
          />
          <InputBox id="healthCheck" label="Health Check Duration" />
          <InputBox id="accessKey" label="Access Key" />
          <InputBox id="secretKey" label="Secret Key" />
          <InputBox id="targetURL" label="Target URL" />
          <Switch id="useTLS" name="useTLS" label="Use TLS" value="yes" />
        </FormLayout>
      ),
      buttons: [
        {
          type: "next",
          label: "Next",
          enabled: true,
        },
      ],
    },
    {
      label: "Step 2",
      loadingStep: false,
      advancedOnly: false,
      componentRender: <div>Second Page</div>,
      buttons: [
        {
          type: "next",
          label: "Next",
          enabled: true,
        },
      ],
    },
    {
      label: "Last Step",
      loadingStep: false,
      advancedOnly: false,
      componentRender: <div>This is the Last step</div>,
      buttons: [
        {
          type: "custom",
          label: "Finish",
          action: () => {
            alert("You completed the Wizard");
          },
          enabled: true,
        },
      ],
    },
  ],
};

export const NonLinearNavigation = Template.bind({});
NonLinearNavigation.args = {
  wizardSteps: [
    {
      label: "Page 1",
      loadingStep: false,
      componentRender: (
        <div>You can change between pages without an specific order</div>
      ),
      buttons: [
        {
          type: "next",
          label: "Next",
          enabled: true,
        },
      ],
    },
    {
      label: "Page 2",
      loadingStep: false,
      componentRender: <div>You are in the second page</div>,
      buttons: [
        {
          type: "next",
          label: "Next",
          enabled: true,
        },
      ],
    },
    {
      label: "Page 3",
      loadingStep: true,
      componentRender: <div>You are on the third page</div>,
      buttons: [
        {
          type: "custom",
          label: "Finish",
          action: () => {
            alert("You completed the Wizard");
          },
          enabled: true,
        },
      ],
    },
  ],
  linearMode: false,
};

export const ModalMode = Template.bind({});
ModalMode.args = {
  wizardSteps: [
    {
      label: "Page 1",
      loadingStep: false,
      componentRender: (
        <FormLayout containerPadding={false} withBorders={false}>
          <InputBox id="accessKey" label="Access Key" />
          <InputBox id="secretKey" label="Secret Key" />
          <InputBox id="targetURL" label="Target URL" />
          <Switch id="useTLS" name="useTLS" label="Use TLS" value="yes" />
          <InputBox id="region" label="Region" />
          <Select
            id="replication_mode"
            name="replication_mode"
            label="Replication Mode"
            options={[
              { label: "Asynchronous", value: "async" },
              { label: "Synchronous", value: "sync" },
            ]}
            onChange={() => {}}
          />
          <InputBox id="healthCheck" label="Health Check Duration" />
        </FormLayout>
      ),
      buttons: [
        {
          type: "next",
          label: "Next",
          enabled: true,
        },
      ],
    },
    {
      label: "Page 2",
      loadingStep: false,
      componentRender: <div>Page 2</div>,
      buttons: [
        {
          type: "next",
          label: "Next",
          enabled: true,
        },
      ],
    },
    {
      label: "Page 3",
      loadingStep: true,
      componentRender: <div>Page 3</div>,
      buttons: [
        {
          type: "custom",
          label: "Finish",
          action: () => {
            alert("You completed the Wizard");
          },
          enabled: true,
        },
      ],
    },
  ],
  forModal: true,
};
