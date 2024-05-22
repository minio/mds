import { themes } from "@storybook/theming";
import { darkColors, lightColors } from "../src/global/themes";

export const parameters = {
  actions: {},
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  darkMode: {
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
  },
};
export const tags = ["autodocs"];
