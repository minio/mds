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

const IndexLogo: FC<SVGProps<any> & LogoBaseProps> = ({ inverse, onClick }) => {
  return (
    <LogoBase viewBox="0 0 184.538 51" inverse={inverse} onClick={onClick}>
      <g>
        <path
          className={"minioApplicationName"}
          d="M4.7,24.3V51H1.5V24.3C1.5,24.3,4.7,24.3,4.7,24.3z"
        />
        <path
          className={"minioApplicationName"}
          d="M32.3,24.3V51h-3.1L14.7,30h-0.3v21h-3.2V24.3h3.1l14.6,21h0.3v-21C29.2,24.3,32.3,24.3,32.3,24.3z"
        />
        <path
          className={"minioApplicationName"}
          d="M47,51h-8.2V24.3h8.6c2.6,0,4.8,0.5,6.6,1.6c1.8,1.1,3.3,2.6,4.2,4.6c1,2,1.5,4.4,1.5,7.1
		c0,2.8-0.5,5.2-1.5,7.2c-1,2-2.4,3.5-4.3,4.6C52.1,50.5,49.7,51,47,51z M42,48.1h4.8c2.2,0,4-0.4,5.5-1.3c1.5-0.9,2.5-2.1,3.2-3.6
		c0.7-1.6,1.1-3.4,1.1-5.6c0-2.2-0.4-4-1.1-5.6c-0.7-1.6-1.8-2.8-3.2-3.6c-1.4-0.8-3.1-1.3-5.2-1.3H42V48.1L42,48.1z"
        />
        <path
          className={"minioApplicationName"}
          d="M65.2,51V24.3h16.1v2.9H68.4v9h12v2.9h-12v9.1h13.1V51H65.2z"
        />
        <path
          className={"minioApplicationName"}
          d="M88.7,24.3l6.9,11.1h0.2l6.9-11.1h3.8l-8.4,13.4l8.4,13.4h-3.8l-6.9-10.9h-0.2L88.7,51h-3.8l8.6-13.4
		l-8.6-13.4C84.9,24.3,88.7,24.3,88.7,24.3z"
        />
        <rect
          x="22.4"
          y="0.3"
          className={"minioSection"}
          width="3.9"
          height="11.3"
        />
        <path
          className={"minioSection"}
          d="M17.7,0.4L9.9,5.2c-0.1,0.1-0.3,0.1-0.4,0L1.6,0.4C1.5,0.3,1.3,0.2,1.1,0.2h0C0.5,0.2,0,0.7,0,1.3v10.3h3.9
		V6.7c0-0.3,0.3-0.5,0.6-0.3l4.4,2.7c0.4,0.3,1,0.3,1.4,0l4.6-2.7c0.3-0.2,0.6,0,0.6,0.3v4.9h3.9V1.3c0-0.6-0.5-1.1-1.1-1.1h0
		C18.1,0.2,17.9,0.3,17.7,0.4L17.7,0.4z"
        />
        <path
          className={"minioSection"}
          d="M45.6,0.2h-3.9v5.2c0,0.3-0.3,0.5-0.6,0.3L30.9,0.4c-0.2-0.1-0.3-0.1-0.5-0.1h0c-0.6,0-1.1,0.5-1.1,1.1v10.3
		h3.9V6.5c0-0.3,0.3-0.5,0.6-0.3L44,11.5c0.2,0.1,0.3,0.1,0.5,0.1l0,0c0.6,0,1.1-0.5,1.1-1.1L45.6,0.2L45.6,0.2L45.6,0.2z"
        />
        <path
          className={"minioSection"}
          d="M48.7,11.6V0.2h1.8v11.3L48.7,11.6L48.7,11.6z"
        />
        <path
          className={"minioSection"}
          d="M60.9,11.8c-4.8,0-8.2-2.3-8.2-5.9c0-3.6,3.4-5.9,8.2-5.9c4.8,0,8.2,2.3,8.2,5.9S65.8,11.8,60.9,11.8z
		 M60.9,1.5c-3.6,0-6.3,1.6-6.3,4.4c0,2.9,2.7,4.4,6.3,4.4c3.6,0,6.3-1.5,6.3-4.4C67.2,3.1,64.5,1.5,60.9,1.5L60.9,1.5z"
        />
      </g>
    </LogoBase>
  );
};

export default IndexLogo;
