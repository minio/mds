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

const Move3dIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.83833 1.50501C3.11169 1.23165 3.55491 1.23165 3.82828 1.50501L5.82828 3.50501C6.10164 3.77838 6.10164 4.2216 5.82828 4.49496C5.55491 4.76833 5.11169 4.76833 4.83833 4.49496L4.0333 3.68994V10.9767L6.83833 8.17168C7.11169 7.89831 7.55491 7.89831 7.82828 8.17168C8.10164 8.44505 8.10164 8.88826 7.82828 9.16163L5.02325 11.9667H12.31L11.505 11.1616C11.2316 10.8883 11.2316 10.445 11.505 10.1717C11.7784 9.89831 12.2216 9.89831 12.4949 10.1717L14.4949 12.1717C14.7683 12.445 14.7683 12.8883 14.4949 13.1616L12.4949 15.1616C12.2216 15.435 11.7784 15.435 11.505 15.1616C11.2316 14.8883 11.2316 14.445 11.505 14.1717L12.31 13.3667H3.3333C2.9467 13.3667 2.6333 13.0533 2.6333 12.6667V3.68994L1.82828 4.49496C1.55491 4.76833 1.11169 4.76833 0.838326 4.49496C0.564959 4.2216 0.564959 3.77838 0.838326 3.50501L2.83833 1.50501Z"
      fill="currentColor"
    />
  </svg>
);
export default Move3dIcon;
