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

const AlignStartVerticalIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M1.3333 0.633331C1.7199 0.633331 2.0333 0.946732 2.0333 1.33333V14.6667C2.0333 15.0533 1.7199 15.3667 1.3333 15.3667C0.946701 15.3667 0.633301 15.0533 0.633301 14.6667V1.33333C0.633301 0.946732 0.946701 0.633331 1.3333 0.633331ZM5.3333 3.36666C4.98352 3.36666 4.69997 3.65022 4.69997 4V5.33333C4.69997 5.68311 4.98352 5.96666 5.3333 5.96666H13.3333C13.6831 5.96666 13.9666 5.68311 13.9666 5.33333V4C13.9666 3.65022 13.6831 3.36666 13.3333 3.36666H5.3333ZM3.29997 4C3.29997 2.87702 4.21032 1.96666 5.3333 1.96666H13.3333C14.4563 1.96666 15.3666 2.87702 15.3666 4V5.33333C15.3666 6.45631 14.4563 7.36666 13.3333 7.36666H5.3333C4.21032 7.36666 3.29997 6.45631 3.29997 5.33333V4ZM5.3333 10.0333C4.98352 10.0333 4.69997 10.3169 4.69997 10.6667V12C4.69997 12.3498 4.98352 12.6333 5.3333 12.6333H8.66663C9.01641 12.6333 9.29997 12.3498 9.29997 12V10.6667C9.29997 10.3169 9.01641 10.0333 8.66663 10.0333H5.3333ZM3.29997 10.6667C3.29997 9.54368 4.21032 8.63333 5.3333 8.63333H8.66663C9.78961 8.63333 10.7 9.54368 10.7 10.6667V12C10.7 13.123 9.78961 14.0333 8.66663 14.0333H5.3333C4.21032 14.0333 3.29997 13.123 3.29997 12V10.6667Z"
      fill="currentColor"
    />
  </svg>
);
export default AlignStartVerticalIcon;
