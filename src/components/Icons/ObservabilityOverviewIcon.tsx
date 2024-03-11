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

const ObservabilityOverviewIcon = (props: SVGProps<SVGSVGElement>) => (
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
          d="M38.4,25.6c-7.1,0-12.8,5.7-12.8,12.8v179.2c0,7.1,5.7,12.8,12.8,12.8h179.2c7.1,0,12.8-5.7,12.8-12.8V38.4
			c0-7.1-5.7-12.8-12.8-12.8H38.4z M0,38.4C0,17.2,17.2,0,38.4,0h179.2C238.8,0,256,17.2,256,38.4v179.2c0,21.2-17.2,38.4-38.4,38.4
			H38.4C17.2,256,0,238.8,0,217.6V38.4z"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M116.3,51.1c5.7,0.5,10.3,4.7,11.4,10.3l17.2,86l9.6-24.1c1.9-4.9,6.7-8.1,11.9-8.1h25.7
			c7.1,0,12.8,5.7,12.8,12.8s-5.7,12.8-12.8,12.8h-17l-22.4,56.1c-2.1,5.3-7.4,8.5-13.1,8s-10.3-4.7-11.4-10.3l-17.2-86l-9.6,24.1
			c-1.9,4.9-6.7,8.1-11.9,8.1H63.8c-7.1,0-12.8-5.7-12.8-12.8s5.7-12.8,12.8-12.8h17l22.4-56.1C105.4,53.8,110.7,50.5,116.3,51.1z"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M116.3,51.1c5.7,0.5,10.3,4.7,11.4,10.3l17.2,86l9.6-24.1c1.9-4.9,6.7-8.1,11.9-8.1h25.7
			c7.1,0,12.8,5.7,12.8,12.8s-5.7,12.8-12.8,12.8h-17l-22.4,56.1c-2.1,5.3-7.4,8.5-13.1,8s-10.3-4.7-11.4-10.3l-17.2-86l-9.6,24.1
			c-1.9,4.9-6.7,8.1-11.9,8.1H63.8c-7.1,0-12.8-5.7-12.8-12.8s5.7-12.8,12.8-12.8h17l22.4-56.1C105.4,53.8,110.7,50.5,116.3,51.1z"
        />
      </g>
    </g>
  </svg>
);

export default ObservabilityOverviewIcon;
