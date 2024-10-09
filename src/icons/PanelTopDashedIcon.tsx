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

const PanelTopDashedIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.33338 2.70005C2.9836 2.70005 2.70005 2.9836 2.70005 3.33338V5.30005H3.33338C3.71998 5.30005 4.03338 5.61345 4.03338 6.00005C4.03338 6.38665 3.71998 6.70005 3.33338 6.70005H2.70005V12.6667C2.70005 13.0165 2.9836 13.3 3.33338 13.3H12.6667C13.0165 13.3 13.3 13.0165 13.3 12.6667V6.70005H12.6667C12.2801 6.70005 11.9667 6.38665 11.9667 6.00005C11.9667 5.61345 12.2801 5.30005 12.6667 5.30005H13.3V3.33338C13.3 2.9836 13.0165 2.70005 12.6667 2.70005H3.33338ZM14.7 3.33338C14.7 2.2104 13.7897 1.30005 12.6667 1.30005H3.33338C2.2104 1.30005 1.30005 2.2104 1.30005 3.33338V12.6667C1.30005 13.7897 2.2104 14.7 3.33338 14.7H12.6667C13.7897 14.7 14.7 13.7897 14.7 12.6667V3.33338ZM5.30005 6.00005C5.30005 5.61345 5.61345 5.30005 6.00005 5.30005H6.66672C7.05331 5.30005 7.36672 5.61345 7.36672 6.00005C7.36672 6.38665 7.05331 6.70005 6.66672 6.70005H6.00005C5.61345 6.70005 5.30005 6.38665 5.30005 6.00005ZM8.63338 6.00005C8.63338 5.61345 8.94678 5.30005 9.33338 5.30005H10C10.3866 5.30005 10.7 5.61345 10.7 6.00005C10.7 6.38665 10.3866 6.70005 10 6.70005H9.33338C8.94678 6.70005 8.63338 6.38665 8.63338 6.00005Z"
      fill="currentColor"
    />
  </svg>
);
export default PanelTopDashedIcon;
