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

const FileBookIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`min-icon`}
    fill={"currentcolor"}
    viewBox="0 0 256 256"
    {...props}
  >
    <g>
      <path
        d="m214.5,256H40.5c-8.01,0-14.5-6.49-14.5-14.5V14.57C26,6.56,32.49.07,40.5.07h114.33l.19.26,73.97,74.01v167.15c0,8.01-6.49,14.5-14.5,14.5Z"
        fill="#584849"
      />
      <path
        d="m163.86,74.19h64.8L154.47,0v64.79c.36,5.03,4.36,9.03,9.39,9.4"
        fill="#908081"
      />
      <g>
        <g>
          <path
            d="m97.24,186.06c-8.05.92-15.93,2.93-23.43,6v-75.51c5.9-2.59,12.05-4.55,18.37-5.84,11.12-2.23,23.07-2.02,31.17,5.06v74.55c-7.92-4.44-17.4-5.16-26.11-4.27"
            fill="#fff"
            fillRule="evenodd"
          />
          <path
            d="m180.51,192.06c-7.5-3.07-15.38-5.08-23.43-6-8.71-.9-18.19-.18-26.11,4.27v-74.55c8.1-7.08,20.05-7.29,31.17-5.06,6.31,1.29,12.47,3.25,18.36,5.84h0v75.51Z"
            fill="#fff"
            fillRule="evenodd"
          />
        </g>
      </g>
    </g>
  </svg>
);

export default FileBookIcon;
