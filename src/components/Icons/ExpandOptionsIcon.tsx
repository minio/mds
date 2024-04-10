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

const ExpandOptionsIcon = (props: SVGProps<SVGSVGElement>) => (
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
          d="M128,156.65c-15.81,0-28.67-12.85-28.67-28.64s12.86-28.66,28.67-28.66,28.66,12.86,28.66,28.66-12.86,28.64-28.66,28.64ZM128,127.3c-.39,0-.71.32-.71.71l.71-.71Z"
          strokeWidth={"0px"}
        />
      </g>
      <g>
        <path
          d="M225.84,156.65c-15.81,0-28.67-12.85-28.67-28.64s12.86-28.66,28.67-28.66,28.67,12.86,28.67,28.66-12.86,28.64-28.67,28.64ZM225.84,127.3c-.39,0-.7.32-.7.71l.7-.71Z"
          strokeWidth={"0px"}
        />
      </g>
      <g>
        <path
          d="M30.15,156.65c-15.8,0-28.66-12.85-28.66-28.64s12.86-28.66,28.66-28.66,28.67,12.86,28.67,28.66-12.86,28.64-28.67,28.64ZM30.15,127.3c-.38,0-.7.32-.7.71l.7-.71Z"
          strokeWidth={"0px"}
        />
      </g>
    </g>
  </svg>
);

export default ExpandOptionsIcon;
