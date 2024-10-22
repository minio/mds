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

const MoveRightIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11.505 4.83833C11.7784 4.56496 12.2216 4.56496 12.495 4.83833L15.1616 7.50499C15.435 7.77836 15.435 8.22158 15.1616 8.49494L12.495 11.1616C12.2216 11.435 11.7784 11.435 11.505 11.1616C11.2317 10.8882 11.2317 10.445 11.505 10.1717L12.9767 8.69997H1.33333C0.946732 8.69997 0.633331 8.38657 0.633331 7.99997C0.633331 7.61337 0.946732 7.29997 1.33333 7.29997H12.9767L11.505 5.82828C11.2317 5.55491 11.2317 5.11169 11.505 4.83833Z"
      fill="currentColor"
    />
  </svg>
);
export default MoveRightIcon;
