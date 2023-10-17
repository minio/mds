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

const LockIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`min-icon`}
    fill={"currentcolor"}
    viewBox="0 0 256 256"
    {...props}
  >
    <g>
      <path
        d="M96.3,47.3C96.9,43.2,110.9,20,128,20c17.5,0,31.7,12.7,31.7,28.3v26.6H96.3H73.9H45.1C20.2,74.9,0,93,0,115.2V200
			c0,21.9,19.6,39.8,44,40.4l84,14.6l84-14.6c24.4-0.6,44-18.4,44-40.4v-84.8c0-22.3-20.2-40.4-45.1-40.4h-28.7V48.2
			C182.1,21.6,157.8,0,128,0c-28,0-51.2,19.1-53.9,43.5 M233.6,200c0,11.2-10.2,20.4-22.7,20.4h-1.1L128,234.6l-81.8-14.2h-1.1
			c-12.5,0-22.7-9.1-22.7-20.4v-84.8c0-11.2,10.2-20.4,22.7-20.4h165.7c12.5,0,22.7,9.1,22.7,20.4L233.6,200z"
      />
      <path
        d="M127.7,139.7c-10.5,0-19.1,8.5-19.1,19.1c0,0,0,0,0,0c0,6.3,3.1,12.3,8.4,15.8V190c0,5.6,4.5,10.1,10.1,10.1h1.2
			c5.6,0,10.1-4.5,10.1-10.1v-15.4c5.3-3.5,8.4-9.5,8.4-15.8C146.8,148.3,138.2,139.7,127.7,139.7z"
      />
    </g>
  </svg>
);

export default LockIcon;
