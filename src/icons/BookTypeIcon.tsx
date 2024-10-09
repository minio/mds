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

const BookTypeIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.33334 2.03333C4.07697 2.03333 3.83109 2.13518 3.6498 2.31646C3.46852 2.49775 3.36667 2.74362 3.36667 3V10.8398C3.66792 10.705 3.99694 10.6333 4.33334 10.6333H12.6333V2.03333H4.33334ZM14.0333 1.33333C14.0333 0.946732 13.7199 0.633331 13.3333 0.633331H4.33334C3.70566 0.633331 3.10369 0.882676 2.65986 1.32651C2.21602 1.77035 1.96667 2.37232 1.96667 3V13C1.96667 13.6277 2.21602 14.2296 2.65986 14.6735C3.10369 15.1173 3.70566 15.3667 4.33334 15.3667H13.3333C13.7199 15.3667 14.0333 15.0533 14.0333 14.6667V1.33333ZM12.6333 12.0333H4.33334C4.07697 12.0333 3.83109 12.1352 3.6498 12.3165C3.46852 12.4977 3.36667 12.7436 3.36667 13C3.36667 13.2564 3.46852 13.5022 3.6498 13.6835C3.83109 13.8648 4.07697 13.9667 4.33334 13.9667H12.6333V12.0333ZM4.63334 4C4.63334 3.6134 4.94674 3.3 5.33334 3.3H10.6667C11.0533 3.3 11.3667 3.6134 11.3667 4V5.33333C11.3667 5.71993 11.0533 6.03333 10.6667 6.03333C10.2801 6.03333 9.96667 5.71993 9.96667 5.33333V4.7H8.70001V7.96666H9.33334C9.71994 7.96666 10.0333 8.28006 10.0333 8.66666C10.0333 9.05326 9.71994 9.36666 9.33334 9.36666H6.66667C6.28008 9.36666 5.96667 9.05326 5.96667 8.66666C5.96667 8.28006 6.28008 7.96666 6.66667 7.96666H7.30001V4.7H6.03334V5.33333C6.03334 5.71993 5.71994 6.03333 5.33334 6.03333C4.94674 6.03333 4.63334 5.71993 4.63334 5.33333V4Z"
      fill="currentColor"
    />
  </svg>
);
export default BookTypeIcon;
