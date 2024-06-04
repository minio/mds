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

const LayoutDashboardIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.70005 2.69999V7.29999H5.96672V2.69999H2.70005ZM1.30005 2.66665C1.30005 1.91187 1.91193 1.29999 2.66672 1.29999H6.00005C6.75484 1.29999 7.36672 1.91187 7.36672 2.66665V7.33332C7.36672 8.08811 6.75484 8.69999 6.00005 8.69999H2.66672C1.91193 8.69999 1.30005 8.08811 1.30005 7.33332V2.66665ZM10.0334 2.69999V4.63332H13.3V2.69999H10.0334ZM8.63338 2.66665C8.63338 1.91187 9.24526 1.29999 10 1.29999H13.3334C14.0882 1.29999 14.7 1.91187 14.7 2.66665V4.66665C14.7 5.42144 14.0882 6.03332 13.3334 6.03332H10C9.24526 6.03332 8.63338 5.42144 8.63338 4.66665V2.66665ZM10.0334 8.69999V13.3H13.3V8.69999H10.0334ZM8.63338 8.66665C8.63338 7.91187 9.24526 7.29999 10 7.29999H13.3334C14.0882 7.29999 14.7 7.91187 14.7 8.66665V13.3333C14.7 14.0881 14.0882 14.7 13.3334 14.7H10C9.24526 14.7 8.63338 14.0881 8.63338 13.3333V8.66665ZM2.70005 11.3667V13.3H5.96672V11.3667H2.70005ZM1.30005 11.3333C1.30005 10.5785 1.91193 9.96665 2.66672 9.96665H6.00005C6.75484 9.96665 7.36672 10.5785 7.36672 11.3333V13.3333C7.36672 14.0881 6.75484 14.7 6.00005 14.7H2.66672C1.91193 14.7 1.30005 14.0881 1.30005 13.3333V11.3333Z"
      fill="currentColor"
    />
  </svg>
);
export default LayoutDashboardIcon;
