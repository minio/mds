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

const Columns4Icon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.33332 2.7C2.98354 2.7 2.69999 2.98356 2.69999 3.33334V12.6667C2.69999 13.0165 2.98354 13.3 3.33332 13.3H4.29999V2.7H3.33332ZM3.33332 1.3C2.21034 1.3 1.29999 2.21036 1.29999 3.33334V12.6667C1.29999 13.7896 2.21034 14.7 3.33332 14.7H12.6667C13.7896 14.7 14.7 13.7896 14.7 12.6667V3.33334C14.7 2.21036 13.7896 1.3 12.6667 1.3H3.33332ZM5.69999 2.7V13.3H7.29999V2.7H5.69999ZM8.69999 2.7V13.3H10.3V2.7H8.69999ZM11.7 2.7V13.3H12.6667C13.0164 13.3 13.3 13.0165 13.3 12.6667V3.33334C13.3 2.98356 13.0164 2.7 12.6667 2.7H11.7Z"
      fill="currentColor"
    />
  </svg>
);
export default Columns4Icon;
