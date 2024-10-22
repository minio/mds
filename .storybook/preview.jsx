import React from "react";
import { themes } from "@storybook/theming";
import { darkColors, lightColors } from "../src/global/themes";

import { withThemeFromJSXProvider } from "@storybook/addon-themes";
import { Global, css } from "@emotion/react";

export const parameters = {
  actions: {},
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  darkMode: {
    light: {
      ...themes.normal,
      appBg: "#F6F7F9",
    },
  },
  /*darkMode: {
    dark: {
      ...themes.dark,
      appBg: darkColors.dark,
      appContentBg: darkColors.dark,
      appBorderColor: darkColors.divisorColor,
      barTextColor: darkColors.mainGrey,
      textColor: darkColors.mainGrey,
      barSelectedColor: darkColors.mainWhite,
      barBg: darkColors.dark,
      inputBg: darkColors.dark,
      inputBorder: darkColors.mainGrey,
      colorSecondary: darkColors.mainRed,
    },
    light: {
      ...themes.normal,
      appBg: lightColors.white,
      appContentBg: lightColors.white,
      appBorderColor: lightColors.divisorColor,
      barTextColor: lightColors.mainGrey,
      textColor: lightColors.mainGrey,
      barSelectedColor: lightColors.mainBlue,
      barBg: lightColors.white,
      inputBg: lightColors.white,
      inputBorder: lightColors.mainGrey,
      colorSecondary: lightColors.mainBlue,
    },
  },*/
};

const GlobalStyles = () => (
  <Global
    styles={css`
      body {
        font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial,
          sans-serif;
      }
    `}
  />
);

export const decorators = [
  withThemeFromJSXProvider({
    GlobalStyles, // Adds your GlobalStyles component to all stories
  }),
];

export const tags = ["autodocs"];
