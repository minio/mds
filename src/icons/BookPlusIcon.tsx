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

const BookPlusIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.33333 2.03333C4.07695 2.03333 3.83107 2.13518 3.64979 2.31646C3.4685 2.49775 3.36666 2.74362 3.36666 3V10.8398C3.66791 10.705 3.99692 10.6333 4.33333 10.6333H12.6333V2.03333H4.33333ZM14.0333 1.33333C14.0333 0.946732 13.7199 0.633331 13.3333 0.633331H4.33333C3.70565 0.633331 3.10368 0.882676 2.65984 1.32651C2.216 1.77035 1.96666 2.37232 1.96666 3V13C1.96666 13.6277 2.216 14.2296 2.65984 14.6735C3.10368 15.1173 3.70565 15.3667 4.33333 15.3667H13.3333C13.7199 15.3667 14.0333 15.0533 14.0333 14.6667V1.33333ZM12.6333 12.0333H4.33333C4.07695 12.0333 3.83107 12.1352 3.64979 12.3165C3.4685 12.4977 3.36666 12.7436 3.36666 13C3.36666 13.2564 3.4685 13.5022 3.64979 13.6835C3.83107 13.8648 4.07695 13.9667 4.33333 13.9667H12.6333V12.0333ZM7.99999 3.96666C8.38659 3.96666 8.69999 4.28006 8.69999 4.66666V5.96666H9.99999C10.3866 5.96666 10.7 6.28006 10.7 6.66666C10.7 7.05326 10.3866 7.36666 9.99999 7.36666H8.69999V8.66666C8.69999 9.05326 8.38659 9.36666 7.99999 9.36666C7.61339 9.36666 7.29999 9.05326 7.29999 8.66666V7.36666H5.99999C5.61339 7.36666 5.29999 7.05326 5.29999 6.66666C5.29999 6.28006 5.61339 5.96666 5.99999 5.96666H7.29999V4.66666C7.29999 4.28006 7.61339 3.96666 7.99999 3.96666Z"
      fill="currentColor"
    />
  </svg>
);
export default BookPlusIcon;
