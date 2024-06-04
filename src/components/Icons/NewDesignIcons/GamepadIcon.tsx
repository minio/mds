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

const GamepadIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.6667 4.69999C2.31691 4.69999 2.03336 4.98354 2.03336 5.33332V10.6667C2.03336 11.0164 2.31691 11.3 2.6667 11.3H13.3334C13.6831 11.3 13.9667 11.0164 13.9667 10.6667V5.33332C13.9667 4.98354 13.6831 4.69999 13.3334 4.69999H2.6667ZM0.633362 5.33332C0.633362 4.21034 1.54372 3.29999 2.6667 3.29999H13.3334C14.4563 3.29999 15.3667 4.21034 15.3667 5.33332V10.6667C15.3667 11.7896 14.4563 12.7 13.3334 12.7H2.6667C1.54372 12.7 0.633362 11.7896 0.633362 10.6667V5.33332ZM5.33336 5.96665C5.71996 5.96665 6.03336 6.28006 6.03336 6.66665V7.29999H6.66669C7.05329 7.29999 7.36669 7.61339 7.36669 7.99999C7.36669 8.38659 7.05329 8.69999 6.66669 8.69999H6.03336V9.33332C6.03336 9.71992 5.71996 10.0333 5.33336 10.0333C4.94676 10.0333 4.63336 9.71992 4.63336 9.33332V8.69999H4.00003C3.61343 8.69999 3.30003 8.38659 3.30003 7.99999C3.30003 7.61339 3.61343 7.29999 4.00003 7.29999H4.63336V6.66665C4.63336 6.28006 4.94676 5.96665 5.33336 5.96665ZM11.3 7.33332C11.3 6.94672 11.6134 6.63332 12 6.63332H12.0067C12.3933 6.63332 12.7067 6.94672 12.7067 7.33332C12.7067 7.71992 12.3933 8.03332 12.0067 8.03332H12C11.6134 8.03332 11.3 7.71992 11.3 7.33332ZM9.30003 8.66665C9.30003 8.28006 9.61343 7.96665 10 7.96665H10.0067C10.3933 7.96665 10.7067 8.28006 10.7067 8.66665C10.7067 9.05325 10.3933 9.36665 10.0067 9.36665H10C9.61343 9.36665 9.30003 9.05325 9.30003 8.66665Z"
      fill="currentColor"
    />
  </svg>
);
export default GamepadIcon;
