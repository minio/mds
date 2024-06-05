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

const AlignEndVerticalIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M14.6666 0.633331C15.0532 0.633331 15.3666 0.946732 15.3666 1.33333V14.6667C15.3666 15.0533 15.0532 15.3667 14.6666 15.3667C14.28 15.3667 13.9666 15.0533 13.9666 14.6667V1.33333C13.9666 0.946732 14.28 0.633331 14.6666 0.633331ZM2.66663 3.36666C2.31685 3.36666 2.0333 3.65022 2.0333 4V5.33333C2.0333 5.68311 2.31685 5.96666 2.66663 5.96666H10.6666C11.0164 5.96666 11.3 5.68311 11.3 5.33333V4C11.3 3.65022 11.0164 3.36666 10.6666 3.36666H2.66663ZM0.633301 4C0.633301 2.87702 1.54366 1.96666 2.66663 1.96666H10.6666C11.7896 1.96666 12.7 2.87702 12.7 4V5.33333C12.7 6.45631 11.7896 7.36666 10.6666 7.36666H2.66663C1.54366 7.36666 0.633301 6.45631 0.633301 5.33333V4ZM7.3333 10.0333C6.98352 10.0333 6.69997 10.3169 6.69997 10.6667V12C6.69997 12.3498 6.98352 12.6333 7.3333 12.6333H10.6666C11.0164 12.6333 11.3 12.3498 11.3 12V10.6667C11.3 10.3169 11.0164 10.0333 10.6666 10.0333H7.3333ZM5.29997 10.6667C5.29997 9.54368 6.21032 8.63333 7.3333 8.63333H10.6666C11.7896 8.63333 12.7 9.54368 12.7 10.6667V12C12.7 13.123 11.7896 14.0333 10.6666 14.0333H7.3333C6.21032 14.0333 5.29997 13.123 5.29997 12V10.6667Z"
      fill="currentColor"
    />
  </svg>
);
export default AlignEndVerticalIcon;
