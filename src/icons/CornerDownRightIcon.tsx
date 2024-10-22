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

const CornerDownRightIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.66667 1.96666C3.05327 1.96666 3.36667 2.28006 3.36667 2.66666V7.33333C3.36667 7.85492 3.57388 8.35515 3.9427 8.72397C4.31152 9.09279 4.81175 9.29999 5.33334 9.29999H11.6434L9.50503 7.16163C9.23167 6.88827 9.23167 6.44505 9.50503 6.17168C9.7784 5.89832 10.2216 5.89832 10.495 6.17168L13.8283 9.50502C14.1017 9.77839 14.1017 10.2216 13.8283 10.495L10.495 13.8283C10.2216 14.1017 9.7784 14.1017 9.50503 13.8283C9.23167 13.5549 9.23167 13.1117 9.50503 12.8384L11.6434 10.7H5.33334C4.44045 10.7 3.58412 10.3453 2.95275 9.71392C2.32138 9.08255 1.96667 8.22622 1.96667 7.33333V2.66666C1.96667 2.28006 2.28008 1.96666 2.66667 1.96666Z"
      fill="currentColor"
    />
  </svg>
);
export default CornerDownRightIcon;
