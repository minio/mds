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

const MailIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.66672 3.36667C2.31694 3.36667 2.03339 3.65023 2.03339 4.00001V4.28212L7.68656 7.87443C7.78063 7.93298 7.88923 7.96402 8.00006 7.96402C8.11088 7.96402 8.21948 7.93298 8.31355 7.87443C8.31406 7.87412 8.31457 7.8738 8.31507 7.87348L13.9667 4.28212V4.00001C13.9667 3.65023 13.6832 3.36667 13.3334 3.36667H2.66672ZM15.3667 4.65489V4.00001C15.3667 2.87703 14.4564 1.96667 13.3334 1.96667H2.66672C1.54374 1.96667 0.63339 2.87703 0.63339 4.00001V4.65486C0.633271 4.6623 0.633271 4.66974 0.63339 4.67717V12C0.63339 13.123 1.54374 14.0333 2.66672 14.0333H13.3334C14.4564 14.0333 15.3667 13.123 15.3667 12V4.67714C15.3668 4.66973 15.3668 4.66231 15.3667 4.65489ZM13.9667 5.94087L9.05838 9.05988C8.74116 9.25862 8.37439 9.36402 8.00006 9.36402C7.62572 9.36402 7.25896 9.25861 6.94174 9.05987L6.93795 9.05749L2.03339 5.94087V12C2.03339 12.3498 2.31694 12.6333 2.66672 12.6333H13.3334C13.6832 12.6333 13.9667 12.3498 13.9667 12V5.94087Z"
      fill="currentColor"
    />
  </svg>
);
export default MailIcon;
