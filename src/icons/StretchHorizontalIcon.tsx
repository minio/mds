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

const StretchHorizontalIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.6667 3.36667C2.31691 3.36667 2.03336 3.65023 2.03336 4.00001V5.33334C2.03336 5.68312 2.31691 5.96667 2.6667 5.96667H13.3334C13.6831 5.96667 13.9667 5.68312 13.9667 5.33334V4.00001C13.9667 3.65023 13.6831 3.36667 13.3334 3.36667H2.6667ZM0.633362 4.00001C0.633362 2.87703 1.54372 1.96667 2.6667 1.96667H13.3334C14.4563 1.96667 15.3667 2.87703 15.3667 4.00001V5.33334C15.3667 6.45632 14.4563 7.36667 13.3334 7.36667H2.6667C1.54372 7.36667 0.633362 6.45632 0.633362 5.33334V4.00001ZM2.6667 10.0333C2.31691 10.0333 2.03336 10.3169 2.03336 10.6667V12C2.03336 12.3498 2.31691 12.6333 2.6667 12.6333H13.3334C13.6831 12.6333 13.9667 12.3498 13.9667 12V10.6667C13.9667 10.3169 13.6831 10.0333 13.3334 10.0333H2.6667ZM0.633362 10.6667C0.633362 9.5437 1.54372 8.63334 2.6667 8.63334H13.3334C14.4563 8.63334 15.3667 9.5437 15.3667 10.6667V12C15.3667 13.123 14.4563 14.0333 13.3334 14.0333H2.6667C1.54372 14.0333 0.633362 13.123 0.633362 12V10.6667Z"
      fill="currentColor"
    />
  </svg>
);
export default StretchHorizontalIcon;
