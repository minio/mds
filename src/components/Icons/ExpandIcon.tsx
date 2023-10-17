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

const ExpandIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`min-icon`}
    fill={"currentcolor"}
    viewBox="0 0 256 256"
    {...props}
  >
    <path
      d="M170.6,2.2l32.3,32.3l-40.6,40.3l19.9,19.9l40.3-40.6l32.3,32.3V2.2H170.6z M2.2,86.4l32.3-32.3l40.3,40.6l19.9-19.9
	L54.1,34.4L86.4,2.2H2.2V86.4z M86.4,254.8l-32.3-32.3l40.6-40.3l-19.9-19.9l-40.3,40.6L2.2,170.6v84.2H86.4z M254.8,170.6
	l-32.3,32.3l-40.3-40.6l-19.9,19.9l40.6,40.3l-32.3,32.3h84.2V170.6z"
    />
  </svg>
);

export default ExpandIcon;
