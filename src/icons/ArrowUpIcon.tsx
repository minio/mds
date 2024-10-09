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

const ArrowUpIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.50499 2.83836C7.77836 2.56499 8.22157 2.56499 8.49494 2.83836L13.1616 7.50502C13.435 7.77839 13.435 8.22161 13.1616 8.49497C12.8882 8.76834 12.445 8.76834 12.1717 8.49497L8.69997 5.02328V12.6667C8.69997 13.0533 8.38657 13.3667 7.99997 13.3667C7.61337 13.3667 7.29997 13.0533 7.29997 12.6667V5.02328L3.82828 8.49497C3.55491 8.76834 3.11169 8.76834 2.83833 8.49497C2.56496 8.22161 2.56496 7.77839 2.83833 7.50502L7.50499 2.83836Z"
      fill="currentColor"
    />
  </svg>
);
export default ArrowUpIcon;
