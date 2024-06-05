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

const CaptionsIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.33338 4.03333C2.9836 4.03333 2.70005 4.31689 2.70005 4.66667V11.3333C2.70005 11.6831 2.9836 11.9667 3.33338 11.9667H12.6667C13.0165 11.9667 13.3 11.6831 13.3 11.3333V4.66667C13.3 4.31689 13.0165 4.03333 12.6667 4.03333H3.33338ZM1.30005 4.66667C1.30005 3.54369 2.2104 2.63333 3.33338 2.63333H12.6667C13.7897 2.63333 14.7 3.54369 14.7 4.66667V11.3333C14.7 12.4563 13.7897 13.3667 12.6667 13.3667H3.33338C2.2104 13.3667 1.30005 12.4563 1.30005 11.3333V4.66667ZM3.96672 7.33333C3.96672 6.94673 4.28012 6.63333 4.66672 6.63333H6.00005C6.38665 6.63333 6.70005 6.94673 6.70005 7.33333C6.70005 7.71993 6.38665 8.03333 6.00005 8.03333H4.66672C4.28012 8.03333 3.96672 7.71993 3.96672 7.33333ZM7.96672 7.33333C7.96672 6.94673 8.28012 6.63333 8.66672 6.63333H11.3334C11.72 6.63333 12.0334 6.94673 12.0334 7.33333C12.0334 7.71993 11.72 8.03333 11.3334 8.03333H8.66672C8.28012 8.03333 7.96672 7.71993 7.96672 7.33333ZM3.96672 10C3.96672 9.6134 4.28012 9.3 4.66672 9.3H7.33338C7.71998 9.3 8.03338 9.6134 8.03338 10C8.03338 10.3866 7.71998 10.7 7.33338 10.7H4.66672C4.28012 10.7 3.96672 10.3866 3.96672 10ZM9.30005 10C9.30005 9.6134 9.61345 9.3 10 9.3H11.3334C11.72 9.3 12.0334 9.6134 12.0334 10C12.0334 10.3866 11.72 10.7 11.3334 10.7H10C9.61345 10.7 9.30005 10.3866 9.30005 10Z"
      fill="currentColor"
    />
  </svg>
);
export default CaptionsIcon;
