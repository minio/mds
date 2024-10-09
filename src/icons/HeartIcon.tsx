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

const HeartIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M1.9123 2.57895C2.73121 1.76005 3.84189 1.29999 5 1.29999C5.65679 1.29999 6.25689 1.39395 6.84451 1.64988C7.24886 1.82599 7.62646 2.06973 8 2.38265C8.37354 2.06973 8.75113 1.82599 9.15548 1.64988C9.7431 1.39395 10.3432 1.29999 11 1.29999C12.1581 1.29999 13.2688 1.76005 14.0877 2.57895C14.9066 3.39786 15.3667 4.50854 15.3667 5.66665C15.3667 7.50959 14.1504 8.85919 13.1591 9.83083L8.49497 14.495C8.3637 14.6262 8.18565 14.7 8 14.7C7.81435 14.7 7.6363 14.6262 7.50502 14.495L2.84253 9.83247C1.8394 8.86227 0.633331 7.51455 0.633331 5.66665C0.633331 4.50854 1.09339 3.39786 1.9123 2.57895ZM5 2.69999C4.21319 2.69999 3.45861 3.01255 2.90225 3.5689C2.34589 4.12526 2.03333 4.87985 2.03333 5.66665C2.03333 6.88279 2.82382 7.8672 3.81985 8.83003L3.82838 8.83828L8 13.01L12.1767 8.83331C13.1716 7.85847 13.9667 6.87549 13.9667 5.66665C13.9667 4.87985 13.6541 4.12526 13.0977 3.5689C12.5414 3.01255 11.7868 2.69999 11 2.69999C10.4835 2.69999 10.0836 2.77269 9.71451 2.93343C9.34095 3.09613 8.95508 3.36819 8.49497 3.8283C8.3637 3.95957 8.18565 4.03332 8 4.03332C7.81435 4.03332 7.6363 3.95957 7.50502 3.8283C7.04492 3.36819 6.65905 3.09613 6.28548 2.93343C5.91644 2.77269 5.51654 2.69999 5 2.69999Z"
      fill="currentColor"
    />
  </svg>
);
export default HeartIcon;
