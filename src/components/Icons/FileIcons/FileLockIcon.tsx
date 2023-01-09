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

const FileLockIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`min-icon`}
    fill={"currentcolor"}
    viewBox="0 0 256 256"
    {...props}
  >
    <g transform="translate(26)">
      <path
        d="M188.186,256H14.5A14.5,14.5,0,0,1,0,241.5V14.5A14.5,14.5,0,0,1,14.5,0H128.635l.192.265L202.686,74.3V241.5a14.5,14.5,0,0,1-14.5,14.5Z"
        transform="translate(0 0)"
        fill="#2776ae"
      />
      <path
        d="M83.178,74.209H148L73.787,0V64.8a10.157,10.157,0,0,0,9.391,9.4"
        transform="translate(55.003)"
        fill="#3890c6"
      />
      <path
        d="M10,97.942a10,10,0,0,1-10-10V49.852a9.99,9.99,0,0,1,4.37-8.266h0A9.953,9.953,0,0,1,10,39.852h3.667c-.106-7.2-.057-15.131,2.422-21.04C21.3,7.306,32.081-.057,44.361,0A31.562,31.562,0,0,1,72.626,18.812a29.86,29.86,0,0,1,2.5,11.96v9.08h5.382a9.953,9.953,0,0,1,5.63,1.734h0a9.99,9.99,0,0,1,4.37,8.266v38.09a10,10,0,0,1-10,10Zm47.08-58.09v-9.19a12.839,12.839,0,0,0-12.719-12.5l0,0c-7.171-.192-11.938,5.08-12.614,12.61v9.08Z"
        transform="translate(56.244 118.543)"
        fill="#fff"
      />
    </g>
  </svg>
);

export default FileLockIcon;
