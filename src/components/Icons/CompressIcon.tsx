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

const CompressIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`min-icon`}
    fill={"currentcolor"}
    viewBox="0 0 256 256"
    {...props}
  >
    <path d="M79.2,219.4h36.6V256h24.4v-36.6h36.6L128,170.7L79.2,219.4z M176.8,36.6h-36.6V0h-24.4v36.6H79.2L128,85.3L176.8,36.6z" />
    <line className="st0" x1="7.6" y1="87.9" x2="248.4" y2="87.9" />
    <path
      d="M237.6,123.4H18.4c-5.9,0-10.7-4.8-10.7-10.7v-3.9c0-5.9,4.8-10.7,10.7-10.7h219.3c5.9,0,10.7,4.8,10.7,10.7v3.9
	C248.4,118.6,243.5,123.4,237.6,123.4z"
    />
    <path
      d="M237.6,160.5H18.4c-5.9,0-10.7-4.8-10.7-10.7v-3.9c0-5.9,4.8-10.7,10.7-10.7h219.3c5.9,0,10.7,4.8,10.7,10.7v3.9
	C248.4,155.7,243.5,160.5,237.6,160.5z"
    />
  </svg>
);

export default CompressIcon;
