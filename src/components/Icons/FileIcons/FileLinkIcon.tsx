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

const FileLinkIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`min-icon`}
    fill={"currentcolor"}
    viewBox="0 0 256 256"
    {...props}
  >
    <g transform="translate(3814 -6644.899)">
      <path
        d="M188.5,255.974H14.5A14.5,14.5,0,0,1,0,241.475V14.5A14.5,14.5,0,0,1,14.5,0H128.834l.192.265L203,74.291V241.475a14.5,14.5,0,0,1-14.5,14.5Z"
        transform="translate(-3788 6644.924)"
        fill="#5a86f8"
      />
      <path
        d="M83.177,74.2H147.99L73.787,0V64.8a10.156,10.156,0,0,0,9.39,9.4"
        transform="translate(-3733.327 6644.899)"
        fill="#85a7fd"
      />
      <path
        d="M66.707,20.267h1.7A27.033,27.033,0,0,1,94.581,0h13.512a27.023,27.023,0,1,1,0,54.046H94.581A27.036,27.036,0,0,1,68.41,33.782l-1.7,0A27.037,27.037,0,0,1,40.535,54.046H27.023A27.023,27.023,0,1,1,27.023,0H40.535A27.036,27.036,0,0,1,66.706,20.264Zm-14.349.207a13.512,13.512,0,0,0-11.823-6.963H27.023a13.512,13.512,0,1,0,0,27.023H40.535a13.512,13.512,0,0,0,11.823-6.963,6.756,6.756,0,0,1,0-13.093Zm28.712,13.1a13.512,13.512,0,0,0,11.823,6.958H106.4a13.512,13.512,0,0,0,0-27.023H92.892A13.512,13.512,0,0,0,81.069,20.48a6.756,6.756,0,0,1,0,13.091Z"
        transform="translate(-3755.964 6809.629) rotate(-30)"
        fill="#fff"
        fillRule="evenodd"
      />
    </g>
  </svg>
);

export default FileLinkIcon;
