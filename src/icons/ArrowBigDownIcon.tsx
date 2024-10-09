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

const ArrowBigDownIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5.29999 3.99999C5.29999 3.61339 5.61339 3.29999 5.99999 3.29999H9.99999C10.3866 3.29999 10.7 3.61339 10.7 3.99999V7.29999H12.6667C12.9498 7.29999 13.205 7.47054 13.3134 7.73211C13.4217 7.99368 13.3618 8.29476 13.1616 8.49496L8.49496 13.1616C8.36369 13.2929 8.18564 13.3667 7.99999 13.3667C7.81434 13.3667 7.63629 13.2929 7.50501 13.1616L2.83835 8.49496C2.63815 8.29476 2.57826 7.99368 2.68661 7.73211C2.79495 7.47054 3.0502 7.29999 3.33332 7.29999H5.29999V3.99999ZM6.69999 4.69999V7.99999C6.69999 8.38659 6.38659 8.69999 5.99999 8.69999H5.02327L7.99999 11.6767L10.9767 8.69999H9.99999C9.61339 8.69999 9.29999 8.38659 9.29999 7.99999V4.69999H6.69999Z"
      fill="currentColor"
    />
  </svg>
);
export default ArrowBigDownIcon;
