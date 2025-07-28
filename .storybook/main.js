import remarkGfm from "remark-gfm";

module.exports = {
  stories: ["../src/**/**/*.mdx", "../src/**/**/*.stories.@(js|jsx|ts|tsx)"],
  core: {
    disableTelemetry: true,
  },
  addons: [
    "@storybook/addon-links",
    "storybook-dark-mode",
    {
      name: "@storybook/addon-docs",
      options: {
        mdxPluginOptions: {
          mdxCompileOptions: {
            remarkPlugins: [remarkGfm],
          },
        },
      },
    },
    "@storybook/addon-webpack5-compiler-babel",
    "@chromatic-com/storybook",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {},
  typescript: {
    reactDocgen: "react-docgen-typescript",
  },
};
