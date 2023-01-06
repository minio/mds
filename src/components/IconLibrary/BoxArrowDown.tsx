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

const BoxArrowDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`min-icon`}
    fill={"currentcolor"}
    viewBox="0 0 26 26"
    {...props}
  >
    <g id="Group_2476" data-name="Group 2476" transform="translate(-1898 -343)">
      <rect
        id="Rectangle_1114"
        data-name="Rectangle 1114"
        width="26"
        height="26"
        transform="translate(1898 343)"
        fill="#fbfafa"
      />
      <g
        id="noun_chevron_2320228"
        transform="translate(1915.2 353.499) rotate(90)"
      >
        <path
          id="Path_6842"
          data-name="Path 6842"
          d="M.47,8a.464.464,0,0,1-.329-.141.468.468,0,0,1,0-.67L3.325,4.006.141.811a.468.468,0,0,1,0-.67.468.468,0,0,1,.67,0L4.335,3.665a.464.464,0,0,1,.141.329.427.427,0,0,1-.141.329L.811,7.847A.476.476,0,0,1,.47,8Z"
          transform="translate(0 0)"
          fill="#2781b0"
        />
      </g>
    </g>
  </svg>
);

export default BoxArrowDown;
