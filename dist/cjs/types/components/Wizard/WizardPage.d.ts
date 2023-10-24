import React from "react";
import { WizardPageProps } from "./Wizard.types";
declare const WizardPage: ({
  page,
  pageChange,
  loadingStep,
  forModal,
}: WizardPageProps) => React.JSX.Element;
export default WizardPage;
