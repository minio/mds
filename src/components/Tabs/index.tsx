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

import React, { FC, HTMLAttributes, useMemo } from "react";
import { css, useTheme } from "@emotion/react";

import { overridePropsParse } from "../../global/utils";
import TabButton from "./TabButton";
import TabPanel from "./TabPanel";
import { horizontalTabStyles, tabsContainerStyles } from "./Tabs.styles";
import { TabsProps } from "./Tabs.types";

const Tabs: FC<TabsProps & HTMLAttributes<HTMLDivElement>> = ({
  horizontal,
  options,
  currentTabOrPath,
  useRouteTabs = false,
  routes,
  onTabClick,
  optionsInitialComponent,
  optionsEndComponent,
  sx,
  ...restProps
}) => {
  const theme = useTheme();

  const overrideThemes = useMemo(() => {
    if (sx) {
      return css({ ...overridePropsParse(sx, theme) });
    }

    return {};
  }, [sx, theme]);

  const tabContainerBase = tabsContainerStyles(theme);
  const horizontalTabBase = horizontalTabStyles(theme);

  return (
    <div
      css={[
        tabContainerBase,
        horizontal ? horizontalTabBase : {},
        overrideThemes,
      ]}
      className={"tabs"}
      {...restProps}
    >
      <div className={"optionsContainer"}>
        {optionsInitialComponent && <div>{optionsInitialComponent}</div>}
        <div className={"optionsList"}>
          {options.map((item, index) => {
            if (item) {
              if (!item.separator) {
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
              return (
                <div key={`v-tab-separator-${index}`} className={"separator"} />
              );
            }
            return null;
          })}
        </div>
        {optionsEndComponent && <div>{optionsEndComponent}</div>}
      </div>
      <div className={"tabsPanels"}>
        {!useRouteTabs ? (
          options.map((item, index) => {
            if (!item.separator) {
              if (item.tabConfig.disabled) {
                return null;
              }

              return (
                <TabPanel
                  key={`v-tab-p-${index}`}
                  id={item.tabConfig.id}
                  selectedTab={currentTabOrPath}
                  useRouteTabs={useRouteTabs}
                >
                  {item ? item.content : null}
                </TabPanel>
              );
            }
          })
        ) : (
          <TabPanel id={"routes-tab-container"} useRouteTabs={useRouteTabs}>
            {routes}
          </TabPanel>
        )}
      </div>
    </div>
  );
};

export default Tabs;
