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

const ShuffleIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`min-icon`}
    fill={"currentcolor"}
    viewBox="0 0 256 256"
    {...props}
  >
    <g>
      <path
        d="M97.8,135.9c-5.6,8.5-11.5,16.7-18.5,24.1C62.7,177.5,41,182.2,17.6,181c-21-1.1-20.9,31.5,0,32.5
			c43.9,2.2,75-16.7,99.7-49c-4.1-5.3-7.8-10.6-11.3-15.8C103.2,144.4,100.4,140.1,97.8,135.9z"
      />
      <path
        d="M140.2,110c2.3,3.5,4.5,7,6.7,10.5c4.1-5.7,8.5-11.2,13.5-16.3c12.5-12.9,26.7-18.2,42.3-19.7
			c-1,1.2-2,2.4-3,3.6c-5.7,6.8-6.7,16.3,0,23c5.9,5.9,17.3,6.8,23,0c8.8-10.5,17.2-21.3,26-31.7c5.7-5.8,7.9-15.3,0.8-23
			l-29.3-31.7c-14.3-15.5-37.2,7.6-23,23l3.8,4.1c-16,1.1-31.4,5.2-45.6,14.4C144.9,73.1,136,82,128.1,91.7c1.6,2.2,3.2,4.5,4.8,6.9
			C135.3,102.4,137.8,106.3,140.2,110z"
      />
      <path
        d="M222.8,144.9c-2.8-3.3-6.8-4.8-11-4.8c-4.5,0-9,1.7-12,4.8c-6.7,6.7-5.7,16.2,0,23c1,1.2,2,2.4,3,3.6
			c-15.6-1.5-29.8-6.8-42.3-19.7c-7.1-7.3-13.1-15.4-18.7-23.8c-5.5-8.1-10.6-16.5-16-24.7c-1-1.6-2.1-3.1-3.2-4.6
			c-24.3-34.8-54.6-56.4-98-56.4c-2.3,0-4.6,0.1-6.9,0.2c-20.5,1-21,32.6-1,32.6c0.3,0,0.7,0,1,0c2.3-0.1,4.5-0.2,6.7-0.2
			c20.8,0,39.9,5.3,54.9,21.1c9.2,9.7,16.5,20.8,23.6,32.1c3.4,5.3,6.7,10.7,10.2,15.9c3,4.5,6.1,9,9.4,13.4
			c9.3,12.5,19.9,24,33,32.5c14.2,9.2,29.6,13.3,45.6,14.4l-3.8,4.1c-10.9,11.8,0.1,28.1,12.2,28.1c3.7,0,7.5-1.5,10.8-5.1
			l29.3-31.7c7.1-7.7,4.9-17.3-0.8-23C240,166.1,231.6,155.4,222.8,144.9z"
      />
    </g>
  </svg>
);

export default ShuffleIcon;
