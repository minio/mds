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

const HeartCrackIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M1.91227 2.57895C2.73118 1.76005 3.84186 1.29999 4.99997 1.29999C5.65676 1.29999 6.25686 1.39395 6.84448 1.64988C7.24883 1.82599 7.62643 2.06973 7.99997 2.38265C8.37351 2.06973 8.7511 1.82599 9.15545 1.64988C9.74307 1.39395 10.3432 1.29999 11 1.29999C12.1581 1.29999 13.2688 1.76005 14.0877 2.57895C14.9066 3.39786 15.3666 4.50854 15.3666 5.66665C15.3666 7.50959 14.1504 8.85919 13.1591 9.83083L8.49494 14.495C8.36367 14.6262 8.18562 14.7 7.99997 14.7C7.81432 14.7 7.63627 14.6262 7.50499 14.495L2.8425 9.83247C1.83937 8.86227 0.633301 7.51455 0.633301 5.66665C0.633301 4.50854 1.09336 3.39786 1.91227 2.57895ZM6.98308 3.36026C6.73726 3.1675 6.50915 3.03086 6.28545 2.93343C5.91641 2.77269 5.51651 2.69999 4.99997 2.69999C4.21316 2.69999 3.45858 3.01255 2.90222 3.5689C2.34586 4.12526 2.0333 4.87985 2.0333 5.66665C2.0333 6.88279 2.82379 7.8672 3.81982 8.83003L3.82835 8.83828L7.99997 13.01L12.1767 8.83331C13.1716 7.85847 13.9666 6.87549 13.9666 5.66665C13.9666 4.87985 13.6541 4.12526 13.0977 3.5689C12.5414 3.01255 11.7868 2.69999 11 2.69999C10.4834 2.69999 10.0835 2.77269 9.71448 2.93343C9.34092 3.09613 8.95504 3.36819 8.49494 3.8283L7.65658 4.66665L9.16161 6.17168C9.43498 6.44505 9.43498 6.88826 9.16161 7.16163L8.32325 7.99999L8.49494 8.17168C8.76831 8.44505 8.76831 8.88826 8.49494 9.16163C8.22157 9.435 7.77836 9.435 7.50499 9.16163L6.83833 8.49496C6.56496 8.2216 6.56496 7.77838 6.83833 7.50501L7.67668 6.66665L6.17166 5.16163C5.89829 4.88826 5.89829 4.44505 6.17166 4.17168L6.98308 3.36026Z"
      fill="currentColor"
    />
  </svg>
);
export default HeartCrackIcon;
