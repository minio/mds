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

const PanelRightDashedIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.33338 2.70005C2.9836 2.70005 2.70005 2.9836 2.70005 3.33338V12.6667C2.70005 13.0165 2.9836 13.3 3.33338 13.3H9.30005V12.6667C9.30005 12.2801 9.61345 11.9667 10 11.9667C10.3866 11.9667 10.7 12.2801 10.7 12.6667V13.3H12.6667C13.0165 13.3 13.3 13.0165 13.3 12.6667V3.33338C13.3 2.9836 13.0165 2.70005 12.6667 2.70005H10.7V3.33338C10.7 3.71998 10.3866 4.03338 10 4.03338C9.61345 4.03338 9.30005 3.71998 9.30005 3.33338V2.70005H3.33338ZM3.33338 1.30005C2.2104 1.30005 1.30005 2.2104 1.30005 3.33338V12.6667C1.30005 13.7897 2.2104 14.7 3.33338 14.7H12.6667C13.7897 14.7 14.7 13.7897 14.7 12.6667V3.33338C14.7 2.2104 13.7897 1.30005 12.6667 1.30005H3.33338ZM10 5.30005C10.3866 5.30005 10.7 5.61345 10.7 6.00005V6.66672C10.7 7.05331 10.3866 7.36672 10 7.36672C9.61345 7.36672 9.30005 7.05331 9.30005 6.66672V6.00005C9.30005 5.61345 9.61345 5.30005 10 5.30005ZM10 8.63338C10.3866 8.63338 10.7 8.94678 10.7 9.33338V10C10.7 10.3866 10.3866 10.7 10 10.7C9.61345 10.7 9.30005 10.3866 9.30005 10V9.33338C9.30005 8.94678 9.61345 8.63338 10 8.63338Z"
      fill="currentColor"
    />
  </svg>
);
export default PanelRightDashedIcon;
