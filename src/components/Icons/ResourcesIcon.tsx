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

const ResourcesIcon = (props: SVGProps<SVGSVGElement>) => (
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
          d="M119.8,3.4c4.5-4.5,11.9-4.5,16.5,0L177,44.1c4.5,4.5,4.5,11.9,0,16.5l-40.7,40.7c-4.5,4.5-11.9,4.5-16.5,0
			L79,60.6c-4.5-4.5-4.5-11.9,0-16.5L119.8,3.4z M103.7,52.4L128,76.6l24.3-24.3L128,28.1L103.7,52.4z M44.1,79
			c4.5-4.5,11.9-4.5,16.5,0l40.7,40.7c4.5,4.5,4.5,11.9,0,16.5L60.6,177c-4.5,4.5-11.9,4.5-16.5,0L3.4,136.2
			c-4.5-4.5-4.5-11.9,0-16.5L44.1,79z M195.4,79c4.5-4.5,11.9-4.5,16.5,0l40.7,40.7c4.5,4.5,4.5,11.9,0,16.5L211.9,177
			c-4.5,4.5-11.9,4.5-16.5,0l-40.7-40.7c-4.5-4.5-4.5-11.9,0-16.5L195.4,79z M28.1,128l24.3,24.3L76.6,128l-24.3-24.3L28.1,128z
			 M179.4,128l24.3,24.3l24.3-24.3l-24.3-24.3L179.4,128z M103.7,203.6l24.3,24.3l24.3-24.3L128,179.4L103.7,203.6z M119.8,154.7
			c4.5-4.5,11.9-4.5,16.5,0l40.7,40.7c4.5,4.5,4.5,11.9,0,16.5l-40.7,40.7c-4.5,4.5-11.9,4.5-16.5,0L79,211.9
			c-4.5-4.5-4.5-11.9,0-16.5L119.8,154.7z"
        />
      </g>
    </g>
  </svg>
);

export default ResourcesIcon;
