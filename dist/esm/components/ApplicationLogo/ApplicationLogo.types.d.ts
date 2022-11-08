export interface ApplicationLogoProps {
  applicationName: "console" | "operator" | "directpv" | "kes" | "subnet";
  subVariant?: "simple" | "AGPL" | "standard" | "enterprise";
  inverse?: boolean;
}
