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
import { createPortal } from "react-dom";
import { useTheme } from "@emotion/react";

import Box from "../Box";
import Button from "../Button";
import Loader from "../Loader";
import { wizardPageMainStyles } from "./Wizard.styles";
import { WizardButton, WizardPageProps } from "./Wizard.types";

const WizardPage = ({
  page,
  pageChange,
  loadingStep,
  forModal,
  actionButtonsPortalID,
}: WizardPageProps) => {
  const theme = useTheme();

  const wizardPageStyles = wizardPageMainStyles(theme);

  const buttonAction = (btn: WizardButton) => {
    switch (btn.type) {
      case "next":
        pageChange("++");
        break;
      case "back":
        pageChange("--");
        break;
      case "to":
        pageChange(btn.toPage || 0);
        break;
      case "custom":
      default:
    }

    if (btn.action) {
      btn.action(pageChange);
    }
  };

  const buttonsBar = (
    <Box className={`buttonsContainer ${forModal ? "forModal" : ""}`}>
      <Box className={"buttonInnerContainer"}>
        {page.buttons.map((btn) => {
          if (btn.componentRender) {
            return btn.componentRender;
          }
          return (
            <Button
              id={"wizard-button-" + btn.label}
              onClick={() => {
                buttonAction(btn);
              }}
              disabled={!btn.enabled}
              key={`button-${page.label}-${btn.label}`}
              label={btn.label}
            />
          );
        })}
      </Box>
    </Box>
  );

  return (
    <div css={wizardPageStyles}>
      <Box className={forModal ? "wizardModal" : "wizardComponent"}>
        {page.componentRender}
      </Box>
      {loadingStep && (
        <Box>
          <Loader />
        </Box>
      )}
      {actionButtonsPortalID
        ? createPortal(buttonsBar, actionButtonsPortalID)
        : buttonsBar}
    </div>
  );
};

export default WizardPage;
