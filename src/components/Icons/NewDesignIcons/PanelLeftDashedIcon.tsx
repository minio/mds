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

const PanelLeftDashedIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.33332 2.70005C2.98354 2.70005 2.69999 2.9836 2.69999 3.33338V12.6667C2.69999 13.0165 2.98354 13.3 3.33332 13.3H5.29999V12.6667C5.29999 12.2801 5.61339 11.9667 5.99999 11.9667C6.38659 11.9667 6.69999 12.2801 6.69999 12.6667V13.3H12.6667C13.0164 13.3 13.3 13.0165 13.3 12.6667V3.33338C13.3 2.9836 13.0164 2.70005 12.6667 2.70005H6.69999V3.33338C6.69999 3.71998 6.38659 4.03338 5.99999 4.03338C5.61339 4.03338 5.29999 3.71998 5.29999 3.33338V2.70005H3.33332ZM3.33332 1.30005C2.21034 1.30005 1.29999 2.2104 1.29999 3.33338V12.6667C1.29999 13.7897 2.21034 14.7 3.33332 14.7H12.6667C13.7896 14.7 14.7 13.7897 14.7 12.6667V3.33338C14.7 2.2104 13.7896 1.30005 12.6667 1.30005H3.33332ZM5.99999 5.30005C6.38659 5.30005 6.69999 5.61345 6.69999 6.00005V6.66672C6.69999 7.05331 6.38659 7.36672 5.99999 7.36672C5.61339 7.36672 5.29999 7.05331 5.29999 6.66672V6.00005C5.29999 5.61345 5.61339 5.30005 5.99999 5.30005ZM5.99999 8.63338C6.38659 8.63338 6.69999 8.94678 6.69999 9.33338V10C6.69999 10.3866 6.38659 10.7 5.99999 10.7C5.61339 10.7 5.29999 10.3866 5.29999 10V9.33338C5.29999 8.94678 5.61339 8.63338 5.99999 8.63338Z"
      fill="currentColor"
    />
  </svg>
);
export default PanelLeftDashedIcon;
