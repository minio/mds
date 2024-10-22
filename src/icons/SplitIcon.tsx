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

const SplitIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.00005 1.30005H5.33338C5.71998 1.30005 6.03338 1.61345 6.03338 2.00005C6.03338 2.38665 5.71998 2.70005 5.33338 2.70005H3.69L7.71358 6.72363C7.71354 6.72359 7.71361 6.72366 7.71358 6.72363C8.03061 7.04054 8.28128 7.4177 8.45065 7.83275C8.61954 8.24661 8.70431 8.68995 8.70005 9.13689V14.6667C8.70005 15.0533 8.38665 15.3667 8.00005 15.3667C7.61345 15.3667 7.30005 15.0533 7.30005 14.6667V9.12587C7.30286 8.86399 7.25338 8.60419 7.15442 8.36171C7.05547 8.11923 6.90909 7.89895 6.72386 7.71381L2.70005 3.69V5.33338C2.70005 5.71998 2.38665 6.03338 2.00005 6.03338C1.61345 6.03338 1.30005 5.71998 1.30005 5.33338V2.00005C1.30005 1.61345 1.61345 1.30005 2.00005 1.30005ZM12.3101 2.70005H10.6667C10.2801 2.70005 9.96672 2.38665 9.96672 2.00005C9.96672 1.61345 10.2801 1.30005 10.6667 1.30005H14C14.3866 1.30005 14.7 1.61345 14.7 2.00005V5.33338C14.7 5.71998 14.3866 6.03338 14 6.03338C13.6135 6.03338 13.3 5.71998 13.3 5.33338V3.69L10.495 6.49502C10.2217 6.76839 9.77844 6.76839 9.50507 6.49502C9.23171 6.22166 9.23171 5.77844 9.50507 5.50507L12.3101 2.70005Z"
      fill="currentColor"
    />
  </svg>
);
export default SplitIcon;
