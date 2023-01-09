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

const FileImageIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`min-icon`}
    fill={"currentcolor"}
    viewBox="0 0 256 256"
    {...props}
  >
    <g transform="translate(885 -4067.899)">
      <path
        d="M188.5,255.974H14.5A14.5,14.5,0,0,1,0,241.475V14.5A14.5,14.5,0,0,1,14.5,0H128.834l.192.265L203,74.29V241.475a14.5,14.5,0,0,1-14.5,14.5Z"
        transform="translate(-859 4067.925)"
        fill="#5127ae"
      />
      <path
        d="M83.177,74.2H147.99L73.787,0V64.8a10.156,10.156,0,0,0,9.39,9.4"
        transform="translate(-804.327 4067.899)"
        fill="#8864d6"
      />
      <path
        d="M61.492,69.8A17.632,17.632,0,1,1,43.859,87.433,17.632,17.632,0,0,1,61.492,69.8"
        transform="translate(-835.925 4098.811)"
        fill="#fff"
      />
      <path
        d="M27.651,152.934l36.031-44.464L82.08,130.7l37.565-46.762,56.728,69Z"
        transform="translate(-855.923 4116.103)"
        fill="#fff"
      />
    </g>
  </svg>
);

export default FileImageIcon;
