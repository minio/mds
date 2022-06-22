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
  border-radius: 3px;
  cursor: pointer;
  width: ${(props) => (props.fullWidth ? "100%" : "initial")};
  height: 39px;
  font-family: "Lato", sans-serif;
  font-weight: bold;
  font-size: 14px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 0 6px;
  padding: ${(props) =>
    !props.label || props.label.trim() === "" ? "0 14px" : "0 25px"};
  transition: all 0.2s linear;
  background-color: ${({ theme, ...restProps }) =>
    get(
      theme,
      `buttons.${
        restProps.variant ? restProps.variant : "regular"
      }.enabled.background`,
      "#fff"
    )};
  border: ${({ theme, ...restProps }) =>
      get(
        theme,
        `buttons.${
          restProps.variant ? restProps.variant : "regular"
        }.enabled.border`,
        "#000"
      )}
    1px solid;
  color: ${({ theme, ...restProps }) =>
    get(
      theme,
      `buttons.${
        restProps.variant ? restProps.variant : "regular"
      }.enabled.text`,
      "#000"
    )};
  & .buttonIcon {
    ${(props) =>
      !props.label || props.label.trim() === ""
        ? `
        margin-right: 0;
        margin-left: 0;
    `
        : `
        margin-right: ${props.iconLocation === "end" ? "0" : "10px"};
        margin-left: ${props.iconLocation === "start" ? "0" : "10px"};
    `}

    display: block;
    height: 14px;

    & > svg {
      fill: ${({ theme, ...restProps }) =>
        get(
          theme,
          `buttons.${
            restProps.variant ? restProps.variant : "regular"
          }.enabled.text`,
          "#000"
        )};
      color: ${({ theme, ...restProps }) =>
        get(
          theme,
          `buttons.${
            restProps.variant ? restProps.variant : "regular"
          }.enabled.text`,
          "#000"
        )};
      width: 14px;
      height: 14px;
    }
  }
  &:disabled {
    cursor: not-allowed;
    background-color: ${({ theme, ...restProps }) =>
      get(
        theme,
        `buttons.${
          restProps.variant ? restProps.variant : "regular"
        }.disabled.background`,
        "#fff"
      )};
    border: ${({ theme, ...restProps }) =>
        get(
          theme,
          `buttons.${
            restProps.variant ? restProps.variant : "regular"
          }.disabled.border`,
          "#000"
        )}
      1px solid;
    color: ${({ theme, ...restProps }) =>
      get(
        theme,
        `buttons.${
          restProps.variant ? restProps.variant : "regular"
        }.disabled.text`,
        "#000"
      )};
    & .buttonIcon > svg {
      fill: ${({ theme, ...restProps }) =>
        get(
          theme,
          `buttons.${
            restProps.variant ? restProps.variant : "regular"
          }.disabled.text`,
          "#000"
        )};
      color: ${({ theme, ...restProps }) =>
        get(
          theme,
          `buttons.${
            restProps.variant ? restProps.variant : "regular"
          }.disabled.text`,
          "#000"
        )};
    }
  }
  &:hover:not(:disabled) {
    background-color: ${({ theme, ...restProps }) =>
      get(
        theme,
        `buttons.${
          restProps.variant ? restProps.variant : "regular"
        }.hover.background`,
        "#fff"
      )};
    border: ${({ theme, ...restProps }) =>
        get(
          theme,
          `buttons.${
            restProps.variant ? restProps.variant : "regular"
          }.hover.border`,
          "#000"
        )}
      1px solid;
    color: ${({ theme, ...restProps }) =>
      get(
        theme,
        `buttons.${
          restProps.variant ? restProps.variant : "regular"
        }.hover.text`,
        "#000"
      )};
    & .buttonIcon > svg {
      fill: ${({ theme, ...restProps }) =>
        get(
          theme,
          `buttons.${
            restProps.variant ? restProps.variant : "regular"
          }.hover.text`,
          "#000"
        )};
      color: ${({ theme, ...restProps }) =>
        get(
          theme,
          `buttons.${
            restProps.variant ? restProps.variant : "regular"
          }.hover.text`,
          "#000"
        )};
    }
  }
  &:active:not(:disabled) {
    background-color: ${({ theme, ...restProps }) =>
      get(
        theme,
        `buttons.${
          restProps.variant ? restProps.variant : "regular"
        }.pressed.background`,
        "#fff"
      )};
    border: ${({ theme, ...restProps }) =>
        get(
          theme,
          `buttons.${
            restProps.variant ? restProps.variant : "regular"
          }.pressed.border`,
          "#000"
        )}
      1px solid;
    color: ${({ theme, ...restProps }) =>
      get(
        theme,
        `buttons.${
          restProps.variant ? restProps.variant : "regular"
        }.pressed.text`,
        "#000"
      )};
    & .buttonIcon > svg {
      fill: ${({ theme, ...restProps }) =>
        get(
          theme,
          `buttons.${
            restProps.variant ? restProps.variant : "regular"
          }.pressed.text`,
          "#000"
        )};
      color: ${({ theme, ...restProps }) =>
        get(
          theme,
          `buttons.${
            restProps.variant ? restProps.variant : "regular"
          }.pressed.text`,
          "#000"
        )};
    }
  }
`;

const Button: FC<ButtonProps> = ({
  label,
  variant = "regular",
  icon,
  iconLocation = "end",
  onClick,
  disabled,
  fullWidth,
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
      {...props}
    >
      {icon && iconLocation === "start" && iconToPlace}
      {label}
      {icon && iconLocation === "end" && iconToPlace}
    </CustomButton>
  );
};

export default Button;
