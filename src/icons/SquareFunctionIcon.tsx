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

const SquareFunctionIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.33332 2.70005C2.98354 2.70005 2.69999 2.9836 2.69999 3.33338V12.6667C2.69999 13.0165 2.98354 13.3 3.33332 13.3H12.6667C13.0164 13.3 13.3 13.0165 13.3 12.6667V3.33338C13.3 2.9836 13.0164 2.70005 12.6667 2.70005H3.33332ZM1.29999 3.33338C1.29999 2.2104 2.21034 1.30005 3.33332 1.30005H12.6667C13.7896 1.30005 14.7 2.2104 14.7 3.33338V12.6667C14.7 13.7897 13.7896 14.7 12.6667 14.7H3.33332C2.21034 14.7 1.29999 13.7897 1.29999 12.6667V3.33338ZM8.88408 5.58083C8.71011 5.75895 8.56665 6.09956 8.56665 6.66672V6.76672H9.79999C10.1866 6.76672 10.5 7.08012 10.5 7.46672C10.5 7.85331 10.1866 8.16672 9.79999 8.16672H8.56665V9.46672C8.56665 10.1551 8.41541 10.8312 7.94149 11.3315C7.46059 11.8391 6.77421 12.0334 5.99999 12.0334C5.61339 12.0334 5.29999 11.72 5.29999 11.3334C5.29999 10.9468 5.61339 10.6334 5.99999 10.6334C6.5591 10.6334 6.80605 10.4943 6.92515 10.3686C7.05123 10.2355 7.16665 9.97832 7.16665 9.46672V8.16672H5.99999C5.61339 8.16672 5.29999 7.85331 5.29999 7.46672C5.29999 7.08012 5.61339 6.76672 5.99999 6.76672H7.16665V6.66672C7.16665 5.90054 7.35653 5.14115 7.88256 4.6026C8.43006 4.04206 9.21002 3.85251 10.0946 3.97313C10.4776 4.02537 10.7458 4.37824 10.6936 4.76129C10.6413 5.14435 10.2885 5.41253 9.90541 5.3603C9.32329 5.28092 9.03658 5.42471 8.88408 5.58083Z"
      fill="currentColor"
    />
  </svg>
);
export default SquareFunctionIcon;
