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

const FilePptIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`min-icon`}
    fill={"currentcolor"}
    viewBox="0 0 256 256"
    {...props}
  >
    <g transform="translate(1026.004 -4637.798)">
      <path
        d="M188.5,255.931H14.5A14.5,14.5,0,0,1,0,241.431V14.5A14.5,14.5,0,0,1,14.5,0H128.833l.192.265L203,74.278V241.431a14.5,14.5,0,0,1-14.5,14.5Z"
        transform="translate(-1000.004 4637.867)"
        fill="#d04423"
      />
      <path
        d="M83.175,74.189h64.8L73.787,0V64.787a10.155,10.155,0,0,0,9.388,9.4"
        transform="translate(-945.32 4637.798)"
        fill="#eb6a4b"
      />
      <g transform="translate(-946.786 4740.509)">
        <rect
          width="27.687"
          height="47.945"
          rx="4"
          transform="translate(0 34.439)"
          fill="#fff"
        />
        <rect
          width="27.687"
          height="83.735"
          rx="4"
          transform="translate(35.115 0)"
          fill="#fff"
        />
        <rect
          width="27.687"
          height="64.827"
          rx="4"
          transform="translate(70.229 17.557)"
          fill="#fff"
        />
      </g>
      <path
        d="M120.526,3.5H0v-7H120.526Z"
        transform="translate(-958.091 4823.025)"
        fill="#fff"
      />
    </g>
  </svg>
);

export default FilePptIcon;
