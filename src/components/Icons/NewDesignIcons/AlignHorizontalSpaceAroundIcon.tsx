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

const AlignHorizontalSpaceAroundIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.66667 0.633331C3.05327 0.633331 3.36667 0.946732 3.36667 1.33333V14.6667C3.36667 15.0533 3.05327 15.3667 2.66667 15.3667C2.28008 15.3667 1.96667 15.0533 1.96667 14.6667V1.33333C1.96667 0.946732 2.28008 0.633331 2.66667 0.633331ZM13.3333 0.633331C13.7199 0.633331 14.0333 0.946732 14.0333 1.33333V14.6667C14.0333 15.0533 13.7199 15.3667 13.3333 15.3667C12.9467 15.3667 12.6333 15.0533 12.6333 14.6667V1.33333C12.6333 0.946732 12.9467 0.633331 13.3333 0.633331ZM7.33334 5.36666C6.98356 5.36666 6.70001 5.65022 6.70001 6V10C6.70001 10.3498 6.98356 10.6333 7.33334 10.6333H8.66667C9.01646 10.6333 9.30001 10.3498 9.30001 10V6C9.30001 5.65022 9.01646 5.36666 8.66667 5.36666H7.33334ZM5.30001 6C5.30001 4.87702 6.21036 3.96666 7.33334 3.96666H8.66667C9.78965 3.96666 10.7 4.87702 10.7 6V10C10.7 11.123 9.78965 12.0333 8.66667 12.0333H7.33334C6.21036 12.0333 5.30001 11.123 5.30001 10V6Z"
      fill="currentColor"
    />
  </svg>
);
export default AlignHorizontalSpaceAroundIcon;
