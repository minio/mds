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

const MoveLeftIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.49497 4.83833C4.76834 5.11169 4.76834 5.55491 4.49497 5.82828L3.02328 7.29997H14.6667C15.0533 7.29997 15.3667 7.61337 15.3667 7.99997C15.3667 8.38657 15.0533 8.69997 14.6667 8.69997H3.02328L4.49497 10.1717C4.76834 10.445 4.76834 10.8882 4.49497 11.1616C4.22161 11.435 3.77839 11.435 3.50502 11.1616L0.838357 8.49494C0.56499 8.22158 0.56499 7.77836 0.838357 7.50499L3.50502 4.83833C3.77839 4.56496 4.22161 4.56496 4.49497 4.83833Z"
      fill="currentColor"
    />
  </svg>
);
export default MoveLeftIcon;
