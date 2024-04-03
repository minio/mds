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

import * as React from "react";
import { SVGProps } from "react";

const ImagesIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`min-icon`}
    fill={"currentcolor"}
    viewBox="0 0 256 256"
    {...props}
  >
    <g>
      <g>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M38.4,25.6c-7,0-12.8,5.8-12.8,12.8V64c0,7.1-5.7,12.8-12.8,12.8C5.7,76.8,0,71.1,0,64V38.4
			C0,17.3,17.3,0,38.4,0H64c7.1,0,12.8,5.7,12.8,12.8c0,7.1-5.7,12.8-12.8,12.8H38.4z M179.2,12.8C179.2,5.7,184.9,0,192,0h25.6
			C238.7,0,256,17.3,256,38.4V64c0,7.1-5.7,12.8-12.8,12.8s-12.8-5.7-12.8-12.8V38.4c0-7-5.8-12.8-12.8-12.8H192
			C184.9,25.6,179.2,19.9,179.2,12.8z M12.8,179.2c7.1,0,12.8,5.7,12.8,12.8v25.6c0,7,5.8,12.8,12.8,12.8H64
			c7.1,0,12.8,5.7,12.8,12.8S71.1,256,64,256H38.4C17.3,256,0,238.7,0,217.6V192C0,184.9,5.7,179.2,12.8,179.2z M243.2,179.2
			c7.1,0,12.8,5.7,12.8,12.8v25.6c0,21.1-17.3,38.4-38.4,38.4H192c-7.1,0-12.8-5.7-12.8-12.8s5.7-12.8,12.8-12.8h25.6
			c7,0,12.8-5.8,12.8-12.8V192C230.4,184.9,236.1,179.2,243.2,179.2z"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M51.2,76.8c0-14.1,11.5-25.6,25.6-25.6h64c14.1,0,25.6,11.5,25.6,25.6v38.4c0,14.1-11.5,25.6-25.6,25.6h-64
			c-14.1,0-25.6-11.5-25.6-25.6V76.8z M140.8,76.8h-64v38.4h64V76.8z"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M89.6,140.8c0-14.1,11.5-25.6,25.6-25.6h64c14.1,0,25.6,11.5,25.6,25.6v38.4c0,14.1-11.5,25.6-25.6,25.6h-64
			c-14.1,0-25.6-11.5-25.6-25.6V140.8z M179.2,140.8h-64v38.4h64V140.8z"
        />
      </g>
    </g>
  </svg>
);

export default ImagesIcon;
