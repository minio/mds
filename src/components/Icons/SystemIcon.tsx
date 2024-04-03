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

const SystemIcon = (props: SVGProps<SVGSVGElement>) => (
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
          d="M0,25.6C0,11.5,11.5,0,25.6,0h64c14.1,0,25.6,11.5,25.6,25.6v89.6c0,14.1-11.5,25.6-25.6,25.6h-64
			C11.5,140.8,0,129.3,0,115.2V25.6z M89.6,25.6h-64v89.6h64V25.6z"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M140.8,25.6c0-14.1,11.5-25.6,25.6-25.6h64C244.5,0,256,11.5,256,25.6V64c0,14.1-11.5,25.6-25.6,25.6h-64
			c-14.1,0-25.6-11.5-25.6-25.6V25.6z M230.4,25.6h-64V64h64V25.6z"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M140.8,140.8c0-14.1,11.5-25.6,25.6-25.6h64c14.1,0,25.6,11.5,25.6,25.6v89.6c0,14.1-11.5,25.6-25.6,25.6h-64
			c-14.1,0-25.6-11.5-25.6-25.6V140.8z M230.4,140.8h-64v89.6h64V140.8z"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0,192c0-14.1,11.5-25.6,25.6-25.6h64c14.1,0,25.6,11.5,25.6,25.6v38.4c0,14.1-11.5,25.6-25.6,25.6h-64
			C11.5,256,0,244.5,0,230.4V192z M89.6,192h-64v38.4h64V192z"
        />
      </g>
    </g>
  </svg>
);

export default SystemIcon;
