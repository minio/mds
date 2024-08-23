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

import React, { FC, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import get from "lodash/get";
import styled from "styled-components";

import { useEscapeKey } from "../../global/hooks";
import { lightV2 } from "../../global/themes";
import { overridePropsParse } from "../../global/utils";
import Box from "../Box/Box";
import XIcon from "../Icons/NewDesignIcons/XIcon";
import { ModalBoxContainerProps, ModalBoxProps } from "./ModalBox.types";

const ModalBoxContainer = styled.div<ModalBoxContainerProps>(
  ({
    theme,
    backgroundOverlay,
    widthLimit,
    iconColor,
    customMaxWidth,
    sx,
  }) => ({
    "& .overlay": {
      position: "fixed" as const,
      zIndex: 1200,
      width: "100vw",
      height: "100vh",
      top: 0,
      left: 0,
      backgroundColor: backgroundOverlay
        ? get(theme, "modalBox.overlayColor", "#f08")
        : "transparent",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      opacity: 0,
      backdropFilter: "blur(4px)",
      "&.active": {
        opacity: 1,
        transition: "opacity 0.3s",
      },
    },
    "& .modalContainer": {
      color: get(theme, "fontColor", "#000"),
      width: "100%",
      maxWidth: widthLimit ? customMaxWidth : "100%",
      margin: 32,
      backgroundColor: get(theme, "modalBox.containerColor", lightV2.white),
      borderRadius: 12,
      border: `1px solid ${get(theme, "modalBox.border", lightV2.modalBorderColor)}`,
      boxShadow:
        "0px 4px 8px 0px rgba(121, 135, 151, 0.15), 0px 6px 12px 0px rgba(121, 135, 151, 0.15)",
    },
    "& .modalTitleBar": {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      position: "relative" as const,
      padding: "26px 24px",
      backgroundColor: get(theme, "modalBox.border", lightV2.modalBorderColor),
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      "& .closeModalButton": {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        border: "none",
        backgroundColor: "transparent",
        fontSize: 24,
        color: get(theme, "modalBox.closeColor", "#FFF"),
        padding: 0,
        borderRadius: "100%",
        width: 28,
        height: 28,
        "& > svg": {
          width: 18,
          height: 18,
        },
        "&:hover": {
          color: get(theme, "modalBox.closeHoverColor", "#EAEAEA"),
          backgroundColor: get(theme, "modalBox.closeHoverBG", "#000"),
        },
      },
      "& .title": {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: 8,
        fontSize: 20,
        color: get(theme, "modalBox.titleColor", lightV2.modalTitleColor),
        fontWeight: "500",
        "& > svg": {
          color: get(
            theme,
            `modalBox.iconColor.${iconColor}`,
            lightV2.modalTitleColor,
          ),
        },
      },
    },
    "& .dialogContent": {
      boxSizing: "border-box",
      padding: 24,
      maxHeight: "calc(100vh - 150px)",
      overflowY: "auto",
    },
    ...overridePropsParse(sx, theme),
  }),
);

const ModalBox: FC<ModalBoxProps> = ({
  onClose,
  open,
  title,
  children,
  widthLimit = true,
  titleIcon,
  backgroundOverlay = true,
  iconColor = "default",
  customMaxWidth = 750,
  sx,
}) => {
  useEscapeKey(onClose);

  const [displayOverlay, setDisplayOverlay] = useState<boolean>(false);

  useEffect(() => {
    if (open) {
      setTimeout(() => setDisplayOverlay(true), 100);
      return;
    }
    setDisplayOverlay(false);
  }, [open]);

  if (!open) {
    return null;
  }

  const modalContainer = (
    <ModalBoxContainer
      widthLimit={widthLimit}
      backgroundOverlay={backgroundOverlay}
      iconColor={iconColor}
      customMaxWidth={customMaxWidth}
      sx={sx}
      className={"modalBoxMain"}
    >
      <Box className={`overlay ${displayOverlay ? "active" : ""}`}>
        <Box className={"modalContainer"}>
          <Box className={"modalTitleBar"}>
            <Box className={"title"}>
              {titleIcon}
              {title}
            </Box>
            <button
              className={"closeModalButton"}
              id={"close"}
              onClick={onClose}
            >
              <XIcon />
            </button>
          </Box>
          <Box className={"dialogContent"}>{children}</Box>
        </Box>
      </Box>
    </ModalBoxContainer>
  );

  return createPortal(modalContainer, document.body);
};

export default ModalBox;
