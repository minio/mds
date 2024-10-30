import React from "react";
import { OverrideTheme } from "../../global/global.types";
export interface OverlayProps {
  onClose: () => void;
  open: boolean;
  children: React.ReactNode;
  backgroundOverlay?: boolean;
  sx?: OverrideTheme;
}
