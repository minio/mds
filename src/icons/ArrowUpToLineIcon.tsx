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

const ArrowUpToLineIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.6333 1.99999C2.6333 1.61339 2.9467 1.29999 3.3333 1.29999H12.6666C13.0532 1.29999 13.3666 1.61339 13.3666 1.99999C13.3666 2.38659 13.0532 2.69999 12.6666 2.69999H3.3333C2.9467 2.69999 2.6333 2.38659 2.6333 1.99999ZM7.99997 3.96665C8.18562 3.96665 8.36367 4.0404 8.49494 4.17168L12.4949 8.17168C12.7683 8.44505 12.7683 8.88826 12.4949 9.16163C12.2216 9.435 11.7784 9.435 11.505 9.16163L8.69997 6.3566V14C8.69997 14.3866 8.38657 14.7 7.99997 14.7C7.61337 14.7 7.29997 14.3866 7.29997 14V6.3566L4.49494 9.16163C4.22158 9.435 3.77836 9.435 3.50499 9.16163C3.23163 8.88826 3.23163 8.44505 3.50499 8.17168L7.50499 4.17168C7.63627 4.0404 7.81432 3.96665 7.99997 3.96665Z"
      fill="currentColor"
    />
  </svg>
);
export default ArrowUpToLineIcon;
