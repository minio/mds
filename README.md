# MinIO Design System

The MinIO Design System is a design specification for all UI elements used in MinIO products.

## How to test

You can test this package using the embedded storybook. Please follow these steps:

1. Do `yarn install` in the root folder of mds
2. Start Story book by running `yarn storybook`
3. Open any browser and go to `http://localhost:6006`

## How to implement in your application

To implement the MinIO Design System in your application, you can follow these steps:

1. Install the package by running `yarn add http://github.com/minio/mds#[Version]`. Replace `[Version]` with the version you want to install.
2. Import the required Geist & Geist Mono fonts in your application using your preferred method, Font Variants described as follows: 

```css
  {
    "@font-face": {
      fontFamily: "Geist",
      src: `url(${GeistBoldWoff2}) format("woff2")`,
      fontWeight: "bold",
      fontStyle: "normal",
      fontDisplay: "swap",
    },
  },
  {
    "@font-face": {
      fontFamily: "Geist",
      src: `url(${GeistMediumWoff2}) format("woff2")`,
      fontWeight: 500,
      fontStyle: "normal",
      fontDisplay: "swap",
    },
  },
  {
    "@font-face": {
      fontFamily: "Geist",
      src: `url(${GeistSemiBoldWoff2}) format("woff2")`,
      fontWeight: 600,
      fontStyle: "normal",
      fontDisplay: "swap",
    },
  },
  {
    "@font-face": {
      fontFamily: "Geist",
      src: `url(${GeistLightWoff2}) format("woff2")`,
      fontWeight: 300,
      fontStyle: "normal",
      fontDisplay: "swap",
    },
  },
  {
    "@font-face": {
      fontFamily: "Geist",
      src: `url(${GeistUltraLightWoff2}) format("woff2")`,
      fontWeight: 200,
      fontStyle: "normal",
      fontDisplay: "swap",
    },
  },
  {
    "@font-face": {
      fontFamily: "Geist",
      src: `url(${GeistBlackWoff2}) format('woff2')`,
      fontWeight: 900,
      fontStyle: "normal",
      fontDisplay: "swap",
    },
  },
  {
    "@font-face": {
      fontFamily: "Geist",
      src: `url(${GeistRegularWoff2}) format('woff2')`,
      fontWeight: "normal",
      fontStyle: "normal",
      fontDisplay: "swap",
    },
  },
  {
    "@font-face": {
      fontFamily: "Geist",
      src: `url(${GeistThinWoff2}) format('woff2')`,
      fontWeight: 100,
      fontStyle: "normal",
      fontDisplay: "swap",
    },
  },
  {
    "@font-face": {
      fontFamily: "GeistMono",
      src: `url(${GeistMonoRegularWoff2}) format('woff2')`,
      fontWeight: 400,
      fontStyle: "normal",
      fontDisplay: "swap",
    },
  },

```
3. Create an `mds.d.ts` file in the root of your project and add the following code and import it into your tsconfig.json file:

```typescript
import { ThemeDefinition } from "mds";

import "@emotion/react";

declare module "@emotion/react" {
  export type Theme = ThemeDefinition;
}
```
This is required to have the correct types for the theme object in your application.

4. Import the required components in your application. For example, to import the Button component, you can use `import { Button } from 'mds'`.
5. Use the imported component in your application.



## Build distribution files

To create distribution files you can run `yarn build` or `make build` in source folder. This will create the required dist folders.

This process is required everytime a new component is created and ready to be distributed

## License

MinIO Design System source is licensed under the GNU AGPLv3 license that can be found in the [LICENSE](https://github.com/minio/mds/blob/master/LICENSE) file.
