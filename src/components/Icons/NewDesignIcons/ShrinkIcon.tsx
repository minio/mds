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

const ShrinkIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M1.50507 1.50507C1.77844 1.23171 2.22166 1.23171 2.49502 1.50507L5.30005 4.3101V2.80005C5.30005 2.41345 5.61345 2.10005 6.00005 2.10005C6.38665 2.10005 6.70005 2.41345 6.70005 2.80005V6.00005C6.70005 6.38665 6.38665 6.70005 6.00005 6.70005H2.80005C2.41345 6.70005 2.10005 6.38665 2.10005 6.00005C2.10005 5.61345 2.41345 5.30005 2.80005 5.30005H4.3101L1.50507 2.49502C1.23171 2.22166 1.23171 1.77844 1.50507 1.50507ZM14.495 1.50507C14.7684 1.77844 14.7684 2.22166 14.495 2.49502L11.69 5.30005H13.2C13.5866 5.30005 13.9 5.61345 13.9 6.00005C13.9 6.38665 13.5866 6.70005 13.2 6.70005H10C9.61345 6.70005 9.30005 6.38665 9.30005 6.00005V2.80005C9.30005 2.41345 9.61345 2.10005 10 2.10005C10.3866 2.10005 10.7 2.41345 10.7 2.80005V4.3101L13.5051 1.50507C13.7784 1.23171 14.2217 1.23171 14.495 1.50507ZM2.10005 10C2.10005 9.61345 2.41345 9.30005 2.80005 9.30005H6.00005C6.38665 9.30005 6.70005 9.61345 6.70005 10V13.2C6.70005 13.5866 6.38665 13.9 6.00005 13.9C5.61345 13.9 5.30005 13.5866 5.30005 13.2V11.69L2.49502 14.495C2.22166 14.7684 1.77844 14.7684 1.50507 14.495C1.23171 14.2217 1.23171 13.7784 1.50507 13.5051L4.3101 10.7H2.80005C2.41345 10.7 2.10005 10.3866 2.10005 10ZM9.30005 10C9.30005 9.61345 9.61345 9.30005 10 9.30005H13.2C13.5866 9.30005 13.9 9.61345 13.9 10C13.9 10.3866 13.5866 10.7 13.2 10.7H11.69L14.495 13.5051C14.7684 13.7784 14.7684 14.2217 14.495 14.495C14.2217 14.7684 13.7784 14.7684 13.5051 14.495L10.7 11.69V13.2C10.7 13.5866 10.3866 13.9 10 13.9C9.61345 13.9 9.30005 13.5866 9.30005 13.2V10Z"
      fill="currentColor"
    />
  </svg>
);
export default ShrinkIcon;
