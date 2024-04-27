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
import Tooltip from "../Tooltip/Tooltip";
import CloudIcon from "../Icons/CloudIcon";
import ConsoleIcon from "../Icons/ConsoleIcon";
import DisableIcon from "../Icons/DisableIcon";
import FormatDriveIcon from "../Icons/FormatDriveIcon";
import IAMPoliciesIcon from "../Icons/IAMPoliciesIcon";
import PreviewIcon from "../Icons/PreviewIcon";
import ShareIcon from "../Icons/ShareIcon";
import EditIcon from "../Icons/EditIcon";
import TrashIcon from "../Icons/TrashIcon";
import {
  actionsTypes,
  IActionButton,
  PredefinedActionTypes,
} from "./DataTable.types";
import styled from "styled-components";
import get from "lodash/get";
import { lightV2 } from "../../global/themes";
import DownloadIcon from "../Icons/NewDesignIcons/DownloadIcon";

const TableActionCustomIcon = styled.button(({ theme }) => {
  let buttonSize: number | string = 30;

  return {
    width: buttonSize,
    height: buttonSize,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "100%",
    border: `1px solid ${get(theme, `dataTable.actionButton.border`, lightV2.plainIconButtonBorder)}`,
    position: "relative",
    cursor: "pointer",
    transitionDuration: "0.2s",
    background: get(
      theme,
      `dataTable.actionButton.background`,
      lightV2.plainIconButtonBG,
    ),
    "& svg": {
      color: get(
        theme,
        `dataTable.actionButton.iconColor`,
        lightV2.plainIconButtonColor,
      ),
      margin: "calc(25% - 2px)",
    },
    "&:hover:not(:disabled)": {
      background: get(
        theme,
        `dataTable.actionButton.hoverBackground`,
        lightV2.plainIconButtonBG,
      ),
      borderColor: get(
        theme,
        `dataTable.actionButton.hoverBorder`,
        lightV2.plainIconButtonBorder,
      ),
    },
    "&:active:not(:disabled)": {
      background: get(
        theme,
        `dataTable.actionButton.activeBackground`,
        lightV2.plainIconButtonBG,
      ),
      borderColor: get(
        theme,
        `dataTable.actionButton.activeBorder`,
        lightV2.plainIconButtonBorder,
      ),
    },
    "&:disabled": {
      cursor: "not-allowed",
      background: get(
        theme,
        `dataTable.actionButton.disabledBackground`,
        "transparent",
      ),
      borderColor: get(
        theme,
        `dataTable.actionButton.disabledBorder`,
        lightV2.disabledSecondary,
      ),
      "& svg": {
        color: get(
          theme,
          `dataTable.actionButton.disabledIconColor`,
          lightV2.disabledSecondaryText,
        ),
      },
    },
  };
});

export const isPredefinedAction = (val: any): val is PredefinedActionTypes =>
  actionsTypes.includes(val);

const defineIcon = (type: PredefinedActionTypes) => {
  switch (type) {
    case "view":
      return <PreviewIcon />;
    case "edit":
      return <EditIcon />;
    case "delete":
      return <TrashIcon />;
    case "description":
      return <IAMPoliciesIcon />;
    case "share":
      return <ShareIcon />;
    case "cloud":
      return <CloudIcon />;
    case "console":
      return <ConsoleIcon />;
    case "download":
      return <DownloadIcon />;
    case "disable":
      return <DisableIcon />;
    case "format":
      return <FormatDriveIcon />;
    case "preview":
      return <PreviewIcon />;
  }

  return null;
};

const TableActionButton: FC<IActionButton> = ({
  type,
  onClick,
  valueToSend,
  idField,
  sendOnlyId = false,
  disabled = false,
  tooltip,
}) => {
  const valueClick = sendOnlyId ? valueToSend[idField] : valueToSend;

  const icon = isPredefinedAction(type) ? defineIcon(type) : type;
  let buttonElement = (
    <TableActionCustomIcon
      type={"button"}
      aria-label={typeof type === "string" ? type : ""}
      disabled={disabled}
      onClick={
        onClick
          ? (e) => {
              e.stopPropagation();
              if (!disabled) {
                onClick(valueClick);
              } else {
                e.preventDefault();
              }
            }
          : () => null
      }
    >
      {icon}
    </TableActionCustomIcon>
  );

  if (tooltip && tooltip !== "") {
    buttonElement = <Tooltip tooltip={tooltip}>{buttonElement}</Tooltip>;
  }

  if (onClick) {
    return buttonElement;
  }

  return null;
};

export default TableActionButton;
