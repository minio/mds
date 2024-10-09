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

const CircleArrowUpIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.99997 2.03334C4.70467 2.03334 2.0333 4.7047 2.0333 8C2.0333 11.2953 4.70467 13.9667 7.99997 13.9667C11.2953 13.9667 13.9666 11.2953 13.9666 8C13.9666 4.7047 11.2953 2.03334 7.99997 2.03334ZM0.633301 8C0.633301 3.9315 3.93147 0.633335 7.99997 0.633335C12.0685 0.633335 15.3666 3.9315 15.3666 8C15.3666 12.0685 12.0685 15.3667 7.99997 15.3667C3.93147 15.3667 0.633301 12.0685 0.633301 8ZM4.83833 7.50503L7.50499 4.83836C7.77836 4.56499 8.22157 4.56499 8.49494 4.83836L11.1616 7.50503C11.435 7.77839 11.435 8.22161 11.1616 8.49498C10.8882 8.76834 10.445 8.76834 10.1717 8.49498L8.69997 7.02328V10.6667C8.69997 11.0533 8.38657 11.3667 7.99997 11.3667C7.61337 11.3667 7.29997 11.0533 7.29997 10.6667V7.02328L5.82828 8.49498C5.55491 8.76834 5.11169 8.76834 4.83833 8.49498C4.56496 8.22161 4.56496 7.77839 4.83833 7.50503Z"
      fill="currentColor"
    />
  </svg>
);
export default CircleArrowUpIcon;
