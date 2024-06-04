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

const BarChartIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 1.96666C12.3866 1.96666 12.7 2.28006 12.7 2.66666V13.3333C12.7 13.7199 12.3866 14.0333 12 14.0333C11.6134 14.0333 11.3 13.7199 11.3 13.3333V2.66666C11.3 2.28006 11.6134 1.96666 12 1.96666ZM8.00005 5.96666C8.38665 5.96666 8.70005 6.28006 8.70005 6.66666V13.3333C8.70005 13.7199 8.38665 14.0333 8.00005 14.0333C7.61345 14.0333 7.30005 13.7199 7.30005 13.3333V6.66666C7.30005 6.28006 7.61345 5.96666 8.00005 5.96666ZM4.00005 9.96666C4.38665 9.96666 4.70005 10.2801 4.70005 10.6667V13.3333C4.70005 13.7199 4.38665 14.0333 4.00005 14.0333C3.61345 14.0333 3.30005 13.7199 3.30005 13.3333V10.6667C3.30005 10.2801 3.61345 9.96666 4.00005 9.96666Z"
      fill="currentColor"
    />
  </svg>
);
export default BarChartIcon;
