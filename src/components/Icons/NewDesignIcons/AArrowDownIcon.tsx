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

const AArrowDownIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.33333 3.96667C4.59847 3.96667 4.84086 4.11648 4.95943 4.35363L6.95313 8.34102C6.95767 8.34964 6.96203 8.35837 6.96622 8.3672L7.95943 10.3536C8.13232 10.6994 7.99217 11.1199 7.64638 11.2928C7.3006 11.4657 6.88013 11.3255 6.70723 10.9797L5.90071 9.36667H2.76596L1.95943 10.9797C1.78654 11.3255 1.36607 11.4657 1.02028 11.2928C0.674498 11.1199 0.534341 10.6994 0.707233 10.3536L1.70045 8.36719C1.70463 8.35837 1.709 8.34964 1.71353 8.34103L3.70723 4.35363C3.82581 4.11648 4.06819 3.96667 4.33333 3.96667ZM3.46596 7.96667H5.20071L4.33333 6.23192L3.46596 7.96667ZM12 3.96667C12.3866 3.96667 12.7 4.28008 12.7 4.66667V8.97673L14.1717 7.50503C14.4451 7.23167 14.8883 7.23167 15.1616 7.50503C15.435 7.7784 15.435 8.22162 15.1616 8.49498L12.495 11.1616C12.3637 11.2929 12.1856 11.3667 12 11.3667C11.8143 11.3667 11.6363 11.2929 11.505 11.1616L8.83836 8.49498C8.56499 8.22162 8.56499 7.7784 8.83836 7.50503C9.11172 7.23167 9.55494 7.23167 9.82831 7.50503L11.3 8.97673V4.66667C11.3 4.28008 11.6134 3.96667 12 3.96667Z"
      fill="currentColor"
    />
  </svg>
);
export default AArrowDownIcon;
