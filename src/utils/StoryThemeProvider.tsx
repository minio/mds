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

import React, { useEffect, useState } from "react";
import { addons } from "@storybook/preview-api";
import { DARK_MODE_EVENT_NAME } from "storybook-dark-mode";

import ThemeHandler from "../components/ThemeHandler/ThemeHandler";

interface IStoryThemeProvider {
  children: React.ReactNode;
}

const channel = addons.getChannel();

const StoryThemeProvider = ({ children }: IStoryThemeProvider) => {
  const [isDark, setIsDark] = useState<boolean>(false);

  useEffect(() => {
    channel.on(DARK_MODE_EVENT_NAME, setIsDark);
  }, []);

  return <ThemeHandler darkMode={isDark}>{children}</ThemeHandler>;
};

export default StoryThemeProvider;
