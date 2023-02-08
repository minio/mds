export interface ApplicationLogoProps {
  applicationName:
    | "console"
    | "operator"
    | "directpv"
    | "kes"
    | "subnet"
    | "subnetops";
  subVariant?: "simple" | "AGPL" | "standard" | "enterprise";
  inverse?: boolean;
}
