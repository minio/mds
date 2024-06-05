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

const BookMarkedIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.33322 2.03333C4.07684 2.03333 3.83097 2.13518 3.64968 2.31646C3.4684 2.49775 3.36655 2.74362 3.36655 3V10.8398C3.6678 10.705 3.99682 10.6333 4.33322 10.6333H12.6332V2.03333H11.3666V6.66666C11.3666 6.94979 11.196 7.20503 10.9344 7.31338C10.6729 7.42173 10.3718 7.36184 10.1716 7.16164L8.66655 5.65661L7.16153 7.16164C6.96133 7.36184 6.66025 7.42173 6.39867 7.31338C6.1371 7.20503 5.96655 6.94979 5.96655 6.66666V2.03333H4.33322ZM4.33322 0.633331C3.70554 0.633331 3.10357 0.882676 2.65973 1.32651C2.2159 1.77035 1.96655 2.37232 1.96655 3V13C1.96655 13.6277 2.2159 14.2296 2.65973 14.6735C3.10357 15.1173 3.70554 15.3667 4.33322 15.3667H13.3332C13.7198 15.3667 14.0332 15.0533 14.0332 14.6667V1.33333C14.0332 0.946732 13.7198 0.633331 13.3332 0.633331H4.33322ZM7.36655 2.03333V4.97671L8.17158 4.17169C8.44494 3.89832 8.88816 3.89832 9.16153 4.17169L9.96655 4.97671V2.03333H7.36655ZM12.6332 12.0333H4.33322C4.07684 12.0333 3.83097 12.1352 3.64968 12.3165C3.4684 12.4977 3.36655 12.7436 3.36655 13C3.36655 13.2564 3.4684 13.5022 3.64968 13.6835C3.83097 13.8648 4.07684 13.9667 4.33322 13.9667H12.6332V12.0333Z"
      fill="currentColor"
    />
  </svg>
);
export default BookMarkedIcon;
