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

const CatalogMetricsIcon = (props: SVGProps<SVGSVGElement>) => (
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
          d="M99.6,28.4C99.6,12.7,112.3,0,128,0s28.4,12.7,28.4,28.4c0,15.7-12.7,28.4-28.4,28.4S99.6,44.2,99.6,28.4z"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M199.1,28.4c0-15.7,12.7-28.4,28.4-28.4C243.3,0,256,12.7,256,28.4c0,15.7-12.7,28.4-28.4,28.4
			C211.8,56.9,199.1,44.2,199.1,28.4z"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0,28.4C0,12.7,12.7,0,28.4,0c15.7,0,28.4,12.7,28.4,28.4c0,15.7-12.7,28.4-28.4,28.4
			C12.7,56.9,0,44.2,0,28.4z"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M99.6,128c0-15.7,12.7-28.4,28.4-28.4s28.4,12.7,28.4,28.4s-12.7,28.4-28.4,28.4S99.6,143.7,99.6,128z"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M199.1,128c0-15.7,12.7-28.4,28.4-28.4c15.7,0,28.4,12.7,28.4,28.4s-12.7,28.4-28.4,28.4
			C211.8,156.4,199.1,143.7,199.1,128z"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0,128c0-15.7,12.7-28.4,28.4-28.4c15.7,0,28.4,12.7,28.4,28.4s-12.7,28.4-28.4,28.4
			C12.7,156.4,0,143.7,0,128z"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M99.6,227.6c0-15.7,12.7-28.4,28.4-28.4s28.4,12.7,28.4,28.4c0,15.7-12.7,28.4-28.4,28.4
			S99.6,243.3,99.6,227.6z"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0,227.6c0-15.7,12.7-28.4,28.4-28.4c15.7,0,28.4,12.7,28.4,28.4c0,15.7-12.7,28.4-28.4,28.4
			C12.7,256,0,243.3,0,227.6z"
        />
      </g>
    </g>
  </svg>
);

export default CatalogMetricsIcon;
