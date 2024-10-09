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

const GitPullRequestClosedIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.00005 2.69999C3.28208 2.69999 2.70005 3.28202 2.70005 3.99999C2.70005 4.71796 3.28208 5.29999 4.00005 5.29999C4.71802 5.29999 5.30005 4.71796 5.30005 3.99999C5.30005 3.28202 4.71802 2.69999 4.00005 2.69999ZM1.30005 3.99999C1.30005 2.50882 2.50888 1.29999 4.00005 1.29999C5.49122 1.29999 6.70005 2.50882 6.70005 3.99999C6.70005 5.24906 5.85187 6.30003 4.70005 6.60836V14C4.70005 14.3866 4.38665 14.7 4.00005 14.7C3.61345 14.7 3.30005 14.3866 3.30005 14V6.60836C2.14823 6.30003 1.30005 5.24906 1.30005 3.99999ZM9.50507 1.50501C9.77844 1.23165 10.2217 1.23165 10.495 1.50501L12 3.01004L13.5051 1.50501C13.7784 1.23165 14.2217 1.23165 14.495 1.50501C14.7684 1.77838 14.7684 2.2216 14.495 2.49496L12.99 3.99999L14.495 5.50501C14.7684 5.77838 14.7684 6.2216 14.495 6.49496C14.2217 6.76833 13.7784 6.76833 13.5051 6.49496L12 4.98994L10.495 6.49496C10.2217 6.76833 9.77844 6.76833 9.50507 6.49496C9.23171 6.2216 9.23171 5.77838 9.50507 5.50501L11.0101 3.99999L9.50507 2.49496C9.23171 2.2216 9.23171 1.77838 9.50507 1.50501ZM12 6.96665C12.3866 6.96665 12.7 7.28006 12.7 7.66665V9.39161C13.8519 9.69995 14.7 10.7509 14.7 12C14.7 13.4912 13.4912 14.7 12 14.7C10.5089 14.7 9.30005 13.4912 9.30005 12C9.30005 10.7509 10.1482 9.69995 11.3 9.39161V7.66665C11.3 7.28006 11.6135 6.96665 12 6.96665ZM12 10.7C11.2821 10.7 10.7 11.282 10.7 12C10.7 12.718 11.2821 13.3 12 13.3C12.718 13.3 13.3 12.718 13.3 12C13.3 11.282 12.718 10.7 12 10.7Z"
      fill="currentColor"
    />
  </svg>
);
export default GitPullRequestClosedIcon;
