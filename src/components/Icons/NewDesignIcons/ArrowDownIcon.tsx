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

const ArrowDownIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.99997 2.63333C8.38657 2.63333 8.69997 2.94673 8.69997 3.33333V10.9767L12.1717 7.50502C12.445 7.23166 12.8882 7.23166 13.1616 7.50502C13.435 7.77839 13.435 8.22161 13.1616 8.49497L8.49494 13.1616C8.22157 13.435 7.77836 13.435 7.50499 13.1616L2.83833 8.49497C2.56496 8.22161 2.56496 7.77839 2.83833 7.50502C3.11169 7.23166 3.55491 7.23166 3.82828 7.50502L7.29997 10.9767V3.33333C7.29997 2.94673 7.61337 2.63333 7.99997 2.63333Z"
      fill="currentColor"
    />
  </svg>
);
export default ArrowDownIcon;
