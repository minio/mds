import React from "react";
export interface ApplicationLogoProps {
  applicationName:
    | "console"
    | "operator"
    | "directpv"
    | "kes"
    | "subnet"
    | "subnetops"
    | "cloud"
    | "releases"
    | "vmbroker"
    | "eureka";
  subVariant?: "simple" | "AGPL" | "standard" | "enterprise" | "new";
  inverse?: boolean;
  onClick?: React.MouseEventHandler<any> | undefined;
}
