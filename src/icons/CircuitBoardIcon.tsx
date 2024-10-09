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

const CircuitBoardIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.33338 2.7C2.9836 2.7 2.70005 2.98356 2.70005 3.33334V12.6667C2.70005 13.0165 2.9836 13.3 3.33338 13.3H3.96672V11.3333C3.96672 10.7941 4.18094 10.2769 4.56227 9.89555C4.94359 9.51423 5.46077 9.3 6.00005 9.3H8.09042C8.37573 8.52189 9.12305 7.96667 10 7.96667C11.123 7.96667 12.0334 8.87702 12.0334 10C12.0334 11.123 11.123 12.0333 10 12.0333C9.12305 12.0333 8.37573 11.4781 8.09042 10.7H6.00005C5.83208 10.7 5.67099 10.7667 5.55221 10.8855C5.43344 11.0043 5.36672 11.1654 5.36672 11.3333V13.3H12.6667C13.0165 13.3 13.3 13.0165 13.3 12.6667V3.33334C13.3 2.98356 13.0165 2.7 12.6667 2.7H12.0334V4.66667C12.0334 5.20594 11.8192 5.72313 11.4378 6.10445C11.0565 6.48578 10.5393 6.7 10 6.7H7.90968C7.62437 7.47812 6.87705 8.03334 6.00005 8.03334C4.87707 8.03334 3.96672 7.12298 3.96672 6C3.96672 4.87702 4.87707 3.96667 6.00005 3.96667C6.87705 3.96667 7.62437 4.52189 7.90968 5.3H10C10.168 5.3 10.3291 5.23328 10.4479 5.1145C10.5667 4.99573 10.6334 4.83464 10.6334 4.66667V2.7H3.33338ZM3.33338 1.3C2.2104 1.3 1.30005 2.21036 1.30005 3.33334V12.6667C1.30005 13.7896 2.2104 14.7 3.33338 14.7H12.6667C13.7897 14.7 14.7 13.7896 14.7 12.6667V3.33334C14.7 2.21036 13.7897 1.3 12.6667 1.3H3.33338ZM6.00005 5.36667C5.65027 5.36667 5.36672 5.65022 5.36672 6C5.36672 6.34978 5.65027 6.63334 6.00005 6.63334C6.34983 6.63334 6.63338 6.34978 6.63338 6C6.63338 5.65022 6.34983 5.36667 6.00005 5.36667ZM10 9.36667C9.65027 9.36667 9.36672 9.65022 9.36672 10C9.36672 10.3498 9.65027 10.6333 10 10.6333C10.3498 10.6333 10.6334 10.3498 10.6334 10C10.6334 9.65022 10.3498 9.36667 10 9.36667Z"
      fill="currentColor"
    />
  </svg>
);
export default CircuitBoardIcon;
