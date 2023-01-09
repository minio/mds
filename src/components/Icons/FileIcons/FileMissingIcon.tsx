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

const FileMissingIcon = (props: SVGProps<SVGSVGElement>) => (
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
          d="m214.5,256H40.5c-8.01,0-14.5-6.49-14.5-14.5V14.57C26,6.56,32.49.07,40.5.07h114.33c0,.22,74.04,74.08,74.17,74.28v167.15c0,8.01-6.49,14.5-14.5,14.5Z"
          fill="#4e5c88"
        />
        <path
          d="m163.86,74.19h64.8L154.47,0v64.79c.36,5.03,4.36,9.03,9.39,9.4"
          fill="#798ac1"
        />
        <g>
          <g>
            <path
              d="m83.19,139.89c-.65-.67-.65-1.74,0-2.41l8.63-8.83c-10.03-11.63-13.21-6.83-1.37-18.67.67-.69,1.79-.69,2.46,0,0,0,8.57,8.78,8.57,8.78,11.19-10.12,6.74-13.53,18.29-1.35.65.67.65,1.74,0,2.41,0,0-8.63,8.84-8.63,8.84,10.03,11.63,13.21,6.83,1.37,18.67-.67.69-1.79.69-2.46,0,0,0-8.57-8.78-8.57-8.78-11.2,10.13-6.74,13.53-18.3,1.34Z"
              fill="#fff"
            />
            <path
              d="m163.71,177.83c-2.27,3.05-6.58,3.68-9.63,1.41-14.75-11.04-36.89-11.04-51.64,0-6.94,5.38-15.39-5.51-8.42-10.89,9.51-7.17,21.1-11.05,33.01-11.01,9.52-.98,44.5,6.32,36.69,20.5"
              fill="#fff"
            />
            <path
              d="m172.05,137.46c2.54,1.92-6.53,8.43-7.22,9.85-.67.69-1.79.7-2.47.01h0c-.05,0-8.52-8.84-8.6-8.75,0,0-8.55,8.75-8.55,8.75-1.97,2.6-8.29-6.69-9.7-7.4-.67-.68-.67-1.77,0-2.46l8.58-8.78c-9.75-11.6-13.35-6.76-1.36-18.69.68-.69,1.79-.7,2.48-.01.05,0,8.53,8.84,8.6,8.75,0,0,8.54-8.75,8.54-8.75.69-.66,1.77-.66,2.46,0,.68,1.42,9.75,7.92,7.26,9.84,0,.05-8.68,8.79-8.6,8.86,0,0,8.58,8.78,8.58,8.78Z"
              fill="#fff"
            />
          </g>
        </g>
      </g>
    </g>
  </svg>
);

export default FileMissingIcon;
