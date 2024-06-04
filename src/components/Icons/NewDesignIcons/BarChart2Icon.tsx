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

const BarChart2Icon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.99999 1.96666C8.38659 1.96666 8.69999 2.28006 8.69999 2.66666V13.3333C8.69999 13.7199 8.38659 14.0333 7.99999 14.0333C7.61339 14.0333 7.29999 13.7199 7.29999 13.3333V2.66666C7.29999 2.28006 7.61339 1.96666 7.99999 1.96666ZM12 5.96666C12.3866 5.96666 12.7 6.28006 12.7 6.66666V13.3333C12.7 13.7199 12.3866 14.0333 12 14.0333C11.6134 14.0333 11.3 13.7199 11.3 13.3333V6.66666C11.3 6.28006 11.6134 5.96666 12 5.96666ZM3.99999 8.63333C4.38659 8.63333 4.69999 8.94673 4.69999 9.33333V13.3333C4.69999 13.7199 4.38659 14.0333 3.99999 14.0333C3.61339 14.0333 3.29999 13.7199 3.29999 13.3333V9.33333C3.29999 8.94673 3.61339 8.63333 3.99999 8.63333Z"
      fill="currentColor"
    />
  </svg>
);
export default BarChart2Icon;
