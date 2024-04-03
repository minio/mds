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

const IngestIcon = (props: SVGProps<SVGSVGElement>) => (
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
          d="M34.9,23.3c-6.4,0-11.6,5.2-11.6,11.6v46.5c0,6.4,5.2,11.6,11.6,11.6h46.5c6.4,0,11.6-5.2,11.6-11.6V34.9
			c0-6.4-5.2-11.6-11.6-11.6H34.9z M0,34.9C0,15.6,15.6,0,34.9,0h46.5c19.3,0,34.9,15.6,34.9,34.9v46.5c0,19.3-15.6,34.9-34.9,34.9
			H34.9C15.6,116.4,0,100.7,0,81.5V34.9z"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M139.6,11.6c0-6.4,5.2-11.6,11.6-11.6c19.2,0,34.9,15.7,34.9,34.9v46.5c0,19.2-15.7,34.9-34.9,34.9
			c-6.4,0-11.6-5.2-11.6-11.6c0-6.4,5.2-11.6,11.6-11.6c6.4,0,11.6-5.3,11.6-11.6V34.9c0-6.4-5.3-11.6-11.6-11.6
			C144.8,23.3,139.6,18.1,139.6,11.6z M209.5,11.6c0-6.4,5.2-11.6,11.6-11.6C240.3,0,256,15.7,256,34.9v46.5
			c0,19.2-15.7,34.9-34.9,34.9c-6.4,0-11.6-5.2-11.6-11.6c0-6.4,5.2-11.6,11.6-11.6c6.4,0,11.6-5.3,11.6-11.6V34.9
			c0-6.4-5.3-11.6-11.6-11.6C214.7,23.3,209.5,18.1,209.5,11.6z M11.6,139.6c6.4,0,11.6,5.2,11.6,11.6v11.6
			c0,13.4,9.9,23.3,23.3,23.3h58.2c6.4,0,11.6,5.2,11.6,11.6c0,6.4-5.2,11.6-11.6,11.6H46.5C20.3,209.5,0,189.1,0,162.9v-11.6
			C0,144.8,5.2,139.6,11.6,139.6z"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M61.6,154.7c4.5-4.5,11.9-4.5,16.5,0l34.9,34.9c4.5,4.5,4.5,11.9,0,16.5L78,241c-4.5,4.5-11.9,4.5-16.5,0
			c-4.5-4.5-4.5-11.9,0-16.5l26.7-26.7l-26.7-26.7C57,166.6,57,159.2,61.6,154.7z"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M174.5,162.9c-6.4,0-11.6,5.2-11.6,11.6v46.5c0,6.4,5.2,11.6,11.6,11.6h46.5c6.4,0,11.6-5.2,11.6-11.6v-46.5
			c0-6.4-5.2-11.6-11.6-11.6H174.5z M139.6,174.5c0-19.3,15.6-34.9,34.9-34.9h46.5c19.3,0,34.9,15.6,34.9,34.9v46.5
			c0,19.3-15.6,34.9-34.9,34.9h-46.5c-19.3,0-34.9-15.6-34.9-34.9V174.5z"
        />
      </g>
    </g>
  </svg>
);

export default IngestIcon;
