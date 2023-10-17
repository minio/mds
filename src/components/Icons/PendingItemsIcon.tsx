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

const PendingItemsIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`min-icon`}
    fill={"currentcolor"}
    viewBox="0 0 256 256"
    {...props}
  >
    <path
      d="M176.2,134c-33.3,0-60.3,27-60.3,60.3s27,60.3,60.3,60.3s60.3-27,60.3-60.3S209.5,134,176.2,134z M196.1,222.7l-25.9-25.9
	v-38.6h12.1v33.6l22.3,22.3L196.1,222.7z M188.3,25.5H150c-5.1-14-18.3-24.1-34-24.1S87,11.5,81.9,25.5H43.6
	c-13.3,0-24.1,10.9-24.1,24.1v180.9c0,13.3,10.9,24.1,24.1,24.1h73.7c-7.1-6.9-12.9-15.1-17.1-24.1H43.6V49.6h24.1v36.2h96.5V49.6
	h24.1v61.3c8.6,1.2,16.6,3.7,24.1,7.2V49.6C212.4,36.3,201.6,25.5,188.3,25.5z M115.9,49.6c-6.6,0-12.1-5.4-12.1-12.1
	s5.4-12.1,12.1-12.1c6.6,0,12.1,5.4,12.1,12.1S122.6,49.6,115.9,49.6z"
    />
  </svg>
);

export default PendingItemsIcon;
