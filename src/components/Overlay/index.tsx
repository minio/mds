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

import { FC, useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { css, useTheme } from "@emotion/react";

import { useEscapeKey } from "../../global/hooks";
import { overridePropsParse } from "../../global/utils";
import { modalOverlay } from "./Overlay.styles";
import { OverlayProps } from "./Overlay.types";

const Overlay: FC<OverlayProps> = ({
  onClose,
  open,
  children,
  backgroundOverlay = true,
  sx,
}) => {
  const theme = useTheme();
  useEscapeKey(onClose);

  const [displayOverlay, setDisplayOverlay] = useState<boolean>(false);

  const overrideThemes = useMemo(() => {
    if (sx) {
      return css({ ...overridePropsParse(sx, theme) });
    }

    return {};
  }, [sx, theme]);

  const overlayStyles = modalOverlay(theme);

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

  const Overlay = (
    <div css={[overrideThemes]} className={"OverlayMain"}>
      <div
        css={backgroundOverlay ? overlayStyles : {}}
        className={`overlay ${displayOverlay ? "active" : ""}`}
      >
        {children}
      </div>
    </div>
  );

  return createPortal(Overlay, document.body);
};

export default Overlay;
