import { Preview } from "@storybook/react";
import { themes, ensure } from "@storybook/theming";

import { darkModeColors, lightModeColors } from "../src";

const preview: Preview = {
  parameters: {
    actions: {},
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      theme: ensure(themes.dark),
    },
    darkMode: {
      dark: {
        ...themes.dark,
        appBg: darkModeColors["Color/Neutral/Bg/colorBgSections"],
        appContentBg: darkModeColors["Color/Neutral/Bg/colorBgSections"],
        appBorderColor:
          darkModeColors["Color/Neutral/Border/colorBorderSubtle"],
        barTextColor: darkModeColors["Color/Neutral/Text/colorTextLabel"],
        textColor: darkModeColors["Color/Neutral/Text/colorText"],
        barSelectedColor: darkModeColors["Color/Base/Royal/6"],
        barBg: darkModeColors["Color/Neutral/Icon/colorIcon"],
        inputBg: darkModeColors["Color/Neutral/Bg/colorBgFields"],
        inputBorder: darkModeColors["Color/Neutral/Border/colorBorderSubtle"],
        colorSecondary:
          darkModeColors["Color/Brand/Primary/colorPrimaryBorder"],
      },
      light: {
        ...themes.normal,
        appBg: lightModeColors["Color/Neutral/Bg/colorBgSections"],
        appContentBg: lightModeColors["Color/Neutral/Bg/colorBgSections"],
        appBorderColor:
          lightModeColors["Color/Neutral/Border/colorBorderSubtle"],
        barTextColor: lightModeColors["Color/Neutral/Text/colorTextLabel"],
        textColor: lightModeColors["Color/Neutral/Text/colorText"],
        barSelectedColor: lightModeColors["Color/Base/Royal/6"],
        barBg: lightModeColors["Color/Neutral/Icon/colorIcon"],
        inputBg: lightModeColors["Color/Neutral/Bg/colorBgFields"],
        inputBorder: lightModeColors["Color/Neutral/Border/colorBorderSubtle"],
        colorSecondary:
          lightModeColors["Color/Brand/Primary/colorPrimaryBorder"],
      },
    },
  },
};

export default preview;
