import "@emotion/react";

import { ThemeDefinition } from "../src/global/global.types";

declare module "@emotion/react" {
  export interface Theme extends ThemeDefinition {}
}
