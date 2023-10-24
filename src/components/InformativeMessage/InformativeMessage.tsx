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

import React, { FC } from "react";
import styled from "styled-components";
import {
  InformativeConstructProps,
  InformativeMessageProps,
} from "./InformativeMessage.types";
import get from "lodash/get";
import { lightColors } from "../../global/themes";

const InformativeMessageMain = styled.div<InformativeConstructProps>(
  ({ theme, sx, variant }) => ({
    backgroundColor: get(
      theme,
      `informativeMessage.${variant}.backgroundColor`,
      lightColors.mainBlue,
    ),
    border: `1px solid ${get(
      theme,
      `informativeMessage.${variant}.borderColor`,
      lightColors.mainBlue,
    )}`,
    borderRadius: 3,
    padding: "10px 20px",
    "& .labelHeadline": {
      color: get(
        theme,
        `informativeMessage.${variant}.textColor`,
        lightColors.white,
      ),
      fontSize: 14,
      fontWeight: "bold",
      marginBottom: 10,
    },
    "& .messageText": {
      color: get(
        theme,
        `informativeMessage.${variant}.textColor`,
        lightColors.white,
      ),
      fontSize: 14,
    },
    ...sx,
  }),
);

const InformativeMessage: FC<InformativeMessageProps> = ({
  title,
  message,
  sx,
  variant = "default",
  ...props
}) => {
  return (
    <InformativeMessageMain
      sx={sx}
      variant={variant}
      className={`informative-message`}
    >
      <div className={"labelHeadline"}>{title}</div>
      <div className={"messageText"}>{message}</div>
    </InformativeMessageMain>
  );
};

export default InformativeMessage;
