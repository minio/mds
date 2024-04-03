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

const FirewallIcon = (props: SVGProps<SVGSVGElement>) => (
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
          d="M38.4,25.6c-7.1,0-12.8,5.7-12.8,12.8v38.4H64V25.6H38.4z M38.4,0C17.2,0,0,17.2,0,38.4v179.2
			C0,238.8,17.2,256,38.4,256h179.2c21.2,0,38.4-17.2,38.4-38.4V38.4C256,17.2,238.8,0,217.6,0H38.4z M89.6,25.6v51.2h76.8V25.6
			H89.6z M192,25.6v51.2h38.4V38.4c0-7.1-5.7-12.8-12.8-12.8H192z M230.4,102.4h-89.6v51.2h89.6V102.4z M230.4,179.2H192v51.2h25.6
			c7.1,0,12.8-5.7,12.8-12.8V179.2z M166.4,230.4v-51.2H89.6v51.2H166.4z M64,230.4v-51.2H25.6v38.4c0,7.1,5.7,12.8,12.8,12.8H64z
			 M25.6,153.6h89.6v-51.2H25.6V153.6z"
        />
      </g>
    </g>
  </svg>
);

export default FirewallIcon;
