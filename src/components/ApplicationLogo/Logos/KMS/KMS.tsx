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

import React, { FC, SVGProps } from "react";
import LogoBase from "../LogoBase/LogoBase";
import { LogoBaseProps } from "../LogoBase/LogoBase.types";

const KMS: FC<SVGProps<any> & LogoBaseProps> = ({ inverse, onClick }) => {
  return (
    <LogoBase viewBox="0 0 184.538 51" inverse={inverse} onClick={onClick}>
      <g>
        <path
          className={"minioApplicationName"}
          d="M1.4,50.3V24.1h3.2v13h0.3l11.8-13h4.1l-11,11.8l11,14.4H17L7.9,38.1l-3.3,3.7v8.5H1.4z"
        />
        <path
          className={"minioApplicationName"}
          d="M24.9,24.1h3.8l8.9,21.7h0.3l8.9-21.7h3.8v26.2h-3V30.4h-0.3l-8.2,19.9h-2.9l-8.2-19.9h-0.3v19.9h-3
		C24.9,50.3,24.9,24.1,24.9,24.1z"
        />
        <path
          className={"minioApplicationName"}
          d="M71.3,30.6c-0.2-1.3-0.8-2.3-1.9-3c-1.1-0.7-2.4-1.1-4-1.1c-1.2,0-2.2,0.2-3,0.6s-1.5,0.9-2,1.5
		c-0.5,0.7-0.7,1.4-0.7,2.2c0,0.7,0.2,1.3,0.5,1.8c0.3,0.5,0.8,0.9,1.3,1.2c0.5,0.3,1.1,0.6,1.7,0.8c0.6,0.2,1.1,0.4,1.6,0.5
		l2.7,0.7c0.7,0.2,1.4,0.4,2.3,0.7c0.8,0.3,1.6,0.7,2.4,1.3c0.8,0.5,1.4,1.2,1.9,2.1c0.5,0.8,0.8,1.9,0.8,3.1c0,1.4-0.4,2.7-1.1,3.8
		c-0.7,1.1-1.8,2.1-3.2,2.7c-1.4,0.7-3.1,1-5.1,1c-1.9,0-3.5-0.3-4.9-0.9c-1.4-0.6-2.4-1.4-3.2-2.5c-0.8-1.1-1.2-2.3-1.3-3.8h3.3
		c0.1,1,0.4,1.8,1,2.4c0.6,0.6,1.3,1.1,2.2,1.4c0.9,0.3,1.9,0.5,2.9,0.5c1.2,0,2.3-0.2,3.3-0.6c1-0.4,1.7-1,2.3-1.7
		c0.6-0.7,0.8-1.5,0.8-2.5c0-0.9-0.2-1.6-0.7-2.1c-0.5-0.5-1.1-1-1.9-1.3c-0.8-0.3-1.7-0.6-2.6-0.9l-3.2-0.9c-2-0.6-3.7-1.4-4.9-2.5
		c-1.2-1.1-1.8-2.5-1.8-4.3c0-1.5,0.4-2.7,1.2-3.8c0.8-1.1,1.9-1.9,3.2-2.6c1.4-0.6,2.9-0.9,4.5-0.9c1.7,0,3.2,0.3,4.5,0.9
		c1.3,0.6,2.4,1.4,3.1,2.5c0.8,1,1.2,2.2,1.2,3.5L71.3,30.6L71.3,30.6z"
        />
        <rect
          x="22"
          y="0.5"
          className={"minioSection"}
          width="3.8"
          height="11.1"
        />
        <path
          className={"minioSection"}
          d="M17.4,0.6L9.7,5.3c-0.1,0.1-0.2,0.1-0.4,0L1.6,0.6C1.5,0.5,1.3,0.4,1.1,0.4h0C0.5,0.4,0,0.9,0,1.5v10.1h3.8
		V6.8c0-0.3,0.3-0.5,0.6-0.3l4.3,2.6c0.4,0.3,1,0.3,1.4,0l4.6-2.7c0.3-0.1,0.6,0,0.6,0.3v4.8H19V1.5c0-0.6-0.5-1.1-1.1-1.1h0
		C17.8,0.4,17.6,0.5,17.4,0.6L17.4,0.6z"
        />
        <path
          className={"minioSection"}
          d="M44.7,0.5h-3.9v5.1c0,0.3-0.3,0.5-0.6,0.3l-10-5.3c-0.2-0.1-0.3-0.1-0.5-0.1h0c-0.6,0-1.1,0.5-1.1,1.1v10.1
		h3.8v-5c0-0.3,0.3-0.5,0.6-0.3l10,5.3c0.2,0.1,0.3,0.1,0.5,0.1l0,0c0.6,0,1.1-0.5,1.1-1.1L44.7,0.5L44.7,0.5L44.7,0.5z"
        />
        <path
          className={"minioSection"}
          d="M47.8,11.6V0.5h1.8v11.1L47.8,11.6L47.8,11.6z"
        />
        <path
          className={"minioSection"}
          d="M59.8,11.9c-4.7,0-8-2.2-8-5.8c0-3.6,3.4-5.8,8-5.8c4.7,0,8.1,2.2,8.1,5.8S64.5,11.9,59.8,11.9z M59.8,1.7
		c-3.5,0-6.2,1.5-6.2,4.3c0,2.8,2.7,4.3,6.2,4.3c3.5,0,6.2-1.5,6.2-4.3C66,3.3,63.3,1.7,59.8,1.7L59.8,1.7z"
        />
      </g>
    </LogoBase>
  );
};

export default KMS;
