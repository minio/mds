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

const ShapesIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8.00737 2.66706L5.93095 5.96671H10.0628L8.00737 2.66706ZM7.96618 1.06069C8.16705 1.05348 8.36637 1.09828 8.54482 1.19076C8.72328 1.28325 8.87482 1.42026 8.98475 1.58853L8.99287 1.60127L11.4535 5.55147C11.5676 5.72208 11.6348 5.91991 11.648 6.125C11.6617 6.33739 11.617 6.54947 11.5188 6.73829C11.4206 6.92711 11.2727 7.08548 11.091 7.19624C10.9092 7.30701 10.7007 7.36596 10.4878 7.3667L10.4854 7.36671H5.54817C5.3412 7.37385 5.13591 7.32577 4.95346 7.22721C4.76414 7.12494 4.6068 6.97232 4.49882 6.7862C4.39084 6.60008 4.33644 6.38773 4.34162 6.17262C4.34676 5.95927 4.41033 5.75144 4.52536 5.57175L6.99968 1.63979C7.09672 1.47305 7.23366 1.33286 7.39835 1.23192C7.56972 1.12688 7.76531 1.0679 7.96618 1.06069ZM2.70005 10.0334V13.3H5.96672V10.0334H2.70005ZM1.30005 10C1.30005 9.24525 1.91193 8.63338 2.66672 8.63338H6.00005C6.75484 8.63338 7.36672 9.24525 7.36672 10V13.3334C7.36672 14.0882 6.75484 14.7 6.00005 14.7H2.66672C1.91193 14.7 1.30005 14.0882 1.30005 13.3334V10ZM11.6667 10.0334C10.7647 10.0334 10.0334 10.7646 10.0334 11.6667C10.0334 12.5688 10.7647 13.3 11.6667 13.3C12.5688 13.3 13.3 12.5688 13.3 11.6667C13.3 10.7646 12.5688 10.0334 11.6667 10.0334ZM8.63338 11.6667C8.63338 9.99144 9.99145 8.63338 11.6667 8.63338C13.342 8.63338 14.7 9.99144 14.7 11.6667C14.7 13.342 13.342 14.7 11.6667 14.7C9.99145 14.7 8.63338 13.342 8.63338 11.6667Z"
      fill="currentColor"
    />
  </svg>
);
export default ShapesIcon;
