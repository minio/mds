import React from "react";
export interface MainContainerProps {
  menu?: React.ReactElement;
  children: React.ReactElement;
  horizontal?: boolean;
  mobileModeAuto?: boolean;
}
export interface ParentBoxProps {
  horizontal?: boolean;
  mobileModeAuto: boolean;
}
