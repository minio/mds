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

const FirstAidIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`min-icon`}
    fill={"currentcolor"}
    viewBox="0 0 256 256"
    {...props}
  >
    <path
      d="M97.9,5.3C30.4,22.2-10.7,90.7,6.2,158.1S91.6,266.7,159,249.8S267.5,164.4,250.7,97S165.3-11.5,97.9,5.3z M140.5,227.5
	c-49.8,6.1-97.3-25.6-109.8-75.5c-1.9-7.6-2.7-15-2.9-22.5l73.2,43.9l3.1,12.2c3.4,13.4,17.1,21.7,30.6,18.3L140.5,227.5z
	 M217,175.4c-5.7-9.1-16.5-13.9-27.5-11.2l-12.2,3.1l-9.2-36.7c-1.7-6.7-8.6-10.8-15.3-9.2l-73.3,18.3l-6.1-24.4l24.4-6.1
	c6.7-1.7,10.8-8.6,9.2-15.3l-6.1-24.4l24.4-6.1c13.4-3.4,21.7-17.1,18.3-30.6l-1.3-5c39.4,5.6,73.5,34.3,83.8,75.3
	C232.6,128.5,228.6,154.1,217,175.4z"
    />
  </svg>
);

export default FirstAidIcon;
