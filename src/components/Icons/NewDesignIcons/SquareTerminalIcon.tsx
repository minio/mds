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

const SquareTerminalIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.33338 2.70005C2.9836 2.70005 2.70005 2.9836 2.70005 3.33338V12.6667C2.70005 13.0165 2.9836 13.3 3.33338 13.3H12.6667C13.0165 13.3 13.3 13.0165 13.3 12.6667V3.33338C13.3 2.9836 13.0165 2.70005 12.6667 2.70005H3.33338ZM1.30005 3.33338C1.30005 2.2104 2.2104 1.30005 3.33338 1.30005H12.6667C13.7897 1.30005 14.7 2.2104 14.7 3.33338V12.6667C14.7 13.7897 13.7897 14.7 12.6667 14.7H3.33338C2.2104 14.7 1.30005 13.7897 1.30005 12.6667V3.33338ZM4.17174 4.17174C4.44511 3.89837 4.88832 3.89837 5.16169 4.17174L6.49502 5.50507C6.76839 5.77844 6.76839 6.22166 6.49502 6.49502L5.16169 7.82836C4.88832 8.10172 4.44511 8.10172 4.17174 7.82836C3.89837 7.55499 3.89837 7.11177 4.17174 6.83841L5.0101 6.00005L4.17174 5.16169C3.89837 4.88832 3.89837 4.44511 4.17174 4.17174ZM6.63338 8.66672C6.63338 8.28012 6.94678 7.96672 7.33338 7.96672H10C10.3866 7.96672 10.7 8.28012 10.7 8.66672C10.7 9.05331 10.3866 9.36672 10 9.36672H7.33338C6.94678 9.36672 6.63338 9.05331 6.63338 8.66672Z"
      fill="currentColor"
    />
  </svg>
);
export default SquareTerminalIcon;
