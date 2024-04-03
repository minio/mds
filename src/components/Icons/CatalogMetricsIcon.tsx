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

const CatalogMetricsIcon = (props: SVGProps<SVGSVGElement>) => (
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
          d="M10.2,10.2C16.8,3.7,25.7,0,34.9,0h83.5c9.3,0,18.1,3.7,24.7,10.2c0,0,0,0,0,0l101.3,101.3
			c7.4,7.5,11.6,17.6,11.6,28.1c0,10.5-4.2,20.6-11.6,28.1l0,0l-76.6,76.6l0,0c-7.5,7.4-17.6,11.6-28.1,11.6
			c-10.5,0-20.6-4.2-28.1-11.6l0,0L10.2,143.1c0,0,0,0,0,0C3.7,136.5,0,127.7,0,118.4V34.9C0,25.7,3.7,16.8,10.2,10.2z M34.9,23.3
			c-3.1,0-6,1.2-8.2,3.4c-2.2,2.2-3.4,5.1-3.4,8.2v83.5c0,0,0,0,0,0c0,3.1,1.2,6,3.4,8.2L128,227.9c0,0,0,0,0,0
			c3.1,3.1,7.3,4.8,11.7,4.8c4.4,0,8.6-1.7,11.7-4.8c0,0,0,0,0,0l76.5-76.5c0,0,0,0,0,0c3.1-3.1,4.8-7.3,4.8-11.7
			c0-4.4-1.7-8.6-4.8-11.7c0,0,0,0,0,0L126.6,26.7c-2.2-2.2-5.1-3.4-8.2-3.4c0,0,0,0,0,0H34.9z"
        />
        <path d="M75.7,81.5c3.2,0,5.8-2.6,5.8-5.8c0-3.2-2.6-5.8-5.8-5.8c-3.2,0-5.8,2.6-5.8,5.8C69.8,78.9,72.4,81.5,75.7,81.5z" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M75.7,81.5c3.2,0,5.8-2.6,5.8-5.8c0-3.2-2.6-5.8-5.8-5.8c-3.2,0-5.8,2.6-5.8,5.8
			C69.8,78.9,72.4,81.5,75.7,81.5z M58.2,75.7c0-9.6,7.8-17.5,17.5-17.5S93.1,66,93.1,75.7s-7.8,17.5-17.5,17.5S58.2,85.3,58.2,75.7
			z"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M122.7,93c2.6,0.2,4.7,2.1,5.2,4.7l7.8,39.1l4.4-10.9c0.9-2.2,3-3.7,5.4-3.7h11.7c3.2,0,5.8,2.6,5.8,5.8
			s-2.6,5.8-5.8,5.8h-7.7l-10.2,25.5c-1,2.4-3.4,3.9-5.9,3.6c-2.6-0.2-4.7-2.1-5.2-4.7l-7.8-39.1l-4.4,10.9c-0.9,2.2-3,3.7-5.4,3.7
			H98.8c-3.2,0-5.8-2.6-5.8-5.8s2.6-5.8,5.8-5.8h7.7l10.2-25.5C117.7,94.3,120.1,92.8,122.7,93z"
        />
      </g>
    </g>
  </svg>
);

export default CatalogMetricsIcon;
