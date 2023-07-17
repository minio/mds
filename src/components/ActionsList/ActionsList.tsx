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

import React, { FC, HTMLAttributes } from "react";
import { ActionsListPanelProps, ActionsListProps } from "./ActionsList.types";
import styled from "styled-components";
import Tooltip from "../Tooltip/Tooltip";
import ObjectActionButton from "./ObjectActionButton";
import get from "lodash/get";

const ActionsListPanel = styled.div<
  HTMLAttributes<HTMLDivElement> & ActionsListPanelProps
>(({ theme, sx }) => ({
  "& .titleLabel": {
    fontSize: 14,
    fontWeight: "700",
    color: get(theme, "actionsList.titleColor", "#000"),
    padding: "12px 30px 8px 22px",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    overflow: "hidden",
    alignItems: "center",
  },
  "& .objectActions": {
    backgroundColor: get(theme, "actionsList.backgroundColor", "#F8F8F8"),
    border: `${get(
      theme,
      "actionsList.containerBorderColor",
      "#F1F1F1",
    )} 1px solid`,
    borderRadius: 3,
    margin: "8px 22px",
    padding: 0,
    "& span": {
      width: "100%",
    },
    "& li": {
      listStyle: "none",
      padding: 6,
      margin: 0,
      borderBottom: `${get(
        theme,
        "actionsList.optionsBorder",
        "#E5E5E5",
      )} 1px solid`,
      fontSize: 14,
      "&:first-of-type": {
        padding: 10,
        fontWeight: "bold",
        color: get(theme, "actionsList.titleColor", "#000"),
      },
      "&:last-of-type": {
        borderBottom: 0,
      },
      "&::before": {
        content: "' '!important",
      },
    },
  },
  ...sx,
}));

const ActionsList: FC<ActionsListProps> = ({ sx, items, title }) => {
  return (
    <ActionsListPanel sx={sx}>
      <div className={"titleLabel"}>{title}</div>
      <ul className={"objectActions"}>
        <li>Actions:</li>
        {items.map((actionItem, index) => {
          return (
            <li key={`action-element-${index.toString()}`}>
              <Tooltip tooltip={actionItem.tooltip || ""}>
                <ObjectActionButton
                  label={actionItem.label}
                  icon={actionItem.icon}
                  onClick={actionItem.action}
                  disabled={actionItem.disabled}
                  style={{
                    pointerEvents: actionItem.disabled ? "none" : "initial",
                  }}
                />
              </Tooltip>
            </li>
          );
        })}
      </ul>
    </ActionsListPanel>
  );
};

export default ActionsList;
