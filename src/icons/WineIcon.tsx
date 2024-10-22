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

const WineIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5.34458 1.08751C5.44703 0.814302 5.70822 0.633301 6.00001 0.633301H10C10.2918 0.633301 10.553 0.814302 10.6554 1.08751C11.6591 3.76403 12.0333 5.19844 12.0333 6.66663C12.0333 7.73634 11.6084 8.76223 10.852 9.51863C10.2627 10.108 9.50977 10.4961 8.70001 10.6388V13.9666H10.6667C11.0533 13.9666 11.3667 14.28 11.3667 14.6666C11.3667 15.0532 11.0533 15.3666 10.6667 15.3666H5.33334C4.94674 15.3666 4.63334 15.0532 4.63334 14.6666C4.63334 14.28 4.94674 13.9666 5.33334 13.9666H7.30001V10.6388C6.49024 10.4961 5.73733 10.108 5.14801 9.51863C4.39161 8.76223 3.96667 7.73634 3.96667 6.66663C3.96667 5.19844 4.34089 3.76403 5.34458 1.08751ZM6.48689 2.0333C5.80047 3.90442 5.49659 5.01978 5.40154 5.96663H10.5985C10.5034 5.01978 10.1995 3.90442 9.51312 2.0333H6.48689ZM10.5386 7.36663H5.46141C5.58153 7.80221 5.81285 8.20357 6.13796 8.52868C6.63181 9.02253 7.3016 9.29997 8.00001 9.29997C8.69841 9.29997 9.36821 9.02253 9.86206 8.52868C10.1872 8.20357 10.4185 7.80221 10.5386 7.36663Z"
      fill="currentColor"
    />
  </svg>
);
export default WineIcon;
