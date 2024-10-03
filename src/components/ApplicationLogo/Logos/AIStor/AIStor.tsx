// This file is part of MinIO Design System
// Copyright (c) 2024 MinIO, Inc.
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

const AIStor: FC<SVGProps<any> & LogoBaseProps> = ({ inverse, onClick }) => {
  return (
    <LogoBase viewBox="0 0 397.3 51" inverse={inverse} onClick={onClick}>
      <g>
        <path
          className={"minioSection"}
          d="M102.5,11.5V4.2c0-1.7,1.4-3.2,3.2-3.2h17.7c3.5,0,4.4,4.8,1.2,6.1l-17.7,7.3
		C104.8,15.3,102.5,13.8,102.5,11.5"
        />
        <path
          className={"minioApplicationName"}
          d="M58.9,49.8h16.2L49,1.3H28.6L2.1,49.8h19.5l22.6-9.4c3.1-1.3,2.2-5.8-1.2-5.8H25.8l13-25.6
		C38.7,8.8,58.9,49.8,58.9,49.8z"
        />
        <path
          className={"minioApplicationName"}
          d="M185.7,6.6l-4.5,9.4c-7-3.7-16.2-5.6-24.4-5.6c-8.2,0-12.8,1.5-12.8,4.3c0,3.2,5.9,4.1,17.5,5
		c16.1,1.2,26.3,4.8,26.3,14.5s-11.4,16.5-30.1,16.5c-13,0-23-3.2-29.7-8.8l6.9-8.2c5.2,4.4,14.8,6.8,24,6.8s14.5-2.1,14.5-5.2
		c0-3.5-6.4-4.4-18.9-5.4c-13.6-1-24.8-4.5-24.8-14.2c0-8.9,10.4-15.5,28.3-15.5C168.1,0.3,177.9,2.2,185.7,6.6"
        />
        <polygon
          className={"minioApplicationName"}
          points="215.6,49.8 215.6,11.3 191.4,11.3 191.4,1.2 253.5,1.2 253.5,11.3 229.3,11.3 229.3,49.8 	"
        />
        <path
          className={"minioApplicationName"}
          d="M326.8,25.4c0,15.3-14.4,25.3-35.6,25.3s-35.5-10-35.5-25.3s14.6-25.2,35.5-25.2S326.8,9.8,326.8,25.4
		 M270.3,25.3c0,9.4,8.5,15.4,20.9,15.4s20.7-6,20.7-15.4c0-10.2-8.4-14.9-20.7-14.9S270.3,15.1,270.3,25.3"
        />
        <path
          className={"minioApplicationName"}
          d="M395.2,49.8l-20.6-18.2c11.9,0,19.5-7.3,19.5-15.1c0-8.6-7.9-15.2-25.9-15.2h-31.9v48.5h13.8V11.1h16.1
		c8.8,0,13.2,1.9,13.2,6.4s-3.4,7.1-12.5,7.1h-7.9c-1.8,0-3,0.4-3.5,1.7c-0.4,1.1-0.1,2.2,1.9,4.3L376,49.8L395.2,49.8L395.2,49.8z"
        />
        <rect
          x="80.6"
          y="1.2"
          className={"minioApplicationName"}
          width="13.8"
          height="48.4"
        />
      </g>
    </LogoBase>
  );
};

export default AIStor;
