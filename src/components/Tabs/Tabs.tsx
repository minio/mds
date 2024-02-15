// This file is part of MinIO Design System
// Copyright (c) 2023 MinIO, Inc.
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.

import React, { FC } from "react";
import styled from "styled-components";
import get from "lodash/get";
import { TabsContainerProps, TabsProps } from "./Tabs.types";
import { lightColors } from "../../global/themes";
import Box from "../Box/Box";
import TabPanel from "./TabPanel";
import TabButton from "./TabButton";

const TabsContainer = styled.div<TabsContainerProps>(
  ({ theme, horizontal, horizontalBarBackground, sx }) => {
    let horizontalBG = horizontalBarBackground
      ? get(theme, "tabs.horizontal.backgroundColor", "transparent")
      : "transparent";

    return {
      display: "flex",
      flexDirection: horizontal ? "column" : "row",
      height: "100%",
      "& .optionsContainer": {
        display: "flex",
        border: horizontal
          ? "none"
          : `${get(
              theme,
              "tabs.vertical.borders",
              lightColors.tabBorder,
            )} 1px solid`,
        borderBottom: horizontal
          ? `${get(theme, "borderColor", lightColors.borderColor)} 1px solid`
          : `${get(
              theme,
              "tabs.vertical.borders",
              lightColors.tabBorder,
            )} 1px solid`,
        backgroundColor: horizontal
          ? horizontalBG
          : get(
              theme,
              "tabs.vertical.backgroundColor",
              lightColors.iconButtonBG,
            ),
        width: horizontal ? "100%" : "auto",
        alignItems: horizontal ? "center" : "flex-start",
        gap: 10,
        "& .optionsList": {
          display: "flex",
          flexDirection: horizontal ? "row" : "column",
          flexGrow: 1,
          width: horizontal ? "100%" : "auto",
        },
      },
      "& .tabsPanels": {
        flexGrow: 1,
        width: "100%",
        padding: 15,
        border: horizontal
          ? "none"
          : `${get(
              theme,
              "tabs.vertical.borders",
              lightColors.tabBorder,
            )} 1px solid`,
        borderLeft: "none",
      },
      ...sx,
    };
  },
);

const Tabs: FC<TabsProps> = ({
  horizontal,
  options,
  currentTabOrPath,
  useRouteTabs = false,
  routes,
  onTabClick,
  optionsInitialComponent,
  optionsEndComponent,
  horizontalBarBackground,
  sx,
}) => {
  return (
    <TabsContainer
      className={"tabs-container"}
      horizontal={!!horizontal}
      horizontalBarBackground={!!horizontalBarBackground}
      sx={sx}
    >
      <Box className={"optionsContainer"}>
        {optionsInitialComponent && <Box>{optionsInitialComponent}</Box>}
        <Box className={"optionsList"}>
          {options.map((item, index) => {
            if (item) {
              return (
                <TabButton
                  key={`v-tab-${index}`}
                  id={item.tabConfig.id}
                  onClick={() => {
                    onTabClick(
                      useRouteTabs
                        ? item.tabConfig.to || ""
                        : item.tabConfig.id,
                    );
                  }}
                  horizontal={!!horizontal}
                  label={item.tabConfig.label}
                  disabled={!!item.tabConfig.disabled}
                  icon={item.tabConfig.icon}
                  selected={
                    useRouteTabs
                      ? item.tabConfig.to === currentTabOrPath
                      : item.tabConfig.id === currentTabOrPath
                  }
                />
              );
            }
            return null;
          })}
        </Box>
        {optionsEndComponent && <Box>{optionsEndComponent}</Box>}
      </Box>
      <Box className={"tabsPanels"}>
        {!useRouteTabs ? (
          options.map((item, index) => {
            if (item.tabConfig.disabled) {
              return null;
            }

            return (
              <TabPanel
                key={`v-tab-p-${index}`}
                id={item.tabConfig.id}
                selectedTab={currentTabOrPath}
                useRouteTabs={!!useRouteTabs}
              >
                {item ? item.content : null}
              </TabPanel>
            );
          })
        ) : (
          <TabPanel id={"routes-tab-container"} useRouteTabs={!!useRouteTabs}>
            {routes}
          </TabPanel>
        )}
      </Box>
    </TabsContainer>
  );
};

export default Tabs;
