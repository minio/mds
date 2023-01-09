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

import * as React from "react";
import { SVGProps } from "react";

const FileCloudIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`min-icon`}
    fill={"currentcolor"}
    viewBox="0 0 256 256"
    {...props}
  >
    <g transform="translate(4890.214 -4861.962)">
      <path
        d="M188.5,256H14.5A14.5,14.5,0,0,1,0,241.5V14.5A14.5,14.5,0,0,1,14.5,0H128.833l.192.265L203,74.3V241.5A14.5,14.5,0,0,1,188.5,256Z"
        transform="translate(-4864.214 4861.962)"
        fill="#4099ad"
      />
      <path
        d="M83.177,74.2H147.99L73.787,0V64.8a10.156,10.156,0,0,0,9.39,9.4"
        transform="translate(-4810.034 4861.962)"
        fill="#4dadbc"
      />
      <path
        d="M114.813,44.332c21.93-2.174,34.2,27.223,17.348,42.137H5.807c-16.255-27.81,3.8-64.831,33.117-57.646C62.43-9.71,105.972,10.935,114.809,44.332h0Z"
        transform="translate(-4832.932 4964.374)"
        fill="#fff"
      />
    </g>
  </svg>
);

export default FileCloudIcon;
