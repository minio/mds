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

const AnchorIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8 2.03333C7.28203 2.03333 6.7 2.61536 6.7 3.33333C6.7 4.0513 7.28203 4.63333 8 4.63333C8.71797 4.63333 9.3 4.0513 9.3 3.33333C9.3 2.61536 8.71797 2.03333 8 2.03333ZM5.3 3.33333C5.3 1.84216 6.50883 0.633331 8 0.633331C9.49117 0.633331 10.7 1.84216 10.7 3.33333C10.7 4.5824 9.85182 5.63337 8.7 5.94171V13.9255C10.0247 13.769 11.2664 13.1718 12.2191 12.2191C13.1718 11.2664 13.769 10.0247 13.9255 8.7H12.6667C12.2801 8.7 11.9667 8.3866 11.9667 8C11.9667 7.6134 12.2801 7.3 12.6667 7.3H14.6667C15.0533 7.3 15.3667 7.6134 15.3667 8C15.3667 9.95376 14.5905 11.8275 13.209 13.209C11.8275 14.5905 9.95376 15.3667 8 15.3667C6.04624 15.3667 4.1725 14.5905 2.79098 13.209C1.40946 11.8275 0.633331 9.95376 0.633331 8C0.633331 7.81435 0.707081 7.6363 0.838357 7.50502C0.969632 7.37375 1.14768 7.3 1.33333 7.3H3.33333C3.71993 7.3 4.03333 7.6134 4.03333 8C4.03333 8.3866 3.71993 8.7 3.33333 8.7H2.07451C2.23097 10.0247 2.82822 11.2664 3.78093 12.2191C4.73363 13.1718 5.97534 13.769 7.3 13.9255V5.94171C6.14818 5.63337 5.3 4.5824 5.3 3.33333Z"
      fill="currentColor"
    />
  </svg>
);
export default AnchorIcon;
