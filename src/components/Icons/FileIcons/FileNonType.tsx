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

const FileNonType = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`min-icon`}
    fill={"currentcolor"}
    viewBox="0 0 256 256"
    {...props}
  >
    <g>
      <g transform="translate(4891.5 -2436.5)">
        <path
          d="M188.186,256H14.5A14.5,14.5,0,0,1,0,241.5V14.5A14.5,14.5,0,0,1,14.5,0H128.635l.192.265L202.686,74.3V241.5a14.5,14.5,0,0,1-14.5,14.5Z"
          transform="translate(-4864.5 2436.5)"
          fill="#230b64"
        />
        <path
          d="M83.178,74.209H148L73.787,0V64.8a10.157,10.157,0,0,0,9.391,9.4"
          transform="translate(-4809.497 2436.5)"
          fill="#6a4db9"
        />
      </g>
    </g>
  </svg>
);

export default FileNonType;
