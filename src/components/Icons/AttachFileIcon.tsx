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

const AttachFileIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`min-icon`}
    fill={"currentcolor"}
    viewBox="0 0 256 256"
    {...props}
  >
    <path
      d="M88.6,199.9c-0.3-42.5-1.4-85.2,1.1-127.6c1.3-22,5.5-50.9,31.5-55.5c12.3-2.2,26.5,0.3,34.7,10.4
			c7,8.5,9.4,20.5,10.5,31.2c1.2,11.9,0.9,24,0.9,35.9c0.1,17.8,0.1,35.6,0.2,53.3c0,17.2,0.7,34.6-0.1,51.9
			c-0.5,12.3-2.3,29.4-13.7,36.8c-10.7,6.9-25.5,4.2-31.6-7.1c-6.9-12.7-6.2-29-6.4-43c-0.3-17.5-0.6-35.1-0.7-52.6
			c-0.1-12.9-1.3-27,2.1-39.5c1.5-5.5,4.4-11.2,10.6-12c6-0.7,9.9,3.8,12,8.9c4.2,10,3,21.3,2.9,31.8c-0.2,23.9-0.5,47.9-0.7,71.8
			c0,1.7,0,3.4-0.1,5.2c-0.1,9.7,14.9,9.7,15,0c0.2-22.2,0.4-44.4,0.7-66.6c0.1-11.7,1.1-23.8-0.7-35.4
			c-2.6-17.4-14.6-34.6-34.3-29.9c-17.5,4.1-21.7,24.4-22.4,39.8c-0.7,16.2-0.2,32.6,0,48.8c0.2,18-0.5,36.5,1.7,54.4
			c1.9,15.7,6.9,33.6,22.5,40.7c15.4,7,35.2,2.8,45.7-10.5c11-13.8,12.3-33.1,12.3-50.1c0-36.8-0.1-73.6-0.3-110.4
			C182.2,55,180.7,21.2,155,7.2c-14.6-8-34-8-49-1.1c-13.4,6.1-21.7,19-26,32.6c-4,12.7-4.9,26.3-5.6,39.5
			c-0.6,11.8-0.8,23.6-0.9,35.5c-0.2,27-0.2,54,0,81c0,1.8,0,3.6,0,5.4C73.7,209.6,88.7,209.6,88.6,199.9L88.6,199.9z"
    />
  </svg>
);

export default AttachFileIcon;
