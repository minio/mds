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

import React, { Fragment, useMemo, useState } from "react";
import { css, useTheme } from "@emotion/react";

import { overridePropsParse } from "../../global/utils";
import Box from "../Box";
import { wizardMainStyles } from "./Wizard.styles";
import { WizardProps } from "./Wizard.types";
import WizardPage from "./WizardPage";

const GenericWizard = ({
  wizardSteps,
  loadingStep,
  forModal,
  linearMode = true,
  actionButtonsPortalID,
  sx,
}: WizardProps) => {
  const theme = useTheme();

  const wizardStyles = wizardMainStyles(theme);

  const overrideThemes = useMemo(() => {
    if (sx) {
      return css({ ...overridePropsParse(sx, theme) });
    }

    return {};
  }, [sx, theme]);

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
                type={"button"}
                key={`wizard-step-${index}`}
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
    <div css={[wizardStyles, overrideThemes]}>
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
    </div>
  );
};

export default GenericWizard;
