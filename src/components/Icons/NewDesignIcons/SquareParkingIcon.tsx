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

const SquareParkingIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.33338 2.70005C2.9836 2.70005 2.70005 2.9836 2.70005 3.33338V12.6667C2.70005 13.0165 2.9836 13.3 3.33338 13.3H12.6667C13.0165 13.3 13.3 13.0165 13.3 12.6667V3.33338C13.3 2.9836 13.0165 2.70005 12.6667 2.70005H3.33338ZM1.30005 3.33338C1.30005 2.2104 2.2104 1.30005 3.33338 1.30005H12.6667C13.7897 1.30005 14.7 2.2104 14.7 3.33338V12.6667C14.7 13.7897 13.7897 14.7 12.6667 14.7H3.33338C2.2104 14.7 1.30005 13.7897 1.30005 12.6667V3.33338ZM5.30005 4.66672C5.30005 4.28012 5.61345 3.96672 6.00005 3.96672H8.66672C9.3828 3.96672 10.0696 4.25118 10.5759 4.75753C11.0823 5.26388 11.3667 5.95063 11.3667 6.66672C11.3667 7.3828 11.0823 8.06956 10.5759 8.5759C10.0696 9.08225 9.3828 9.36672 8.66672 9.36672H6.70005V11.3334C6.70005 11.72 6.38665 12.0334 6.00005 12.0334C5.61345 12.0334 5.30005 11.72 5.30005 11.3334V4.66672ZM6.70005 7.96672H8.66672C9.0115 7.96672 9.34216 7.82975 9.58595 7.58595C9.82975 7.34216 9.96672 7.0115 9.96672 6.66672C9.96672 6.32193 9.82975 5.99127 9.58595 5.74748C9.34216 5.50368 9.0115 5.36672 8.66672 5.36672H6.70005V7.96672Z"
      fill="currentColor"
    />
  </svg>
);
export default SquareParkingIcon;
