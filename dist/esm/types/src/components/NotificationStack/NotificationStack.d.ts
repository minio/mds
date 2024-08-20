import React, { FC } from "react";
import {
  NotificationStackConstructProps,
  NotificationStackContainerProps,
} from "./NotificationStack.types";
export declare const NotificationStackContainer: import("styled-components/dist/types").IStyledComponentBase<
  "web",
  import("styled-components/dist/types").Substitute<
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >,
    NotificationStackConstructProps
  >
> &
  string;
declare const NotificationStack: FC<
  NotificationStackContainerProps & NotificationStackConstructProps
>;
export default NotificationStack;
