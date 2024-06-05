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

const AlignLeftIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M1.30005 3.99999C1.30005 3.61339 1.61345 3.29999 2.00005 3.29999H14C14.3866 3.29999 14.7 3.61339 14.7 3.99999C14.7 4.38659 14.3866 4.69999 14 4.69999H2.00005C1.61345 4.69999 1.30005 4.38659 1.30005 3.99999ZM1.30005 7.99999C1.30005 7.61339 1.61345 7.29999 2.00005 7.29999H10C10.3866 7.29999 10.7 7.61339 10.7 7.99999C10.7 8.38659 10.3866 8.69999 10 8.69999H2.00005C1.61345 8.69999 1.30005 8.38659 1.30005 7.99999ZM1.30005 12C1.30005 11.6134 1.61345 11.3 2.00005 11.3H11.3334C11.72 11.3 12.0334 11.6134 12.0334 12C12.0334 12.3866 11.72 12.7 11.3334 12.7H2.00005C1.61345 12.7 1.30005 12.3866 1.30005 12Z"
      fill="currentColor"
    />
  </svg>
);
export default AlignLeftIcon;
