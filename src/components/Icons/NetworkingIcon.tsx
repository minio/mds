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

const NetworkingIcon = (props: SVGProps<SVGSVGElement>) => (
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
          d="M162.9,186.2c0-12.9,10.4-23.3,23.3-23.3h46.5c12.9,0,23.3,10.4,23.3,23.3v46.5c0,12.9-10.4,23.3-23.3,23.3
			h-46.5c-12.9,0-23.3-10.4-23.3-23.3V186.2z M232.7,186.2h-46.5v46.5h46.5V186.2z"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0,186.2c0-12.9,10.4-23.3,23.3-23.3h46.5c12.9,0,23.3,10.4,23.3,23.3v46.5c0,12.9-10.4,23.3-23.3,23.3H23.3
			C10.4,256,0,245.6,0,232.7V186.2z M69.8,186.2H23.3v46.5h46.5V186.2z"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M81.5,23.3C81.5,10.4,91.9,0,104.7,0h46.5c12.9,0,23.3,10.4,23.3,23.3v46.5c0,12.9-10.4,23.3-23.3,23.3h-46.5
			c-12.9,0-23.3-10.4-23.3-23.3V23.3z M151.3,23.3h-46.5v46.5h46.5V23.3z"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M128,69.8c6.4,0,11.6,5.2,11.6,11.6v34.9h58.2c6.2,0,12.1,2.5,16.5,6.8c4.4,4.4,6.8,10.3,6.8,16.5v34.9
			c0,6.4-5.2,11.6-11.6,11.6c-6.4,0-11.6-5.2-11.6-11.6v-34.9H58.2v34.9c0,6.4-5.2,11.6-11.6,11.6c-6.4,0-11.6-5.2-11.6-11.6v-34.9
			c0-6.2,2.5-12.1,6.8-16.5c4.4-4.4,10.3-6.8,16.5-6.8h58.2V81.5C116.4,75,121.6,69.8,128,69.8z"
        />
      </g>
    </g>
  </svg>
);

export default NetworkingIcon;
