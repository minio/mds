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

const GitMergeIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.00005 2.69999C3.28208 2.69999 2.70005 3.28202 2.70005 3.99999C2.70005 4.71796 3.28208 5.29999 4.00005 5.29999C4.71802 5.29999 5.30005 4.71796 5.30005 3.99999C5.30005 3.28202 4.71802 2.69999 4.00005 2.69999ZM1.30005 3.99999C1.30005 2.50882 2.50888 1.29999 4.00005 1.29999C5.49122 1.29999 6.70005 2.50882 6.70005 3.99999C6.70005 5.23676 5.8685 6.27931 4.73399 6.59904C4.86878 7.78421 5.40067 8.89595 6.25238 9.74765C7.10409 10.5994 8.21583 11.1313 9.401 11.266C9.72073 10.1315 10.7633 9.29999 12 9.29999C13.4912 9.29999 14.7 10.5088 14.7 12C14.7 13.4912 13.4912 14.7 12 14.7C10.7408 14.7 9.68282 13.8379 9.38426 12.6716C7.83317 12.5285 6.37295 11.8481 5.26243 10.7376C5.06054 10.5357 4.87287 10.3223 4.70005 10.0988V14C4.70005 14.3866 4.38665 14.7 4.00005 14.7C3.61345 14.7 3.30005 14.3866 3.30005 14V6.60836C2.14823 6.30003 1.30005 5.24906 1.30005 3.99999ZM12 10.7C11.2821 10.7 10.7 11.282 10.7 12C10.7 12.718 11.2821 13.3 12 13.3C12.718 13.3 13.3 12.718 13.3 12C13.3 11.282 12.718 10.7 12 10.7Z"
      fill="currentColor"
    />
  </svg>
);
export default GitMergeIcon;
