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

const AsteriskIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8.00005 3.29999C8.38665 3.29999 8.70005 3.61339 8.70005 3.99999V6.78753L11.114 5.39377C11.4488 5.20047 11.877 5.31518 12.0703 5.64998C12.2636 5.98478 12.1489 6.4129 11.8141 6.6062L9.40002 7.99999L11.8141 9.39377C12.1489 9.58708 12.2636 10.0152 12.0703 10.35C11.877 10.6848 11.4488 10.7995 11.114 10.6062L8.70005 9.21244V12C8.70005 12.3866 8.38665 12.7 8.00005 12.7C7.61346 12.7 7.30005 12.3866 7.30005 12V9.21244L4.88606 10.6062C4.55126 10.7995 4.12314 10.6848 3.92984 10.35C3.73654 10.0152 3.85124 9.58708 4.18605 9.39377L6.60009 7.99999L4.18605 6.6062C3.85124 6.4129 3.73654 5.98478 3.92984 5.64998C4.12314 5.31518 4.55126 5.20047 4.88606 5.39377L7.30005 6.78753V3.99999C7.30005 3.61339 7.61346 3.29999 8.00005 3.29999Z"
      fill="currentColor"
    />
  </svg>
);
export default AsteriskIcon;
