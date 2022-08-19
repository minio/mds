// This file is part of MinIO Design System
// Copyright (c) 2022 MinIO, Inc.
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

import React, { FC } from "react";
import get from "lodash/get";
import styled from "styled-components";
import { ButtonProps } from "./Button.types";

const CustomButton = styled.button<ButtonProps>`
  ${({
    theme,
    fullWidth,
    variant,
    iconLocation,
    icon,
    label,
    collapseOnSmall,
  }) => {
    const neatVariant = variant || "regular";

    return `
  border-radius: 3px;
  cursor: pointer;
  width: ${fullWidth ? "100%" : "initial"};
  height: 39px;
  font-family: "Lato", sans-serif;
  font-weight: bold;
  font-size: 14px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: ${!label || label.trim() === "" ? "0 14px" : "0 25px"};
  transition: all 0.2s linear;
    background-color: ${get(
      theme,
      `buttons.${neatVariant}.enabled.background`,
      "#fff"
    )};

  border: ${get(theme, `buttons.${neatVariant}.enabled.border`, "#000")}
    1px solid;
  color: ${get(theme, `buttons.${neatVariant}.enabled.text`, "#000")};
  & .button-label {
    ${
      !label || !icon
        ? `
        margin-right: 0;
        margin-left: 0;
    `
        : `
        margin-left: ${iconLocation === "end" ? "0" : "10px"};
        margin-right: ${iconLocation === "start" ? "0" : "10px"};
    `
    }
  }
  & .buttonIcon {
    display: block;
    height: 14px;

    & > svg {
      fill: ${get(theme, `buttons.${neatVariant}.enabled.text`, "#000")};
      color: ${get(theme, `buttons.${neatVariant}.enabled.text`, "#000")};
      width: 14px;
      height: 14px;
    }
  }
  &:disabled {
    cursor: not-allowed;
    background-color: ${get(
      theme,
      `buttons.${neatVariant}.disabled.background`,
      "#fff"
    )};
    border: ${get(theme, `buttons.${neatVariant}.disabled.border`, "#000")}
      1px solid;
    color: ${get(theme, `buttons.${neatVariant}.disabled.text`, "#000")};
    & .buttonIcon > svg {
      fill: ${get(theme, `buttons.${neatVariant}.disabled.text`, "#000")};
      color: ${get(theme, `buttons.${neatVariant}.disabled.text`, "#000")};
    }
  }
  &:hover:not(:disabled) {
    background-color: ${get(
      theme,
      `buttons.${neatVariant}.hover.background`,
      "#fff"
    )};
    border: ${get(theme, `buttons.${neatVariant}.hover.border`, "#000")}
      1px solid;
    color: ${get(theme, `buttons.${neatVariant}.hover.text`, "#000")};
    & .buttonIcon > svg {
      fill: ${get(theme, `buttons.${neatVariant}.hover.text`, "#000")};
      color: ${get(theme, `buttons.${neatVariant}.hover.text`, "#000")};
    }
  }
  &:active:not(:disabled) {
    background-color: ${get(
      theme,
      `buttons.${neatVariant}.pressed.background`,
      "#fff"
    )};
    border: ${get(theme, `buttons.${neatVariant}.pressed.border`, "#000")}
      1px solid;
    color: ${get(theme, `buttons.${neatVariant}.pressed.text`, "#000")};
    & .buttonIcon > svg {
      fill: ${get(theme, `buttons.${neatVariant}.pressed.text`, "#000")};
      color: ${get(theme, `buttons.${neatVariant}.pressed.text`, "#000")};
    }
  }

  ${
    collapseOnSmall && icon && label && label.trim() !== ""
      ? `
    @media (max-width: 768px) {
    padding: 0 14px;
    & .button-label {
      display: none;
    }
  }
    `
      : ""
  }
 `;
  }}
`;

const Button: FC<ButtonProps> = ({
  label,
  variant = "regular",
  icon,
  iconLocation = "end",
  onClick,
  disabled,
  fullWidth,
  collapseOnSmall = true,
  ...props
}) => {
  let iconToPlace: React.ReactNode = null;

  if (icon) {
    iconToPlace = <span className={"buttonIcon"}>{icon}</span>;
  }

  return (
    <CustomButton
      onClick={onClick}
      disabled={disabled}
      variant={variant}
      iconLocation={iconLocation}
      label={label}
      fullWidth={fullWidth}
      collapseOnSmall={collapseOnSmall}
      icon={iconToPlace}
      {...props}
    >
      {icon && iconLocation === "start" && iconToPlace}
      <span className={"button-label"}>{label}</span>
      {icon && iconLocation === "end" && iconToPlace}
    </CustomButton>
  );
};

export default Button;
