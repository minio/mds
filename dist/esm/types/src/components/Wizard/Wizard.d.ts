import React from "react";
import { WizardProps } from "./Wizard.types";
declare const GenericWizard: ({
  wizardSteps,
  loadingStep,
  forModal,
  linearMode,
  actionButtonsPortalID,
  sx,
}: WizardProps) => React.JSX.Element | null;
export default GenericWizard;
