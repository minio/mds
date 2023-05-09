import React from "react";
interface IStoryThemeProvider {
  children: React.ReactNode;
}
declare const StoryThemeProvider: ({
  children,
}: IStoryThemeProvider) => React.JSX.Element;
export default StoryThemeProvider;
