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

const ArrowDownFromLineIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.6333 1.99999C2.6333 1.61339 2.9467 1.29999 3.3333 1.29999H12.6666C13.0532 1.29999 13.3666 1.61339 13.3666 1.99999C13.3666 2.38659 13.0532 2.69999 12.6666 2.69999H3.3333C2.9467 2.69999 2.6333 2.38659 2.6333 1.99999ZM7.99997 3.96665C8.38657 3.96665 8.69997 4.28006 8.69997 4.66665V12.31L11.505 9.50501C11.7784 9.23165 12.2216 9.23165 12.4949 9.50501C12.7683 9.77838 12.7683 10.2216 12.4949 10.495L8.49494 14.495C8.36367 14.6262 8.18562 14.7 7.99997 14.7C7.81432 14.7 7.63627 14.6262 7.50499 14.495L3.50499 10.495C3.23163 10.2216 3.23163 9.77838 3.50499 9.50501C3.77836 9.23165 4.22158 9.23165 4.49494 9.50501L7.29997 12.31V4.66665C7.29997 4.28006 7.61337 3.96665 7.99997 3.96665Z"
      fill="currentColor"
    />
  </svg>
);
export default ArrowDownFromLineIcon;
