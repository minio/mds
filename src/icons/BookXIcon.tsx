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

const BookXIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.33334 2.03333C4.07697 2.03333 3.83109 2.13518 3.6498 2.31646C3.46852 2.49775 3.36667 2.74362 3.36667 3V10.8398C3.66792 10.705 3.99694 10.6333 4.33334 10.6333H12.6333V2.03333H4.33334ZM14.0333 1.33333C14.0333 0.946732 13.7199 0.633331 13.3333 0.633331H4.33334C3.70566 0.633331 3.10369 0.882676 2.65986 1.32651C2.21602 1.77035 1.96667 2.37232 1.96667 3V13C1.96667 13.6277 2.21602 14.2296 2.65986 14.6735C3.10369 15.1173 3.70566 15.3667 4.33334 15.3667H13.3333C13.7199 15.3667 14.0333 15.0533 14.0333 14.6667V1.33333ZM12.6333 12.0333H4.33334C4.07697 12.0333 3.83109 12.1352 3.6498 12.3165C3.46852 12.4977 3.36667 12.7436 3.36667 13C3.36667 13.2564 3.46852 13.5022 3.6498 13.6835C3.83109 13.8648 4.07697 13.9667 4.33334 13.9667H12.6333V12.0333ZM5.83837 4.17169C6.11173 3.89832 6.55495 3.89832 6.82832 4.17169L8.00001 5.34338L9.1717 4.17169C9.44507 3.89832 9.88828 3.89832 10.1616 4.17169C10.435 4.44506 10.435 4.88827 10.1616 5.16164L8.98996 6.33333L10.1616 7.50502C10.435 7.77839 10.435 8.22161 10.1616 8.49497C9.88828 8.76834 9.44507 8.76834 9.1717 8.49497L8.00001 7.32328L6.82832 8.49497C6.55495 8.76834 6.11173 8.76834 5.83837 8.49497C5.565 8.22161 5.565 7.77839 5.83837 7.50502L7.01006 6.33333L5.83837 5.16164C5.565 4.88827 5.565 4.44506 5.83837 4.17169Z"
      fill="currentColor"
    />
  </svg>
);
export default BookXIcon;
