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

const EnvironmentVariablesIcon = (props: SVGProps<SVGSVGElement>) => (
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
          d="M138,25.6C138,11.4,149.4,0,163.6,0h63.9C241.6,0,253,11.4,253,25.6v63.9c0,14.1-11.4,25.6-25.6,25.6h-63.9
			c-14.1,0-25.6-11.4-25.6-25.6V25.6z M227.4,25.6h-63.9v63.9h63.9V25.6z"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.5,58.5C9.3,53.7,15.8,51,22.6,51h64.1c6.8,0,13.3,2.7,18.1,7.5s7.5,11.3,7.5,18.1v64.1h64.1
			c6.8,0,13.3,2.7,18.1,7.5c4.8,4.8,7.5,11.3,7.5,18.1v64.1c0,6.8-2.7,13.3-7.5,18.1c-4.8,4.8-11.3,7.5-18.1,7.5H22.6
			c-6.8,0-13.3-2.7-18.1-7.5c-4.8-4.8-7.5-11.3-7.5-18.1V76.6C-3,69.8-0.3,63.3,4.5,58.5z M22.6,166.3v64.1h64.1v-64.1H22.6z
			 M86.7,140.7H22.6V76.6h64.1V140.7z M112.3,166.3v64.1h64.1v-64.1H112.3z"
        />
      </g>
    </g>
  </svg>
);

export default EnvironmentVariablesIcon;
