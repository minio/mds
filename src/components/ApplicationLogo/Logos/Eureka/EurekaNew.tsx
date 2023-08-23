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

import React, { FC, SVGProps } from "react";
import LogoBase from "../LogoBase/LogoBase";
import { LogoBaseProps } from "../LogoBase/LogoBase.types";

const EurekaNew: FC<SVGProps<any> & LogoBaseProps> = ({ inverse, onClick }) => {
  return (
    <LogoBase viewBox="0 0 149.6 41.2" inverse={inverse} onClick={onClick}>
      <g>
        <path
          className={"minioApplicationName"}
          d="M45.9,30.5c0,7.1-4.5,10.7-11,10.7s-11-3.6-11-10.7V15.1H29v15.1c0,4.2,2.4,6,5.9,6
		s5.9-1.8,5.9-6V15.1h5.1L45.9,30.5z"
        />
        <path
          className={"minioApplicationName"}
          d="M93.4,36v4.7H74.7V15.1h18.6v4.7H79.7v5.7h13v4.7h-13V36H93.4z"
        />
        <path
          className={"minioApplicationName"}
          d="M61.3,15.1c6.1,0,9.4,2.9,9.4,7.8c0,4.2-2.9,7.1-7.8,7.5l7.9,10.2h-6.2l-7.5-10.2h-1.5v10.2
		h-5.1V15.1H61.3z M55.6,19.8v6.3h5.6c2.8,0,4.2-1,4.2-3.2c0-2.1-1.5-3.1-4.2-3.1H55.6z"
        />
        <path
          className={"minioApplicationName"}
          d="M106.3,30.2h-2.4v10.5h-5.1V15.1h5.1v10.4h2.4l8.5-10.4h6.4l-10.7,12.5L122,40.7h-6.6
		L106.3,30.2z"
        />
        <path
          className={"minioApplicationName"}
          d="M149.6,40.7h-5.4l-2.2-6H131l-2.2,6h-5.3l10-25.6h6.2L149.6,40.7z M132.8,30.1h7.4l-3.7-9.9
		L132.8,30.1z"
        />
      </g>
      <g>
        <path
          className={"minioSection"}
          d="M11.7,0.2L6.5,3.4c-0.1,0-0.2,0-0.2,0L1.1,0.2C1,0.2,0.8,0.1,0.7,0.1h0C0.3,0.1,0,0.5,0,0.8
		c0,0,0,0,0,0v6.8h2.5V4.4c0-0.1,0.1-0.3,0.3-0.3c0,0,0.1,0,0.1,0L5.8,6c0.3,0.2,0.6,0.2,0.9,0l3.1-1.8c0.1-0.1,0.3,0,0.3,0.1
		c0,0,0,0.1,0,0.1v3.3h2.5V0.8c0-0.4-0.3-0.7-0.7-0.7c0,0,0,0,0,0h0C11.9,0.1,11.8,0.2,11.7,0.2"
        />
        <rect
          x="14.8"
          y="0.1"
          className={"minioSection"}
          width="2.5"
          height="7.5"
        />
        <path
          className={"minioSection"}
          d="M30,0.1h-2.6v3.4c0,0.1-0.1,0.3-0.3,0.3c0,0-0.1,0-0.1,0l-6.7-3.6c-0.1-0.1-0.2-0.1-0.3-0.1
		l0,0c-0.4,0-0.7,0.3-0.7,0.7v6.8h2.6V4.2C21.9,4.1,22,4,22.1,4c0,0,0.1,0,0.1,0L29,7.6c0.3,0.2,0.8,0.1,1-0.3C30,7.2,30,7.1,30,6.9
		L30,0.1z"
        />
        <rect
          x="32"
          y="0.1"
          className={"minioSection"}
          width="1.2"
          height="7.5"
        />
        <path
          className={"minioSection"}
          d="M40.1,7.8c-3.2,0-5.4-1.5-5.4-3.9S37,0,40.1,0s5.4,1.5,5.4,3.9S43.3,7.8,40.1,7.8 M40.1,1
		C37.8,1,36,2,36,3.9s1.8,2.9,4.2,2.9s4.2-1,4.2-2.9S42.5,1,40.1,1L40.1,1z"
        />

        <rect
          className={"minioApplicationName"}
          y="15"
          width="19.1"
          height="5"
        />
        <rect
          className={"minioApplicationName"}
          y="25.5"
          width="12.8"
          height="5"
        />
        <rect
          className={"minioApplicationName"}
          y="36.1"
          width="19.1"
          height="5"
        />
      </g>
    </LogoBase>
  );
};

export default EurekaNew;
