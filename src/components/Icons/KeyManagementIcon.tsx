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

const KeyManagementIcon = (props: SVGProps<SVGSVGElement>) => (
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
          d="M122.6,13.3c16.7-10.5,36.5-15,56.1-12.8c19.6,2.2,37.9,11,51.8,25c13.9,13.9,22.8,32.2,25,51.8
			c2.2,19.6-2.3,39.4-12.8,56.1c-10.5,16.7-26.3,29.4-44.9,35.9c-16.3,5.7-33.8,6.4-50.4,2.2L136,182.9c-2.2,2.2-5.1,3.4-8.2,3.4
			h-11.6v23.2c0,6.4-5.2,11.6-11.6,11.6H81.3v23.2c0,6.4-5.2,11.6-11.6,11.6H23.2c-6.1,0-12.1-2.1-16.6-6.6
			C2.1,244.9,0,238.9,0,232.8v-34.8c0-3.1,1.2-6,3.4-8.2l81.1-81.1c-4.2-16.6-3.5-34.1,2.2-50.4C93.2,39.6,105.9,23.8,122.6,13.3z
			 M176.1,23.6c-14.4-1.6-28.9,1.7-41.1,9.4c-12.3,7.7-21.5,19.3-26.3,33s-4.8,28.5-0.1,42.2c1.5,4.2,0.4,8.9-2.8,12l-82.6,82.6v30
			h34.8v-23.2c0-6.4,5.2-11.6,11.6-11.6h23.2v-23.2c0-6.4,5.2-11.6,11.6-11.6H123l12.9-12.9c3.2-3.2,7.8-4.2,12-2.8
			c13.7,4.8,28.5,4.7,42.2-0.1s25.3-14.1,33-26.3c7.7-12.3,11-26.8,9.4-41.1c-1.6-14.4-8.1-27.8-18.3-38
			C203.8,31.7,190.4,25.3,176.1,23.6z"
        />
        <path d="M180.1,81.8c3.2,0,5.8-2.6,5.8-5.8c0-3.2-2.6-5.8-5.8-5.8c-3.2,0-5.8,2.6-5.8,5.8C174.2,79.2,176.8,81.8,180.1,81.8z" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M180.1,81.8c3.2,0,5.8-2.6,5.8-5.8c0-3.2-2.6-5.8-5.8-5.8c-3.2,0-5.8,2.6-5.8,5.8
			C174.2,79.2,176.8,81.8,180.1,81.8z M162.6,75.9c0-9.6,7.8-17.4,17.4-17.4c9.6,0,17.4,7.8,17.4,17.4c0,9.6-7.8,17.4-17.4,17.4
			C170.4,93.4,162.6,85.6,162.6,75.9z"
        />
      </g>
    </g>
  </svg>
);

export default KeyManagementIcon;
