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

const ProportionsIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.66666 3.36667C2.31688 3.36667 2.03333 3.65023 2.03333 4.00001V5.30001H10C10.5393 5.30001 11.0565 5.51423 11.4378 5.89556C11.8191 6.27688 12.0333 6.79407 12.0333 7.33334V12.6333H13.3333C13.6831 12.6333 13.9667 12.3498 13.9667 12V4.00001C13.9667 3.65023 13.6831 3.36667 13.3333 3.36667H2.66666ZM13.3333 14.0333C14.4563 14.0333 15.3667 13.123 15.3667 12V4.00001C15.3667 2.87703 14.4563 1.96667 13.3333 1.96667H2.66666C1.54369 1.96667 0.633331 2.87703 0.633331 4.00001V12C0.633331 13.123 1.54369 14.0333 2.66666 14.0333H13.3333ZM10.6333 12.6333V7.33334C10.6333 7.16537 10.5666 7.00428 10.4478 6.88551C10.3291 6.76673 10.168 6.70001 10 6.70001H8.7V12.6333H10.6333ZM7.3 12.6333V6.70001H2.03333V12C2.03333 12.3498 2.31688 12.6333 2.66666 12.6333H7.3Z"
      fill="currentColor"
    />
  </svg>
);
export default ProportionsIcon;
