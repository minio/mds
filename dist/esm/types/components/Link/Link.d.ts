import React, { FC } from "react";
import { LinkProps } from "./Link.types";
declare const Link: FC<
  LinkProps & React.AnchorHTMLAttributes<HTMLAnchorElement>
>;
export default Link;
