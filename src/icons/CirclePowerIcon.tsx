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

const CirclePowerIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.99997 2.03333C4.70467 2.03333 2.0333 4.7047 2.0333 8C2.0333 11.2953 4.70467 13.9667 7.99997 13.9667C11.2953 13.9667 13.9666 11.2953 13.9666 8C13.9666 4.7047 11.2953 2.03333 7.99997 2.03333ZM0.633301 8C0.633301 3.9315 3.93147 0.633331 7.99997 0.633331C12.0685 0.633331 15.3666 3.9315 15.3666 8C15.3666 12.0685 12.0685 15.3667 7.99997 15.3667C3.93147 15.3667 0.633301 12.0685 0.633301 8ZM7.99997 3.96666C8.38657 3.96666 8.69997 4.28006 8.69997 4.66666V8C8.69997 8.3866 8.38657 8.7 7.99997 8.7C7.61337 8.7 7.29997 8.3866 7.29997 8V4.66666C7.29997 4.28006 7.61337 3.96666 7.99997 3.96666ZM5.7533 5.44C6.06258 5.67196 6.12526 6.11072 5.8933 6.42C5.59988 6.81123 5.42119 7.27644 5.37727 7.76351C5.33336 8.25057 5.42594 8.74025 5.64464 9.17766C5.86335 9.61507 6.19954 9.98294 6.61554 10.24C7.03155 10.4971 7.51093 10.6333 7.99997 10.6333C8.48901 10.6333 8.96839 10.4971 9.38439 10.24C9.8004 9.98294 10.1366 9.61507 10.3553 9.17766C10.574 8.74025 10.6666 8.25057 10.6227 7.76351C10.5787 7.27644 10.4001 6.81123 10.1066 6.42C9.87467 6.11072 9.93735 5.67196 10.2466 5.44C10.5559 5.20804 10.9947 5.27072 11.2266 5.58C11.6761 6.17923 11.9497 6.89177 12.017 7.63778C12.0843 8.38379 11.9425 9.1338 11.6075 9.80376C11.2725 10.4737 10.7576 11.0372 10.1204 11.431C9.48325 11.8247 8.749 12.0333 7.99997 12.0333C7.25093 12.0333 6.51669 11.8247 5.87952 11.431C5.24235 11.0372 4.72742 10.4737 4.39244 9.80376C4.05746 9.1338 3.91566 8.38379 3.98293 7.63778C4.0502 6.89177 4.32388 6.17923 4.7733 5.58C5.00526 5.27072 5.44402 5.20804 5.7533 5.44Z"
      fill="currentColor"
    />
  </svg>
);
export default CirclePowerIcon;
