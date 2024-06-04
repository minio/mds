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

const BotMessageSquareIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.6333 1.33333C4.6333 0.946732 4.9467 0.633331 5.3333 0.633331H7.99997C8.38657 0.633331 8.69997 0.946732 8.69997 1.33333V3.3H12C12.5392 3.3 13.0564 3.51422 13.4377 3.89555C13.8191 4.27687 14.0333 4.79406 14.0333 5.33333V7.3H14.6666C15.0532 7.3 15.3666 7.6134 15.3666 8C15.3666 8.3866 15.0532 8.7 14.6666 8.7H14.0333V10.6667C14.0333 11.2059 13.8191 11.7231 13.4377 12.1044C13.0564 12.4858 12.5392 12.7 12 12.7H5.62325L3.16161 15.1616C2.96141 15.3618 2.66033 15.4217 2.39876 15.3134C2.13718 15.205 1.96663 14.9498 1.96663 14.6667V8.7H1.3333C0.946701 8.7 0.633301 8.3866 0.633301 8C0.633301 7.6134 0.946701 7.3 1.3333 7.3H1.96663V5.33333C1.96663 4.79406 2.18086 4.27687 2.56218 3.89555C2.94351 3.51422 3.46069 3.3 3.99997 3.3H7.29997V2.03333H5.3333C4.9467 2.03333 4.6333 1.71993 4.6333 1.33333ZM3.99997 4.7C3.832 4.7 3.67091 4.76672 3.55213 4.8855C3.43336 5.00427 3.36663 5.16536 3.36663 5.33333V12.9767L4.83833 11.505C4.9696 11.3737 5.14765 11.3 5.3333 11.3H12C12.1679 11.3 12.329 11.2333 12.4478 11.1145C12.5666 10.9957 12.6333 10.8346 12.6333 10.6667V5.33333C12.6333 5.16536 12.5666 5.00427 12.4478 4.8855C12.329 4.76672 12.1679 4.7 12 4.7H3.99997ZM5.99997 6.63333C6.38657 6.63333 6.69997 6.94673 6.69997 7.33333V8.66666C6.69997 9.05326 6.38657 9.36666 5.99997 9.36666C5.61337 9.36666 5.29997 9.05326 5.29997 8.66666V7.33333C5.29997 6.94673 5.61337 6.63333 5.99997 6.63333ZM9.99997 6.63333C10.3866 6.63333 10.7 6.94673 10.7 7.33333V8.66666C10.7 9.05326 10.3866 9.36666 9.99997 9.36666C9.61337 9.36666 9.29997 9.05326 9.29997 8.66666V7.33333C9.29997 6.94673 9.61337 6.63333 9.99997 6.63333Z"
      fill="currentColor"
    />
  </svg>
);
export default BotMessageSquareIcon;
