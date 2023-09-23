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

const Monitor: FC<SVGProps<any> & LogoBaseProps> = ({ inverse, onClick }) => {
  return (
    <LogoBase viewBox="0 0 167.8 51" inverse={inverse} onClick={onClick}>
      <g>
        <path
          className={"minioApplicationName"}
          d="M1.4,24.1h3.8l9,22h0.3l9-22h3.8v26.5h-3V30.5h-0.3l-8.3,20.1H13L4.7,30.5H4.5v20.1h-3V24.1z"
        />
        <path
          className={"minioApplicationName"}
          d="M56.2,37.4c0,2.8-0.5,5.2-1.5,7.2c-1,2-2.4,3.6-4.2,4.7c-1.8,1.1-3.8,1.7-6,1.7c-2.3,0-4.3-0.6-6-1.7
		c-1.8-1.1-3.1-2.7-4.2-4.7c-1-2-1.5-4.5-1.5-7.2c0-2.8,0.5-5.2,1.5-7.2c1-2,2.4-3.6,4.2-4.7c1.8-1.1,3.8-1.7,6-1.7
		c2.3,0,4.3,0.6,6,1.7c1.8,1.1,3.1,2.7,4.2,4.7C55.7,32.2,56.2,34.6,56.2,37.4z M53.1,37.4c0-2.3-0.4-4.2-1.1-5.8
		c-0.8-1.6-1.8-2.8-3.1-3.6c-1.3-0.8-2.8-1.2-4.4-1.2s-3.1,0.4-4.4,1.2c-1.3,0.8-2.3,2-3.1,3.6c-0.8,1.6-1.1,3.5-1.1,5.8
		s0.4,4.2,1.1,5.8c0.8,1.6,1.8,2.8,3.1,3.6c1.3,0.8,2.8,1.2,4.4,1.2s3.1-0.4,4.4-1.2c1.3-0.8,2.3-2,3.1-3.6
		C52.7,41.6,53.1,39.7,53.1,37.4z"
        />
        <path
          className={"minioApplicationName"}
          d="M82.6,24.1v26.5h-3.1L65.1,29.8h-0.3v20.8h-3.2V24.1h3.1L79.2,45h0.3V24.1H82.6z"
        />
        <path
          className={"minioApplicationName"}
          d="M92.3,24.1v26.5h-3.2V24.1H92.3z"
        />
        <path
          className={"minioApplicationName"}
          d="M97.2,27v-2.8h19.9V27h-8.3v23.7h-3.2V27H97.2z"
        />
        <path
          className={"minioApplicationName"}
          d="M143.4,37.4c0,2.8-0.5,5.2-1.5,7.2c-1,2-2.4,3.6-4.2,4.7c-1.8,1.1-3.8,1.7-6,1.7c-2.3,0-4.3-0.6-6-1.7
		c-1.8-1.1-3.1-2.7-4.2-4.7c-1-2-1.5-4.5-1.5-7.2c0-2.8,0.5-5.2,1.5-7.2c1-2,2.4-3.6,4.2-4.7c1.8-1.1,3.8-1.7,6-1.7
		c2.3,0,4.3,0.6,6,1.7c1.8,1.1,3.1,2.7,4.2,4.7C142.9,32.2,143.4,34.6,143.4,37.4z M140.3,37.4c0-2.3-0.4-4.2-1.1-5.8
		c-0.8-1.6-1.8-2.8-3.1-3.6c-1.3-0.8-2.8-1.2-4.4-1.2c-1.6,0-3.1,0.4-4.4,1.2s-2.3,2-3.1,3.6c-0.8,1.6-1.1,3.5-1.1,5.8
		s0.4,4.2,1.1,5.8c0.8,1.6,1.8,2.8,3.1,3.6c1.3,0.8,2.8,1.2,4.4,1.2c1.6,0,3.1-0.4,4.4-1.2c1.3-0.8,2.3-2,3.1-3.6
		C139.9,41.6,140.3,39.7,140.3,37.4z"
        />
        <path
          className={"minioApplicationName"}
          d="M148.8,50.6V24.1h9c2.1,0,3.8,0.4,5.1,1.1c1.3,0.7,2.3,1.7,3,2.9c0.6,1.2,1,2.6,1,4.2s-0.3,2.9-1,4.2
		c-0.6,1.2-1.6,2.2-2.9,2.8c-1.3,0.7-3,1-5.1,1h-7.2v-2.9h7.1c1.4,0,2.6-0.2,3.4-0.6c0.9-0.4,1.5-1,1.9-1.8c0.4-0.8,0.6-1.7,0.6-2.7
		c0-1.1-0.2-2-0.6-2.8c-0.4-0.8-1-1.4-1.9-1.8c-0.9-0.4-2-0.7-3.5-0.7H152v23.7L148.8,50.6L148.8,50.6z M161.2,38.7l6.5,11.9H164
		l-6.4-11.9H161.2z"
        />
        <rect
          x="22.2"
          y="0.2"
          className={"minioSection"}
          width="3.8"
          height="11.3"
        />
        <path
          className={"minioSection"}
          d="M17.6,0.4L9.8,5.1c-0.1,0.1-0.3,0.1-0.4,0L1.6,0.4C1.5,0.3,1.3,0.2,1.1,0.2h0C0.5,0.2,0,0.7,0,1.3v10.2h3.8
		V6.6c0-0.3,0.3-0.5,0.6-0.3L8.8,9c0.4,0.3,1,0.3,1.4,0l4.6-2.7c0.3-0.2,0.6,0,0.6,0.3v4.9h3.8V1.3c0-0.6-0.5-1.1-1.1-1.1h0
		C18,0.2,17.8,0.3,17.6,0.4L17.6,0.4z"
        />
        <path
          className={"minioSection"}
          d="M45.3,0.2h-3.9v5.2c0,0.3-0.3,0.5-0.6,0.3L30.7,0.4c-0.2-0.1-0.3-0.1-0.5-0.1h0c-0.6,0-1.1,0.5-1.1,1.1v10.2
		H33V6.4c0-0.3,0.3-0.5,0.6-0.3l10.1,5.4c0.2,0.1,0.3,0.1,0.5,0.1l0,0c0.6,0,1.1-0.5,1.1-1.1L45.3,0.2L45.3,0.2L45.3,0.2z"
        />
        <path
          className={"minioSection"}
          d="M48.4,11.5V0.2h1.8v11.3L48.4,11.5L48.4,11.5z"
        />
        <path
          className={"minioSection"}
          d="M60.5,11.8c-4.8,0-8.1-2.3-8.1-5.9c0-3.6,3.4-5.9,8.1-5.9c4.7,0,8.2,2.3,8.2,5.9S65.3,11.8,60.5,11.8z
		 M60.5,1.5c-3.5,0-6.3,1.5-6.3,4.4c0,2.8,2.7,4.4,6.3,4.4c3.5,0,6.3-1.5,6.3-4.4C66.7,3,64,1.5,60.5,1.5L60.5,1.5z"
        />
      </g>
    </LogoBase>
  );
};

export default Monitor;
