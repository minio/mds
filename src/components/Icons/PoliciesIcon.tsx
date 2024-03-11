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

const PoliciesIcon = (props: SVGProps<SVGSVGElement>) => (
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
        d="M126.7,25.4c-21.5,18.5-53.2,33.9-80.2,33.9v80.2c0,25.6,9,44.2,23.1,58.5C84.1,212.5,104.5,223,128,231
		l0.3,0.1c23.3-8,43.7-18.6,58.1-33.2c14.1-14.3,23.1-32.9,23.1-58.5V59.3c-27,0-58.5-15.3-80.2-33.9c-0.4-0.3-0.8-0.4-1.3-0.4
		S127.1,25.1,126.7,25.4z M111.6,8c4.6-3.8,10.4-6,16.4-6s11.8,2.1,16.4,6l0.1,0.1c19.1,16.4,45.4,28.3,64.9,28.3
		c6.2,0,12.1,2.4,16.5,6.7c4.4,4.3,6.8,10.1,6.8,16.2v80.2c0,31.7-11.4,56-29.7,74.5c-18,18.2-42.2,30.2-67.2,38.8l-0.1,0
		c-5,1.7-10.5,1.6-15.4-0.2C95.2,244.1,71,232.1,53,213.9c-18.3-18.5-29.7-42.8-29.7-74.5V59.3c0-6.1,2.5-11.9,6.8-16.2
		c4.4-4.3,10.3-6.7,16.5-6.7C66.1,36.4,92.5,24.4,111.6,8L111.6,8z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M171.1,97c4.5,4.5,4.5,11.7,0,16.2L124.6,159c-4.5,4.5-11.9,4.5-16.5,0l-23.3-22.9c-4.5-4.5-4.5-11.7,0-16.2
		c4.5-4.5,11.9-4.5,16.5,0l15,14.8L154.7,97C159.2,92.5,166.6,92.5,171.1,97z"
      />
    </g>
  </svg>
);

export default PoliciesIcon;
