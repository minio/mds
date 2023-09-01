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

import React, { FC, useEffect, useRef, useState } from "react";
import get from "lodash/get";
import styled from "styled-components";
import {
  SnackbarButtonProps,
  SnackbarConstructProps,
  SnackbarProps,
} from "./Snackbar.types";
import { createPortal } from "react-dom";
import { lightColors } from "../../global/themes";
import AlertCloseIcon from "../Icons/AlertCloseIcon";
import Box from "../Box/Box";

const SnackBarContainer = styled.div<SnackbarConstructProps>(
  ({ theme, sx, open, variant, condensed }) => ({
    position: "fixed",
    width: condensed ? "auto" : "100vw",
    maxWidth: condensed ? 350 : "100vw",
    zIndex: 10000,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: condensed ? 25 : 75,
    fontSize: condensed ? 12 : 14,
    top: 0,
    left: condensed ? "50%" : 0,
    gap: condensed ? 5 : 0,
    transform: condensed ? "translateX(-50%)" : "initial",
    padding: condensed ? "0 15px" : "0 60px 0 25px",
    borderBottomLeftRadius: condensed ? 8 : 0,
    borderBottomRightRadius: condensed ? 8 : 0,
    backgroundColor: get(
      theme,
      `snackbar.${variant}.backgroundColor`,
      lightColors.mainBlue,
    ),
    color: get(theme, `snackbar.${variant}.labelColor`, lightColors.white),
    fontWeight: condensed ? "normal" : "bold",
    marginTop: open ? 0 : "-100%",
    transition: "all 0.5s",
    "& .messageTruncation": {
      width: "100%",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      textAlign: "center",
    },
    ...sx,
  }),
);

const CloseButton = styled.button<SnackbarButtonProps>(
  ({ theme, variant, condensed }) => ({
    backgroundColor: condensed ? "transparent" : "#00000030",
    color: get(theme, `snackbar.${variant}.labelColor`, lightColors.white),
    display: "flex",
    position: condensed ? "initial" : "absolute",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    width: condensed ? 15 : 25,
    height: condensed ? 15 : 25,
    borderRadius: condensed ? 0 : "100%",
    border: "none",
    top: "50%",
    right: 25,
    transform: condensed ? "initial" : "translateY(-50%)",
    padding: 0,
    "&:hover": {
      backgroundColor: condensed ? "transparent" : "#00000040",
    },
    "& svg": {
      width: condensed ? 10 : 12,
      height: condensed ? 10 : 12,
    },
  }),
);

const Snackbar: FC<SnackbarProps> = ({
  autoHideDuration = 5,
  message = "",
  open,
  onClose,
  variant = "default" as "default" | "success" | "warning" | "error",
  condensed = false,
  closeButton,
  sx,
  mode = "portal" as "inline" | "portal",
}) => {
  const [hoverBar, setHoverBar] = useState<boolean>(false);
  const timerRef = useRef<any>(null);

  useEffect(() => {
    if (open && autoHideDuration > 0 && !hoverBar) {
      const timeInMS = autoHideDuration * 1000;

      timerRef.current = setTimeout(() => {
        onClose();
      }, timeInMS);
    }

    return () => {
      clearTimeout(timerRef.current);
    };
  }, [open, autoHideDuration, hoverBar]);

  useEffect(() => {
    if (hoverBar) {
      clearTimeout(timerRef.current);
    }
  }, [hoverBar]);

  const closeWithButton = () => {
    clearTimeout(timerRef.current);
    onClose();
  };

  if (!open || message === "") {
    return null;
  }

  const snackContainer = (
    <SnackBarContainer
      open={open}
      variant={variant}
      sx={sx}
      onMouseOver={() => setHoverBar(true)}
      onMouseLeave={() => setHoverBar(false)}
      condensed={condensed}
    >
      <Box className={"messageTruncation"}>{message}</Box>
      {closeButton && (
        <CloseButton
          variant={variant}
          condensed={condensed}
          onClick={closeWithButton}
        >
          <AlertCloseIcon />
        </CloseButton>
      )}
    </SnackBarContainer>
  );

  if (mode === "portal") {
    return createPortal(snackContainer, document.body);
  }

  return snackContainer;
};

export default Snackbar;
