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

const ComputerIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.66669 2.03333C4.31691 2.03333 4.03336 2.31688 4.03336 2.66666V5.33333C4.03336 5.68311 4.31691 5.96666 4.66669 5.96666H11.3334C11.6831 5.96666 11.9667 5.68311 11.9667 5.33333V2.66666C11.9667 2.31688 11.6831 2.03333 11.3334 2.03333H4.66669ZM2.63336 2.66666C2.63336 1.54369 3.54372 0.633331 4.66669 0.633331H11.3334C12.4563 0.633331 13.3667 1.54369 13.3667 2.66666V5.33333C13.3667 6.45631 12.4563 7.36666 11.3334 7.36666H4.66669C3.54372 7.36666 2.63336 6.45631 2.63336 5.33333V2.66666ZM2.6667 10.0333C2.31691 10.0333 2.03336 10.3169 2.03336 10.6667V13.3333C2.03336 13.6831 2.31691 13.9667 2.6667 13.9667H13.3334C13.6831 13.9667 13.9667 13.6831 13.9667 13.3333V10.6667C13.9667 10.3169 13.6831 10.0333 13.3334 10.0333H2.6667ZM0.633362 10.6667C0.633362 9.54368 1.54372 8.63333 2.6667 8.63333H13.3334C14.4563 8.63333 15.3667 9.54368 15.3667 10.6667V13.3333C15.3667 14.4563 14.4563 15.3667 13.3334 15.3667H2.6667C1.54372 15.3667 0.633362 14.4563 0.633362 13.3333V10.6667ZM3.30003 12C3.30003 11.6134 3.61343 11.3 4.00003 11.3H5.33336C5.71996 11.3 6.03336 11.6134 6.03336 12C6.03336 12.3866 5.71996 12.7 5.33336 12.7H4.00003C3.61343 12.7 3.30003 12.3866 3.30003 12ZM7.30003 12C7.30003 11.6134 7.61343 11.3 8.00003 11.3H12C12.3866 11.3 12.7 11.6134 12.7 12C12.7 12.3866 12.3866 12.7 12 12.7H8.00003C7.61343 12.7 7.30003 12.3866 7.30003 12Z"
      fill="currentColor"
    />
  </svg>
);
export default ComputerIcon;
