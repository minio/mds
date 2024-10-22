import React, { FC } from "react";
import { ToggleProps } from "./Toggle.types";
declare const Toggle: FC<
  ToggleProps & React.InputHTMLAttributes<HTMLInputElement>
>;
export default Toggle;
