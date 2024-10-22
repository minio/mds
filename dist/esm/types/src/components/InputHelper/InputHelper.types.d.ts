import React from "react";
export interface InputHelperProps {
  children: React.ReactNode;
  state?: "normal" | "error" | "warning" | "success";
}
