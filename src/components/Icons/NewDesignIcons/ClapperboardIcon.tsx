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

const ClapperboardIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11.457 2.07366L9.461 2.66508L10.5808 4.10993L12.5885 3.5263L12.2628 2.46781C12.1801 2.19217 11.8479 1.97035 11.457 2.07366ZM10.3568 5.63299C10.4711 5.62924 10.5853 5.59755 10.6886 5.53654L13.662 4.67217C13.8421 4.61982 13.9937 4.4974 14.0827 4.33234C14.1717 4.16728 14.1908 3.97339 14.1357 3.79414L13.603 2.06294C13.2851 1.00836 12.1546 0.432243 11.0824 0.724664L11.0678 0.72884L8.23836 1.56718C8.12487 1.57167 8.0116 1.60373 7.9092 1.66471L2.06776 3.39551L2.06548 3.39619C1.00926 3.71305 0.431958 4.84443 0.724619 5.91751C0.7303 5.93835 0.736942 5.9589 0.744523 5.97912L1.29995 7.46027V12.6667C1.29995 13.2059 1.51418 13.7231 1.8955 14.1044C2.27683 14.4858 2.79401 14.7 3.33329 14.7H12.6666C13.2059 14.7 13.7231 14.4858 14.1044 14.1044C14.4857 13.7231 14.7 13.2059 14.7 12.6667V7.33333C14.7 6.94673 14.3866 6.63333 14 6.63333H6.91563L10.3568 5.63299ZM9.13521 4.53015L8.02055 3.09188L5.31402 3.89381L6.44212 5.31303L9.13521 4.53015ZM4.98939 5.73533L3.86653 4.3227L2.46776 4.73714C2.46747 4.73723 2.46805 4.73706 2.46776 4.73714C2.19732 4.81883 1.97814 5.14095 2.06851 5.52256L2.42757 6.48005L4.98939 5.73533ZM2.69995 8.03333V12.6667C2.69995 12.8346 2.76668 12.9957 2.88545 13.1145C3.00423 13.2333 3.16532 13.3 3.33329 13.3H12.6666C12.8346 13.3 12.9957 13.2333 13.1145 13.1145C13.2332 12.9957 13.3 12.8346 13.3 12.6667V8.03333H2.69995Z"
      fill="currentColor"
    />
  </svg>
);
export default ClapperboardIcon;
