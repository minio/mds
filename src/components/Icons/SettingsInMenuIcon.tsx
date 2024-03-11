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

const SettingsInMenuIcon = (props: SVGProps<SVGSVGElement>) => (
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
          d="M99.6,56.9c0-7.9,6.4-14.2,14.2-14.2h128c7.9,0,14.2,6.4,14.2,14.2s-6.4,14.2-14.2,14.2h-128
			C105.9,71.1,99.6,64.7,99.6,56.9z M14.2,199.1c0-7.9,6.4-14.2,14.2-14.2h128c7.9,0,14.2,6.4,14.2,14.2c0,7.9-6.4,14.2-14.2,14.2
			h-128C20.6,213.3,14.2,207,14.2,199.1z"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M199.1,170.7c-15.7,0-28.4,12.7-28.4,28.4c0,15.7,12.7,28.4,28.4,28.4c15.7,0,28.4-12.7,28.4-28.4
			C227.6,183.4,214.8,170.7,199.1,170.7z M142.2,199.1c0-31.4,25.5-56.9,56.9-56.9s56.9,25.5,56.9,56.9S230.5,256,199.1,256
			S142.2,230.5,142.2,199.1z"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M56.9,28.4c-15.7,0-28.4,12.7-28.4,28.4s12.7,28.4,28.4,28.4s28.4-12.7,28.4-28.4S72.6,28.4,56.9,28.4z
			 M0,56.9C0,25.5,25.5,0,56.9,0s56.9,25.5,56.9,56.9s-25.5,56.9-56.9,56.9S0,88.3,0,56.9z"
        />
      </g>
    </g>
  </svg>
);

export default SettingsInMenuIcon;
