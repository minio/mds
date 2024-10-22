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

const SquareEqualIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.33332 2.70005C2.98354 2.70005 2.69999 2.9836 2.69999 3.33338V12.6667C2.69999 13.0165 2.98354 13.3 3.33332 13.3H12.6667C13.0164 13.3 13.3 13.0165 13.3 12.6667V3.33338C13.3 2.9836 13.0164 2.70005 12.6667 2.70005H3.33332ZM1.29999 3.33338C1.29999 2.2104 2.21034 1.30005 3.33332 1.30005H12.6667C13.7896 1.30005 14.7 2.2104 14.7 3.33338V12.6667C14.7 13.7897 13.7896 14.7 12.6667 14.7H3.33332C2.21034 14.7 1.29999 13.7897 1.29999 12.6667V3.33338ZM3.96665 6.66672C3.96665 6.28012 4.28006 5.96672 4.66665 5.96672H11.3333C11.7199 5.96672 12.0333 6.28012 12.0333 6.66672C12.0333 7.05331 11.7199 7.36672 11.3333 7.36672H4.66665C4.28006 7.36672 3.96665 7.05331 3.96665 6.66672ZM3.96665 9.33338C3.96665 8.94678 4.28006 8.63338 4.66665 8.63338H11.3333C11.7199 8.63338 12.0333 8.94678 12.0333 9.33338C12.0333 9.71998 11.7199 10.0334 11.3333 10.0334H4.66665C4.28006 10.0334 3.96665 9.71998 3.96665 9.33338Z"
      fill="currentColor"
    />
  </svg>
);
export default SquareEqualIcon;
