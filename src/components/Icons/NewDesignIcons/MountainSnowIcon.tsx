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

const MountainSnowIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5.28368 1.30176C5.56609 1.28169 5.83279 1.43371 5.9594 1.68695L8.19174 6.15161L10.8383 3.50502C11.0099 3.33347 11.258 3.26298 11.4941 3.31872C11.7302 3.37446 11.9207 3.54848 11.9974 3.77864L14.1459 10.2243C14.1494 10.2341 14.1527 10.2439 14.1558 10.2538L15.3307 13.7786C15.4019 13.9921 15.3661 14.2268 15.2345 14.4093C15.1029 14.5918 14.8916 14.7 14.6666 14.7H1.33331C1.1083 14.7 0.897002 14.5918 0.765436 14.4093C0.63387 14.2268 0.598073 13.9921 0.669228 13.7786L4.66923 1.77864C4.75876 1.51004 5.00127 1.32183 5.28368 1.30176ZM12.6448 10.1481L11.0274 5.29586L8.49495 7.8283C8.33584 7.98741 8.10995 8.06033 7.88784 8.02429C7.66574 7.98825 7.4745 7.84764 7.37387 7.64638L5.46298 3.82458L3.79356 8.83284C4.32669 8.6767 4.86859 8.61001 5.41732 8.63933C6.44891 8.69445 7.44672 9.08575 8.40374 9.76151L8.40447 9.76203C9.22928 10.346 10.0117 10.6173 10.7592 10.6343C11.3656 10.6481 11.9923 10.4957 12.6448 10.1481ZM3.20285 10.605L2.3045 13.3H13.6954L13.0924 11.4909C12.3249 11.8637 11.5347 12.0524 10.7274 12.034C9.645 12.0093 8.59759 11.6141 7.59585 10.9049C6.80633 10.3475 6.05759 10.0755 5.34262 10.0373C4.6558 10.0006 3.94641 10.1767 3.20285 10.605Z"
      fill="currentColor"
    />
  </svg>
);
export default MountainSnowIcon;
