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

const VideotapeIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.66666 3.36667C2.31688 3.36667 2.03333 3.65023 2.03333 4.00001V4.63334H13.9667V4.00001C13.9667 3.65023 13.6831 3.36667 13.3333 3.36667H2.66666ZM15.3667 4.00001C15.3667 2.87703 14.4563 1.96667 13.3333 1.96667H2.66666C1.54369 1.96667 0.633331 2.87703 0.633331 4.00001V12C0.633331 13.123 1.54369 14.0333 2.66666 14.0333H13.3333C14.4563 14.0333 15.3667 13.123 15.3667 12V4.00001ZM13.9667 6.03334H2.03333V12C2.03333 12.3498 2.31688 12.6333 2.66666 12.6333H13.3333C13.6831 12.6333 13.9667 12.3498 13.9667 12V6.03334ZM5.33333 8.70001C4.98355 8.70001 4.7 8.98356 4.7 9.33334C4.7 9.68312 4.98355 9.96667 5.33333 9.96667C5.68311 9.96667 5.96666 9.68312 5.96666 9.33334C5.96666 8.98356 5.68311 8.70001 5.33333 8.70001ZM7.26609 8.70001C7.33136 8.89932 7.36666 9.11221 7.36666 9.33334C7.36666 10.4563 6.45631 11.3667 5.33333 11.3667C4.21035 11.3667 3.3 10.4563 3.3 9.33334C3.3 8.21036 4.21035 7.30001 5.33333 7.30001H10.6667C11.7896 7.30001 12.7 8.21036 12.7 9.33334C12.7 10.4563 11.7896 11.3667 10.6667 11.3667C9.54368 11.3667 8.63333 10.4563 8.63333 9.33334C8.63333 9.11221 8.66863 8.89932 8.7339 8.70001H7.26609ZM10.6667 8.70001C10.3169 8.70001 10.0333 8.98356 10.0333 9.33334C10.0333 9.68312 10.3169 9.96667 10.6667 9.96667C11.0164 9.96667 11.3 9.68312 11.3 9.33334C11.3 8.98356 11.0164 8.70001 10.6667 8.70001Z"
      fill="currentColor"
    />
  </svg>
);
export default VideotapeIcon;
