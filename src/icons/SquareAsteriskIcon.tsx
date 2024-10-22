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

const SquareAsteriskIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.33338 2.70005C2.9836 2.70005 2.70005 2.9836 2.70005 3.33338V12.6667C2.70005 13.0165 2.9836 13.3 3.33338 13.3H12.6667C13.0165 13.3 13.3 13.0165 13.3 12.6667V3.33338C13.3 2.9836 13.0165 2.70005 12.6667 2.70005H3.33338ZM1.30005 3.33338C1.30005 2.2104 2.2104 1.30005 3.33338 1.30005H12.6667C13.7897 1.30005 14.7 2.2104 14.7 3.33338V12.6667C14.7 13.7897 13.7897 14.7 12.6667 14.7H3.33338C2.2104 14.7 1.30005 13.7897 1.30005 12.6667V3.33338ZM8.00005 4.63338C8.38665 4.63338 8.70005 4.94678 8.70005 5.33338V6.79382L9.98608 6.05895C10.3217 5.86714 10.7493 5.98376 10.9412 6.31942C11.133 6.65508 11.0163 7.08268 10.6807 7.27449L9.41094 8.00005L10.6807 8.72561C11.0163 8.91742 11.133 9.34502 10.9412 9.68068C10.7493 10.0163 10.3217 10.133 9.98608 9.94115L8.70005 9.20627V10.6667C8.70005 11.0533 8.38665 11.3667 8.00005 11.3667C7.61345 11.3667 7.30005 11.0533 7.30005 10.6667V9.20627L6.01401 9.94115C5.67835 10.133 5.25075 10.0163 5.05895 9.68068C4.86714 9.34502 4.98376 8.91742 5.31942 8.72561L6.58915 8.00005L5.31942 7.27449C4.98376 7.08268 4.86714 6.65508 5.05895 6.31942C5.25075 5.98376 5.67835 5.86714 6.01401 6.05895L7.30005 6.79382V5.33338C7.30005 4.94678 7.61345 4.63338 8.00005 4.63338Z"
      fill="currentColor"
    />
  </svg>
);
export default SquareAsteriskIcon;
