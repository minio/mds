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

const GanttChartIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.63332 3.99999C4.63332 3.61339 4.94672 3.29999 5.33332 3.29999H12C12.3866 3.29999 12.7 3.61339 12.7 3.99999C12.7 4.38659 12.3866 4.69999 12 4.69999H5.33332C4.94672 4.69999 4.63332 4.38659 4.63332 3.99999ZM3.29999 7.99999C3.29999 7.61339 3.61339 7.29999 3.99999 7.29999H9.99999C10.3866 7.29999 10.7 7.61339 10.7 7.99999C10.7 8.38659 10.3866 8.69999 9.99999 8.69999H3.99999C3.61339 8.69999 3.29999 8.38659 3.29999 7.99999ZM6.63332 12C6.63332 11.6134 6.94672 11.3 7.33332 11.3H12C12.3866 11.3 12.7 11.6134 12.7 12C12.7 12.3866 12.3866 12.7 12 12.7H7.33332C6.94672 12.7 6.63332 12.3866 6.63332 12Z"
      fill="currentColor"
    />
  </svg>
);
export default GanttChartIcon;
