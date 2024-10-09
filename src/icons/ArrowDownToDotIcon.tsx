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

const ArrowDownToDotIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.99997 0.633331C8.38657 0.633331 8.69997 0.946732 8.69997 1.33333V8.97671L12.1717 5.50502C12.445 5.23166 12.8882 5.23166 13.1616 5.50502C13.435 5.77839 13.435 6.22161 13.1616 6.49497L8.49494 11.1616C8.22157 11.435 7.77836 11.435 7.50499 11.1616L2.83833 6.49497C2.56496 6.22161 2.56496 5.77839 2.83833 5.50502C3.11169 5.23166 3.55491 5.23166 3.82828 5.50502L7.29997 8.97671V1.33333C7.29997 0.946732 7.61337 0.633331 7.99997 0.633331ZM7.99997 14.0333C8.01838 14.0333 8.0333 14.0184 8.0333 14C8.0333 13.9816 8.01838 13.9667 7.99997 13.9667C7.98156 13.9667 7.96663 13.9816 7.96663 14C7.96663 14.0184 7.98156 14.0333 7.99997 14.0333ZM6.6333 14C6.6333 13.2452 7.24518 12.6333 7.99997 12.6333C8.75476 12.6333 9.36663 13.2452 9.36663 14C9.36663 14.7548 8.75476 15.3667 7.99997 15.3667C7.24518 15.3667 6.6333 14.7548 6.6333 14Z"
      fill="currentColor"
    />
  </svg>
);
export default ArrowDownToDotIcon;
