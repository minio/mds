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

const Volume2Icon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12.2184 2.79162C12.4918 2.51829 12.9351 2.51836 13.2084 2.79177C14.5894 4.17322 15.3652 6.04663 15.3652 8C15.3652 9.95338 14.5894 11.8268 13.2084 13.2082C12.9351 13.4816 12.4918 13.4817 12.2184 13.2084C11.945 12.9351 11.945 12.4918 12.2183 12.2184C13.3369 11.0995 13.9652 9.58215 13.9652 8C13.9652 6.41786 13.3369 4.90049 12.2183 3.78157C11.945 3.50816 11.945 3.06495 12.2184 2.79162ZM7.63656 2.70242C7.87909 2.81899 8.03333 3.06425 8.03333 3.33334V12.6667C8.03333 12.9358 7.87909 13.181 7.63656 13.2976C7.39404 13.4141 7.10616 13.3814 6.89604 13.2133L3.75445 10.7H1.33333C0.946732 10.7 0.633331 10.3866 0.633331 10V6C0.633331 5.6134 0.946732 5.3 1.33333 5.3H3.75445L6.89604 2.78673C7.10616 2.61863 7.39404 2.58586 7.63656 2.70242ZM6.63333 4.78977L4.43728 6.54661C4.31317 6.64591 4.15895 6.7 4 6.7H2.03333V9.3H4C4.15895 9.3 4.31317 9.3541 4.43728 9.45339L6.63333 11.2102V4.78977ZM9.8651 5.14495C10.1385 4.87163 10.5817 4.8717 10.855 5.1451C11.6112 5.90146 12.036 6.92717 12.036 7.99667C12.036 9.06617 11.6112 10.0919 10.855 10.8482C10.5817 11.1216 10.1385 11.1217 9.8651 10.8484C9.59169 10.5751 9.59162 10.1318 9.86495 9.85844C10.3586 9.36461 10.636 8.69494 10.636 7.99667C10.636 7.2984 10.3586 6.62873 9.86495 6.1349C9.59162 5.8615 9.59169 5.41828 9.8651 5.14495Z"
      fill="currentColor"
    />
  </svg>
);
export default Volume2Icon;
