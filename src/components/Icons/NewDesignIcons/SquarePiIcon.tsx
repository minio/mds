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

const SquarePiIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.33338 2.70005C2.9836 2.70005 2.70005 2.9836 2.70005 3.33338V12.6667C2.70005 13.0165 2.9836 13.3 3.33338 13.3H12.6667C13.0165 13.3 13.3 13.0165 13.3 12.6667V3.33338C13.3 2.9836 13.0165 2.70005 12.6667 2.70005H3.33338ZM1.30005 3.33338C1.30005 2.2104 2.2104 1.30005 3.33338 1.30005H12.6667C13.7897 1.30005 14.7 2.2104 14.7 3.33338V12.6667C14.7 13.7897 13.7897 14.7 12.6667 14.7H3.33338C2.2104 14.7 1.30005 13.7897 1.30005 12.6667V3.33338ZM3.96672 4.66672C3.96672 4.28012 4.28012 3.96672 4.66672 3.96672H11.3334C11.72 3.96672 12.0334 4.28012 12.0334 4.66672C12.0334 5.05331 11.72 5.36672 11.3334 5.36672H10.0334V10C10.0334 10.168 10.1001 10.3291 10.2189 10.4479C10.3377 10.5667 10.4987 10.6334 10.6667 10.6334C11.0533 10.6334 11.3667 10.9468 11.3667 11.3334C11.3667 11.72 11.0533 12.0334 10.6667 12.0334C10.1274 12.0334 9.61026 11.8192 9.22893 11.4378C8.84761 11.0565 8.63338 10.5393 8.63338 10V5.36672H7.36672V11.3334C7.36672 11.72 7.05331 12.0334 6.66672 12.0334C6.28012 12.0334 5.96672 11.72 5.96672 11.3334V5.36672H4.66672C4.28012 5.36672 3.96672 5.05331 3.96672 4.66672Z"
      fill="currentColor"
    />
  </svg>
);
export default SquarePiIcon;
