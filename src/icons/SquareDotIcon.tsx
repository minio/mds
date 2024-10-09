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

const SquareDotIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.33332 2.70005C2.98354 2.70005 2.69999 2.9836 2.69999 3.33338V12.6667C2.69999 13.0165 2.98354 13.3 3.33332 13.3H12.6667C13.0164 13.3 13.3 13.0165 13.3 12.6667V3.33338C13.3 2.9836 13.0164 2.70005 12.6667 2.70005H3.33332ZM1.29999 3.33338C1.29999 2.2104 2.21034 1.30005 3.33332 1.30005H12.6667C13.7896 1.30005 14.7 2.2104 14.7 3.33338V12.6667C14.7 13.7897 13.7896 14.7 12.6667 14.7H3.33332C2.21034 14.7 1.29999 13.7897 1.29999 12.6667V3.33338ZM7.99999 8.03338C8.0184 8.03338 8.03332 8.01846 8.03332 8.00005C8.03332 7.98164 8.0184 7.96672 7.99999 7.96672C7.98158 7.96672 7.96665 7.98164 7.96665 8.00005C7.96665 8.01846 7.98158 8.03338 7.99999 8.03338ZM6.63332 8.00005C6.63332 7.24526 7.2452 6.63338 7.99999 6.63338C8.75478 6.63338 9.36665 7.24526 9.36665 8.00005C9.36665 8.75484 8.75478 9.36672 7.99999 9.36672C7.2452 9.36672 6.63332 8.75484 6.63332 8.00005Z"
      fill="currentColor"
    />
  </svg>
);
export default SquareDotIcon;
