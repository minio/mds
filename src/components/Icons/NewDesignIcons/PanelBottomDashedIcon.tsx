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

const PanelBottomDashedIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.33332 2.70005C2.98354 2.70005 2.69999 2.9836 2.69999 3.33338V9.30005H3.33332C3.71992 9.30005 4.03332 9.61345 4.03332 10C4.03332 10.3866 3.71992 10.7 3.33332 10.7H2.69999V12.6667C2.69999 13.0165 2.98354 13.3 3.33332 13.3H12.6667C13.0164 13.3 13.3 13.0165 13.3 12.6667V10.7H12.6667C12.2801 10.7 11.9667 10.3866 11.9667 10C11.9667 9.61345 12.2801 9.30005 12.6667 9.30005H13.3V3.33338C13.3 2.9836 13.0164 2.70005 12.6667 2.70005H3.33332ZM14.7 3.33338C14.7 2.2104 13.7896 1.30005 12.6667 1.30005H3.33332C2.21034 1.30005 1.29999 2.2104 1.29999 3.33338V12.6667C1.29999 13.7897 2.21034 14.7 3.33332 14.7H12.6667C13.7896 14.7 14.7 13.7897 14.7 12.6667V3.33338ZM5.29999 10C5.29999 9.61345 5.61339 9.30005 5.99999 9.30005H6.66665C7.05325 9.30005 7.36665 9.61345 7.36665 10C7.36665 10.3866 7.05325 10.7 6.66665 10.7H5.99999C5.61339 10.7 5.29999 10.3866 5.29999 10ZM8.63332 10C8.63332 9.61345 8.94672 9.30005 9.33332 9.30005H9.99999C10.3866 9.30005 10.7 9.61345 10.7 10C10.7 10.3866 10.3866 10.7 9.99999 10.7H9.33332C8.94672 10.7 8.63332 10.3866 8.63332 10Z"
      fill="currentColor"
    />
  </svg>
);
export default PanelBottomDashedIcon;
