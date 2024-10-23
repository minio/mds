import React from "react";
interface IStoryThemeProvider {
  children: React.ReactNode;
}
declare const StoryThemeProvider: ({
  children,
}: IStoryThemeProvider) => import("@emotion/react/jsx-runtime").JSX.Element;
export default StoryThemeProvider;
