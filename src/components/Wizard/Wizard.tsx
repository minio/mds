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

import React, { Fragment, useState } from "react";
import get from "lodash/get";
import styled from "styled-components";

import { lightV2 } from "../../global/themes";
import { overridePropsParse } from "../../global/utils";
import Box from "../Box/Box";
import { WizardConstruct, WizardProps } from "./Wizard.types";
import WizardPage from "./WizardPage";

const WizardMain = styled.div<WizardConstruct>(({ theme, sx }) => ({
  position: "relative",
  display: "flex",
  flexDirection: "column" as const,
  "& .wizardSteps": {
    borderBottom: `1px solid ${get(
      theme,
      "wizard.modal.borderColor",
      lightV2.defaultButtonPressed,
    )}`,
    marginBottom: 24,
  },
  "& .paddedContentGrid": {
    marginTop: 8,
    padding: "0 10px",
    minHeight: 400,
  },
  "& .modalSteps": {
    width: "100%",
    maxHeight: 90,
    "& .stepsLabel": {
      fontSize: 20,
      color: get(theme, "mutedText", lightV2.mutedText),
      fontWeight: 600,
      margin: "10px 12px",
      "&.stepsModalTitle": {
        textAlign: "center",
      },
    },
    "& .buttonList": {
      backgroundColor: "transparent",
      border: "none",
      cursor: "pointer",
      userSelect: "none",
      position: "relative",
      lineHeight: "34px" as const,
      fontWeight: 600,
      color: get(theme, "wizard.modal.stepLabelColor", lightV2.mutedText),
      "&:not(:disabled):hover": {
        backgroundColor: get(
          theme,
          "wizard.modal.buttonHoverBG",
          lightV2.modalBorderColor,
        ),
      },
      "&:selected, &:active, &:focus, &:focus:active": {
        border: "none",
        outline: 0,
        boxShadow: "none",
      },
      "&:disabled": {
        cursor: "not-allowed",
        color: get(
          theme,
          "wizard.modal.disabledLabelColor",
          lightV2.disabledGreyText,
        ),
      },
      "&.selected": {
        fontWeight: "bold",
        color: get(
          theme,
          "wizard.modal.selectedStepLabelColor",
          lightV2.switchBG,
        ),
        "&:after": {
          content: "' '",
          position: "absolute",
          left: 0,
          bottom: -1,
          width: "100%",
          height: 2,
          backgroundColor: get(
            theme,
            "wizard.modal.selectedStepLabelColor",
            lightV2.switchBG,
          ),
        },
      },
    },
  },
  "& .stepsContainer": {
    display: "flex",
    justifyContent: "flex-start",
    gap: 16,
  },
  ...overridePropsParse(sx, theme),
}));

const GenericWizard = ({
  wizardSteps,
  loadingStep,
  forModal,
  linearMode = true,
  actionButtonsPortalID,
  sx,
}: WizardProps) => {
  const [currentStep, setCurrentStep] = useState<number>(0);

  const pageChange = (toElement: string | number) => {
    const lastPage = wizardSteps.length - 1;

    if (toElement === "++") {
      let nextPage = currentStep + 1;

      if (nextPage > lastPage) {
        nextPage = lastPage;
      }

      setCurrentStep(nextPage);
    }

    if (toElement === "--") {
      let prevPage = currentStep - 1;

      if (prevPage < 0) {
        prevPage = 0;
      }

      setCurrentStep(prevPage);
    }

    if (typeof toElement === "number") {
      let pg = toElement;
      if (toElement < 0) {
        pg = 0;
      }

      if (toElement > lastPage) {
        pg = lastPage;
      }

      setCurrentStep(pg);
    }
  };

  if (wizardSteps.length === 0) {
    return null;
  }

  const stepsListModal = () => {
    return (
      <Fragment>
        <nav className={"wizardNavigation stepsContainer"}>
          {wizardSteps.map((step, index) => {
            return (
              <button
                id={"wizard-step-" + step.label.toLowerCase().replace(" ", "-")}
                onClick={() => pageChange(index)}
                disabled={linearMode ? index > currentStep : false}
                className={`buttonList ${
                  currentStep === index ? "selected" : ""
                }`}
              >
                {step.label}
              </button>
            );
          })}
        </nav>
      </Fragment>
    );
  };

  return (
    <WizardMain sx={sx}>
      <Box className={"modalSteps"}>
        <Box className={"wizardSteps"}>{stepsListModal()}</Box>
      </Box>
      <Box>
        <WizardPage
          page={wizardSteps[currentStep]}
          pageChange={pageChange}
          loadingStep={loadingStep}
          forModal={forModal}
          actionButtonsPortalID={actionButtonsPortalID}
        />
      </Box>
    </WizardMain>
  );
};

export default GenericWizard;
