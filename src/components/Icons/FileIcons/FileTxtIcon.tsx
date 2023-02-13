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

const FileTxtIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`min-icon`}
    fill={"currentcolor"}
    viewBox="0 0 256 256"
    {...props}
  >
    <g transform="translate(-13.993 -4638.241)">
      <g transform="translate(41.993 4638.241)">
        <g>
          <path
            d="M137.775,74.688a10.333,10.333,0,0,1-10.366-10.243V0H25.916A25.839,25.839,0,0,0,0,25.607V230.393A25.839,25.839,0,0,0,25.916,256H177.084A25.839,25.839,0,0,0,203,230.393V74.688Z"
            fill="#295595"
          />
          <path
            d="M83.343,74.614H149.3L73.787,0V65.158a10.275,10.275,0,0,0,9.556,9.456"
            transform="translate(53.697)"
            fill="#4a74b1"
          />
          <path
            d="M118.8,112.994H34.133a2.47,2.47,0,0,0-2.481,2.451v9.806a2.473,2.473,0,0,0,2.481,2.451H118.8a2.477,2.477,0,0,0,2.481-2.451v-9.806a2.474,2.474,0,0,0-2.481-2.451"
            transform="translate(25.033 70.751)"
            fill="#fff"
          />
          <path
            d="M118.8,94.244H34.133A2.47,2.47,0,0,0,31.652,96.7V106.5a2.474,2.474,0,0,0,2.481,2.451H118.8a2.477,2.477,0,0,0,2.481-2.451V96.7a2.474,2.474,0,0,0-2.481-2.452"
            transform="translate(25.033 58.859)"
            fill="#fff"
          />
          <path
            d="M31.651,77.945v9.806A2.475,2.475,0,0,0,34.132,90.2H118.8a2.476,2.476,0,0,0,2.481-2.451V77.945a2.472,2.472,0,0,0-2.481-2.451H34.132a2.471,2.471,0,0,0-2.481,2.451"
            transform="translate(25.032 46.967)"
            fill="#fff"
          />
        </g>
      </g>
    </g>
  </svg>
);

export default FileTxtIcon;
