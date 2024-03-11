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

const CatalogIcon = (props: SVGProps<SVGSVGElement>) => (
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
          d="M154.4,37.4c4.6-4.6,11.9-4.6,16.5,0l73.4,73.6c0,0,0,0,0,0c3.7,3.7,6.6,8.1,8.6,12.9c2,4.8,3,10,3,15.2
			c0,5.2-1,10.4-3,15.2c-2,4.8-4.9,9.2-8.6,12.9c0,0,0,0,0,0l-50.1,50.2c-4.6,4.6-11.9,4.6-16.5,0c-4.6-4.6-4.6-12,0-16.5l50.1-50.3
			c1.5-1.5,2.7-3.3,3.6-5.3c0.8-2,1.2-4.1,1.2-6.3c0-2.2-0.4-4.3-1.2-6.3c-0.8-2-2-3.8-3.6-5.3L154.4,54
			C149.9,49.4,149.9,42,154.4,37.4z"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.8,40.8c4.4-4.4,10.3-6.8,16.5-6.8h60.5c9.3,0,18.2,3.7,24.8,10.3l66.7,66.7c7.5,7.5,11.6,17.7,11.6,28.2
			c0,10.6-4.2,20.7-11.6,28.2l0,0l-41.9,41.9l0,0c-7.5,7.5-17.7,11.6-28.2,11.6c-10.6,0-20.7-4.2-28.2-11.6l0,0L9.3,142.6
			C2.7,136.1-1,127.2-1,117.9V57.4C-1,51.2,1.5,45.2,5.8,40.8z M82.8,57.4H22.4v60.5c0,3.1,1.2,6.1,3.4,8.3l66.7,66.7c0,0,0,0,0,0
			c3.1,3.1,7.3,4.8,11.7,4.8c4.4,0,8.6-1.7,11.7-4.8c0,0,0,0,0,0l41.8-41.8c0,0,0,0,0,0c3.1-3.1,4.8-7.3,4.8-11.7
			c0-4.4-1.7-8.6-4.8-11.7c0,0,0,0,0,0L91.1,60.8C88.9,58.6,85.9,57.4,82.8,57.4z"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M46,98.5C46,88.8,53.8,81,63.5,81S81,88.8,81,98.5S73.2,116,63.5,116S46,108.2,46,98.5z"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M46,98.5C46,88.8,53.8,81,63.5,81S81,88.8,81,98.5S73.2,116,63.5,116S46,108.2,46,98.5z"
        />
      </g>
    </g>
  </svg>
);

export default CatalogIcon;
