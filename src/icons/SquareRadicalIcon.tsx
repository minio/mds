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

const SquareRadicalIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.33338 2.70005C2.9836 2.70005 2.70005 2.9836 2.70005 3.33338V12.6667C2.70005 13.0165 2.9836 13.3 3.33338 13.3H12.6667C13.0165 13.3 13.3 13.0165 13.3 12.6667V3.33338C13.3 2.9836 13.0165 2.70005 12.6667 2.70005H3.33338ZM1.30005 3.33338C1.30005 2.2104 2.2104 1.30005 3.33338 1.30005H12.6667C13.7897 1.30005 14.7 2.2104 14.7 3.33338V12.6667C14.7 13.7897 13.7897 14.7 12.6667 14.7H3.33338C2.2104 14.7 1.30005 13.7897 1.30005 12.6667V3.33338ZM7.98031 4.52943C8.04575 4.20224 8.33304 3.96672 8.66672 3.96672H11.3334C11.72 3.96672 12.0334 4.28012 12.0334 4.66672C12.0334 5.05331 11.72 5.36672 11.3334 5.36672H9.24058L8.01979 11.4707C7.95904 11.7744 7.70586 12.0021 7.39738 12.0305C7.0889 12.0588 6.7985 11.881 6.68345 11.5934L5.52613 8.70005H4.66672C4.28012 8.70005 3.96672 8.38665 3.96672 8.00005C3.96672 7.61345 4.28012 7.30005 4.66672 7.30005H6.00005C6.28628 7.30005 6.54368 7.47431 6.64998 7.74008L7.10878 8.88707L7.98031 4.52943Z"
      fill="currentColor"
    />
  </svg>
);
export default SquareRadicalIcon;
