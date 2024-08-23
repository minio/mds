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

import React from "react";
import get from "lodash/get";
import styled from "styled-components";

import { lightV2 } from "../../global/themes";
import CircleMinusIcon from "../Icons/NewDesignIcons/CircleMinusIcon";
import CloudIcon from "../Icons/NewDesignIcons/CloudIcon";
import DownloadIcon from "../Icons/NewDesignIcons/DownloadIcon";
import EraserIcon from "../Icons/NewDesignIcons/EraserIcon";
import EyeIcon from "../Icons/NewDesignIcons/EyeIcon";
import PencilIcon from "../Icons/NewDesignIcons/PencilIcon";
import ShareIcon from "../Icons/NewDesignIcons/ShareIcon";
import ShieldEllipsisIcon from "../Icons/NewDesignIcons/ShieldEllipsisIcon";
import SquareTerminalIcon from "../Icons/NewDesignIcons/SquareTerminalIcon";
import TrashIcon from "../Icons/NewDesignIcons/TrashIcon";
import Tooltip from "../Tooltip/Tooltip";
import {
  actionsTypes,
  IActionButton,
  PredefinedActionTypes,
} from "./DataTable.types";

const TableActionCustomIcon = styled.button(({ theme }) => {
  const buttonSize: number | string = 30;

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
      return <EyeIcon />;
    case "edit":
      return <PencilIcon />;
    case "delete":
      return <TrashIcon />;
    case "description":
      return <ShieldEllipsisIcon />;
    case "share":
      return <ShareIcon />;
    case "cloud":
      return <CloudIcon />;
    case "console":
      return <SquareTerminalIcon />;
    case "download":
      return <DownloadIcon />;
    case "disable":
      return <CircleMinusIcon />;
    case "format":
      return <EraserIcon />;
    case "preview":
      return <EyeIcon />;
  }

  return null;
};

const TableActionButton = <T,>({
  type,
  onClick,
  valueToSend,
  disabled = false,
  tooltip,
}: IActionButton<T>) => {
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
                onClick(valueToSend);
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
