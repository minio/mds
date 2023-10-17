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

const FindReplaceIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`min-icon`}
    fill={"currentcolor"}
    viewBox="0 0 256 256"
    {...props}
  >
    <path
      d="M102.9,30.9c19.9,0,37.9,8.1,51,21l-36.6,36.6h86.4V2.1l-29.5,29.5c-18.3-18.3-43.5-29.5-71.3-29.5
	c-50.8,0-92.6,37.6-99.6,86.4h29.1C39,55.7,68,30.9,102.9,30.9z M184.1,162.5c9.5-13,16.1-28.4,18.4-45.2h-29.1
	c-6.6,32.8-35.7,57.6-70.5,57.6c-19.9,0-37.9-8.1-51-21l36.6-36.6H2.1v86.4l29.5-29.5c18.3,18.3,43.5,29.5,71.3,29.5
	c22.3,0,42.9-7.3,59.6-19.6l70,69.8l21.4-21.4C253.9,232.4,184.1,162.5,184.1,162.5z"
    />
  </svg>
);

export default FindReplaceIcon;
