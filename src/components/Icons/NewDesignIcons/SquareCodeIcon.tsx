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

const SquareCodeIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.33332 2.70005C2.98354 2.70005 2.69999 2.9836 2.69999 3.33338V12.6667C2.69999 13.0165 2.98354 13.3 3.33332 13.3H12.6667C13.0164 13.3 13.3 13.0165 13.3 12.6667V3.33338C13.3 2.9836 13.0164 2.70005 12.6667 2.70005H3.33332ZM1.29999 3.33338C1.29999 2.2104 2.21034 1.30005 3.33332 1.30005H12.6667C13.7896 1.30005 14.7 2.2104 14.7 3.33338V12.6667C14.7 13.7897 13.7896 14.7 12.6667 14.7H3.33332C2.21034 14.7 1.29999 13.7897 1.29999 12.6667V3.33338ZM7.16163 6.17174C7.435 6.44511 7.435 6.88832 7.16163 7.16169L6.32327 8.00005L7.16163 8.83841C7.435 9.11177 7.435 9.55499 7.16163 9.82836C6.88826 10.1017 6.44505 10.1017 6.17168 9.82836L4.83835 8.49502C4.56498 8.22166 4.56498 7.77844 4.83835 7.50507L6.17168 6.17174C6.44505 5.89837 6.88826 5.89837 7.16163 6.17174ZM8.83835 6.17174C9.11171 5.89837 9.55493 5.89837 9.8283 6.17174L11.1616 7.50507C11.435 7.77844 11.435 8.22166 11.1616 8.49502L9.8283 9.82836C9.55493 10.1017 9.11171 10.1017 8.83835 9.82836C8.56498 9.55499 8.56498 9.11177 8.83835 8.83841L9.67671 8.00005L8.83835 7.16169C8.56498 6.88832 8.56498 6.44511 8.83835 6.17174Z"
      fill="currentColor"
    />
  </svg>
);
export default SquareCodeIcon;
