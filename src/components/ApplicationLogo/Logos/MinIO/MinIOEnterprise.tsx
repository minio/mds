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

const MinIOEnterprise: FC<SVGProps<any> & LogoBaseProps> = ({
  inverse,
  onClick,
}) => {
  return (
    <LogoBase viewBox="0 0 174.3 51" inverse={inverse} onClick={onClick}>
      <g transform="translate(5485.708 23935.906)">
        <g transform="translate(-5507 -23935.906)">
          <g transform="translate(21.291 0)">
            <g transform="translate(0 5.05)">
              <rect
                x="56.7"
                y="-4.4"
                className={"minioSection"}
                width="9.7"
                height="28.7"
              />
              <path
                className={"minioSection"}
                d="M45-4L25.3,8c-0.3,0.2-0.6,0.2-0.9,0L4.6-4C4.2-4.3,3.7-4.4,3.2-4.4h0c-1.5,0-2.7,1.2-2.7,2.7v25.9h9.7
					V11.9c0-0.5,0.4-1,1-1c0.2,0,0.4,0,0.5,0.1l11,6.8c1.1,0.7,2.5,0.7,3.6,0L37.9,11c0.5-0.3,1.1-0.1,1.3,0.3
					c0.1,0.1,0.1,0.3,0.1,0.5v12.4h9.7V-1.7c0-1.5-1.2-2.7-2.7-2.7c0,0,0,0,0,0h0C45.9-4.4,45.4-4.3,45-4z"
              />
              <path
                className={"minioSection"}
                d="M114.9-4.4H105v13c0,0.5-0.4,1-1,1c-0.2,0-0.3,0-0.5-0.1L78.1-4.1c-0.4-0.2-0.8-0.3-1.3-0.3h0
					c-1.5,0-2.7,1.2-2.7,2.7v25.9h9.8v-13c0-0.5,0.4-1,1-1c0.2,0,0.3,0,0.5,0.1l25.6,13.6c0.4,0.2,0.8,0.3,1.3,0.3l0,0
					c1.5,0,2.7-1.2,2.7-2.7L114.9-4.4z"
              />
            </g>
            <path
              className={"minioSection"}
              d="M122.5,29.3V0.7h4.5v28.7H122.5z"
            />
            <path
              className={"minioSection"}
              d="M153.2,29.8c-12,0-20.5-5.7-20.5-14.8c0-9.1,8.6-14.8,20.5-14.8c12,0,20.6,5.7,20.6,14.8
				C173.8,24.1,165.4,29.8,153.2,29.8z M153.2,4c-8.9,0-15.8,3.9-15.8,11c0,7.2,6.9,11,15.8,11c8.9,0,15.9-3.9,15.9-11
				C169.1,7.9,162.2,4,153.2,4L153.2,4z"
            />
          </g>
          <path
            className={"minioApplicationName"}
            d="M33.3,48.2h-9v-4.4h8.5v-2.4h-8.5v-4.3h8.8v-2.4H21.8v15.8h11.5V48.2z M54,34.8h-2.5v11.4l-8.8-11.4h-2.3v15.8h2.5l0-11.4
			l8.8,11.4H54V34.8z M72.5,34.8H59.8v2.4h5.1v13.4h2.5V37.2h5.1L72.5,34.8z M89.8,48.2h-9v-4.4h8.5v-2.4h-8.5v-4.3h8.8v-2.4H78.2
			v15.8h11.5V48.2z M96.8,34.8v15.8h2.5v-6.6h1.3l5,6.6h3.2l-5.2-6.6c3.2-0.1,5.3-1.9,5.3-4.6c0-2.9-2-4.6-5.6-4.6L96.8,34.8z
			 M103.2,37.2c2,0,3,0.7,3,2.2c0,1.5-1,2.3-3,2.3h-3.9v-4.4H103.2z M121.5,44.4c3.6,0,5.6-1.8,5.6-4.8s-2-4.8-5.6-4.8h-6.1v15.8
			h2.5v-6.2H121.5z M121.5,37.2c2.1,0,3,0.8,3,2.4s-0.9,2.4-3,2.4H118v-4.8H121.5z M133.5,34.8v15.8h2.5v-6.6h1.3l5,6.6h3.2
			l-5.2-6.6c3.2-0.1,5.3-1.9,5.3-4.6c0-2.9-2-4.6-5.6-4.6H133.5z M139.9,37.2c2,0,3,0.7,3,2.2c0,1.5-1,2.3-3,2.3H136v-4.4
			L139.9,37.2z M154.7,34.8h-2.5v15.8h2.5V34.8z M173.8,36.2c-1.6-1.1-3.4-1.7-5.7-1.7c-3.4,0-6.2,1.8-6.2,4.9c0,2.9,2.3,4,4.7,4.4
			l1.2,0.2c2.3,0.3,3.6,0.9,3.6,2.1c0,1.5-1.6,2.3-3.7,2.3c-1.8,0-3.9-0.7-5-1.7l-1.4,2c1.6,1.4,4.2,2.1,6.3,2.1
			c3.4,0,6.3-1.8,6.3-5c0-2.9-2.5-4-5.1-4.3l-1.1-0.1c-2.1-0.3-3.3-0.8-3.3-2.1c0-1.4,1.4-2.4,3.6-2.4c1.6,0,3.1,0.5,4.4,1.4
			L173.8,36.2z M192,48.2h-9v-4.4h8.5v-2.4h-8.5v-4.3h8.8v-2.4h-11.4v15.8H192V48.2z"
          />
        </g>
      </g>
    </LogoBase>
  );
};

export default MinIOEnterprise;
