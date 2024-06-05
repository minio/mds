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

const BarcodeIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.00005 2.63333C2.38665 2.63333 2.70005 2.94673 2.70005 3.33333V12.6667C2.70005 13.0533 2.38665 13.3667 2.00005 13.3667C1.61345 13.3667 1.30005 13.0533 1.30005 12.6667V3.33333C1.30005 2.94673 1.61345 2.63333 2.00005 2.63333ZM5.33338 2.63333C5.71998 2.63333 6.03338 2.94673 6.03338 3.33333V12.6667C6.03338 13.0533 5.71998 13.3667 5.33338 13.3667C4.94678 13.3667 4.63338 13.0533 4.63338 12.6667V3.33333C4.63338 2.94673 4.94678 2.63333 5.33338 2.63333ZM8.00005 2.63333C8.38665 2.63333 8.70005 2.94673 8.70005 3.33333V12.6667C8.70005 13.0533 8.38665 13.3667 8.00005 13.3667C7.61345 13.3667 7.30005 13.0533 7.30005 12.6667V3.33333C7.30005 2.94673 7.61345 2.63333 8.00005 2.63333ZM11.3334 2.63333C11.72 2.63333 12.0334 2.94673 12.0334 3.33333V12.6667C12.0334 13.0533 11.72 13.3667 11.3334 13.3667C10.9468 13.3667 10.6334 13.0533 10.6334 12.6667V3.33333C10.6334 2.94673 10.9468 2.63333 11.3334 2.63333ZM14 2.63333C14.3866 2.63333 14.7 2.94673 14.7 3.33333V12.6667C14.7 13.0533 14.3866 13.3667 14 13.3667C13.6135 13.3667 13.3 13.0533 13.3 12.6667V3.33333C13.3 2.94673 13.6135 2.63333 14 2.63333Z"
      fill="currentColor"
    />
  </svg>
);
export default BarcodeIcon;
