import React from "react";
import { BoxProps } from "./Box.types";
declare const Box: React.ForwardRefExoticComponent<
  BoxProps & React.RefAttributes<React.HTMLAttributes<HTMLDivElement>>
>;
export default Box;
