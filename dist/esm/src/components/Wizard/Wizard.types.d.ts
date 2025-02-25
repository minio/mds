import React from "react";
import { CSSObject } from "styled-components";
export interface WizardButton {
  label?: string;
  type?: "next" | "back" | "to" | "custom";
  action?: (nextFunction: (to: string | number) => void) => void;
  enabled?: boolean;
  toPage?: number;
  componentRender?: React.ReactNode;
}
export interface WizardElement {
  label: string;
  componentRender: any;
  buttons: WizardButton[];
  advancedOnly?: boolean;
  loadingStep?: boolean;
}
export interface WizardPage {
  page: WizardElement;
  pageChange: (to: string | number) => void;
  loadingStep?: boolean;
}
export interface WizardMain {
  loadingStep?: boolean;
  wizardSteps: WizardElement[];
  linearMode?: boolean;
}
export interface WizardConstruct {
  sx?: CSSObject;
  forModal?: boolean;
}
export type WizardProps = WizardMain & WizardConstruct;
export type WizardPageProps = WizardPage & WizardConstruct;
