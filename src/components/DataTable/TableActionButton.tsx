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
import DownloadIcon from "../Icons/DownloadIcon";
import IconButton from "../IconButton/IconButton";
import {
  actionsTypes,
  IActionButton,
  PredefinedActionTypes,
} from "./DataTable.types";

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
    <IconButton
      type={"button"}
      aria-label={typeof type === "string" ? type : ""}
      size={"30px"}
      sx={{
        margin: "0 8px",
      }}
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
    </IconButton>
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
