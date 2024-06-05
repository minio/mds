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

const BookMinusIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.33333 2.03333C4.07696 2.03333 3.83108 2.13518 3.6498 2.31646C3.46851 2.49775 3.36667 2.74362 3.36667 3V10.8398C3.66791 10.705 3.99693 10.6333 4.33333 10.6333H12.6333V2.03333H4.33333ZM14.0333 1.33333C14.0333 0.946732 13.7199 0.633331 13.3333 0.633331H4.33333C3.70565 0.633331 3.10368 0.882676 2.65985 1.32651C2.21601 1.77035 1.96667 2.37232 1.96667 3V13C1.96667 13.6277 2.21601 14.2296 2.65985 14.6735C3.10368 15.1173 3.70565 15.3667 4.33333 15.3667H13.3333C13.7199 15.3667 14.0333 15.0533 14.0333 14.6667V1.33333ZM12.6333 12.0333H4.33333C4.07696 12.0333 3.83108 12.1352 3.6498 12.3165C3.46851 12.4977 3.36667 12.7436 3.36667 13C3.36667 13.2564 3.46851 13.5022 3.6498 13.6835C3.83108 13.8648 4.07696 13.9667 4.33333 13.9667H12.6333V12.0333ZM5.3 6.66666C5.3 6.28006 5.6134 5.96666 6 5.96666H10C10.3866 5.96666 10.7 6.28006 10.7 6.66666C10.7 7.05326 10.3866 7.36666 10 7.36666H6C5.6134 7.36666 5.3 7.05326 5.3 6.66666Z"
      fill="currentColor"
    />
  </svg>
);
export default BookMinusIcon;
