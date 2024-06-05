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

const GitForkIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.00005 2.69999C3.28208 2.69999 2.70005 3.28202 2.70005 3.99999C2.70005 4.71796 3.28208 5.29999 4.00005 5.29999C4.71802 5.29999 5.30005 4.71796 5.30005 3.99999C5.30005 3.28202 4.71802 2.69999 4.00005 2.69999ZM1.30005 3.99999C1.30005 2.50882 2.50888 1.29999 4.00005 1.29999C5.49122 1.29999 6.70005 2.50882 6.70005 3.99999C6.70005 5.24906 5.85187 6.30003 4.70005 6.60836V7.29999H11.3V6.60836C10.1482 6.30003 9.30005 5.24906 9.30005 3.99999C9.30005 2.50882 10.5089 1.29999 12 1.29999C13.4912 1.29999 14.7 2.50882 14.7 3.99999C14.7 5.24906 13.8519 6.30003 12.7 6.60836V7.33332C12.7 7.69239 12.5773 8.04602 12.3117 8.31163C12.0461 8.57724 11.6925 8.69999 11.3334 8.69999H8.70005V9.39161C9.85187 9.69995 10.7 10.7509 10.7 12C10.7 13.4912 9.49122 14.7 8.00005 14.7C6.50888 14.7 5.30005 13.4912 5.30005 12C5.30005 10.7509 6.14823 9.69995 7.30005 9.39161V8.69999H4.66672C4.30764 8.69999 3.95402 8.57724 3.68841 8.31163C3.4228 8.04602 3.30005 7.69239 3.30005 7.33332V6.60836C2.14823 6.30003 1.30005 5.24906 1.30005 3.99999ZM12 2.69999C11.2821 2.69999 10.7 3.28202 10.7 3.99999C10.7 4.71796 11.2821 5.29999 12 5.29999C12.718 5.29999 13.3 4.71796 13.3 3.99999C13.3 3.28202 12.718 2.69999 12 2.69999ZM8.00005 10.7C7.28208 10.7 6.70005 11.282 6.70005 12C6.70005 12.718 7.28208 13.3 8.00005 13.3C8.71802 13.3 9.30005 12.718 9.30005 12C9.30005 11.282 8.71802 10.7 8.00005 10.7Z"
      fill="currentColor"
    />
  </svg>
);
export default GitForkIcon;
