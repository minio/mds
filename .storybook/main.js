import remarkGfm from "remark-gfm";

module.exports = {
  stories: [
    "../src/**/**/*.stories.mdx",
    "../src/**/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
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
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: true,
  },
};
