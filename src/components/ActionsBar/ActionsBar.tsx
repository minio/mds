// This file is part of MinIO Design System
// Copyright (c) 2024 MinIO, Inc.
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
import { ActionsBarProps } from "./ActionsBar.types";
import { lightV2 } from "../../global/themes";

const ActionsBarMain = styled.div<ActionsBarProps>(({ theme, narrow, sx }) => ({
  display: "inline-flex",
  flexDirection: "row" as const,
  border: `1px solid ${get(theme, "actionsBar.border", lightV2.colorBorderSubtle)}`,
  backgroundColor: get(theme, "actionsBar.background", lightV2.bgColorBgShell),
  borderRadius: 8,
  overflow: "hidden",
  width: "initial",
  "& > *:not(:last-child)": {
    borderRight: `1px solid   ${get(theme, "actionsBar.border", lightV2.colorBorderSubtle)}`,
  },
  "& button": {
    display: "flex",
    alignItems: "center",
    boxShadow: "none",
    border: 0,
    borderRadius: 0,
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: 400,
    letterSpacing: "0.16px",
    fontFamily: "'Geist', sans-serif",
    color: get(theme, "actionsBar.labelColor", lightV2.colorTextLabel),
    padding: narrow ? "0 8px" : "0 12px",
    margin: narrow ? "2px 0px" : 0,
    height: narrow ? 28 : 32,
    "& .buttonIcon": {
      height: 16,
    },
    "& .button-label": {
      display: narrow ? "none" : "initial",
    },
    "& .buttonIcon > svg": {
      width: 16,
      height: 16,
      minWidth: 16,
      minHeight: 16,
      fill: get(theme, "actionsBar.labelColor", lightV2.colorTextLabel),
    },
    "&:hover:not(:disabled)": {
      backgroundColor: get(
        theme,
        "actionsBar.hoverBackground",
        lightV2.bgColorBgShell,
      ),
      color: get(theme, "actionsBar.hoverLabelColor", lightV2.colorTextLabel),
      borderColor: get(theme, "actionsBar.border", lightV2.colorBorderSubtle),
      "& .buttonIcon > svg": {
        fill: get(theme, "actionsBar.hoverLabelColor", lightV2.colorTextLabel),
      },
    },
    "&:active": {
      backgroundColor: get(
        theme,
        "actionsBar.activeBackground",
        lightV2.bgColorBgShell,
      ),
      color: get(theme, "actionsBar.activeLabelColor", lightV2.colorTextLabel),
      borderColor: get(theme, "actionsBar.border", lightV2.colorBorderSubtle),
      "& .buttonIcon > svg": {
        fill: get(theme, "actionsBar.activeLabelColor", lightV2.colorTextLabel),
      },
    },
  },
  ...sx,
}));

const ActionsBar: FC<ActionsBarProps> = ({
  sx,
  narrow,
  children,
  ...props
}) => {
  return (
    <ActionsBarMain {...props} sx={sx} narrow={narrow}>
      {children}
    </ActionsBarMain>
  );
};

export default ActionsBar;
