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

const BookImageIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.33322 2.03333C4.07684 2.03333 3.83097 2.13518 3.64968 2.31646C3.4684 2.49775 3.36655 2.74362 3.36655 3V10.8398C3.6678 10.705 3.99682 10.6333 4.33322 10.6333H6.1766L9.57158 7.23836C10.3783 6.43166 11.6215 6.43166 12.4282 7.23836L12.6332 7.44338V2.03333H4.33322ZM14.0332 9.13254V1.33333C14.0332 0.946732 13.7198 0.633331 13.3332 0.633331H4.33322C3.70554 0.633331 3.10357 0.882676 2.65973 1.32651C2.2159 1.77035 1.96655 2.37232 1.96655 3V13C1.96655 13.6277 2.2159 14.2296 2.65973 14.6735C3.10357 15.1173 3.70554 15.3667 4.33322 15.3667H13.3332C13.7198 15.3667 14.0332 15.0533 14.0332 14.6667V9.13412C14.0332 9.13359 14.0332 9.13307 14.0332 9.13254ZM12.6332 9.42328L11.4382 8.22831C11.1783 7.96834 10.8215 7.96834 10.5615 8.22831L8.1565 10.6333H12.6332V9.42328ZM12.6332 12.0333H4.33322C4.07684 12.0333 3.83097 12.1352 3.64968 12.3165C3.4684 12.4977 3.36655 12.7436 3.36655 13C3.36655 13.2564 3.4684 13.5022 3.64968 13.6835C3.83097 13.8648 4.07684 13.9667 4.33322 13.9667H12.6332V12.0333ZM6.66655 4.7C6.31677 4.7 6.03322 4.98355 6.03322 5.33333C6.03322 5.68311 6.31677 5.96666 6.66655 5.96666C7.01633 5.96666 7.29989 5.68311 7.29989 5.33333C7.29989 4.98355 7.01633 4.7 6.66655 4.7ZM4.63322 5.33333C4.63322 4.21035 5.54357 3.3 6.66655 3.3C7.78953 3.3 8.69989 4.21035 8.69989 5.33333C8.69989 6.45631 7.78953 7.36666 6.66655 7.36666C5.54357 7.36666 4.63322 6.45631 4.63322 5.33333Z"
      fill="currentColor"
    />
  </svg>
);
export default BookImageIcon;
