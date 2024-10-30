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

import { FC, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useTheme } from "@emotion/react";

import { useEscapeKey } from "../../global/hooks";
import XIcon from "../../icons/XIcon";
import { modalContainer, modalTitleBar } from "./ModalBox.styles";
import { ModalBoxProps } from "./ModalBox.types";
import Overlay from "../Overlay";

const ModalBox: FC<ModalBoxProps> = ({
  onClose,
  open,
  title,
  children,
  widthLimit = true,
  titleIcon,
  backgroundOverlay = true,
  customMaxWidth = 750,
  sx,
}) => {
  const theme = useTheme();
  useEscapeKey(onClose);

  const containerStyles = modalContainer(
    theme,
    widthLimit ? customMaxWidth : "100%",
  );
  const titleStyles = modalTitleBar(theme);

  if (!open) {
    return null;
  }

  const modalBox = (
    <Overlay
      sx={sx}
      onClose={onClose}
      open={open}
      backgroundOverlay={backgroundOverlay}
    >
      <div css={containerStyles} className={"modalContainer"}>
        <div css={titleStyles} className={"modalTitleBar"}>
          <div className={"title"}>
            {titleIcon}
            {title}
          </div>
          <button className={"closeModalButton"} id={"close"} onClick={onClose}>
            <XIcon />
          </button>
        </div>
        <div className={"dialogContent"}>{children}</div>
      </div>
    </Overlay>
  );

  return createPortal(modalBox, document.body);
};

export default ModalBox;
