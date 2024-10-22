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

const CircleAlertIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.99997 2.03334C4.70467 2.03334 2.0333 4.7047 2.0333 8C2.0333 11.2953 4.70467 13.9667 7.99997 13.9667C11.2953 13.9667 13.9666 11.2953 13.9666 8C13.9666 4.7047 11.2953 2.03334 7.99997 2.03334ZM0.633301 8C0.633301 3.9315 3.93147 0.633335 7.99997 0.633335C12.0685 0.633335 15.3666 3.9315 15.3666 8C15.3666 12.0685 12.0685 15.3667 7.99997 15.3667C3.93147 15.3667 0.633301 12.0685 0.633301 8ZM7.99997 4.63333C8.38657 4.63333 8.69997 4.94674 8.69997 5.33333V8C8.69997 8.3866 8.38657 8.7 7.99997 8.7C7.61337 8.7 7.29997 8.3866 7.29997 8V5.33333C7.29997 4.94674 7.61337 4.63333 7.99997 4.63333ZM7.29997 10.6667C7.29997 10.2801 7.61337 9.96667 7.99997 9.96667H8.00663C8.39323 9.96667 8.70663 10.2801 8.70663 10.6667C8.70663 11.0533 8.39323 11.3667 8.00663 11.3667H7.99997C7.61337 11.3667 7.29997 11.0533 7.29997 10.6667Z"
      fill="currentColor"
    />
  </svg>
);
export default CircleAlertIcon;
