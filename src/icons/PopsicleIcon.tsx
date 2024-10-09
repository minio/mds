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

const PopsicleIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M1.77169 1.83841C2.53065 1.07945 3.56001 0.653076 4.63333 0.653076C5.70666 0.653076 6.73602 1.07945 7.49497 1.83841L12.895 7.23841C13.7017 8.04511 13.7017 9.28832 12.895 10.095L11.9899 11L15.1616 14.1717C15.435 14.4451 15.435 14.8883 15.1616 15.1617C14.8883 15.4351 14.4451 15.4351 14.1717 15.1617L11 11.99L10.095 12.895C9.27946 13.7105 8.07765 13.6732 7.23691 13.0193C7.214 13.0014 7.19222 12.9822 7.17169 12.9617L1.77169 7.56169C1.01274 6.80274 0.586361 5.77337 0.586361 4.70005C0.586361 3.62672 1.01274 2.59736 1.77169 1.83841ZM11.905 9.10507C12.165 8.84511 12.165 8.48832 11.905 8.22836L6.50502 2.82836C6.00862 2.33195 5.33535 2.05308 4.63333 2.05308C3.93131 2.05308 3.25804 2.33195 2.76164 2.82836C2.26524 3.32476 1.98636 3.99803 1.98636 4.70005C1.98636 5.40207 2.26524 6.07534 2.76164 6.57174L8.12708 11.9372C8.47815 12.1913 8.86099 12.1491 9.10503 11.9051L11.905 9.10507Z"
      fill="currentColor"
    />
  </svg>
);
export default PopsicleIcon;
