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
import styled from "styled-components";
import get from "lodash/get";
import WizardPage from "./WizardPage";
import Grid from "../Grid/Grid";
import { WizardConstruct, WizardProps } from "./Wizard.types";
import { lightColors } from "../../global/themes";

const WizardMain = styled.div<WizardConstruct>(({ theme, sx, forModal }) => ({
  position: forModal ? "relative" : "initial",
  display: "flex",
  flexDirection: forModal ? "column" : "row",
  "& .modalWizardSteps": {
    padding: 5,
    borderBottom: `1px solid ${get(
      theme,
      "borderColor",
      lightColors.borderColor,
    )}`,
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
      color: get(theme, "fontColor", lightColors.defaultFontColor),
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
      color: get(
        theme,
        "wizard.modal.stepLabelColor",
        lightColors.defaultFontColor,
      ),
      "&:not(:disabled):hover": {
        textDecoration: "underline",
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
          lightColors.mutedText,
        ),
      },
      "&.selected": {
        fontWeight: "bold",
        color: get(
          theme,
          "wizard.modal.selectedStepLabelColor",
          lightColors.defaultFontColor,
        ),
      },
    },
  },
  "& .verticalSteps": {
    borderRight: `1px solid ${get(
      theme,
      "borderColor",
      lightColors.borderColor,
    )}`,
    backgroundColor: get(
      theme,
      "wizard.stepsBackground",
      lightColors.boxBackground,
    ),
  },
  "& .verticalStepsContainer": {
    paddingTop: 0,
    "& .stepItem": {
      cursor: "pointer",
      width: "100%",
      minHeight: 50,
      border: 0,
      backgroundColor: "transparent",
      userSelect: "none",
      borderBottom: `1px solid ${get(
        theme,
        "borderColor",
        lightColors.borderColor,
      )}`,
      textAlign: "left",
      padding: "10px 15px",
      color: get(
        theme,
        "wizard.vertical.stepLabelColor",
        lightColors.defaultFontColor,
      ),
      "&.selected": {
        background: get(
          theme,
          "wizard.vertical.selectedStepBG",
          lightColors.placeholder,
        ),
        fontWeight: "bold",
        color: get(
          theme,
          "wizard.vertical.selectedStepLabelColor",
          lightColors.defaultFontColor,
        ),
      },
      "&:disabled": {
        cursor: "not-allowed",
        color: get(
          theme,
          "wizard.vertical.disabledLabelColor",
          lightColors.defaultFontColor,
        ),
      },
      "&:hover:not(:disabled)": {
        fontWeight: "bold",
      },
    },
  },
  "& .modalStepsContainer": {
    display: "flex",
    justifyContent: "space-evenly",
  },
  ...sx,
}));

const GenericWizard = ({
  wizardSteps,
  loadingStep,
  forModal,
  linearMode = true,
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

  const stepsList = () => {
    return (
      <Fragment>
        <nav className={"wizardNavigation verticalStepsContainer"}>
          {wizardSteps.map((step, index) => {
            return (
              <button
                id={"wizard-step-" + step.label.toLowerCase().replace(" ", "-")}
                onClick={() => pageChange(index)}
                key={`wizard-${index.toString()}`}
                className={`stepItem ${
                  currentStep === index ? "selected" : ""
                }`}
                disabled={linearMode ? index > currentStep : false}
              >
                {step.label}
              </button>
            );
          })}
        </nav>
      </Fragment>
    );
  };
  const stepsListModal = () => {
    return (
      <Fragment>
        <nav className={"wizardNavigation modalStepsContainer"}>
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
                {index + 1}. {step.label}
              </button>
            );
          })}
        </nav>
      </Fragment>
    );
  };

  return (
    <WizardMain forModal={forModal} sx={sx}>
      {forModal ? (
        <Fragment>
          <div className={"modalSteps"}>
            <div className={`stepsLabel stepsModalTitle`}>Steps</div>
            <div className={"modalWizardSteps"}>{stepsListModal()}</div>
          </div>
        </Fragment>
      ) : (
        <Fragment>
          <Grid
            item
            xs={12}
            sm={2}
            md={2}
            lg={2}
            xl={2}
            className={"verticalSteps"}
          >
            {stepsList()}
          </Grid>
        </Fragment>
      )}

      <Grid
        item
        xs={12}
        sm={forModal ? 12 : 10}
        md={forModal ? 12 : 10}
        lg={forModal ? 12 : 10}
        xl={forModal ? 12 : 10}
        className={forModal ? "" : "paddedContentGrid"}
      >
        <WizardPage
          page={wizardSteps[currentStep]}
          pageChange={pageChange}
          loadingStep={loadingStep}
          forModal={forModal}
        />
      </Grid>
    </WizardMain>
  );
};

export default GenericWizard;
