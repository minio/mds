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

const CompassIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="none"
    className={`min-icon`}
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.00003 2.03333C4.70473 2.03333 2.03336 4.7047 2.03336 8C2.03336 11.2953 4.70473 13.9667 8.00003 13.9667C11.2953 13.9667 13.9667 11.2953 13.9667 8C13.9667 4.7047 11.2953 2.03333 8.00003 2.03333ZM0.633362 8C0.633362 3.9315 3.93153 0.633331 8.00003 0.633331C12.0685 0.633331 15.3667 3.9315 15.3667 8C15.3667 12.0685 12.0685 15.3667 8.00003 15.3667C3.93153 15.3667 0.633362 12.0685 0.633362 8ZM11.3217 4.67836C11.5092 4.86584 11.5746 5.14316 11.4908 5.39469L10.0774 9.63469C10.0078 9.84371 9.84374 10.0077 9.63472 10.0774L5.39472 11.4907C5.14319 11.5746 4.86587 11.5091 4.67839 11.3216C4.4909 11.1342 4.42544 10.8568 4.50928 10.6053L5.92262 6.3653C5.99229 6.15628 6.15631 5.99226 6.36534 5.92259L10.6053 4.50925C10.8569 4.42541 11.1342 4.49087 11.3217 4.67836ZM7.14009 7.14006L6.28016 9.71987L8.85996 8.85993L9.7199 6.28013L7.14009 7.14006Z"
      fill="currentColor"
    />
  </svg>
);
export default CompassIcon;
