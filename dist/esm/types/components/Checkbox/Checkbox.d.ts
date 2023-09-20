import React, { FC } from "react";
import { CheckboxProps } from "./Checkbox.types";
declare const Checkbox: FC<
  CheckboxProps & React.InputHTMLAttributes<HTMLInputElement>
>;
export default Checkbox;
