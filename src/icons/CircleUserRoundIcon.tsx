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

const CircleUserRoundIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.99997 2.03333C4.70467 2.03333 2.0333 4.7047 2.0333 8C2.0333 9.50686 2.59189 10.8833 3.51329 11.9334C3.73773 11.2141 4.13396 10.5525 4.67657 10.0099C5.00388 9.68261 5.37451 9.40856 5.77497 9.19335C5.07493 8.57641 4.6333 7.67311 4.6333 6.66666C4.6333 4.80731 6.14061 3.3 7.99997 3.3C9.85933 3.3 11.3666 4.80731 11.3666 6.66666C11.3666 7.67311 10.925 8.57641 10.225 9.19335C10.6254 9.40856 10.9961 9.68261 11.3234 10.0099C11.866 10.5525 12.2622 11.2141 12.4866 11.9334C13.408 10.8833 13.9666 9.50686 13.9666 8C13.9666 4.7047 11.2953 2.03333 7.99997 2.03333ZM11.2814 12.9841C11.202 12.2373 10.8694 11.5359 10.3334 10.9999C9.71455 10.381 8.87518 10.0333 7.99997 10.0333C7.12475 10.0333 6.28538 10.381 5.66651 10.9999C5.13053 11.5359 4.79796 12.2373 4.71849 12.9841C5.65993 13.6052 6.78773 13.9667 7.99997 13.9667C9.2122 13.9667 10.34 13.6052 11.2814 12.9841ZM7.99997 8.63333C9.08613 8.63333 9.96663 7.75282 9.96663 6.66666C9.96663 5.5805 9.08613 4.7 7.99997 4.7C6.91381 4.7 6.0333 5.5805 6.0333 6.66666C6.0333 7.75282 6.91381 8.63333 7.99997 8.63333ZM0.633301 8C0.633301 3.9315 3.93147 0.633331 7.99997 0.633331C12.0685 0.633331 15.3666 3.9315 15.3666 8C15.3666 12.0685 12.0685 15.3667 7.99997 15.3667C3.93147 15.3667 0.633301 12.0685 0.633301 8Z"
      fill="currentColor"
    />
  </svg>
);
export default CircleUserRoundIcon;
