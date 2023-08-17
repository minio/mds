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
import { ModalBoxContainerProps, ModalBoxProps } from "./ModalBox.types";
import Box from "../Box/Box";
import AlertCloseIcon from "../Icons/AlertCloseIcon";

const ModalBoxContainer = styled.div<ModalBoxContainerProps>(
  ({ theme, backgroundOverlay, widthLimit, iconColor, customMaxWidth }) => ({
    "& .overlay": {
      position: "fixed",
      zIndex: 1200,
      width: "100vw",
      height: "100vh",
      top: 0,
      left: 0,
      backgroundColor: backgroundOverlay
        ? get(theme, "modalBox.overlayColor", "#00000050")
        : "transparent",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      opacity: 0,
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
      backgroundColor: get(theme, "modalBox.containerColor", "#FFF"),
      padding: "16px 40px",
      borderRadius: 4,
      boxShadow:
        "rgba(0, 0, 0, 0.2) 0px 11px 15px -7px, rgba(0, 0, 0, 0.14) 0px 24px 38px 3px, rgba(0, 0, 0, 0.12) 0px 9px 46px 8px",
    },
    "& .modalTitleBar": {
      position: "relative",
      padding: "10px 0",
      "& .closeModalButton": {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        top: -2,
        right: -14,
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
          width: 14,
          height: 14,
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
        color: get(theme, "modalBox.titleColor", "#000"),
        fontWeight: "bold",
        "& > svg": {
          fill: get(theme, `modalBox.iconColor.${iconColor}`, "#07193E"),
        },
      },
    },
    "& .dialogContent": {
      maxHeight: "calc(100vh - 150px)",
      overflowY: "auto",
    },
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
              <AlertCloseIcon />
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
