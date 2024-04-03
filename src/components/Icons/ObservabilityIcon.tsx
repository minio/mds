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

const ObservabilityIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`min-icon`}
    fill={"currentcolor"}
    viewBox="0 0 256 256"
    {...props}
  >
    <g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M35.1,46.7c-6.4,0-11.6,5.2-11.6,11.6v11.6h23.2V46.7H35.1z M35.1,23.5c-19.2,0-34.8,15.6-34.8,34.8v139.3
		c0,19.2,15.6,34.8,34.8,34.8h185.5c19.2,0,34.8-15.6,34.8-34.8V58.3c0-19.2-15.6-34.8-34.8-34.8H35.1z M69.9,46.7v23.2h23.2V46.7
		H69.9z M116.2,46.7v23.2h115.9V58.3c0-6.4-5.2-11.6-11.6-11.6H116.2z M232.2,93.2H23.5v104.5c0,6.4,5.2,11.6,11.6,11.6h185.5
		c6.4,0,11.6-5.2,11.6-11.6V93.2z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M112.6,99.5c2.2,0,4.1,1.4,4.8,3.5l25.7,77.3l10.4-31.4c0.7-2.1,2.6-3.5,4.8-3.5h20.4c2.8,0,5.1,2.3,5.1,5.1
		s-2.3,5.1-5.1,5.1H162L147.9,198c-0.7,2.1-2.6,3.5-4.8,3.5c-2.2,0-4.1-1.4-4.8-3.5l-25.7-77.3l-10.4,31.4c-0.7,2.1-2.6,3.5-4.8,3.5
		H76.9c-2.8,0-5.1-2.3-5.1-5.1s2.3-5.1,5.1-5.1h16.7l14.1-42.4C108.4,100.9,110.4,99.5,112.6,99.5z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M106.8,102.7c0.8-2.5,3.2-4.2,5.8-4.2s5,1.7,5.8,4.2l24.8,74.4l9.5-28.5c0.8-2.5,3.2-4.2,5.8-4.2h20.4
		c3.4,0,6.1,2.7,6.1,6.1s-2.7,6.1-6.1,6.1h-16l-13.9,41.7c-0.8,2.5-3.2,4.2-5.8,4.2s-4.9-1.7-5.8-4.2l-24.8-74.4l-9.5,28.5
		c-0.8,2.5-3.2,4.2-5.8,4.2H76.9c-3.4,0-6.1-2.7-6.1-6.1s2.7-6.1,6.1-6.1h16L106.8,102.7z M112.6,100.5c-1.8,0-3.3,1.1-3.9,2.8
		l-14.1,42.4c-0.1,0.4-0.5,0.7-0.9,0.7H76.9c-2.3,0-4.1,1.8-4.1,4.1s1.8,4.1,4.1,4.1h20.4c1.8,0,3.3-1.1,3.9-2.8l10.4-31.4
		c0.1-0.4,0.5-0.7,0.9-0.7c0.4,0,0.8,0.3,0.9,0.7l25.7,77.3c0.6,1.7,2.1,2.8,3.9,2.8c1.8,0,3.3-1.1,3.9-2.8l14.1-42.4
		c0.1-0.4,0.5-0.7,0.9-0.7h16.7c2.3,0,4.1-1.8,4.1-4.1s-1.8-4.1-4.1-4.1h-20.4c-1.8,0-3.3,1.1-3.9,2.8l-10.4,31.4
		c-0.1,0.4-0.5,0.7-0.9,0.7c-0.4,0-0.8-0.3-0.9-0.7l-25.7-77.3C115.9,101.6,114.3,100.5,112.6,100.5z"
      />
    </g>
  </svg>
);

export default ObservabilityIcon;
