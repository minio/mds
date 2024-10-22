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

const RefreshCwIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.99867 2.70005C6.5935 2.7004 5.24595 3.25875 4.25232 4.25238C3.25838 5.24633 2.69999 6.5944 2.69999 8.00005C2.69999 8.38665 2.38659 8.70005 1.99999 8.70005C1.61339 8.70005 1.29999 8.38665 1.29999 8.00005C1.29999 6.2231 2.00588 4.51893 3.26237 3.26243C4.51887 2.00594 6.22304 1.30005 7.99999 1.30005H8.00262V1.30005C9.86063 1.30704 11.644 2.03203 12.9799 3.32344L12.9884 3.33167L12.9883 3.33174L13.3 3.64343V2.00005C13.3 1.61345 13.6134 1.30005 14 1.30005C14.3866 1.30005 14.7 1.61345 14.7 2.00005V5.33338C14.7 5.71998 14.3866 6.03338 14 6.03338H10.6667C10.2801 6.03338 9.96665 5.71998 9.96665 5.33338C9.96665 4.94678 10.2801 4.63338 10.6667 4.63338H12.31L12.0027 4.326C10.9273 3.28851 9.49301 2.70601 7.99867 2.70005ZM11.7477 11.7477C12.7416 10.7538 13.3 9.4057 13.3 8.00005C13.3 7.61345 13.6134 7.30005 14 7.30005C14.3866 7.30005 14.7 7.61345 14.7 8.00005C14.7 9.777 13.9941 11.4812 12.7376 12.7377C11.4811 13.9942 9.77694 14.7 7.99999 14.7L7.99735 14.7C6.13935 14.6931 4.35598 13.9681 3.02012 12.6767L3.01161 12.6684L3.01168 12.6684L2.69999 12.3567V14C2.69999 14.3866 2.38659 14.7 1.99999 14.7C1.61339 14.7 1.29999 14.3866 1.29999 14V10.6667C1.29999 10.2801 1.61339 9.96672 1.99999 9.96672H5.33332C5.71992 9.96672 6.03332 10.2801 6.03332 10.6667C6.03332 11.0533 5.71992 11.3667 5.33332 11.3667H3.68994L3.99731 11.6741C5.07266 12.7116 6.50699 13.2941 8.00134 13.3C9.4065 13.2997 10.754 12.7413 11.7477 11.7477Z"
      fill="currentColor"
    />
  </svg>
);
export default RefreshCwIcon;
