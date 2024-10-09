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

const MouseIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.99997 2.03336C5.80924 2.03336 4.0333 3.8093 4.0333 6.00003V10C4.0333 12.1908 5.80924 13.9667 7.99997 13.9667C10.1907 13.9667 11.9666 12.1908 11.9666 10V6.00003C11.9666 3.8093 10.1907 2.03336 7.99997 2.03336ZM2.6333 6.00003C2.6333 3.0361 5.03604 0.633362 7.99997 0.633362C10.9639 0.633362 13.3666 3.0361 13.3666 6.00003V10C13.3666 12.964 10.9639 15.3667 7.99997 15.3667C5.03604 15.3667 2.6333 12.964 2.6333 10V6.00003ZM7.99997 3.30003C8.38657 3.30003 8.69997 3.61343 8.69997 4.00003V6.66669C8.69997 7.05329 8.38657 7.36669 7.99997 7.36669C7.61337 7.36669 7.29997 7.05329 7.29997 6.66669V4.00003C7.29997 3.61343 7.61337 3.30003 7.99997 3.30003Z"
      fill="currentColor"
    />
  </svg>
);
export default MouseIcon;
