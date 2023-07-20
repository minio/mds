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

import GlobalStyles from "./GlobalStyles";

import TestIcon from "../../utils/TestIcon";
import StoryThemeProvider from "../../utils/StoryThemeProvider";
import Button from "../Button/Button";

export default {
  title: "MDS/Global/GlobalStyles",
  component: GlobalStyles,
  argTypes: {},
} as Meta<typeof GlobalStyles>;

const Template: Story = (args) => (
  <StoryThemeProvider>
    <GlobalStyles />
    <div>
      <h1>Headers</h1>
      <section>
        <h1>Header H1</h1>
        <h2>Header H2</h2>
        <h3>Header H3</h3>
        <h4>Header H4</h4>
        <h5>Header H5</h5>
        <h6>Header H6</h6>
      </section>
      <h1>Common Text</h1>
      <section>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed est
          laoreet, molestie urna et, auctor odio. Curabitur vel hendrerit augue.
          Aenean auctor sodales velit nec egestas. Phasellus vel ligula ut
          mauris euismod aliquet. Suspendisse facilisis magna non sem consequat,
          et faucibus nisl consequat. Vestibulum sed consectetur arcu. Nulla
          posuere, orci at dictum interdum, lorem lacus feugiat metus, vel
          blandit massa dolor in est. Pellentesque aliquam tortor eu pharetra
          facilisis. Vestibulum ultrices orci facilisis orci rutrum suscipit.
          Quisque malesuada mi neque, eget tincidunt lacus tempor non. Nulla
          cursus mi ut eros condimentum dapibus ac et urna. In gravida ex quam,
          facilisis ultricies metus dictum ac. Nunc ipsum metus, lacinia
          vestibulum suscipit quis, rutrum quis purus. Morbi efficitur tellus
          urna, non laoreet justo blandit sit amet.
        </p>
        <p>
          Suspendisse non auctor sapien. Donec tincidunt quam vel eleifend
          condimentum. Donec sit amet elit vulputate, pulvinar ante in,
          condimentum dolor. Nullam ac dolor eget justo bibendum interdum
          sagittis eget erat. Suspendisse in faucibus lacus. Fusce vitae
          interdum orci, in porttitor neque. Phasellus maximus mauris sed
          egestas vulputate. Praesent in neque ipsum.
        </p>
        <h2>Muted Text</h2>
        <span className={"muted"}>Muted Label</span>
        <br />
        <i className={"muted"}>Muted Label with italics</i>
      </section>
      <h1>List Items</h1>
      <section>
        <ul>
          <li>Item1</li>
          <li>Item2</li>
          <li>Item3</li>
          <ul>
            <li>Sub item 1</li>
            <li>Sub item 2</li>
            <li>Sub item 3</li>
          </ul>
        </ul>
      </section>
      <h1>Default Icon Sizing</h1>
      <section>
        <TestIcon />
      </section>
      <h1>Divisor</h1>
      <hr />
      <h1>MDS Components</h1>
      <h2>Buttons</h2>
      <section>
        <Button id={"test-button"} label={"Regular Button"} />
        <br />
        <Button
          id={"test-button2"}
          label={"Call to Action Button"}
          variant={"callAction"}
        />
        <br />
        <Button id={"test-button3"} label={"Secondary"} variant={"secondary"} />
      </section>
      <div></div>
    </div>
  </StoryThemeProvider>
);

export const Default = Template.bind({});
Default.args = {};
